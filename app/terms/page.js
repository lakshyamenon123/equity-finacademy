import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import Link from "next/link";
import { pageMetadata } from "../lib/seo";
import { breadcrumbSchema } from "../lib/schema";
import { SITE } from "../lib/site";
import { COURSE_WHATSAPP_TEXT, whatsappHref } from "../lib/whatsapp";

export const metadata = pageMetadata({
  title: "Terms — Equity Fin Academy, Dubai, UAE",
  description:
    "Terms for using the Equity Fin Academy website and enquiring about forex courses in Dubai, UAE. Lessons are education. Fees are quoted when you ask.",
  path: "/terms",
});

const whatsapp = whatsappHref(COURSE_WHATSAPP_TEXT);

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms", path: "/terms" },
        ])}
      />
      <Header />
      <main>
        <section className="tight bg-glow" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span className="current">Terms</span>
            </nav>
            <span className="eyebrow">TERMS</span>
            <h1 className="hero-display" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", maxWidth: "16ch" }}>
              Using this site.
            </h1>
          </div>
        </section>
        <section>
          <div className="container prose-block" style={{ maxWidth: 760 }}>
            <p>
              Equity Fin Academy teaches forex in Dubai, UAE, and online across the UAE. The pages on this site describe the courses, the instructor, and how to enquire. They are not an offer to manage your money.
            </p>
            <p>
              Course fees are quoted when you enquire. A number is not published here, and nothing on the site is a price, a discount, or a payment plan.
            </p>
            <p>
              Private one-to-one lessons and group classes include live trading sessions as described on the course pages. Lifetime WhatsApp access to the instructor, after the course, is part of the Advanced Institutional Strategies track only.
            </p>
            <p>
              The chat may suggest a StarTrader live account. That link is the academy&apos;s affiliate link. The account is with the broker. The academy does not open it for you and does not manage the funds.
            </p>
            <p>
              If you send your name and UAE mobile in the chat or the enquiry form, we use them only to contact you about courses. The details are in the <Link href="/privacy">privacy page</Link>.
            </p>
            <p>
              Questions about these terms: WhatsApp{" "}
              <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                {SITE.telephoneDisplay}
              </a>{" "}
              or call <a href={`tel:${SITE.telephoneTel}`}>{SITE.telephoneDisplay}</a>. The academy is in Dubai, UAE, and is open 24/7.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
