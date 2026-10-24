/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
];

const nextConfig = {
  // Standard Next.js output so /api/chat and /api/leads can run on Vercel.
  // Pages stay statically generated. Those routes no-op to WhatsApp when
  // GEMINI_API_KEY, OPENAI_API_KEY, and LEAD_WEBHOOK_URL are unset.
  trailingSlash: false,
  images: { unoptimized: true },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

module.exports = nextConfig;
