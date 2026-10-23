export const SLOW_CHAT_REPLY =
  "I can't get an answer quickly right now. Message us on WhatsApp and we'll help you book a seat. You can still type your name and UAE mobile here, and we'll save it.";

export const WHATSAPP_E164 = "971567188995";
export const COURSE_WHATSAPP_TEXT = "Hi, I'm interested in the forex course";
export const STARTRADER_LIVE_URL = "https://www.startrader.ae/live-account/?affid=NzQ1OTI5Mg==";

export function whatsappHref(text) {
  const base = `https://wa.me/${WHATSAPP_E164}`;
  const message = String(text || "").trim();
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message.slice(0, 1200))}`;
}

export function enquiryText({ name, phone, interest, message }) {
  return [
    "Hello Equity Fin Academy, I would like to enquire about training.",
    name ? `Name: ${name}` : "",
    phone ? `Phone: ${phone}` : "",
    interest ? `Interest: ${interest}` : "",
    message ? message : "",
  ]
    .filter(Boolean)
    .join("\n");
}
