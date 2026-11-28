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

const PAGE_LABELS = {
  "/": "the home page",
  "/courses": "the courses page",
  "/contact": "the contact page",
  "/free-demo": "the free demo page",
  "/blog": "the blog",
  "/forex-academy-in-dubai": "the Dubai academy page",
  "/pricing": "the pricing page",
  "/about": "the about page",
  "/faq": "the FAQ",
  "/gopi-chandran": "the mentor page",
  "/executive-market-briefing": "the Executive Market Briefing page",
  "/private-group-forex-training-dubai": "the private and group classes page",
  "/weekend-forex-classes-dubai": "the weekend classes page",
  "/online-forex-course-uae": "the online course page",
};

export function pageLabel(pathname) {
  const path = String(pathname || "/").split("?")[0] || "/";
  if (PAGE_LABELS[path]) return `${PAGE_LABELS[path]} (${path})`;
  if (path.startsWith("/blog-")) {
    const title = path.slice("/blog-".length).replace(/-/g, " ");
    return `the article ${title} (${path})`;
  }
  const title = path.replace(/^\//, "").replace(/-/g, " ") || "this page";
  return `the ${title} page (${path})`;
}

export function pageWhatsappMessage(pathname) {
  return `Hi, I was on ${pageLabel(pathname)} at Equity Fin Academy and would like to book a free demo class.`;
}

export function pageWhatsappHref(pathname) {
  return whatsappHref(pageWhatsappMessage(pathname));
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
