export const WHATSAPP_E164 = "971559047030";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_E164}`;
export const COURSE_WHATSAPP_TEXT = "Hi, I'm interested in the forex course";
export const STARTRADER_LIVE_URL = "https://www.startrader.ae/live-account/?affid=NzQ1OTI5Mg==";
export const MT5_URL = "https://www.metatrader5.com";

export const SLOW_CHAT_REPLY =
  `I can't get an answer quickly right now. Message us on WhatsApp and we'll help you book a seat: ${WHATSAPP_URL}. You can still type your name and UAE mobile here, and we'll save it.`;

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
