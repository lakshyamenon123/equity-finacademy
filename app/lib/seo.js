import { OG_IMAGE, SITE, absoluteUrl } from "./site";

function uaeLanguages(url) {
  return {
    "en-AE": url,
    "x-default": url,
  };
}

export function pageMetadata({ title, description, path, keywords, type = "website" }) {
  const url = absoluteUrl(path);
  // Next.js 14 drops a trailing slash when the metadata URL pathname is "/".
  // The homepage canonical and hreflang pair are emitted from app/page.js so
  // they can stay https://www.equityfinacademy.com/ and match Search Console.
  const isHome = !path || path === "/";
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type,
      ...(isHome ? {} : { url }),
      siteName: SITE.name,
      locale: "en_AE",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
    ...(isHome
      ? {}
      : {
          alternates: {
            canonical: url,
            languages: uaeLanguages(url),
          },
        }),
  };
}
