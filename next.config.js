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
  // The built-in slash redirect runs before these rules, so /home/ would stop
  // at /home. Own the slash redirect and list the old URLs first so each is one hop.
  skipTrailingSlashRedirect: true,
  images: { unoptimized: true },
  async redirects() {
    // permanent: true is a 308. List the legacy URL before its trailing-slash
    // twin so each request is one hop, then strip any other trailing slash.
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
    const legacy = pairs.flatMap(([source, destination]) => [
      { source, destination, permanent: true },
      { source: `${source}/`, destination, permanent: true },
    ]);
    return [...legacy, { source: "/:path+/", destination: "/:path+", permanent: true }];
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
