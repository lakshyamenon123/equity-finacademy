/**
 * Facts published on the site. Owner confirmed on 23 Oct 2026: 30+ Google
 * reviews at 5.0, 200+ YouTube reviews/comments, open 24/7, Instagram
 * equity_global, and private one-to-one lessons plus live trading sessions.
 *
 * aggregateRating omits reviewCount. Schema.org reviewCount is an exact total.
 * "30+" is a lower bound, so the floor is stated in visible copy and the count
 * is left off. There is no YouTube star rating, so the 200+ figure is copy only.
 *
 * No Facebook URL was given, so the Facebook icon is removed rather than linked to "#".
 *
 * TODO(owner): A logo file for Organization.logo. public/mentor.jpg is a portrait, not a logo.
 * TODO(owner): Confirm the map pin. Coordinates below are the published location of
 * Arzoo Building, Al Qusais 2 — the building named on the contact page — not a surveyed M Floor point.
 * TODO(owner): datePublished for articles that existed before 23 Oct 2026. Those posts
 * do not record a date, so Article schema omits it.
 * TODO(owner): Say whether a paid online or remote cohort exists. These pages do not claim one.
 * TODO(owner): An exact Google review total, if reviewCount should be added. 30 is a floor, not a total.
 * TODO(owner): A Facebook profile URL, if one exists.
 */

export const SITE = {
  name: "Equity Fin Academy",
  url: "https://www.equityfinacademy.com",
  telephone: "+971-56-718-8995",
  telephoneDisplay: "+971 56 718 8995",
  telephoneTel: "+971567188995",
  description:
    "Forex trading education academy in Al Qusais, Dubai, offering group cohorts and private one-to-one lessons, including live trading sessions, from beginner fundamentals to advanced institutional strategies.",
  address: {
    streetAddress: "M Floor, Arzoo Building",
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
  alt: "Equity Fin Academy — forex training in Al Qusais, Dubai",
};

export function absoluteUrl(path) {
  if (!path || path === "/") return `${SITE.url}/`;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}
