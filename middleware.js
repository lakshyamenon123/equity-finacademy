import { NextResponse } from "next/server";

const CANONICAL_ORIGIN = "https://www.equityfinacademy.com";

// Legacy paths that Search Console still requests. Match with or without a
// trailing slash so each URL reaches its canonical page in one 301.
const LEGACY = {
  "/home": "/",
  "/index.html": "/",
  "/index.htm": "/",
  "/index.php": "/",
  "/default.html": "/",
  "/about-us": "/about",
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
};

export function middleware(request) {
  const { pathname, search } = request.nextUrl;
  const stripped = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  const destination = LEGACY[stripped];
  const target = destination || (stripped !== pathname ? stripped : null);
  if (!target) return NextResponse.next();
  // Absolute https://www URL so the Location header is the canonical page.
  // NextURL copies the request's trailing slash onto the redirect and would
  // send /blog/ back to /blog/.
  const url = new URL(target, CANONICAL_ORIGIN);
  url.search = search;
  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|og-image.png|mentor.jpg|sitemap.xml|robots.txt).*)"],
};
