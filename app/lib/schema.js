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

function breadcrumbItemUrl(path) {
  const url = absoluteUrl(path);
  const parsed = new URL(url);
  if (parsed.protocol !== "https:" || parsed.hostname !== "www.equityfinacademy.com") {
    throw new Error(`Breadcrumb item must be an absolute https://www.equityfinacademy.com URL: ${url}`);
  }
  if (parsed.username || parsed.password || parsed.search || parsed.hash) {
    throw new Error(`Breadcrumb item must be a clean page URL: ${url}`);
  }
  return parsed.href;
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const pageUrl = breadcrumbItemUrl(item.path);
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        // Google's breadcrumb report validates item.id. A nested object that
        // sets only @id can be reported as an invalid id, so id, @id, and url
        // are the same absolute https://www.equityfinacademy.com URL.
        item: {
          "@type": "WebPage",
          "@id": pageUrl,
          id: pageUrl,
          url: pageUrl,
          name: item.name,
        },
      };
    }),
  };
}

export function webPageSchema({ name, description, path }) {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": url,
    url,
    name,
    description,
    inLanguage: "en-AE",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      name: SITE.name,
      url: absoluteUrl("/"),
      inLanguage: "en-AE",
    },
    about: { "@id": `${SITE.url}/#organization` },
    publisher: { "@id": `${SITE.url}/#organization` },
    contentLocation: {
      "@type": "Place",
      name: "Dubai, United Arab Emirates",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        addressCountry: "AE",
      },
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: absoluteUrl("/"),
    name: SITE.name,
    description: SITE.description,
    inLanguage: "en-AE",
    publisher: { "@id": `${SITE.url}/#organization` },
    about: {
      "@type": "EducationalOrganization",
      name: SITE.name,
      areaServed: { "@type": "Country", name: "United Arab Emirates" },
    },
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
    availableLanguage: ["en-AE"],
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

function courseEntry({ id, name, description, url, topics, instanceName }) {
  return {
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
    // Fees are quoted in AED on enquiry and are not published. An Offer without
    // a price is invalid structured data, so the price is left off the graph.
    hasCourseInstance: {
      "@type": "CourseInstance",
      name: instanceName,
      courseMode: ["https://schema.org/Onsite", "https://schema.org/Online"],
      inLanguage: "en-AE",
      location: place,
    },
  };
}

function privateCourse() {
  const url = absoluteUrl("/private-group-forex-training-dubai");
  return courseEntry({
    id: `${url}#private-course`,
    name: "Private One-to-One Forex Lessons",
    description:
      "Private one-to-one forex lessons in Dubai, UAE, and online across the UAE, with live trading sessions and training. The fee is quoted in AED when you enquire and is not published.",
    url,
    topics: ["Private one-to-one forex lessons", "Live trading sessions", "Forex training"],
    instanceName: "Private one-to-one lesson",
  });
}

export function privateCourseSchema() {
  return {
    "@context": "https://schema.org",
    ...privateCourse(),
  };
}

export function courseSchemas() {
  const basicUrl = `${absoluteUrl("/courses")}#basic-to-intermediate`;
  const advancedUrl = `${absoluteUrl("/courses")}#advanced-institutional`;
  const courses = [
    courseEntry({
      id: basicUrl,
      name: "Basic to Intermediate Forex Course",
      description:
        "Forex fundamentals, candlestick patterns, market structure and smart money concepts for traders starting from scratch. Taught in Dubai, UAE, and online across the UAE, as a group class with live trading sessions.",
      url: basicUrl,
      topics: basicTopics,
      instanceName: "Group cohort",
    }),
    courseEntry({
      id: advancedUrl,
      name: "Advanced Institutional Strategies Forex Course",
      description:
        "Market profile, volume with smart money concepts, Fibonacci retracement and risk psychology for experienced forex traders. Taught in Dubai, UAE, and online across the UAE, as a group class with live trading sessions.",
      url: advancedUrl,
      topics: advancedTopics,
      instanceName: "Group cohort",
    }),
    privateCourse(),
  ];
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Forex courses in Dubai and online across the UAE",
    numberOfItems: courses.length,
    itemListElement: courses.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: course.url,
      name: course.name,
      item: course,
    })),
  };
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
