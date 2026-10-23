import { OG_IMAGE, SITE, absoluteUrl } from "./site";

export function pageMetadata({ title, description, path, keywords, type = "website" }) {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type,
      url,
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
    alternates: {
      canonical: url,
    },
  };
}
