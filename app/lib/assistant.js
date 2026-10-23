import { SITE } from "./site";
import { STARTRADER_LIVE_URL } from "./whatsapp";

export const DEFAULT_GEMINI_MODEL = "gemini-3.8-flash";
export const DEFAULT_OPENAI_MODEL = "gpt-4o-mini";
export const MAX_MESSAGE_LENGTH = 500;
const GEMINI_API = "https://generativelanguage.googleapis.com/v1beta";
const OPENAI_TIMEOUT_MS = 45_000;
const GEMINI_TIMEOUT_MS = 250_000;

let resolvedGeminiModel = "";

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

function trimmedEnv(name) {
  return String(process.env[name] || "").trim();
}

export function chatProvider() {
  if (trimmedEnv("OPENAI_API_KEY")) return "openai";
  if (trimmedEnv("GEMINI_API_KEY")) return "gemini";
  return null;
}

function upstreamError(source, status, body) {
  const error = new Error(source);
  error.status = status || 0;
  error.body = String(body || "").replace(/\s+/g, " ").trim().slice(0, 400);
  return error;
}

function normalizeModelId(value) {
  return String(value || "")
    .trim()
    .replace(/^models\//, "");
}

function versionParts(name) {
  const match = String(name).match(/(\d+(?:\.\d+)*)/);
  if (!match) return [0];
  return match[1].split(".").map((part) => Number(part) || 0);
}

export function pickNewestFlashModel(models, exclude = "") {
  const skipped = normalizeModelId(exclude);
  const names = [];
  for (const model of models || []) {
    const name = normalizeModelId(model?.name);
    const methods = model?.supportedGenerationMethods || model?.supportedActions || [];
    if (!name || name === skipped || !name.endsWith("-flash")) continue;
    if (!methods.includes("generateContent")) continue;
    names.push(name);
  }
  names.sort((left, right) => {
    const a = versionParts(left);
    const b = versionParts(right);
    const length = Math.max(a.length, b.length);
    for (let index = 0; index < length; index += 1) {
      const diff = (b[index] || 0) - (a[index] || 0);
      if (diff) return diff;
    }
    return right.localeCompare(left);
  });
  return names[0] || "";
}

async function streamOpenAI(messages, onToken) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${trimmedEnv("OPENAI_API_KEY")}`,
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || DEFAULT_OPENAI_MODEL,
      temperature: 0.4,
      max_tokens: 400,
      stream: true,
      messages: [{ role: "system", content: SYSTEM }, ...messages],
    }),
    signal: AbortSignal.timeout(OPENAI_TIMEOUT_MS),
  });
  if (!response.ok || !response.body) {
    const text = await response.text().catch(() => "");
    throw upstreamError("openai", response.status, text);
  }
  await readSse(response.body, (data) => {
    if (data === "[DONE]") return;
    const json = JSON.parse(data);
    const token = json.choices?.[0]?.delta?.content;
    if (token) onToken(token);
  });
}

async function listFlashModel(exclude) {
  const headers = { "x-goog-api-key": trimmedEnv("GEMINI_API_KEY") };
  let pageToken = "";
  const models = [];
  for (let page = 0; page < 10; page += 1) {
    const query = new URLSearchParams({ pageSize: "100" });
    if (pageToken) query.set("pageToken", pageToken);
    const response = await fetch(`${GEMINI_API}/models?${query}`, {
      headers,
      signal: AbortSignal.timeout(15_000),
    });
    if (!response.ok) {
      const text = await response.text().catch(() => "");
      throw upstreamError("gemini-list", response.status, text);
    }
    const json = await response.json();
    models.push(...(json.models || []));
    pageToken = json.nextPageToken || "";
    if (!pageToken) break;
  }
  return pickNewestFlashModel(models, exclude);
}

function geminiRequestBody(model, messages, withThinking) {
  const generationConfig = { temperature: 0.4, maxOutputTokens: 1024 };
  if (withThinking) generationConfig.thinkingConfig = { thinkingLevel: "low" };
  return {
    systemInstruction: { parts: [{ text: SYSTEM }] },
    contents: messages.map((message) => ({
      role: message.role === "assistant" ? "model" : "user",
      parts: [{ text: message.content }],
    })),
    generationConfig,
  };
}

async function streamGeminiOnce(model, messages, onToken, timeoutMs = GEMINI_TIMEOUT_MS) {
  const supportsThinking = /^gemini-[34]/.test(model);
  for (let attempt = 0; attempt < (supportsThinking ? 2 : 1); attempt += 1) {
    let response;
    try {
      response = await fetch(`${GEMINI_API}/models/${encodeURIComponent(model)}:streamGenerateContent?alt=sse`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-goog-api-key": trimmedEnv("GEMINI_API_KEY"),
        },
        body: JSON.stringify(geminiRequestBody(model, messages, supportsThinking && attempt === 0)),
        signal: AbortSignal.timeout(timeoutMs),
      });
    } catch (error) {
      throw upstreamError("gemini", 504, `${model} ${error?.name || ""} ${error?.message || error}`);
    }
    if (response.ok && response.body) {
      await readSse(response.body, (data) => {
        const json = JSON.parse(data);
        const token = (json.candidates?.[0]?.content?.parts || [])
          .filter((part) => part.text && !part.thought)
          .map((part) => part.text)
          .join("");
        if (token) onToken(token);
      });
      return;
    }
    const text = await response.text().catch(() => "");
    const error = upstreamError("gemini", response.status, text);
    if (attempt === 0 && supportsThinking && response.status === 400) {
      console.error(`[chat] gemini thinking config rejected by ${model}: ${error.body || "no body"}`);
      continue;
    }
    throw error;
  }
}

async function streamGemini(messages, onToken) {
  const configured = normalizeModelId(process.env.GEMINI_MODEL) || DEFAULT_GEMINI_MODEL;
  let primary = resolvedGeminiModel || configured;
  if (!resolvedGeminiModel && primary === "gemini-2.0-flash") {
    console.error("[chat] gemini-2.0-flash is retired; listing models");
    primary = (await listFlashModel(primary)) || DEFAULT_GEMINI_MODEL;
  }
  try {
    await streamGeminiOnce(primary, messages, onToken);
    resolvedGeminiModel = primary;
    return;
  } catch (error) {
    const stalled = error.status === 404 || error.status === 504;
    if (!stalled) throw error;
    console.error(`[chat] gemini model ${primary} failed ${error.status}: ${error.body || "no body"}`);
    if (resolvedGeminiModel === primary) resolvedGeminiModel = "";
    const replacement = await listFlashModel(primary);
    if (!replacement || replacement === primary) throw error;
    console.error(`[chat] gemini retrying with ${replacement}`);
    await streamGeminiOnce(replacement, messages, onToken);
    resolvedGeminiModel = replacement;
  }
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
  if (trimmedEnv("OPENAI_API_KEY")) {
    try {
      await streamOpenAI(messages, onToken);
      return;
    } catch (error) {
      console.error(`[chat] openai failed ${error.status || ""}: ${error.body || error.message || error}`);
      if (!trimmedEnv("GEMINI_API_KEY")) throw error;
    }
  }
  if (trimmedEnv("GEMINI_API_KEY")) {
    await streamGemini(messages, onToken);
    return;
  }
  throw new Error("no-provider");
}

