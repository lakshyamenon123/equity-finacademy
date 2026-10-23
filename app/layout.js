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
  openGraph: {
    siteName: "Equity Fin Academy",
    locale: "en_AE",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Equity Fin Academy — forex training in Al Qusais, Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spectral.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
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
