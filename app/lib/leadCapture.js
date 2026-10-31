import { cleanSlot, INTEREST_DEMO, INTEREST_MENTOR, parseSlot, UNNAMED_VISITOR } from "./booking";
import { findUaeMobile } from "./phone";

const NAME_CUES = [/\bmy name is\s+(.+)/i, /\bname\s*[:\-]\s*(.+)/i, /\b(?:i am|i'm|im)\s+(.+)/i];

const STOP_WORDS = new Set([
  "and",
  "my",
  "number",
  "phone",
  "mobile",
  "is",
  "on",
  "at",
  "for",
  "with",
  "from",
  "please",
  "group",
  "class",
  "classes",
  "private",
  "course",
  "courses",
  "live",
  "trading",
  "lesson",
  "lessons",
  "training",
  "session",
  "sessions",
  "in",
  "to",
  "of",
  "im",
  "i",
]);

const NOT_NAMES = new Set([
  "interested",
  "looking",
  "enquiring",
  "inquiring",
  "asking",
  "here",
  "keen",
  "from",
  "a",
  "the",
  "not",
  "sure",
  "fine",
  "good",
  "ok",
  "okay",
  "happy",
  "hi",
  "hello",
  "hey",
  "thanks",
  "thank",
  "please",
  "yes",
  "no",
  "fees",
  "demo",
  "morning",
  "afternoon",
  "evening",
  "weekend",
  "whatsapp",
  "book",
  "free",
  "question",
  "mentor",
  "class",
  "private",
  "group",
  "startrader",
  "download",
  "open",
  "just",
  "ask",
]);

function cleanName(value) {
  const name = String(value || "")
    .replace(/[^\p{L}\s'’.-]/gu, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 80);
  if (!/^[\p{L}][\p{L}\s'’.-]{1,79}$/u.test(name)) return "";
  const first = name.split(" ")[0].toLowerCase();
  if (NOT_NAMES.has(first)) return "";
  return name;
}

function takeNameWords(source) {
  const words = String(source || "").match(/[\p{L}'’.-]+/gu) || [];
  const kept = [];
  for (const word of words) {
    const token = word.toLowerCase().replace(/['’.]/g, "");
    if (STOP_WORDS.has(token) || NOT_NAMES.has(token)) break;
    kept.push(word.replace(/^['’.]+|['’.]+$/g, ""));
    if (kept.length === 3) break;
  }
  return cleanName(kept.join(" "));
}

function nameFromCue(text) {
  for (const pattern of NAME_CUES) {
    const match = String(text || "").match(pattern);
    const name = takeNameWords(match?.[1]);
    if (name) return name;
  }
  return "";
}

function nameBesidePhone(text) {
  if (/[?]/.test(text)) return "";
  const stripped = String(text || "")
    .replace(/(?:\+|00)?971[\s\-().]*\d(?:[\s\-().]*\d){7,}/g, " ")
    .replace(/(?<!\d)0?5(?:[\s\-().]*\d){8}(?!\d)/g, " ")
    .replace(/\d+/g, " ");
  return takeNameWords(stripped);
}

export function cleanVisitorName(value) {
  return cleanName(value);
}

export function inferInterest(text) {
  const value = String(text || "").toLowerCase();
  if (value.includes("free demo") || value.includes("demo class") || value.includes("demo training")) return INTEREST_DEMO;
  if (
    value.includes("1-to-1") ||
    value.includes("one-to-one meeting") ||
    value.includes("one to one meeting") ||
    value.includes("mentor meeting") ||
    value.includes("meeting with mentor")
  ) {
    return INTEREST_MENTOR;
  }
  if (value.includes("one-to-one") || value.includes("one to one") || value.includes("private")) return "Private one-to-one";
  if (value.includes("group")) return "Group cohort";
  if (value.includes("live")) return "Live trading sessions";
  return "Course enquiry";
}

export function chatSummary(text) {
  return String(text || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 280);
}

function nameFromPlain(text) {
  if (/[?\d]/.test(text)) return "";
  const name = takeNameWords(text);
  if (!name) return "";
  const leftover = String(text || "")
    .replace(name, "")
    .trim();
  if (leftover) return "";
  return name;
}

export function visitorNameFromText(text) {
  const cued = nameFromCue(text);
  if (cued) return cued;
  const plain = nameFromPlain(text);
  if (plain) return plain;
  if (findUaeMobile(text)) return nameBesidePhone(text);
  return "";
}

export function draftFromMessages(messages, page) {
  const userTexts = (Array.isArray(messages) ? messages : [])
    .filter((item) => item?.role === "user")
    .map((item) => String(item.content || ""));
  const joined = userTexts.join(" ");
  const phone = findUaeMobile(joined);
  let name = "";
  for (const text of userTexts) {
    name = nameFromCue(text) || nameFromPlain(text);
    if (name) break;
  }
  if (!name) {
    for (const text of userTexts) {
      if (!findUaeMobile(text)) continue;
      name = nameBesidePhone(text);
      if (name) break;
    }
  }
  if (!phone) return null;
  let time = "";
  for (const text of userTexts) {
    const exact = String(text || "")
      .trim()
      .toLowerCase();
    if (/^(morning|afternoon|evening|weekend)s?$/.test(exact)) {
      time = cleanSlot(parseSlot(exact));
      if (time) break;
    }
  }
  return {
    name: name || UNNAMED_VISITOR,
    phone,
    page: page || "/",
    interest: inferInterest(joined),
    time,
    summary: chatSummary(joined),
  };
}
