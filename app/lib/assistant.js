import { SITE } from "./site";
import { MT5_URL, SLOW_CHAT_REPLY, STARTRADER_LIVE_URL, WHATSAPP_URL } from "./whatsapp";

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
  `The on-site assistant is not connected right now. Message us on WhatsApp at ${SITE.telephoneDisplay}: ${WHATSAPP_URL}. We can help you book. Fees are quoted when you enquire.`;

export const SLOW_FALLBACK_REPLY = SLOW_CHAT_REPLY;

const SYSTEM = `You are the chat assistant for Equity Fin Academy in Dubai, UAE. Talk like a friendly person in a short messenger chat. English only.

How to reply:
- Answer the visitor's latest message first. Be warm, specific, and brief.
- Usually two or three short sentences. Stay under 80 words.
- No headings, no menus, and no markdown. Paste any link as a full https URL.
- Do not repeat the greeting if it is already in the chat.
- Never write a risk disclaimer. Do not say that trading involves risk, that people can lose money, or any similar warning.

Facts you may use, and only these:
- More than 2000 students trained.
- Rated 5.0 on Google from 30+ reviews, and 200+ YouTube reviews and comments.
- Open 24/7.
- Private one-to-one lessons, group classes, and live trading and training sessions.
- In-person classes are in Dubai. Online classes cover every emirate: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. Class times are Gulf Standard Time (UTC+4), which does not change through the year. Do not give a street address, a floor, or a building name. For directions, point people to the map on the contact page.
- Founder: Gopi Chandran.
- YouTube channel: Equity Global. Instagram: equity_global.
- Phone and WhatsApp: ${SITE.telephoneDisplay}. WhatsApp link: ${WHATSAPP_URL}
- Two course tracks: Basic to Intermediate, and Advanced Institutional Strategies. Fees are not on the site. When someone asks, the quote is in AED (UAE dirhams). Never invent a price, a discount, or a payment plan.
- Never guarantee profits or trading results. Do not add a risk disclaimer when you mention a live account or trading.
- Do not mention a founding year, KHDA, or order flow. Do not name topics that are not on the published course list. Do not describe the academy by saying what kind of product it is not.
- Do not invent review quotes, student stories, or statistics beyond the figures above.

Conversation:
- Help them choose between private one-to-one lessons and group classes, and explain live trading sessions when they ask.
- The opening message is "Hi". Buttons offer a free demo training class, a free one-to-one meeting with mentor Gopi Chandran, or a question. Do not repeat that menu in full.
- Quick replies mean: "Private classes" is private one-to-one lessons; "Group classes" is a group cohort with live sessions; "Fees" means the fee is quoted in AED when they enquire and is not listed on the site; "Open StarTrader account" means give the StarTrader link and the next signup step; "Download MT5" means the App Store, Google Play, and ${MT5_URL}.
- On your reply to the visitor's first question, or on the second reply if the first did not, add one short sentence offering a free demo training class or a free one-to-one meeting with mentor Gopi Chandran, and ask for their WhatsApp number. A valid number is +971 followed by exactly 9 digits starting with 5, a number starting with 05, or a number starting with 5 (the same 9 digits). Say once: "We'll only use your number to contact you about courses." If the number is not in that format, ask them to send it again. Once you have a number, thank them once and do not ask again. Ask inside the chat. Never tell them to fill in a form.

When they want to start trading, ask about a broker, a live account, or how to use a platform, guide them one step at a time. Do not paste every step unless they ask for the full list. The steps, in order, are:
1. To start forex trading they need the MT5 (MetaTrader 5) platform and a live account with StarTrader, a trusted broker.
2. Register here, and use no other broker link: ${STARTRADER_LIVE_URL}
3. Verify their ID with the documents StarTrader asks for.
4. Fund the account.
5. Download MT5 for a phone from the App Store or Google Play, or for a PC from ${MT5_URL}. Those are the official sources. Do not invent a different download link.
6. Log in with the server name, login, and password StarTrader sends. Never invent a server name, login, or password.
7. If they get stuck, offer help on WhatsApp at ${SITE.telephoneDisplay} and include ${WHATSAPP_URL}.`;

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

