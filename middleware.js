import { NextResponse } from "next/server";

const CANONICAL_ORIGIN = "https://www.equityfinacademy.com";

// Marketing parameters create a second URL for the same document. Google
// reports that URL as an alternate with a canonical. Drop them in one 301
// to the clean page. Leave other parameters alone, and never touch /api.
const TRACKING_PARAMS = new Set([
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "utm_id",
  "gclid",
  "fbclid",
  "gbraid",
  "wbraid",
  "gad_source",
  "gad_campaignid",
  "mc_cid",
  "mc_eid",
  "msclkid",
  "yclid",
  "_ga",
  "_gl",
]);

function canonicalUrl(pathname, params) {
  const url = new URL(pathname || "/", CANONICAL_ORIGIN);
  const rest = params.toString();
  if (rest) url.search = rest;
  return url;
}

function samePathAndQuery(request, url) {
  return (
    url.pathname === request.nextUrl.pathname &&
    url.searchParams.toString() === request.nextUrl.searchParams.toString()
  );
}

function redirectAbsolute(pathname, params, request) {
  const url = canonicalUrl(pathname, params);
  // A 301 to the same path and query loops. "/" is already canonical, so a
  // trailing-slash rule must not send it to itself.
  if (samePathAndQuery(request, url)) return NextResponse.next();
  const headers = { Location: url.toString() };
  // Query strings on /contact, including ?course=, must not become a second
  // indexed URL. The HTML canonical is the clean page. Repeat it on the 301
  // so the redirect and the document name the same URL.
  if (url.pathname === "/contact") {
    headers.Link = `<${CANONICAL_ORIGIN}/contact>; rel="canonical"`;
  }
  return new NextResponse(null, {
    status: 301,
    headers,
  });
}

// Legacy paths that Search Console still requests. Match with or without a
// trailing slash so each URL reaches its canonical page in one 301.
const LEGACY = {
  "/home": "/",
  "/index.html": "/",
  "/index.htm": "/",
  "/index.php": "/",
  "/default.html": "/",
  "/about-us": "/about",
  "/about-us.html": "/about",
  "/aboutus": "/about",
  "/about.html": "/about",
  "/about.php": "/about",
  "/contact-us": "/contact",
  "/contactus": "/contact",
  "/contact.html": "/contact",
  "/contact.php": "/contact",
  "/courses.html": "/courses",
  "/courses.php": "/courses",
  "/pricing.html": "/pricing",
  "/why-choose-us.html": "/why-choose-us",
  "/forex-academy-in-dubai.html": "/forex-academy-in-dubai",
  "/success-stories.html": "/success-stories",
  "/faq.html": "/faq",
  "/blog.html": "/blog",
  "/resources.html": "/blog",
  "/beginners-guide.html": "/blog-forex-course-dubai-beginners",
  "/trading-strategies.html": "/courses",
  "/terms.html": "/terms",
  "/privacy.html": "/privacy",
  "/contact-us.html": "/contact",
  "/mt5-order": "/blog-mt5-order-ticket-dubai",
  "/blog-mt5-order": "/blog-mt5-order-ticket-dubai",
  "/resources": "/blog",
  "/blog-candlestick-patterns.html": "/blog-candlestick-patterns",
  "/blog-common-mistakes.html": "/blog-common-mistakes",
  "/blog-market-structure.html": "/blog-market-structure",
  "/blog-risk-management.html": "/blog-risk-management",
  "/blog-smart-money-concepts.html": "/blog-smart-money-concepts",
};

