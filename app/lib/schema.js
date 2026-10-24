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
    url: absoluteUrl("/"),
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
    // Open 24/7. reviewCount is omitted: 30+ is a lower bound, not an exact total.
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: SITE.openDays,
        opens: SITE.opens,
        closes: SITE.closes,
      },
    ],
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
      "Founder of Equity Fin Academy in Dubai, UAE, and of the Equity Global YouTube channel.",
    worksFor: {
      "@type": "EducationalOrganization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: absoluteUrl("/"),
    },
    sameAs: SITE.sameAs,
    knowsAbout: ["Forex trading", "Market structure", "Risk management"],
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
      url: absoluteUrl("/"),
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

function courseEntry({ id, name, description, url, topics, offerName, category, instanceName, offerDescription }) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": id,
    name,
    description,
    url,
    provider: {
      "@type": "EducationalOrganization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: absoluteUrl("/"),
      sameAs: SITE.sameAs,
    },
    teaches: topics,
    // No price or priceCurrency: fees are quoted on enquiry and are not published.
    offers: {
      "@type": "Offer",
      name: offerName,
      category,
      url,
      availability: "https://schema.org/LimitedAvailability",
      description: offerDescription,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      name: instanceName,
      courseMode: "https://schema.org/Onsite",
      location: place,
    },
  };
}

const groupOfferDescription =
  "Live group class with live trading sessions and training in Dubai, UAE, and online across the UAE. The fee is quoted when you enquire because it varies by cohort and is not published on the site.";

export function privateCourseSchema() {
  const url = absoluteUrl("/private-group-forex-training-dubai");
  return courseEntry({
    id: `${url}#private-course`,
    name: "Private One-to-One Forex Lessons",
    description:
      "Private one-to-one forex lessons in Dubai, UAE, and online across the UAE, with live trading sessions and training. The fee is quoted when you enquire and is not published.",
    url,
    topics: ["Private one-to-one forex lessons", "Live trading sessions", "Forex training"],
    offerName: "Private one-to-one lesson",
    category: "Private one-to-one forex training",
    instanceName: "Private one-to-one lesson",
    offerDescription:
      "Private one-to-one forex lesson with live trading sessions and training in Dubai, UAE, and online across the UAE. No price is published; the fee is quoted when you enquire.",
  });
}

export function courseSchemas() {
  return [
    courseEntry({
      id: `${absoluteUrl("/courses")}#basic-to-intermediate`,
      name: "Basic to Intermediate Forex Course",
      description:
        "Forex fundamentals, candlestick patterns, market structure and smart money concepts for traders starting from scratch. Taught in Dubai, UAE, and online across the UAE, as a group class with live trading sessions.",
      url: `${absoluteUrl("/courses")}#basic-to-intermediate`,
      topics: basicTopics,
      offerName: "Group class in Dubai",
      category: "Group forex training class",
      instanceName: "Group cohort",
      offerDescription: groupOfferDescription,
    }),
    courseEntry({
      id: `${absoluteUrl("/courses")}#advanced-institutional`,
      name: "Advanced Institutional Strategies Forex Course",
      description:
        "Market profile, volume with smart money concepts, Fibonacci retracement and risk psychology for experienced forex traders. Taught in Dubai, UAE, and online across the UAE, as a group class with live trading sessions.",
      url: `${absoluteUrl("/courses")}#advanced-institutional`,
      topics: advancedTopics,
      offerName: "Group class in Dubai",
      category: "Group forex training class",
      instanceName: "Group cohort",
      offerDescription: groupOfferDescription,
    }),
    privateCourseSchema(),
  ];
}

export function videoObjectGraph(videos, channel = EQUITY_GLOBAL) {
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
        name: channel.name,
        url: channel.url,
      },
    })),
  };
}
