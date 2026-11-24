import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import ShortLeadForm from "../components/ShortLeadForm";
import RelatedTraining from "../components/RelatedTraining";
import Link from "next/link";
import { pageMetadata } from "../lib/seo";
import { breadcrumbSchema, faqPageSchema, webPageSchema } from "../lib/schema";
import { INTEREST_BRIEFING } from "../lib/leadOffers";
import { whatsappHref } from "../lib/whatsapp";

const path = "/executive-market-briefing";
const title = "Executive Market Briefing in Dubai";
const description =
  "A monthly small-room evening market briefing in Dubai with mentor Gopi Chandran, for executives, founders and professionals. 10 to 12 seats plus an online seat. Register interest for the next date.";

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
    text: "The next session date is announced on WhatsApp. Register interest on this page and you will receive the date, the time and the venue area in Dubai before seats are confirmed.",
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
    text: "Ask on WhatsApp when the date is announced. Registering interest does not commit you to anything.",
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
              <p style={{ maxWidth: "58ch", marginTop: 18 }}>
                One evening a month, a small room in Dubai with mentor Gopi Chandran: the month&apos;s key levels on major currency
                pairs and gold, the calendar events that matter, and how a professional plans trades around a full diary.
              </p>
              <ul className="guide-list">
                <li>10 to 12 seats in the room, plus an online seat.</li>
                <li>An evening session on Dubai time, after office hours.</li>
                <li>Live charts and open questions, not a sales presentation.</li>
                <li>Next session date announced on WhatsApp.</li>
              </ul>
            </div>
            <div className="info-card offer-card">
              <h2 style={{ fontSize: "1.3rem", marginTop: 0 }}>Register interest</h2>
              <p style={{ marginTop: 0 }}>You will receive the next date on WhatsApp.</p>
              <ShortLeadForm
                id="briefing-form"
                interest={INTEREST_BRIEFING}
                options={["Seat in the room, Dubai", "Online seat"]}
                optionLabel="Seat (optional)"
                submitLabel="Register interest"
                successText="Thank you. You are on the list, and the next date will come to you on WhatsApp."
                whatsappIntro="Hi Gopi, I would like to register interest in the Executive Market Briefing."
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
