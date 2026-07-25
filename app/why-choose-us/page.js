import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Why Choose Equity Fin Academy — Forex Education Dubai",
  description:
    "What makes Equity Fin Academy unique: an institutional-background instructor, an SCA-regulated broker for practical sessions, a single-market forex curriculum, and an honest, no-hype approach to trading education in Dubai.",
  keywords:
    "why choose equity fin academy, best forex academy Dubai, trusted forex course UAE, honest forex education, forex mentor with experience, regulated forex training Dubai",
  openGraph: {
    title: "Why Choose Equity Fin Academy — Forex Education Dubai",
    description:
      "An institutional-background instructor, SCA-regulated broker access, and a single-market forex curriculum — see what makes Equity Fin Academy different.",
    type: "website",
  },
  alternates: { canonical: "https://www.equityfinacademy.com/why-choose-us" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/" },
    { "@type": "ListItem", position: 2, name: "Why Choose Us", item: "/why-choose-us" },
  ],
};

const differentiators = [
  {
    icon: <path d="M4 21V10l8-6 8 6v11M9 21v-6h6v6" />,
    title: "Instructor with real desk experience",
    body: "Taught by a full-time forex trader with a background inside institutional trading desks — not a self-taught influencer repeating tutorials.",
  },
  {
    icon: <path d="M12 2l8 4v6c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-4z" />,
    title: "Practice on a regulated broker",
    body: "Practical sessions run on Star Trader, regulated by the UAE Securities and Commodities Authority (SCA) — not an anonymous demo platform.",
  },
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </>
    ),
    title: "One market, taught in depth",
    body: "We teach forex exclusively. That focus means more class time on structure, order flow and risk — not a shallow tour of five different markets.",
  },
  {
    icon: <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />,
    title: "2,000+ students already trained",
    body: 'Through the "Equity Global" YouTube channel and live mentorship, across self-paced and cohort-based formats.',
  },
  {
    icon: <path d="M21 11.5a8.5 8.5 0 11-8.5-8.5M21 4l-9.5 9.5-3-3" />,
    title: "No guaranteed-profit promises",
    body: "We teach process, discipline and risk management. Anyone promising guaranteed returns from forex trading education isn't being straight with you.",
  },
  {
    icon: <path d="M3 5h18M3 12h18M3 19h18" />,
    title: "A structured curriculum, not random clips",
    body: "Two clearly sequenced tracks — Basic to Intermediate and Advanced Institutional Strategies — instead of an unordered pile of free videos.",
  },
  {
    icon: <path d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.97-4.03 9-9 9-1.6 0-3.1-.42-4.4-1.15L3 21l1.15-4.6A8.96 8.96 0 013 12c0-4.97 4.03-9 9-9s9 4.03 9 9z" />,
    title: "Real, ongoing support",
    body: "Advanced track students keep direct WhatsApp access to the instructor after the course ends — not a one-off webinar you never hear from again.",
  },
  {
    icon: (
      <>
        <path d="M12 21c-4.4-2-8-5.5-8-10a8 8 0 0116 0c0 4.5-3.6 8-8 10z" />
        <circle cx="12" cy="11" r="2.5" />
      </>
    ),
    title: "A physical academy in Al Qusais",
    body: "Learn in person at M Floor, Arzoo Building, Al Qusais, Dubai — not just through a screen with no accountability.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header active="why-choose-us" />

      <main>
        <section className="tight bg-glow" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span className="sep">/</span>
              <span className="current">Why Choose Us</span>
            </nav>
            <span className="eyebrow">WHY CHOOSE US</span>
            <h1 className="hero-display" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", maxWidth: "22ch" }}>
              What makes Equity Fin Academy different.
            </h1>
            <p style={{ maxWidth: "60ch", marginTop: 18 }}>
              There&apos;s no shortage of forex trading education online. Here&apos;s specifically what we do
              differently, and why it matters if you&apos;re serious about learning to trade.
            </p>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">WHAT MAKES US DIFFERENT</span>
              <h2>Eight things you can actually verify</h2>
            </div>
            <div className="grid-4">
              {differentiators.map((d) => (
                <div className="card reveal" key={d.title}>
                  <div className="icon-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      {d.icon}
                    </svg>
                  </div>
                  <h3>{d.title}</h3>
                  <p>{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="tight soft">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">A HONEST COMPARISON</span>
              <h2>Equity Fin Academy vs. typical online forex education</h2>
            </div>
            <div className="grid-4" style={{ gridTemplateColumns: "1fr 1fr" }}>
              <div className="card reveal">
                <h3 style={{ color: "var(--green)" }}>Equity Fin Academy</h3>
                <ul className="course-list" style={{ margin: 0 }}>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    Instructor with institutional trading-desk background
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    Practical sessions on an SCA-regulated broker
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    Structured, sequenced curriculum
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    Clear, upfront risk disclaimers
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    Real address, phone number and reviews
                  </li>
                </ul>
              </div>
              <div className="card reveal">
                <h3 style={{ color: "var(--fall)" }}>Typical &quot;get rich quick&quot; trading content</h3>
                <ul className="course-list" style={{ margin: 0 }}>
                  <li style={{ color: "var(--fall)" }}>✕ Anonymous &quot;guru&quot; with no verifiable background</li>
                  <li style={{ color: "var(--fall)" }}>✕ Unregulated signal groups or demo-only platforms</li>
                  <li style={{ color: "var(--fall)" }}>✕ Random, unordered free clips</li>
                  <li style={{ color: "var(--fall)" }}>✕ Promises of guaranteed profits</li>
                  <li style={{ color: "var(--fall)" }}>✕ No physical presence, hard to hold accountable</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="tight">
          <div className="container">
            <blockquote className="pull-quote reveal">
              <p>&quot;We&apos;d rather you learn slower and correctly than fast and wrong. That&apos;s the whole difference.&quot;</p>
              <cite>— Gopi Chandran, Founder, Equity Fin Academy</cite>
            </blockquote>
          </div>
        </section>

        <section className="tight">
          <div className="container">
            <div className="cta-banner reveal">
              <div>
                <h2>See if Equity Fin Academy is right for you.</h2>
                <p>Compare the two course tracks, or call us to talk through which one fits your experience.</p>
              </div>
              <div className="cta-row">
                <a href="/courses" className="btn btn-primary">
                  View Courses
                </a>
                <a href="/contact" className="btn btn-outline">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
