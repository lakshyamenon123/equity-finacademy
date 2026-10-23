/**
 * Facts already published on the site, plus public references checked for schema.
 *
 * TODO(owner): Google reviewCount. ratingValue 5.0 is included because that is
 * the published Google rating. The review count is omitted on purpose — do not guess.
 * TODO(owner): Opening clock times. The contact page says walk-ins are welcome
 * Sunday to Friday. Exact opens/closes are not published, so they are not invented.
 * A third-party directory listed "Open 24 hours"; that conflicts with the site and is not used.
 * TODO(owner): Facebook and Instagram profile URLs. Footer icons still use href="#".
 * TODO(owner): A logo file for Organization.logo. public/mentor.jpg is a portrait, not a logo.
 * TODO(owner): Confirm the map pin. Coordinates below are the published location of
 * Arzoo Building, Al Qusais 2 — the building named on the contact page — not a surveyed M Floor point.
 * TODO(owner): datePublished for articles that existed before 23 Oct 2026. Those posts
 * do not record a date, so Article schema omits it.
 * TODO(owner): Say whether a paid online or remote cohort exists. These pages do not claim one.
 * TODO(owner): Private one-to-one lessons are not described as a product anywhere on the site.
 * Group cohorts are. Do not add a 1:1 Course offer unless you confirm you sell that format.
 */

export const SITE = {
  name: "Equity Fin Academy",
  url: "https://www.equityfinacademy.com",
  telephone: "+971-56-718-8995",
  telephoneDisplay: "+971 56 718 8995",
  telephoneTel: "+971567188995",
  description:
    "Forex trading education academy in Al Qusais, Dubai, offering structured courses from beginner fundamentals to advanced institutional strategies.",
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
  walkInDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  sameAs: ["https://www.youtube.com/channel/UCTjkKXSStHPPA64qCCSPTOg"],
  studentsTrained: 2000,
  yearsFullTimeTrading: 10,
  googleRating: "5.0",
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