// Live paths, including public files. A different case, a .html copy, or a
// /blog/slug form of a /blog-slug post redirects here in the same hop as a
// trailing slash. Keep this list aligned with app routes when a page is added.
const PAGES = new Set([
  "/",
  "/about",
  "/apple-touch-icon.png",
  "/best-forex-course-dubai",
  "/blog",
  "/blog-candlestick-patterns",
  "/blog-choose-forex-academy-uae",
  "/blog-choose-forex-mentor-dubai",
  "/blog-common-mistakes",
  "/blog-currency-pairs-uae",
  "/blog-demo-vs-live-mt5-uae",
  "/blog-evaluate-forex-mentor-teaching-uae",
  "/blog-evening-group-forex-classes-dubai",
  "/blog-executive-forex-coaching-dubai",
  "/blog-first-private-forex-lesson-dubai",
  "/blog-forex-broker-due-diligence-uae",
  "/blog-forex-chart-timeframes-dubai",
  "/blog-forex-classes-ajman-ras-al-khaimah",
  "/blog-forex-classes-near-me-dubai",
  "/blog-forex-classes-palm-emirates-hills-business-bay",
  "/blog-forex-classes-working-professionals-dubai",
  "/blog-forex-coaching-entrepreneurs-flexible-week",
  "/blog-forex-course-dubai-beginners",
  "/blog-forex-economic-calendar-dubai",
  "/blog-forex-education-senior-executives-dubai",
  "/blog-forex-education-uae",
  "/blog-forex-leverage-margin-mt5-uae",
  "/blog-forex-market-hours-dubai",
  "/blog-forex-mentorship-difc-professionals",
  "/blog-forex-performance-review-dubai",
  "/blog-forex-portfolio-diversification-uae",
  "/blog-forex-position-sizing-high-capital-uae",
  "/blog-forex-spreads-swaps-pip-value-uae",
  "/blog-forex-trading-business-owners-uae",
  "/blog-forex-trading-courses-dubai",
  "/blog-forex-trading-plan-uae",
  "/blog-forex-training-doctors-engineers-bankers-uae",
  "/blog-forex-training-family-office-abu-dhabi",
  "/blog-gold-xauusd-course-dubai",
  "/blog-group-forex-classes-friends-dubai",
  "/blog-how-to-start-forex-trading-dubai",
  "/blog-investing-classes-near-me-dubai",
  "/blog-live-forex-trading-session-dubai",
  "/blog-market-structure",
  "/blog-mt5-order-ticket-dubai",
  "/blog-one-to-one-forex-classes-dubai",
  "/blog-personal-finance-classes-near-me-dubai",
  "/blog-personal-forex-coaching-uae",
  "/blog-premium-executive-forex-mentorship-dubai",
  "/blog-prepare-group-forex-class-dubai",
  "/blog-private-and-group-forex-classes-dubai",
  "/blog-private-forex-mentorship-abu-dhabi",
  "/blog-private-forex-mentorship-jumeirah-dubai-hills",
  "/blog-private-one-to-one-forex-training-dubai",
  "/blog-private-vs-group-forex-classes-dubai",
  "/blog-risk-management",
  "/blog-smart-money-concepts",
  "/blog-start-forex-trading-uae-mt5",
  "/blog-stock-market-course-dubai-first-weeks",
  "/blog-stock-trading-classes-near-me-dubai",
  "/blog-support-and-resistance-forex",
  "/blog-vip-forex-mentorship-downtown-dubai-marina",
  "/contact",
  "/courses",
  "/executive-market-briefing",
  "/faq",
  "/favicon.ico",
  "/forex-academy-in-dubai",
  "/forex-course-abu-dhabi",
  "/forex-course-fees-dubai",
  "/forex-course-sharjah",
  "/forex-mentorship-dubai",
  "/forex-training-academy-dubai",
  "/forex-training-academy-uae",
  "/free-demo",
  "/free-trading-plan",
  "/free-trading-plan/print",
  "/gopi-chandran",
  "/llms-full.txt",
  "/llms.txt",
  "/mentor.jpg",
  "/og-image.png",
  "/online-forex-course-uae",
  "/pricing",
  "/privacy",
  "/private-group-forex-training-dubai",
  "/robots.txt",
  "/sitemap.xml",
  "/smc-ict-trading-course-dubai",
  "/stock-market-course-dubai",
  "/success-stories",
  "/terms",
  "/weekend-forex-classes-dubai",
  "/why-choose-us",
]);

// One alias, or null when the path is already the live spelling.
function pageAlias(stripped) {
  const lower = stripped.toLowerCase();
  if (PAGES.has(lower)) return lower === stripped ? null : lower;
  if (lower.endsWith(".html")) {
    const stem = lower.slice(0, -".html".length);
    if (PAGES.has(stem)) return stem;
  }
  if (lower.startsWith("/blog/")) {
    const slug = lower.slice("/blog/".length);
    if (slug && !slug.includes("/")) {
      const flat = `/blog-${slug}`;
      if (PAGES.has(flat)) return flat;
      const asPost = `/${slug}`;
      if (asPost.startsWith("/blog-") && PAGES.has(asPost)) return asPost;
    }
  }
  return null;
}

export function middleware(request) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/api")) return NextResponse.next();

  const stripped = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  const params = new URLSearchParams(request.nextUrl.searchParams);
  let queryChanged = false;

  // /contact?course=... was an old enquiry link. The form ignores it, so it is
  // the same document as /contact. Drop the parameter. Do not forward it.
  // Match the path in any case so /Contact?course= does not stay a second URL.
  const isContact = stripped.toLowerCase() === "/contact";
  if (isContact && params.has("course")) {
    params.delete("course");
    queryChanged = true;
  }

  for (const key of [...params.keys()]) {
    if (TRACKING_PARAMS.has(key.toLowerCase())) {
      params.delete(key);
      queryChanged = true;
    }
  }

  // "/" is the canonical homepage, not a trailing-slash URL. With no tracking
  // parameters there is nothing to change, so the request must pass through.
  if (pathname === "/" && !queryChanged) return NextResponse.next();

  // Legacy paths are stored in lowercase. /About-Us was still a 404 because the
  // match was case-sensitive, so Google kept a second URL. Look up the lower
  // case form and send that request to the same destination in one 301.
  let destination = LEGACY[stripped] || LEGACY[stripped.toLowerCase()];
  if (!destination && isContact && stripped !== "/contact") destination = "/contact";
  if (!destination) destination = pageAlias(stripped);
  const target = destination || (stripped !== pathname ? stripped : null);
  if (!target && !queryChanged) return NextResponse.next();
  // One absolute 301, including when a trailing slash and a tracking
  // parameter arrive together. A relative Location that keeps the slash
  // would send /blog/ back to /blog/.
  return redirectAbsolute(target || stripped, params, request);
}

export const config = {
  // Public files stay in the matcher so /sitemap.xml/ and /robots.txt/ can
  // lose the slash in this same function. /_next stays out: those are build
  // assets, not addresses to canonicalise.
  matcher: ["/((?!_next/static|_next/image).*)"],
};
