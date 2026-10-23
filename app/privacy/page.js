import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import Link from "next/link";
import { pageMetadata } from "../lib/seo";
import { breadcrumbSchema } from "../lib/schema";

export const metadata = pageMetadata({
  title: "Privacy — Equity Fin Academy, Al Qusais, Dubai",
  description:
    "How Equity Fin Academy uses a name and UAE mobile number from the site chat and enquiry form. The number is used only to contact you about courses.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
        ])}
      />
      <Header />
      <main>
        <section className="tight bg-glow" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span className="current">Privacy</span>
            </nav>
            <span className="eyebrow">PRIVACY</span>
            <h1 className="hero-display" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", maxWidth: "18ch" }}>
              How enquiries are used.
            </h1>
          </div>
        </section>
        <section>
          <div className="container" style={{ maxWidth: 760 }}>
            <p>
              When you share your name and UAE mobile number in the site chat or the enquiry form, Equity Fin Academy stores your name, number, the page you were on, the time in Dubai, and a short note of what you asked about.
            </p>
            <p>We&apos;ll only use your number to contact you about courses. These details are not sold.</p>
            <p>
              The chat can suggest opening a live account with StarTrader. That link is the academy&apos;s affiliate link. The academy does not manage your funds. Trading involves risk.
            </p>
            <p>
              Vercel Web Analytics counts visits to the site. That count does not include your name or phone number.
            </p>
            <p>
              To ask for an enquiry to be deleted, WhatsApp or call <a href="tel:+971567188995">+971 56 718 8995</a>, or write from the <Link href="/contact">contact page</Link>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
