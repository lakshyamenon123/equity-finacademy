import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Pricing — Forex Course Fees | Equity Fin Academy Dubai",
  description:
    "What's included in each Equity Fin Academy forex course track in Al Qusais, Dubai. Call or message us for current course fees and enrolment details.",
  keywords: "forex course price Dubai, forex trading course cost, Equity Fin Academy fees, how much does a forex course cost",
  openGraph: {
    title: "Pricing — Forex Course Fees | Equity Fin Academy Dubai",
    description: "What's included in each course track. Call or message us for current fees.",
    type: "website",
  },
  alternates: { canonical: "https://www.equityfinacademy.com/pricing" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/" },
    { "@type": "ListItem", position: 2, name: "Pricing", item: "/pricing" },
  ],
};

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 13l4 4L19 7" />
  </svg>
);

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header active="pricing" />

      <main>
        <section className="tight bg-glow" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span className="sep">/</span>
              <span className="current">Pricing</span>
            </nav>
            <span className="eyebrow">PRICING</span>
            <h1 className="hero-display" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", maxWidth: "20ch" }}>
              What&apos;s included, track by track.
            </h1>
            <p style={{ maxWidth: "60ch", marginTop: 18 }}>
              Course fees vary by cohort and enrolment timing, so we don&apos;t publish a number that goes stale.
              Here&apos;s exactly what each track includes — call or message us for current pricing.
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
                <div className="price-note">Call for current pricing</div>
                <ul>
                  <li><Check />Full Basic to Intermediate curriculum</li>
                  <li><Check />Live instruction in Al Qusais, Dubai</li>
                  <li><Check />Practical sessions on Star Trader (SCA-regulated)</li>
                  <li><Check />Candlestick, market structure &amp; smart money fundamentals</li>
                </ul>
                <a href="/contact?course=basic-intermediate" className="btn btn-outline btn-block">
                  Enquire About Pricing
                </a>
              </div>

              <div className="pricing-card featured reveal">
                <span className="level">TRACK 02</span>
                <h3>Advanced Institutional Strategies</h3>
                <div className="price-note">Call for current pricing</div>
                <ul>
                  <li><Check />Full Advanced Institutional Strategies curriculum</li>
                  <li><Check />Live instruction in Al Qusais, Dubai</li>
                  <li><Check />Practical sessions on Star Trader (SCA-regulated)</li>
                  <li><Check />Order flow, market profile, SMC &amp; risk psychology</li>
                  <li><Check />Lifetime support via WhatsApp</li>
                </ul>
                <a href="/contact?course=advanced-institutional" className="btn btn-primary btn-block">
                  Enquire About Pricing
                </a>
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
              <details>
                <summary>
                  Why don&apos;t you list a price on the website?<span className="plus">+</span>
                </summary>
                <p>Fees can change between cohorts and depend on current enrolment. Rather than publish a number that might be outdated by the time you read it, we quote current pricing directly when you enquire.</p>
              </details>
              <details>
                <summary>
                  Is broker account funding included in the course fee?<span className="plus">+</span>
                </summary>
                <p>The course fee covers instruction and practical sessions. Funding your own trading account is separate — we&apos;ll walk you through this when you enquire.</p>
              </details>
              <details>
                <summary>
                  Do you offer payment plans?<span className="plus">+</span>
                </summary>
                <p>Call or message us to discuss what&apos;s currently available — options can vary by cohort.</p>
              </details>
              <details>
                <summary>
                  Is there a difference in price between the two tracks?<span className="plus">+</span>
                </summary>
                <p>Yes, the Advanced Institutional Strategies track covers substantially more curriculum and includes lifetime WhatsApp support, which is reflected in its fee. Call for exact current pricing on both.</p>
              </details>
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
              <a href="tel:+971567188995" className="btn btn-primary">
                Call +971 56 718 8995
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
