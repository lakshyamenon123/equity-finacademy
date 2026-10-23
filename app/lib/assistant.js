import { SITE } from "./site";

// gemini-2.0-flash is no longer listed on the Gemini API. The default is the
// current free Flash model. Set GEMINI_MODEL to override.
export const DEFAULT_GEMINI_MODEL = "gemini-3.8-flash";
export const DEFAULT_OPENAI_MODEL = "gpt-4o-mini";

export const WHATSAPP_FALLBACK_REPLY =
  "The on-site assistant is not connected right now. Send this on WhatsApp at +971 56 718 8995 and the academy can answer there. Fees are quoted when you enquire.";

const SYSTEM = `You answer questions for ${SITE.name}, a forex training academy at ${SITE.address.streetAddress}, ${SITE.address.addressLocality}, ${SITE.address.addressRegion}. Phone and WhatsApp: ${SITE.telephoneDisplay}. Open 24/7.

Only use these published facts:
- Group cohorts: Basic to Intermediate, and Advanced Institutional Strategies, taught live in Al Qusais.
- Private one-to-one lessons are offered, including live trading sessions and training. Fees are not published. Tell the person to call or WhatsApp for the current fee.
- Practical sessions use Star Trader, a broker regulated by the UAE Securities and Commodities Authority. The academy teaches. It does not manage client funds and does not promise trading profits.
- Public rating: ${SITE.googleReviewsLabel}. Equity Global has ${SITE.youtubeReviewsLabel}. More than ${SITE.studentsTrained} students have been trained through that channel and live mentorship. Do not invent quotes or a more exact review count.
- Founder and instructor: Gopi Chandran, MBA in Finance, full-time forex trader since 2016.
- There is one classroom, in Al Qusais. Do not claim an Abu Dhabi or Sharjah campus, or a paid online cohort.
- English only. Under 120 words. If you are unsure, say so and point them to WhatsApp or the contact page.`;

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
      const content = clip(item?.content, 800);
      if (!role || !content) return null;
      return { role, content };
    })
    .filter(Boolean);
}

async function askGemini(messages) {
  const model = process.env.GEMINI_MODEL || DEFAULT_GEMINI_MODEL;
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,
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
        generationConfig: { temperature: 0.3, maxOutputTokens: 400 },
      }),
    }
  );
  if (!response.ok) {
    throw new Error("gemini");
  }
  const data = await response.json();
  const text = (data?.candidates?.[0]?.content?.parts || [])
    .map((part) => part?.text || "")
    .join("")
    .trim();
  if (!text) throw new Error("gemini-empty");
  return text;
}

async function askOpenAI(messages) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || DEFAULT_OPENAI_MODEL,
      temperature: 0.3,
      max_tokens: 400,
      messages: [{ role: "system", content: SYSTEM }, ...messages],
    }),
  });
  if (!response.ok) throw new Error("openai");
  const data = await response.json();
  const text = data?.choices?.[0]?.message?.content?.trim();
  if (!text) throw new Error("openai-empty");
  return text;
}

export async function answerQuestion(messages) {
  if (process.env.GEMINI_API_KEY) {
    try {
      return { ok: true, provider: "gemini", reply: await askGemini(messages) };
    } catch {
      if (!process.env.OPENAI_API_KEY) {
        return { ok: false, fallback: "whatsapp", reply: WHATSAPP_FALLBACK_REPLY };
      }
    }
  }
  if (process.env.OPENAI_API_KEY) {
    try {
      return { ok: true, provider: "openai", reply: await askOpenAI(messages) };
    } catch {
      return { ok: false, fallback: "whatsapp", reply: WHATSAPP_FALLBACK_REPLY };
    }
  }
  return { ok: false, fallback: "whatsapp", reply: WHATSAPP_FALLBACK_REPLY };
}

export async function storeLead(lead) {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) return { ok: false, fallback: "whatsapp" };
  const headers = { "content-type": "application/json" };
  if (process.env.LEAD_WEBHOOK_SECRET) {
    headers.authorization = `Bearer ${process.env.LEAD_WEBHOOK_SECRET}`;
  }
  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(lead),
  });
  if (!response.ok) return { ok: false, fallback: "whatsapp" };
  return { ok: true };
}
