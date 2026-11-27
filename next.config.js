/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
];

const CANONICAL_ORIGIN = "https://www.equityfinacademy.com";
const WHY_CHOOSE_US = `${CANONICAL_ORIGIN}/why-choose-us`;

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
    // statusCode 301 is a permanent redirect. permanent: true would be a 308.
    // Trailing-slash requests, including /home/ and /about-us/, are one hop
    // in middleware.js. A catch-all slash rule here was matching first and
    // sending /home/ to /home. Do not add "/:path*/" in vercel.json either:
    // that pattern matches "/" and 301s the homepage to itself.
    const pairs = [
      ["/home", `${CANONICAL_ORIGIN}/`],
      ["/index.html", `${CANONICAL_ORIGIN}/`],
      ["/index.htm", `${CANONICAL_ORIGIN}/`],
      ["/index.php", `${CANONICAL_ORIGIN}/`],
      ["/default.html", `${CANONICAL_ORIGIN}/`],
      ["/about-us", `${CANONICAL_ORIGIN}/about`],
      ["/about-us.html", `${CANONICAL_ORIGIN}/about`],
      ["/aboutus", `${CANONICAL_ORIGIN}/about`],
      ["/about.html", `${CANONICAL_ORIGIN}/about`],
      ["/about.php", `${CANONICAL_ORIGIN}/about`],
      ["/contact-us", `${CANONICAL_ORIGIN}/contact`],
      ["/contactus", `${CANONICAL_ORIGIN}/contact`],
      ["/contact.html", `${CANONICAL_ORIGIN}/contact`],
      ["/contact.php", `${CANONICAL_ORIGIN}/contact`],
      ["/courses.html", `${CANONICAL_ORIGIN}/courses`],
      ["/courses.php", `${CANONICAL_ORIGIN}/courses`],
      ["/pricing.html", `${CANONICAL_ORIGIN}/pricing`],
      ["/why-choose-us.html", `${CANONICAL_ORIGIN}/why-choose-us`],
      ["/forex-academy-in-dubai.html", `${CANONICAL_ORIGIN}/forex-academy-in-dubai`],
      ["/success-stories.html", `${CANONICAL_ORIGIN}/success-stories`],
      ["/faq.html", `${CANONICAL_ORIGIN}/faq`],
      ["/blog.html", `${CANONICAL_ORIGIN}/blog`],
      ["/resources.html", `${CANONICAL_ORIGIN}/blog`],
      ["/beginners-guide.html", `${CANONICAL_ORIGIN}/blog-forex-course-dubai-beginners`],
      ["/trading-strategies.html", `${CANONICAL_ORIGIN}/courses`],
      ["/terms.html", `${CANONICAL_ORIGIN}/terms`],
      ["/privacy.html", `${CANONICAL_ORIGIN}/privacy`],
      ["/contact-us.html", `${CANONICAL_ORIGIN}/contact`],
      ["/mt5-order", `${CANONICAL_ORIGIN}/blog-mt5-order-ticket-dubai`],
      ["/blog-mt5-order", `${CANONICAL_ORIGIN}/blog-mt5-order-ticket-dubai`],
      ["/resources", `${CANONICAL_ORIGIN}/blog`],
      ["/blog-candlestick-patterns.html", `${CANONICAL_ORIGIN}/blog-candlestick-patterns`],
      ["/blog-common-mistakes.html", `${CANONICAL_ORIGIN}/blog-common-mistakes`],
      ["/blog-market-structure.html", `${CANONICAL_ORIGIN}/blog-market-structure`],
      ["/blog-risk-management.html", `${CANONICAL_ORIGIN}/blog-risk-management`],
      ["/blog-smart-money-concepts.html", `${CANONICAL_ORIGIN}/blog-smart-money-concepts`],
      ["/sitemap.xml/", `${CANONICAL_ORIGIN}/sitemap.xml`],
      ["/robots.txt/", `${CANONICAL_ORIGIN}/robots.txt`],
    ];
    return pairs.map(([source, destination]) => ({ source, destination, statusCode: 301 }));
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        source: "/why-choose-us",
        headers: [{ key: "Link", value: `<${WHY_CHOOSE_US}>; rel="canonical"` }],
      },
      // /contact?course= and any other query string are the same document.
      // The header does not depend on the query, so the canonical stays the
      // clean URL when a parameter is still on the request.
      {
        source: "/contact",
        headers: [{ key: "Link", value: `<${CANONICAL_ORIGIN}/contact>; rel="canonical"` }],
      },
      // /favicon.ico is a real icon file and must return 200. It is not a
      // document and it is not in the sitemap. noindex tells Google not to
      // treat the file URL as a page. Browsers still use it as the icon.
      // Font files live in /_next/static/media/ (woff2 from next/font).
      // robots.txt disallows that folder. CSS is /_next/static/css/ and
      // JavaScript is /_next/static/chunks/. Those stay allowed, and they
      // are not given X-Robots-Tag, so the page can still render.
      // noindex on a font response is a second signal if a crawler fetches it.
      {
        source: "/favicon.ico",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
      {
        source: "/apple-touch-icon.png",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
      {
        source: "/og-image.png",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
      {
        source: "/mentor.jpg",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
      {
        source: "/_next/static/media/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ];
  },
};

module.exports = nextConfig;
