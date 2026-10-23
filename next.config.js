/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standard Next.js output so /api/chat and /api/leads can run on Vercel.
  // Pages stay statically generated. Those routes no-op to WhatsApp when
  // GEMINI_API_KEY, OPENAI_API_KEY, and LEAD_WEBHOOK_URL are unset.
  trailingSlash: false,
  images: { unoptimized: true },
};

module.exports = nextConfig;
