import { advancedTopics, basicTopics } from "./curriculum";
import { EQUITY_GLOBAL } from "./videos";
import { SITE, absoluteUrl } from "./site";

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: SITE.address.streetAddress,
  addressLocality: SITE.address.addressLocality,
  addressRegion: SITE.address.addressRegion,
  addressCountry: SITE.address.addressCountry,
};

const place = {
  "@type": "Place",
  name: SITE.name,
  address: postalAddress,
};

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: `${SITE.url}/`,
    description: SITE.description,
    telephone: SITE.telephone,
    image: `${SITE.url}/og-image.png`,
    priceRange: "$$",
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    hasMap: SITE.mapsUrl,
    // Days are published (Sunday–Friday walk-ins). Clock times are not — see site.js TODO.
    openingHoursSpecification: SITE.walkInDays.map((day) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: day,
    })),
    sameAs: SITE.sameAs,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.googleRating,
      bestRating: "5",
    },
    founder: {
      "@type": "Person",
      "@id": `${SITE.url}/#gopi`,
      name: "Gopi Chandran",
      url: `${SITE.url}/about`,
    },
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}/#gopi`,
    name: "Gopi Chandran",
    jobTitle: "Founder and Lead Instructor",
    url: `${SITE.url}/about`,
    image: `${SITE.url}/mentor.jpg`,
    description:
      "MBA in Finance and full-time forex trader since 2016. Founder of Equity Fin Academy in Al Qusais, Dubai, and of the Equity Global YouTube channel.",
    worksFor: {
      "@type": "EducationalOrganization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: `${SITE.url}/`,
    },
    sameAs: SITE.sameAs,
    knowsAbout: ["Forex trading", "Market structure", "Order flow", "Risk management"],
  };
}

export function articleSchema({ headline, description, path, datePublished }) {
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    inLanguage: "en",
    mainEntityOfPage: absoluteUrl(path),
    image: [`${SITE.url}/og-image.png`],
    author: {
      "@type": "Person",
      "@id": `${SITE.url}/#gopi`,
      name: "Gopi Chandran",
      url: `${SITE.url}/about`,
    },
    publisher: {
      "@type": "EducationalOrganization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: `${SITE.url}/`,
    },
  };
  if (datePublished) {
    article.datePublished = datePublished;
  }
  return article;
}

export function faqPageSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.text,
      },
    })),
  };
}

function courseEntry({ name, description, hash, topics }) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url: `${absoluteUrl("/courses")}#${hash}`,
    provider: {
      "@type": "EducationalOrganization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: `${SITE.url}/`,
      sameAs: SITE.sameAs,
    },
    teaches: topics,
    // Group cohorts are the published class format. Private one-to-one is not a listed product,
    // so there is no 1:1 Offer. TODO(owner): add a separate offer only if you actually sell private lessons.
    // TODO(owner): add price and priceCurrency when a public fee exists. Omitted so it is not invented.
    offers: {
      "@type": "Offer",
      name: "Group cohort in Al Qusais",
      category: "Group forex training class",
      url: `${absoluteUrl("/courses")}#${hash}`,
      availability: "https://schema.org/LimitedAvailability",
      description:
        "Live group class at M Floor, Arzoo Building, Al Qusais, Dubai. The fee is quoted when you enquire because it varies by cohort and is not published on the site.",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      name: "Group cohort",
      courseMode: "https://schema.org/Onsite",
      location: place,
    },
  };
}

export function courseSchemas() {
  return [
    courseEntry({
      name: "Basic to Intermediate Forex Course",
      description:
        "Forex fundamentals, candlestick patterns, market structure and smart money concepts for traders starting from scratch. Taught live in Al Qusais, Dubai.",
      hash: "basic-to-intermediate",
      topics: basicTopics,
    }),
    courseEntry({
      name: "Advanced Institutional Strategies Forex Course",
      description:
        "Order flow analysis, market profile, volume with SMC, Fibonacci retracement and risk psychology management for experienced forex traders. Taught live in Al Qusais, Dubai.",
      hash: "advanced-institutional",
      topics: advancedTopics,
    }),
  ];
}

export function videoObjectGraph(videos) {
  return {
    "@context": "https://schema.org",
    "@graph": videos.map((video) => ({
      "@type": "VideoObject",
      name: video.title,
      description: video.description,
      thumbnailUrl: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
      uploadDate: video.uploadDate,
      embedUrl: `https://www.youtube-nocookie.com/embed/${video.id}`,
      contentUrl: `https://www.youtube.com/watch?v=${video.id}`,
      publisher: {
        "@type": "Organization",
        name: EQUITY_GLOBAL.name,
        url: EQUITY_GLOBAL.url,
      },
    })),
  };
}
