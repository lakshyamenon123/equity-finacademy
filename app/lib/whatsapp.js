export const WHATSAPP_E164 = "971567188995";

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
