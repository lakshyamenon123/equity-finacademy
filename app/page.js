import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Equity Fin Academy — Forex Trading Course & Academy in Dubai",
  description:
    "Equity Fin Academy is a Dubai-based forex trading course in Al Qusais teaching beginners and experienced traders how to learn forex trading step by step — candlestick patterns, market structure, smart money concepts and institutional order flow, with practical sessions on an SCA-regulated broker.",
  keywords:
    "forex trading course Dubai, forex trading academy Al Qusais, learn forex trading UAE, how to start forex trading, forex trading for beginners, smart money concepts course, market structure trading, candlestick pattern course, institutional trading strategies, SCA regulated broker training, technical analysis course Dubai, order flow trading course, risk management trading course, forex mentor Dubai, best forex course in Dubai",
  openGraph: {
    title: "Equity Fin Academy — Forex Trading Course & Academy in Dubai",
    description:
      "Premium forex trading education in Al Qusais, Dubai. One structured curriculum, SCA-regulated broker access, 2,000+ students trained.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.equityfinacademy.com/",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Equity Fin Academy",
  description:
    "Forex trading education academy in Al Qusais, Dubai, offering structured courses from beginner fundamentals to advanced institutional strategies.",
  url: "https://www.equityfinacademy.com/",
  telephone: "+971-56-718-8995",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "M Floor, Arzoo Building",
    addressLocality: "Al Qusais",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Header active="home" />

      <main>
        <section className="hero bg-glow">
          <div className="container">
            <div className="hero-top">
              <div className="hero-copy">
                <span className="eyebrow">AL QUSAIS · DUBAI · FOREX TRADING ACADEMY</span>
                <h1 className="hero-display">
                  Learn to read the{" "}
                  <span className="inline-pill">
                    <span className="dot-live"></span>forex
                  </span>{" "}
                  market the way institutions do.
                </h1>
                <p className="hero-sub" style={{ marginTop: 22 }}>
                  Founded by a full-time trader with a background inside institutional trading desks, Equity Fin
                  Academy teaches order flow, market structure and risk management as one connected discipline — not
                  a shortcut, not a signal service. Whether you&apos;re wondering how to start learning forex or
                  ready for institutional strategies, there&apos;s a track built for you.
                </p>
                <div className="cta-row">
                  <a href="tel:+971567188995" className="btn btn-outline">
                    Call +971 56 718 8995
                  </a>
                  <a href="/contact" className="btn btn-primary">
                    Book a Seat
                  </a>
                </div>
              </div>

              <div className="hero-graphic" aria-hidden="true">
                <svg viewBox="0 0 260 220" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="ribbonGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#0B5C38" />
                      <stop offset="45%" stopColor="#0E7C4A" />
                      <stop offset="100%" stopColor="#BDEBD1" />
                    </linearGradient>
                    <linearGradient id="ribbonHighlight" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <ellipse cx="130" cy="196" rx="85" ry="12" fill="#0A3D26" opacity="0.16" style={{ filter: "blur(8px)" }} />
                  <g className="ribbon-path">
                    <path
                      d="M28 150 C 28 92, 92 92, 100 132 C 108 172, 168 172, 178 112 C 186 66, 228 56, 236 30"
                      fill="none"
                      stroke="url(#ribbonGrad)"
                      strokeWidth="24"
                      strokeLinecap="round"
                    />
                    <path
                      d="M28 150 C 28 92, 92 92, 100 132 C 108 172, 168 172, 178 112 C 186 66, 228 56, 236 30"
                      fill="none"
                      stroke="url(#ribbonHighlight)"
                      strokeWidth="7"
                      strokeLinecap="round"
                      transform="translate(-4,-6)"
                    />
                  </g>
                </svg>
                <div className="stat-dial">
                  <span className="big" data-counter="2000" data-suffix="+">
                    0+
                  </span>
                  <span className="cap">Students Trained</span>
                </div>
              </div>
            </div>
          </div>

          <div className="container hero-stats-wrap">
            <div className="hero-stats-row">
              <div className="stat-card-light reveal">
                <div className="head">
                  <span>Track</span>
                  <span>(01)</span>
                </div>
                <div className="value">Basic → Intermediate</div>
              </div>
              <div className="stat-card-light reveal">
                <div className="head">
                  <span>Track</span>
                  <span>(02)</span>
                </div>
                <div className="value">Advanced Institutional</div>
              </div>
              <div className="stat-card-light accent reveal">
                <div className="head">
                  <span>Broker Access</span>
                  <span>(03)</span>
                </div>
                <div className="value">SCA-Regulated</div>
              </div>
            </div>
          </div>
        </section>

        <div className="ticker-wrap" aria-label="Forex pairs referenced in the curriculum — illustrative, not live prices">
          <div className="ticker-track">
            {["EUR/USD", "GBP/USD", "XAU/USD", "USD/JPY", "AUD/USD", "USD/CHF", "USD/CAD", "NZD/USD"].map((pair, i) => (
              <span className={`ticker-item ${i % 2 === 0 ? "up" : "down"}`} key={pair}>
                <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d={i % 2 === 0 ? "M4 16l6-6 4 4 6-8" : "M4 8l6 6 4-4 6 8"} />
                </svg>
                {pair}
              </span>
            ))}
            {["EUR/USD", "GBP/USD", "XAU/USD", "USD/JPY", "AUD/USD", "USD/CHF", "USD/CAD", "NZD/USD"].map((pair, i) => (
              <span className={`ticker-item ${i % 2 === 0 ? "up" : "down"}`} aria-hidden="true" key={`dup-${pair}`}>
                <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d={i % 2 === 0 ? "M4 16l6-6 4 4 6-8" : "M4 8l6 6 4-4 6 8"} />
                </svg>
                {pair}
              </span>
            ))}
          </div>
        </div>

        <div className="stats-strip">
          <div className="container stats-grid">
            <div className="stat-block reveal">
              <span className="value" data-counter="2000" data-suffix="+">0+</span>
              <span className="label">Students Trained</span>
            </div>
            <div className="stat-block reveal">
              <span className="value" data-counter="10" data-suffix="+">0+</span>
              <span className="label">Years Full-Time Trading</span>
            </div>
            <div className="stat-block reveal">
              <span className="value" data-counter="2" data-suffix="">0</span>
              <span className="label">Course Tracks</span>
            </div>
            <div className="stat-block reveal">
              <span className="value" data-counter="1" data-suffix="">0</span>
              <span className="label">Market. Fully Mastered.</span>
            </div>
          </div>
        </div>

        <section>
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">WHY EQUITY FIN ACADEMY</span>
              <h2>A forex trading academy built on desk experience, not upsells.</h2>
              <p>
                We keep the promise narrow on purpose: understand how price actually moves, and manage risk like a
                professional. Everything else is noise.
              </p>
            </div>

            <div className="grid-4">
              <div className="card reveal">
                <div className="num">01</div>
                <h3>Institutional pedigree</h3>
                <p>
                  Founded by a full-time forex trader with a background inside institutional trading desks — not a
                  self-taught influencer.
                </p>
              </div>
              <div className="card reveal">
                <div className="num">02</div>
                <h3>Regulated broker access</h3>
                <p>
                  Practical sessions run through Star Trader, a broker regulated by the UAE Securities and
                  Commodities Authority (SCA).
                </p>
              </div>
              <div className="card reveal">
                <div className="num">03</div>
                <h3>One market, mastered deeply</h3>
                <p>
                  We teach forex exclusively — structure, order flow and risk — rather than spreading a shallow
                  curriculum across every asset class.
                </p>
              </div>
              <div className="card reveal">
                <div className="num">04</div>
                <h3>2,000+ students trained</h3>
                <p>
                  Through the &quot;Equity Global&quot; YouTube channel and live mentorship, across both self-paced
                  and cohort-based formats.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="tight soft">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">CORE SKILLS YOU&apos;LL LEARN</span>
              <h2>Everything taught is forex, taught properly.</h2>
            </div>
            <div className="markets-row reveal">
              <div className="market-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 12h4l3-8 4 16 3-8h4" />
                </svg>
                Candlestick &amp; Price Action
              </div>
              <div className="market-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 18l5-6 4 3 7-9" />
                  <path d="M20 6h-4v4" />
                </svg>
                Market Structure &amp; Order Flow
              </div>
              <div className="market-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" />
                </svg>
                Risk &amp; Psychology Management
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">HOW IT WORKS</span>
              <h2>From enquiry to independent forex trading.</h2>
            </div>
            <div className="process-grid">
              <div className="process-step reveal">
                <div className="step-num">01</div>
                <h3>Enquire &amp; assess level</h3>
                <p>Call or message us. We ask about your experience so you start on the right track.</p>
              </div>
              <div className="process-step reveal">
                <div className="step-num">02</div>
                <h3>Choose your track</h3>
                <p>Basic to Intermediate for fundamentals, or Advanced Institutional Strategies if you&apos;re ready for order flow.</p>
              </div>
              <div className="process-step reveal">
                <div className="step-num">03</div>
                <h3>Learn on a live desk</h3>
                <p>Practical sessions run on Star Trader, an SCA-regulated broker, so what you practise matches a live account.</p>
              </div>
              <div className="process-step reveal">
                <div className="step-num">04</div>
                <h3>Trade with support</h3>
                <p>Continue building consistency with ongoing mentorship after the course ends.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="tight">
          <div className="container">
            <blockquote className="pull-quote reveal">
              <p>
                &quot;Markets don&apos;t reward guessing. They reward traders who can read structure, manage risk,
                and stay disciplined when it&apos;s hard.&quot;
              </p>
              <cite>— Gopi Chandran, Founder, Equity Fin Academy</cite>
            </blockquote>
          </div>
        </section>

        <section className="tight soft">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">NEW TO FOREX?</span>
              <h2>Start learning before you enrol.</h2>
              <p>Free educational resources for anyone wondering how to start learning forex trading — no sign-up required.</p>
            </div>
            <div className="grid-4" style={{ gridTemplateColumns: "1fr 1fr" }}>
              <a href="/blog" className="card reveal">
                <div className="icon-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 006.5 22H20V2H6.5A2.5 2.5 0 004 4.5v15z" />
                  </svg>
                </div>
                <h3>Blog</h3>
                <p>Articles on candlesticks, market structure, risk and beginner mistakes.</p>
              </a>
              <a href="/faq" className="card reveal">
                <div className="icon-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M9.5 9a2.5 2.5 0 015 .5c0 1.5-2.2 1.8-2.4 3.3M12 17h.01" />
                  </svg>
                </div>
                <h3>FAQ</h3>
                <p>30+ answers to common questions about learning forex trading.</p>
              </a>
            </div>
          </div>
        </section>

        <section className="tight">
          <div className="container">
            <div className="teaser-row">
              <a href="/about" className="teaser reveal">
                <span className="eyebrow mt-0">THE FOUNDER</span>
                <h3>Meet Gopi Chandran</h3>
                <p>MBA in Finance and a full-time forex trader since 2016, now teaching the same market-structure approach he trades with.</p>
                <span className="arrow">Read the full profile →</span>
              </a>
              <a href="/courses" className="teaser reveal">
                <span className="eyebrow mt-0">CURRICULUM</span>
                <h3>Compare the two course tracks</h3>
                <p>From candlestick fundamentals to institutional order flow, bot strategy and lifetime WhatsApp support.</p>
                <span className="arrow">View courses →</span>
              </a>
              <a href="/contact" className="teaser reveal">
                <span className="eyebrow mt-0">VISIT OR CALL</span>
                <h3>Book a seat in Al Qusais</h3>
                <p>Speak with the team, ask about upcoming cohorts, and find out which track fits your experience.</p>
                <span className="arrow">Get in touch →</span>
              </a>
            </div>
          </div>
        </section>

        <section className="tight soft">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">COMMON QUESTIONS</span>
              <h2>Frequently asked questions</h2>
            </div>
            <div className="faq-list reveal">
              <details>
                <summary>
                  How do I start learning forex trading?<span className="plus">+</span>
                </summary>
                <p>
                  Start with the fundamentals — currency pairs, candlestick patterns and market structure — before
                  risking any capital. Our <a href="/blog">blog</a> walks through this step by step, and the Basic
                  to Intermediate course builds on it with live instruction.
                </p>
              </details>
              <details>
                <summary>
                  Is Equity Fin Academy good for beginners?<span className="plus">+</span>
                </summary>
                <p>
                  Yes. The Basic to Intermediate track is built for traders with no prior experience, starting from
                  forex fundamentals before moving into structure and strategy.
                </p>
              </details>
              <details>
                <summary>
                  Do you teach anything besides forex?<span className="plus">+</span>
                </summary>
                <p>
                  No. Equity Fin Academy teaches forex exclusively — one connected market-structure framework, taught
                  in depth, rather than a shallow overview spread across multiple asset classes.
                </p>
              </details>
            </div>
            <p style={{ marginTop: 24 }}>
              <a href="/faq" className="btn btn-outline">
                See All 30+ FAQs
              </a>
            </p>
          </div>
        </section>

        <section className="tight">
          <div className="container">
            <div className="topics-row reveal">
              <span className="topic-chip">Forex Trading Course Dubai</span>
              <span className="topic-chip">Forex Academy Al Qusais</span>
              <span className="topic-chip">How to Start Forex Trading</span>
              <span className="topic-chip">Forex Trading for Beginners</span>
              <span className="topic-chip">Smart Money Concepts</span>
              <span className="topic-chip">Market Structure Trading</span>
              <span className="topic-chip">Candlestick Pattern Course</span>
              <span className="topic-chip">Order Flow Analysis</span>
              <span className="topic-chip">SCA Regulated Broker Training</span>
              <span className="topic-chip">Institutional Trading Strategies</span>
              <span className="topic-chip">Risk Management for Traders</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
