import { Spectral, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import EnquiryWidget from "./components/EnquiryWidget";
import MobileCta from "./components/MobileCta";
import PageEffects from "./components/PageEffects";
import "./globals.css";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--ff-serif",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--ff-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--ff-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.equityfinacademy.com"),
  verification: {
    google: "2DiCnjwxlOpUQjMaIER4c2JANeTQNJa_KEKovvVrvDg",
  },
  other: {
    "geo.region": "AE-DU",
    "geo.placename": "Dubai",
  },
  openGraph: {
    siteName: "Equity Fin Academy",
    locale: "en_AE",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Equity Fin Academy — forex training in Dubai, UAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "32x32" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AE" className={`${spectral.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
      </head>
      <body>
        {children}
        <EnquiryWidget />
        <MobileCta />
        <PageEffects />
        <Analytics />
      </body>
    </html>
  );
}
