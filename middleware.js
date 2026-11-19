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
  return new NextResponse(null, {
    status: 301,
    headers: { Location: url.toString() },
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
};

export function middleware(request) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/api")) return NextResponse.next();

  const stripped = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  const params = new URLSearchParams(request.nextUrl.searchParams);
  let queryChanged = false;

  // /contact?course=... was an old enquiry link. The form ignores it, so it is
  // the same document as /contact. Drop the parameter. Do not forward it.
  if (stripped === "/contact" && params.has("course")) {
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

  const destination = LEGACY[stripped];
  const target = destination || (stripped !== pathname ? stripped : null);
  if (!target && !queryChanged) return NextResponse.next();
  // One absolute 301, including when a trailing slash and a tracking
  // parameter arrive together. A relative Location that keeps the slash
  // would send /blog/ back to /blog/.
  return redirectAbsolute(target || stripped, params, request);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|og-image.png|mentor.jpg|sitemap.xml|robots.txt).*)"],
};
