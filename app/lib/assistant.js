import { SITE } from "./site";
import { SLOW_CHAT_REPLY, STARTRADER_LIVE_URL } from "./whatsapp";

export const DEFAULT_GEMINI_MODEL = "gemini-3.5-flash-lite";
export const DEFAULT_OPENAI_MODEL = "gpt-4o-mini";
export const MAX_MESSAGE_LENGTH = 500;
export const FIRST_TOKEN_MS = 10_000;
export const CHAT_BUDGET_MS = 25_000;
const GEMINI_API = "https://generativelanguage.googleapis.com/v1beta";
const MAX_MODELS = 3;
const LIST_TIMEOUT_MS = 4_000;

export const FAST_GEMINI_MODELS = ["gemini-3.5-flash-lite", "gemini-3.1-flash-lite", "gemini-3.8-flash"];

let cachedFastModels = null;

export const WHATSAPP_FALLBACK_REPLY =
  "The on-site assistant is not connected right now. Message us on WhatsApp at +971 55 904 7030 and we can help you book. Fees are quoted when you enquire. Trading involves risk.";

export const SLOW_FALLBACK_REPLY = SLOW_CHAT_REPLY;

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

function byNewest(left, right) {
  const a = versionParts(left);
  const b = versionParts(right);
  const length = Math.max(a.length, b.length);
  for (let index = 0; index < length; index += 1) {
    const diff = (b[index] || 0) - (a[index] || 0);
    if (diff) return diff;
  }
  return right.localeCompare(left);
}

export function pickFastModels(models, exclude = [], limit = MAX_MODELS) {
  const skipped = new Set(
    (Array.isArray(exclude) ? exclude : [exclude]).map((item) => normalizeModelId(item)).filter(Boolean)
  );
  skipped.add("gemini-2.0-flash");
  const lite = [];
  const flash = [];
  for (const model of models || []) {
    const name = normalizeModelId(model?.name);
    const methods = model?.supportedGenerationMethods || model?.supportedActions || [];
    if (!name || skipped.has(name) || !methods.includes("generateContent")) continue;
    if (name.endsWith("-flash-lite")) lite.push(name);
    else if (name.endsWith("-flash")) flash.push(name);
  }
  lite.sort(byNewest);
  flash.sort(byNewest);
  const pinned = normalizeModelId(process.env.GEMINI_MODEL);
  const ranked = [...lite, ...flash];
  if (pinned && pinned.endsWith("-flash-lite") && !skipped.has(pinned)) {
    return [pinned, ...ranked.filter((name) => name !== pinned)].slice(0, limit);
  }
  return ranked.slice(0, limit);
}

async function streamOpenAI(messages, onToken, timeoutMs) {
  const controller = new AbortController();
  let timer = setTimeout(() => controller.abort(), timeoutMs);
  let sawToken = false;
  try {
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
      signal: controller.signal,
    });
    if (!response.ok || !response.body) {
      const text = await response.text().catch(() => "");
      throw upstreamError("openai", response.status, text);
    }
    await readSse(response.body, (data) => {
      if (data === "[DONE]") return;
      const json = JSON.parse(data);
      const token = json.choices?.[0]?.delta?.content;
      if (!token) return;
      if (!sawToken) {
        sawToken = true;
        clearTimeout(timer);
        timer = setTimeout(() => controller.abort(), 12_000);
      }
      onToken(token);
    });
    if (!sawToken) throw upstreamError("openai", 504, "openai returned no text");
  } catch (error) {
    if (error.status) throw error;
    throw upstreamError("openai", 504, `${error?.name || ""} ${error?.message || error}`);
  } finally {
    clearTimeout(timer);
  }
}

async function listGeminiModels(timeoutMs) {
  const headers = { "x-goog-api-key": trimmedEnv("GEMINI_API_KEY") };
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  let pageToken = "";
  const models = [];
  try {
    for (let page = 0; page < 3; page += 1) {
      const query = new URLSearchParams({ pageSize: "100" });
      if (pageToken) query.set("pageToken", pageToken);
      const response = await fetch(`${GEMINI_API}/models?${query}`, { headers, signal: controller.signal });
      if (!response.ok) {
        const text = await response.text().catch(() => "");
        throw upstreamError("gemini-list", response.status, text);
      }
      const json = await response.json();
      models.push(...(json.models || []));
      pageToken = json.nextPageToken || "";
      if (!pageToken) break;
    }
    return models;
  } catch (error) {
    if (error.status) throw error;
    throw upstreamError("gemini-list", 504, `${error?.name || ""} ${error?.message || error}`);
  } finally {
    clearTimeout(timer);
  }
}

