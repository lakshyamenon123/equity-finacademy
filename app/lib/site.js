/**
 * Facts published on the site. Owner confirmed on 23 Oct 2026: 30+ Google
 * reviews at 5.0, 200+ YouTube reviews/comments, open 24/7, Instagram
 * equity_global, and private one-to-one lessons plus live trading sessions.
 *
 * aggregateRating is not emitted. Google requires an exact reviewCount or
 * ratingCount, and "30+" is a lower bound, not a total. The 5.0 rating stays in
 * visible copy. There is no YouTube star rating, so the 200+ figure is copy only.
 *
 * No Facebook URL was given, so the Facebook icon is removed rather than linked to "#".
 *
 * TODO(owner): A logo file for Organization.logo. public/mentor.jpg is a portrait, not a logo.
 * TODO(owner): Confirm the map pin. Coordinates below are the pin used on the map.
 * The public address is Dubai, UAE. Do not publish a floor or a building name.
 * TODO(owner): datePublished for articles that existed before 23 Oct 2026. Those posts
 * do not record a date, so Article schema omits it.
 *
 * Homepage URL: the apex host redirects to https://www.equityfinacademy.com/ and the
 * Search Console property uses that trailing slash. Inner pages stay without one,
 * because Next.js redirects /page/ to /page. absoluteUrl("/") is the single homepage URL.
 * Online study is offered across the UAE as well as in-person classes in Dubai. Fees are quoted on enquiry.
 * TODO(owner): An exact Google review total, if reviewCount should be added. 30 is a floor, not a total.
 * TODO(owner): A Facebook profile URL, if one exists.
 */

export const SITE = {
  name: "Equity Fin Academy",
  url: "https://www.equityfinacademy.com",
  telephone: "+971559047030",
  telephoneDisplay: "+971 55 904 7030",
  telephoneTel: "+971559047030",
  description:
    "Forex training academy in Dubai and the UAE. Private one-to-one lessons and group classes with live trading sessions, in person in Dubai and online across the UAE. Open 24/7.",
  address: {
    addressLocality: "Al Qusais",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  geo: {
    latitude: 25.264256,
    longitude: 55.38529,
  },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Equity+Fin+Academy+Al+Qusais+Dubai",
  openDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  opens: "00:00",
  closes: "23:59",
  instagram: "https://www.instagram.com/equity_global/",
  sameAs: [
    "https://www.youtube.com/channel/UCTjkKXSStHPPA64qCCSPTOg",
    "https://www.youtube.com/@equityglobalenglish9299",
    "https://www.instagram.com/equity_global/",
  ],
  studentsTrained: 2000,
  yearsFullTimeTrading: 10,
  googleRating: "5.0",
  googleReviewsLabel: "5.0 on Google from 30+ reviews",
  youtubeReviewsLabel: "200+ YouTube reviews and comments",
};

export const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Equity Fin Academy — forex training in Dubai, UAE",
};

export function absoluteUrl(path) {
  if (!path || path === "/") return `${SITE.url}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${normalized.replace(/\/+$/, "")}`;
}
