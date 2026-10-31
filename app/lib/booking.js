import { whatsappHref } from "./whatsapp";

export const GREETING = "Hi";

export const OFFER_DEMO = "Book a FREE demo training class";
export const OFFER_MENTOR = "Free one-to-one meeting with mentor Gopi Chandran";
export const OFFER_ASK = "Just ask a question";

export const INTEREST_DEMO = "Free demo class";
export const INTEREST_MENTOR = "1-to-1 mentor meeting";

export const UNNAMED_VISITOR = "Website visitor";

export const TIME_SLOTS = [
  { label: "Morning", value: "morning" },
  { label: "Afternoon", value: "afternoon" },
  { label: "Evening", value: "evening" },
  { label: "Weekend", value: "weekend" },
];

const SLOT_VALUES = new Set(TIME_SLOTS.map((slot) => slot.value));

export function cleanSlot(value) {
  const slot = String(value || "")
    .trim()
    .toLowerCase();
  return SLOT_VALUES.has(slot) ? slot : "";
}

export function parseSlot(text) {
  const value = String(text || "").toLowerCase();
  if (/\b(weekend|saturday|sunday)s?\b/.test(value)) return "weekend";
  if (/\bmorning\b/.test(value)) return "morning";
  if (/\bafternoon\b/.test(value)) return "afternoon";
  if (/\b(evening|tonight)\b/.test(value)) return "evening";
  return "";
}

export function interestForOffer(kind) {
  return kind === "mentor" ? INTEREST_MENTOR : INTEREST_DEMO;
}

export function offerLabel(kind) {
  return kind === "mentor" ? OFFER_MENTOR : OFFER_DEMO;
}

export function namePrompt() {
  return "Great — what is your name?";
}

export function phonePrompt(name) {
  return `Thanks ${name}. What is your WhatsApp number? You can send +9715…, 05…, or 5…. We'll only use your number to contact you about courses.`;
}

export function invalidPhonePrompt() {
  return "That doesn't look like a UAE mobile yet. Please send it as +9715…, 05…, or 5….";
}

export function timePrompt() {
  return "When do you prefer? Morning, afternoon, evening, or weekend.";
}

export function invalidTimePrompt() {
  return "Please choose morning, afternoon, evening, or weekend.";
}

export function confirmPrompt(name) {
  return `Thanks ${name}! Gopi Chandran's team will WhatsApp you shortly to confirm your slot.`;
}

export function bookingNote(interest, time) {
  const slot = cleanSlot(time);
  if (slot) return `Preferred time: ${slot}`;
  if (interest === INTEREST_MENTOR || interest === INTEREST_DEMO) return interest;
  return "";
}

export function bookingWhatsappHref({ name, interest, time }) {
  const ask =
    interest === INTEREST_MENTOR
      ? "I'd like a free one-to-one meeting with mentor Gopi Chandran"
      : "I'd like to book a free demo training class";
  const slot = cleanSlot(time);
  return whatsappHref(`Hi, I'm ${name}. ${ask}.${slot ? ` Preferred time: ${slot}.` : ""}`);
}

export function mentionsBookingOffer(text) {
  const value = String(text || "").toLowerCase();
  const choice =
    value.includes("demo") ||
    value.includes("one-to-one") ||
    value.includes("one to one") ||
    value.includes("1-to-1");
  const contact = value.includes("whatsapp") || value.includes("number") || value.includes("+971") || /\b05\d/.test(value);
  return choice && contact;
}

export const OFFER_FOLLOWUP =
  "If you'd like, book a free demo training class, or a free one-to-one meeting with mentor Gopi Chandran. What is your WhatsApp number? +971, 05, or 5 all work. We'll only use your number to contact you about courses.";

export const ASK_ANYTHING = "Sure — ask me anything about classes, fees, or starting on StarTrader.";