function geminiRequestBody(model, messages) {
  const generationConfig = { maxOutputTokens: 512 };
  if (model.endsWith("-flash-lite")) generationConfig.thinkingConfig = { thinkingLevel: "minimal" };
  else if (/^gemini-[34]/.test(model)) generationConfig.thinkingConfig = { thinkingLevel: "low" };
  return {
    systemInstruction: { parts: [{ text: SYSTEM }] },
    contents: messages.map((message) => ({
      role: message.role === "assistant" ? "model" : "user",
      parts: [{ text: message.content }],
    })),
    generationConfig,
  };
}

async function streamGeminiOnce(model, messages, onToken, timeoutMs) {
  const controller = new AbortController();
  let timer = setTimeout(() => controller.abort(), timeoutMs);
  let sawToken = false;
  try {
    const response = await fetch(`${GEMINI_API}/models/${encodeURIComponent(model)}:streamGenerateContent?alt=sse`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-goog-api-key": trimmedEnv("GEMINI_API_KEY"),
      },
      body: JSON.stringify(geminiRequestBody(model, messages)),
      signal: controller.signal,
    });
    if (!response.ok || !response.body) {
      const text = await response.text().catch(() => "");
      throw upstreamError("gemini", response.status, text);
    }
    await readSse(response.body, (data) => {
      const json = JSON.parse(data);
      const token = (json.candidates?.[0]?.content?.parts || [])
        .filter((part) => part.text && !part.thought)
        .map((part) => part.text)
        .join("");
      if (!token) return;
      if (!sawToken) {
        sawToken = true;
        clearTimeout(timer);
        timer = setTimeout(() => controller.abort(), 12_000);
      }
      onToken(token);
    });
    if (!sawToken) throw upstreamError("gemini", 504, `${model} returned no text`);
  } catch (error) {
    if (sawToken) return;
    if (error.status) throw error;
    throw upstreamError("gemini", 504, `${model} ${error?.name || ""} ${error?.message || error}`);
  } finally {
    clearTimeout(timer);
  }
}

async function chooseFastModels(deadline) {
  if (cachedFastModels?.length) return cachedFastModels;
  const listBudget = Math.min(LIST_TIMEOUT_MS, Math.max(1_500, deadline - Date.now() - FIRST_TOKEN_MS));
  try {
    const ranked = pickFastModels(await listGeminiModels(listBudget));
    if (ranked.length) {
      cachedFastModels = ranked;
      return ranked;
    }
  } catch (error) {
    console.error(`[chat] gemini list failed ${error.status || ""}: ${error.body || error.message || error}`);
  }
  return pickFastModels(FAST_GEMINI_MODELS.map((name) => ({ name, supportedGenerationMethods: ["generateContent"] })));
}

async function streamGemini(messages, onToken, deadline) {
  const models = await chooseFastModels(deadline);
  let lastError = null;
  for (const model of models) {
    const remaining = deadline - Date.now();
    if (remaining < 2_000) break;
    try {
      await streamGeminiOnce(model, messages, onToken, Math.min(FIRST_TOKEN_MS, remaining));
      cachedFastModels = [model, ...models.filter((item) => item !== model)].slice(0, MAX_MODELS);
      return;
    } catch (error) {
      lastError = error;
      console.error(`[chat] gemini model ${model} failed ${error.status || ""}: ${error.body || "no body"}`);
    }
  }
  throw lastError || upstreamError("gemini", 504, "no flash model answered in time");
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
  const deadline = Date.now() + CHAT_BUDGET_MS;
  let wrote = false;
  const deliver = (token) => {
    wrote = true;
    onToken(token);
  };
  if (trimmedEnv("OPENAI_API_KEY")) {
    try {
      await streamOpenAI(messages, deliver, Math.min(FIRST_TOKEN_MS, Math.max(1_000, deadline - Date.now())));
      return;
    } catch (error) {
      if (wrote) return;
      console.error(`[chat] openai failed ${error.status || ""}: ${error.body || error.message || error}`);
      if (!trimmedEnv("GEMINI_API_KEY")) throw error;
    }
  }
  if (trimmedEnv("GEMINI_API_KEY") && deadline - Date.now() > 2_000) {
    await streamGemini(messages, deliver, deadline);
    return;
  }
  throw new Error("no-provider");
}

