import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import OpenChatLink from "../components/OpenChatLink";
import JsonLd from "../components/JsonLd";
import { pageMetadata } from "../lib/seo";
import { breadcrumbSchema, faqPageSchema } from "../lib/schema";

export const metadata = pageMetadata({
  title: "Forex Course Fees in Dubai (AED) | Equity Fin Academy",
  description:
    "Forex trading course fees in Dubai, quoted in AED. See what group classes and private lessons include, then call or WhatsApp for the current figure.",
  keywords:
    "forex course fees Dubai, forex trading courses in Dubai cost, forex course price AED, trading classes in Dubai fees",
  path: "/pricing",
});

const pricingFaq = [
  {
    q: "Why don't you list a price on the website?",
    text: "Fees can change between cohorts and depend on current enrolment. Rather than publish a number that might be outdated by the time you read it, we quote the current fee in AED when you enquire.",
  },
  {
    q: "Is broker account funding included in the course fee?",
    text: "The course fee covers instruction and practical sessions. Funding your own trading account is separate. We walk through that when you enquire.",
  },
  {
    q: "Do you offer payment plans?",
    text: "Call or message us to discuss what is currently available. Options can vary by cohort.",
  },
  {
    q: "Is there a difference in price between the two tracks?",
    text: "Yes. The Advanced Institutional Strategies track covers more of the curriculum and includes lifetime WhatsApp support, which is reflected in its fee. Call for the current AED quote on both.",
  },
];

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 13l4 4L19 7" />
  </svg>
);

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />
      <JsonLd data={faqPageSchema(pricingFaq)} />
      <Header active="pricing" />

      <main>
        <section className="tight bg-glow" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span className="current">Pricing</span>
            </nav>
            <span className="eyebrow">PRICING</span>
            <h1 className="hero-display" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", maxWidth: "20ch" }}>
              What&apos;s included, track by track.
            </h1>
            <p style={{ maxWidth: "60ch", marginTop: 18 }}>
              Course fees are quoted in AED. They vary by cohort and enrolment timing, so we don&apos;t publish a number that goes stale.
              Here&apos;s exactly what each track includes — call or message us for the current dirham figure. Private
              one-to-one lessons, including live trading sessions, are available too. That fee is also quoted when you
              enquire and is not listed here. What changes a 2026 quote, track by track, is written on the{" "}
              <Link href="/forex-course-fees-dubai">forex course fees in Dubai</Link> page. That page does not add a price either. The two syllabuses are on{" "}
              <Link href="/courses">forex trading courses</Link>. To ask for the figure, use the <Link href="/contact">contact page</Link> or WhatsApp +971 55 904 7030.
            </p>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">CHOOSE YOUR TRACK</span>
              <h2>Two tracks, priced by cohort</h2>
            </div>
            <div className="pricing-grid">
              <div className="pricing-card reveal">
                <span className="level">TRACK 01</span>
                <h3>Basic to Intermediate</h3>
                <div className="price-note">Quoted in AED</div>
                <ul>
                  <li><Check />Full Basic to Intermediate curriculum</li>
                  <li><Check />Live instruction in Dubai, UAE</li>
                  <li><Check />Practical sessions on Star Trader (SCA-regulated)</li>
                  <li><Check />Candlestick, market structure &amp; smart money fundamentals</li>
                </ul>
                <OpenChatLink className="btn btn-outline btn-block">Enquire About Pricing</OpenChatLink>
              </div>

              <div className="pricing-card featured reveal">
                <span className="level">TRACK 02</span>
                <h3>Advanced Institutional Strategies</h3>
                <div className="price-note">Quoted in AED</div>
                <ul>
                  <li><Check />Full Advanced Institutional Strategies curriculum</li>
                  <li><Check />Live instruction in Dubai, UAE</li>
                  <li><Check />Practical sessions on Star Trader (SCA-regulated)</li>
                  <li><Check />Market profile, SMC &amp; risk psychology</li>
                  <li><Check />Lifetime support via WhatsApp</li>
                </ul>
                <OpenChatLink className="btn btn-primary btn-block">Enquire About Pricing</OpenChatLink>
              </div>
            </div>
          </div>
        </section>

        <section className="tight soft">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">PRICING FAQS</span>
              <h2>Common questions about fees</h2>
            </div>
            <div className="faq-list reveal">
              {pricingFaq.map((item) => (
                <details key={item.q}>
                  <summary>
                    {item.q}
                    <span className="plus">+</span>
                  </summary>
                  <p>{item.text}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="tight">
          <div className="container">
            <div className="cta-banner reveal">
              <div>
                <h2>Get current pricing for your track.</h2>
                <p>Call, WhatsApp, or send an enquiry — we typically respond the same day.</p>
              </div>
              <a href="tel:+971559047030" className="btn btn-primary">
                Call +971 55 904 7030
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
