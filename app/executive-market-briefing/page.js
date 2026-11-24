import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import ShortLeadForm from "../components/ShortLeadForm";
import RelatedTraining from "../components/RelatedTraining";
import Link from "next/link";
import { pageMetadata } from "../lib/seo";
import { breadcrumbSchema, faqPageSchema, webPageSchema } from "../lib/schema";
import { INTEREST_BRIEFING } from "../lib/leadOffers";
import { absoluteUrl, SITE } from "../lib/site";
import { whatsappHref } from "../lib/whatsapp";

const path = "/executive-market-briefing";
const title = "Executive Market Briefing in Dubai";
const nextBriefing = "Next briefing: Thursday 3 December 2026, 7:30 pm Dubai time.";
const description =
  "The next Executive Market Briefing is Thursday 3 December 2026 at 7:30 pm Dubai time, with mentor Gopi Chandran. A small room in Dubai, UAE, for 10 to 12 seats, plus an online seat. Register and confirm your seat on WhatsApp.";

export const metadata = pageMetadata({
  title: "Executive Market Briefing, Dubai | Monthly Evening Session | Equity Fin Academy",
  description,
  keywords:
    "market briefing Dubai, forex seminar Dubai executives, trading evening Dubai, forex workshop Dubai professionals, market outlook session UAE",
  path,
});

const faq = [
  {
    q: "When is the next briefing?",
    text: "The next briefing is Thursday 3 December 2026, at 7:30 pm Dubai time (GST, UTC+4), in Dubai, UAE, with an online seat as well. Register on this page. Your seat is confirmed on WhatsApp +971 55 904 7030.",
  },
  {
    q: "Who is it for?",
    text: "Executives, founders, business owners and professionals in the UAE who want a structured view of the markets from a full-time trader, in a small room rather than a large seminar.",
  },
  {
    q: "Can I join online?",
    text: "Yes. Each briefing has an online seat for people outside Dubai or travelling that evening. Choose online in the form.",
  },
  {
    q: "What does it cost?",
    text: "Ask on WhatsApp +971 55 904 7030. Registering on this page does not commit you to a fee. Your seat is confirmed on WhatsApp.",
  },
];

export default function ExecutiveMarketBriefingPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, description, path })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Executive Market Briefing", path },
        ])}
      />
      <JsonLd data={faqPageSchema(faq)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Event",
          name: "Executive Market Briefing",
          startDate: "2026-12-03T19:30:00+04:00",
          eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          description,
          url: absoluteUrl(path),
          inLanguage: "en-AE",
          location: {
            "@type": "Place",
            name: "Dubai, UAE",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Dubai",
              addressCountry: "AE",
            },
          },
          organizer: {
            "@type": "EducationalOrganization",
            name: SITE.name,
            url: absoluteUrl("/"),
          },
        }}
      />
      <Header active="briefing" />

      <main>
        <section className="tight bg-glow" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="container offer-grid">
            <div>
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span className="sep">/</span>
                <span className="current">Executive Market Briefing</span>
              </nav>
              <span className="eyebrow">MONTHLY · DUBAI, UAE</span>
              <h1 className="hero-display" style={{ fontSize: "clamp(1.8rem,5vw,2.8rem)", maxWidth: "20ch" }}>
                The Executive Market Briefing.
              </h1>
              <p style={{ maxWidth: "58ch", marginTop: 18, fontSize: "1.15rem" }}>
                <strong>{nextBriefing}</strong>
              </p>
              <p style={{ maxWidth: "58ch", marginTop: 18 }}>
                One evening a month, a small room in Dubai with mentor Gopi Chandran: the month&apos;s key levels on major currency
                pairs and gold, the calendar events that matter, and how a professional plans trades around a full diary.
              </p>
              <ul className="guide-list">
                <li>10 to 12 seats in the room, plus an online seat.</li>
                <li>Thursday 3 December 2026, 7:30 pm Dubai time.</li>
                <li>Live charts and open questions, not a sales presentation.</li>
                <li>Your seat is confirmed on WhatsApp +971 55 904 7030.</li>
              </ul>
            </div>
            <div className="info-card offer-card">
              <h2 style={{ fontSize: "1.3rem", marginTop: 0 }}>Register your seat</h2>
              <p style={{ marginTop: 0 }}>
                Thursday 3 December 2026, 7:30 pm Dubai time. Your seat is confirmed on WhatsApp +971 55 904 7030.
              </p>
              <ShortLeadForm
                id="briefing-form"
                interest={INTEREST_BRIEFING}
                options={["Seat in the room, Dubai", "Online seat"]}
                optionLabel="Seat (optional)"
                submitLabel="Register interest"
                successText="Thank you. The academy will confirm your seat on WhatsApp +971 55 904 7030."
                whatsappIntro="Hi Gopi, I would like a seat at the Executive Market Briefing on Thursday 3 December 2026 at 7:30 pm Dubai time."
              />
            </div>
          </div>
        </section>

        <section className="tight soft">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">QUESTIONS</span>
              <h2>About the briefing</h2>
            </div>
            <div className="faq-list">
              {faq.map((item) => (
                <details key={item.q}>
                  <summary>
                    {item.q}
                    <span className="plus">+</span>
                  </summary>
                  <p>{item.text}</p>
                </details>
              ))}
            </div>
            <p style={{ marginTop: 24 }}>
              Prefer a private hour instead? <Link href="/free-demo">Book a free demo class</Link>, read about{" "}
              <Link href="/forex-mentorship-dubai">forex mentorship in Dubai</Link>, or message{" "}
              <a href={whatsappHref("Hi Gopi, I have a question about the Executive Market Briefing.")} target="_blank" rel="noopener noreferrer">
                WhatsApp +971 55 904 7030
              </a>
              .
            </p>
          </div>
        </section>

        <section className="tight">
          <div className="container">
            <RelatedTraining current={path} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
