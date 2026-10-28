import { advancedTopics, basicTopics } from "./curriculum";
import { EQUITY_GLOBAL } from "./videos";
import { SITE, absoluteUrl } from "./site";

const postalAddress = {
  "@type": "PostalAddress",
  addressLocality: SITE.address.addressLocality,
  addressRegion: SITE.address.addressRegion,
  addressCountry: SITE.address.addressCountry,
};

const unitedArabEmirates = { "@type": "Country", name: "United Arab Emirates" };

const EMIRATES = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ajman",
  "Ras Al Khaimah",
  "Fujairah",
  "Umm Al Quwain",
];

const areaServed = [
  unitedArabEmirates,
  ...EMIRATES.map((name) => ({
    "@type": "AdministrativeArea",
    name,
    containedInPlace: { "@type": "Country", name: "United Arab Emirates" },
  })),
];

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
      // Google's breadcrumb parser reads item as a URL. A nested object makes
      // it look for item.id and can report that id as invalid even when @id is absolute.
      item: absoluteUrl(item.path),
    })),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "EducationalOrganization", "LocalBusiness"],
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: absoluteUrl("/"),
    description: SITE.description,
    telephone: SITE.telephoneTel,
    currenciesAccepted: "AED",
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
    founder: {
      "@type": "Person",
      "@id": `${SITE.url}/#gopi`,
      name: "Gopi Chandran",
      url: `${SITE.url}/about`,
    },
    areaServed,
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

export function articleSchema({ headline, description, path, datePublished, dateModified, type = "Article" }) {
  const pageUrl = absoluteUrl(path);
  const article = {
    "@context": "https://schema.org",
    "@type": type,
    headline,
    description,
    inLanguage: "en-AE",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
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
  if (datePublished) article.datePublished = datePublished;
  if (dateModified || datePublished) article.dateModified = dateModified || datePublished;
  return article;
}

export function faqPageSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "en-AE",
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
    inLanguage: "en-AE",
    areaServed,
    provider: {
      "@type": ["Organization", "EducationalOrganization"],
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: absoluteUrl("/"),
      telephone: SITE.telephoneTel,
      sameAs: SITE.sameAs,
      areaServed,
    },
    teaches: topics,
    // No numeric price: fees are quoted in AED on enquiry and are not published.
    offers: {
      "@type": "Offer",
      name: offerName,
      category,
      url,
      priceCurrency: "AED",
      availability: "https://schema.org/LimitedAvailability",
      description: offerDescription,
      areaServed,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      name: instanceName,
      courseMode: ["https://schema.org/Onsite", "https://schema.org/Online"],
      location: place,
    },
  };
}

const groupOfferDescription =
  "Live group class with live trading sessions and training in Dubai, UAE, and online across the UAE. The fee is quoted in AED when you enquire because it varies by cohort and is not published on the site.";

export function privateCourseSchema() {
  const url = absoluteUrl("/private-group-forex-training-dubai");
  return courseEntry({
    id: `${url}#private-course`,
    name: "Private One-to-One Forex Lessons",
    description:
      "Private one-to-one forex lessons in Dubai, UAE, and online across the UAE, with live trading sessions and training. The fee is quoted in AED when you enquire and is not published.",
    url,
    topics: ["Private one-to-one forex lessons", "Live trading sessions", "Forex training"],
    offerName: "Private one-to-one lesson",
    category: "Private one-to-one forex training",
    instanceName: "Private one-to-one lesson",
    offerDescription:
      "Private one-to-one forex lesson with live trading sessions and training in Dubai, UAE, and online across the UAE. No price is published; the fee is quoted in AED when you enquire.",
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
