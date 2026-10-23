import { SITE } from "./site";
import { STARTRADER_LIVE_URL } from "./whatsapp";

export const DEFAULT_GEMINI_MODEL = "gemini-3.8-flash";
export const DEFAULT_OPENAI_MODEL = "gpt-4o-mini";
export const MAX_MESSAGE_LENGTH = 500;

export const WHATSAPP_FALLBACK_REPLY =
  "The on-site assistant is not connected right now. Message us on WhatsApp at +971 56 718 8995 and we can help you book. Fees are quoted when you enquire. Trading involves risk.";

const SYSTEM = `You are the enquiry assistant for Equity Fin Academy in Dubai, UAE. Answer in warm, clear English.

Facts you may use, and only these:
- More than 2000 students trained.
- Rated 5.0 on Google from 30+ reviews, and 200+ YouTube reviews and comments.
- Open 24/7.
- Private one-to-one lessons, group classes, and live trading and training sessions.
- In-person classes are in Dubai, UAE. Online study is available across the UAE. Do not give a street address, a floor, or a building name. For directions, point people to the map on the contact page.
- Founder: Gopi Chandran.
- YouTube channel: Equity Global. Instagram: equity_global.
- Phone and WhatsApp: ${SITE.telephoneDisplay}.
- Two course tracks are published: Basic to Intermediate, and Advanced Institutional Strategies. Fees are not published on the site. Never invent a price, a discount, or a payment plan.
- Never guarantee profits or trading results. Trading involves risk and people can lose money. Say that briefly when you talk about trading or a live account.
- Practical sessions use the trusted broker StarTrader. When someone asks about a broker, a live account, or how to practise with real market access, recommend opening a live account with StarTrader and include exactly this URL and no other broker link: ${STARTRADER_LIVE_URL}
- Encourage them to enrol, and offer to book a seat on WhatsApp.
- Early in the conversation, if the visitor has not already given both a name and a UAE mobile number, politely ask for them before a long course discussion. A valid mobile is +971 followed by exactly 9 digits starting with 5, or a local number starting with 05. Say: "We'll only use your number to contact you about courses." If the number is not in that format, ask them to send it again. Once both are in the conversation, thank them once and do not ask again.
- Do not invent review quotes, student stories, or statistics beyond the figures above.
- Keep replies under 120 words.`;

const hits = new Map();

export function allowChatRequest(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((time) => now - time < 60_000);
  if (recent.length >= 8) {
    hits.set(ip, recent);
    return false;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 500) {
    const oldest = hits.keys().next().value;
    hits.delete(oldest);
  }
  return true;
}

function clip(value, max) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

export function sanitizeMessages(input) {
  if (!Array.isArray(input)) return [];
  return input
    .slice(-8)
    .map((item) => {
      const role = item?.role === "assistant" ? "assistant" : item?.role === "user" ? "user" : "";
      const content = clip(item?.content, MAX_MESSAGE_LENGTH);
      if (!role || !content) return null;
      return { role, content };
    })
    .filter(Boolean);
}

export function chatProvider() {
  if (process.env.OPENAI_API_KEY) return "openai";
  if (process.env.GEMINI_API_KEY) return "gemini";
  return null;
}

async function streamOpenAI(messages, onToken) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || DEFAULT_OPENAI_MODEL,
      temperature: 0.4,
      max_tokens: 400,
      stream: true,
      messages: [{ role: "system", content: SYSTEM }, ...messages],
    }),
  });
  if (!response.ok || !response.body) throw new Error("openai");
  await readSse(response.body, (data) => {
    if (data === "[DONE]") return;
    const json = JSON.parse(data);
    const token = json.choices?.[0]?.delta?.content;
    if (token) onToken(token);
  });
}

async function streamGemini(messages, onToken) {
  const model = process.env.GEMINI_MODEL || DEFAULT_GEMINI_MODEL;
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:streamGenerateContent?alt=sse`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-goog-api-key": process.env.GEMINI_API_KEY,
      },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM }] },
        contents: messages.map((message) => ({
          role: message.role === "assistant" ? "model" : "user",
          parts: [{ text: message.content }],
        })),
        generationConfig: { temperature: 0.4, maxOutputTokens: 400 },
      }),
    }
  );
  if (!response.ok || !response.body) throw new Error("gemini");
  await readSse(response.body, (data) => {
    const json = JSON.parse(data);
    const token = (json.candidates?.[0]?.content?.parts || []).map((part) => part.text || "").join("");
    if (token) onToken(token);
  });
}

async function readSse(body, onData) {
  const reader = body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop() || "";
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed.startsWith("data:")) continue;
      const data = trimmed.slice(5).trim();
      if (!data) continue;
      onData(data);
    }
  }
}

export async function streamReply(messages, onToken) {
  if (process.env.OPENAI_API_KEY) {
    try {
      await streamOpenAI(messages, onToken);
      return;
    } catch (error) {
      if (!process.env.GEMINI_API_KEY) throw error;
    }
  }
  if (process.env.GEMINI_API_KEY) {
    await streamGemini(messages, onToken);
    return;
  }
  throw new Error("no-provider");
}

