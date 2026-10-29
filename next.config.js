/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
];

const WHY_CHOOSE_US = "https://www.equityfinacademy.com/why-choose-us";

const nextConfig = {
  // Standard Next.js output so /api/chat and /api/leads can run on Vercel.
  // Pages stay statically generated. Those routes no-op to WhatsApp when
  // GEMINI_API_KEY, OPENAI_API_KEY, and LEAD_WEBHOOK_URL are unset.
  trailingSlash: false,
  // Leave slash handling to middleware.js. Next's built-in slash redirect
  // would send /home/ to /home before these rules, which is a second hop.
  skipTrailingSlashRedirect: true,
  images: { unoptimized: true },
  async redirects() {
    // permanent: true is a 308. Trailing-slash requests, including /home/ and
    // /about-us/, are one hop in middleware.js. A catch-all slash rule here
    // was matching first and sending /home/ to /home.
    const pairs = [
      ["/home", "/"],
      ["/index.html", "/"],
      ["/index.htm", "/"],
      ["/index.php", "/"],
      ["/default.html", "/"],
      ["/about-us", "/about"],
      ["/aboutus", "/about"],
      ["/about.html", "/about"],
      ["/about.php", "/about"],
      ["/contact-us", "/contact"],
      ["/contactus", "/contact"],
      ["/contact.html", "/contact"],
      ["/contact.php", "/contact"],
      ["/courses.html", "/courses"],
      ["/courses.php", "/courses"],
      ["/pricing.html", "/pricing"],
      ["/why-choose-us.html", "/why-choose-us"],
      ["/forex-academy-in-dubai.html", "/forex-academy-in-dubai"],
      ["/success-stories.html", "/success-stories"],
      ["/faq.html", "/faq"],
      ["/blog.html", "/blog"],
      ["/resources.html", "/blog"],
      ["/beginners-guide.html", "/blog-forex-course-dubai-beginners"],
      ["/trading-strategies.html", "/courses"],
      ["/terms.html", "/terms"],
      ["/privacy.html", "/privacy"],
    ];
    return pairs.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        source: "/why-choose-us",
        headers: [{ key: "Link", value: `<${WHY_CHOOSE_US}>; rel="canonical"` }],
      },
    ];
  },
};

module.exports = nextConfig;
