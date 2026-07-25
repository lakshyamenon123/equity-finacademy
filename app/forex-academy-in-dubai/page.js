import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Forex Academy in Dubai — Forex Classes for Beginners | Equity Fin Academy",
  description:
    "Searching for a forex academy in Dubai? Equity Fin Academy offers forex trading classes for beginners and advanced traders in Al Qusais — structured courses, an SCA-regulated broker, and an instructor with institutional trading experience. Learn forex in Dubai, taught properly.",
  keywords:
    "best forex academy in dubai, forex academy in dubai, forex trading in dubai, forex classes in dubai, forex for beginners, learn forex, forex course dubai, forex training dubai, forex school dubai",
  openGraph: {
    title: "Forex Academy in Dubai — Forex Classes for Beginners | Equity Fin Academy",
    description: "Forex trading classes in Dubai for beginners and advanced traders — structured courses, a regulated broker, and an instructor with institutional experience.",
    type: "website",
  },
  alternates: { canonical: "https://www.equityfinacademy.com/forex-academy-in-dubai" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/" },
    { "@type": "ListItem", position: 2, name: "Forex Academy in Dubai", item: "/forex-academy-in-dubai" },
  ],
};

const pairs = ["EUR/USD", "GBP/USD", "XAU/USD", "USD/JPY", "AUD/USD", "USD/CHF", "USD/CAD", "NZD/USD"];

function Ticker() {
  const items = [...pairs, ...pairs];
  return (
    <div className="ticker-wrap" aria-label="Forex pairs referenced in the curriculum — illustrative, not live prices">
      <div className="ticker-track">
        {items.map((pair, i) => (
          <span className={`ticker-item ${i % 2 === 0 ? "up" : "down"}`} aria-hidden={i >= pairs.length ? "true" : undefined} key={`${pair}-${i}`}>
            <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d={i % 2 === 0 ? "M4 16l6-6 4 4 6-8" : "M4 8l6 6 4-4 6 8"} />
            </svg>
            {pair}
          </span>
        ))}
      </div>
    </div>
  );
}

const whyDubai = [
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </>
    ),
    title: "A timezone that overlaps two major sessions",
    body: "Dubai's GMT+4 timezone sits within reach of both the London and Asian trading sessions, useful for observing how forex liquidity shifts through the day.",
  },
  {
    icon: <path d="M12 2l8 4v6c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-4z" />,
    title: "Access to SCA-regulated brokers",
    body: "The UAE's Securities and Commodities Authority regulates brokers operating locally, giving Dubai-based traders access to properly overseen platforms for practice trading.",
  },
  {
    icon: <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />,
    title: "A large, active trading community",
    body: "Dubai's international, finance-heavy population means forex isn't a niche interest here — there's a real community of traders at every level to learn alongside.",
  },
  {
    icon: <path d="M4 21V10l8-6 8 6v11M9 21v-6h6v6" />,
    title: "An in-person option, not just a screen",
    body: "Most forex education is purely online. Equity Fin Academy runs live, in-person classes in Al Qusais — direct feedback, real accountability, no muted webinar chat.",
  },
];

export default function ForexAcademyDubaiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header active="forex-dubai" />

      <main>
        <section className="hero bg-glow">
          <div className="container">
            <div className="hero-top">
              <div className="hero-copy">
                <span className="eyebrow">AL QUSAIS · DUBAI · FOREX ACADEMY</span>
                <h1 className="hero-display">
                  Learn{" "}
                  <span className="inline-pill">
                    <span className="dot-live"></span>forex
                  </span>{" "}
                  in Dubai, from complete beginner onward.
                </h1>
                <p className="hero-sub" style={{ marginTop: 22 }}>
                  Equity Fin Academy is a forex academy in Al Qusais, Dubai, running structured forex classes for
                  beginners and advanced traders alike. If you&apos;re comparing forex training in Dubai, here&apos;s
                  exactly what we teach, who teaches it, and how it works.
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
                    <linearGradient id="ribbonGrad2" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#0B5C38" />
                      <stop offset="45%" stopColor="#0E7C4A" />
                      <stop offset="100%" stopColor="#BDEBD1" />
                    </linearGradient>
                    <linearGradient id="ribbonHighlight2" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <ellipse cx="130" cy="196" rx="85" ry="12" fill="#0A3D26" opacity="0.16" style={{ filter: "blur(8px)" }} />
                  <g className="ribbon-path">
                    <path
                      d="M28 150 C 28 92, 92 92, 100 132 C 108 172, 168 172, 178 112 C 186 66, 228 56, 236 30"
                      fill="none"
                      stroke="url(#ribbonGrad2)"
                      strokeWidth="24"
                      strokeLinecap="round"
                    />
                    <path
                      d="M28 150 C 28 92, 92 92, 100 132 C 108 172, 168 172, 178 112 C 186 66, 228 56, 236 30"
                      fill="none"
                      stroke="url(#ribbonHighlight2)"
                      strokeWidth="7"
                      strokeLinecap="round"
                      transform="translate(-4,-6)"
                    />
                  </g>
                </svg>
                <div className="stat-dial">
                  <span className="big" data-counter="2000" data-suffix="+">0+</span>
                  <span className="cap">Students Trained</span>
                </div>
              </div>
            </div>
          </div>

          <div className="container hero-stats-wrap">
            <div className="hero-stats-row">
              <div className="stat-card-light reveal">
                <div className="head"><span>Location</span><span>(01)</span></div>
                <div className="value">Al Qusais, Dubai</div>
              </div>
              <div className="stat-card-light reveal">
                <div className="head"><span>Format</span><span>(02)</span></div>
                <div className="value">Live, In-Person Classes</div>
              </div>
              <div className="stat-card-light accent reveal">
                <div className="head"><span>Broker Access</span><span>(03)</span></div>
                <div className="value">SCA-Regulated</div>
              </div>
            </div>
          </div>
        </section>

        <Ticker />

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
              <span className="label">Location: Al Qusais, Dubai</span>
            </div>
          </div>
        </div>

        <section>
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">WHY LEARN FOREX IN DUBAI</span>
              <h2>Dubai is a genuinely good place to learn forex trading.</h2>
              <p>Not just because it&apos;s where we happen to be based — a few practical reasons this location actually helps.</p>
            </div>
            <div className="grid-4">
              {whyDubai.map((d) => (
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
              <span className="eyebrow">CLASSES FOR EVERY LEVEL</span>
              <h2>Forex classes in Dubai, for beginners through advanced.</h2>
            </div>
            <div className="process-grid">
              <div className="process-step reveal">
                <div className="step-num">01</div>
                <h3>New to forex?</h3>
                <p>Start with Basic to Intermediate — forex fundamentals, candlesticks and market structure, built for complete beginners.</p>
              </div>
              <div className="process-step reveal">
                <div className="step-num">02</div>
                <h3>Already trading?</h3>
                <p>Advanced Institutional Strategies goes straight into order flow, market profile and institutional tools.</p>
              </div>
              <div className="process-step reveal">
                <div className="step-num">03</div>
                <h3>Not sure which?</h3>
                <p>Call us — we&apos;ll ask a few questions about your experience and point you to the right track.</p>
              </div>
            </div>
            <p className="text-center" style={{ marginTop: 28 }}>
              <a href="/courses" className="btn btn-primary">
                Compare Both Course Tracks
              </a>
            </p>
          </div>
        </section>

        <section className="tight">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">WHAT YOU&apos;LL LEARN</span>
              <h2>Forex for beginners, taught properly from day one.</h2>
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

        <section className="tight soft">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">CHOOSING AN ACADEMY</span>
              <h2>Looking for the best forex academy in Dubai?</h2>
              <p style={{ maxWidth: "70ch" }}>
                That&apos;s a personal fit question more than a factual one — but here&apos;s what we&apos;d suggest
                checking for any forex academy in Dubai, including us: a verifiable instructor background, access to
                a regulated broker for practice, a structured (not random) curriculum, and no guaranteed-profit
                promises. We built Equity Fin Academy around exactly those four things.
              </p>
            </div>
            <p>
              <a href="/why-choose-us" className="btn btn-outline">
                See Our Full Why Choose Us Comparison
              </a>
            </p>
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
            <div className="teaser-row">
              <a href="/blog" className="teaser reveal">
                <span className="eyebrow mt-0">NEW TO FOREX?</span>
                <h3>Read the blog</h3>
                <p>Key terms, candlestick reading and market structure, explained in plain language.</p>
                <span className="arrow">Start learning →</span>
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

        <section className="tight">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">QUICK QUESTIONS</span>
              <h2>Forex in Dubai — frequently asked</h2>
            </div>
            <div className="faq-list reveal">
              <details>
                <summary>
                  Is there a good forex academy in Dubai for complete beginners?<span className="plus">+</span>
                </summary>
                <p>Yes — look for one with a structured (not random) curriculum and an instructor with a verifiable background. Our Basic to Intermediate course is built specifically for traders with no prior experience.</p>
              </details>
              <details>
                <summary>
                  Can I learn forex trading in Dubai in person, not just online?<span className="plus">+</span>
                </summary>
                <p>Yes. Equity Fin Academy runs live, in-person classes at M Floor, Arzoo Building, Al Qusais, Dubai — most forex education online-only, so this is a genuine point of difference.</p>
              </details>
              <details>
                <summary>
                  Do I need a UAE-regulated broker to trade forex in Dubai?<span className="plus">+</span>
                </summary>
                <p>You should always trade through a broker regulated by a recognised financial authority. Our practical sessions run through Star Trader, regulated by the UAE Securities and Commodities Authority (SCA).</p>
              </details>
              <details>
                <summary>
                  What&apos;s the best way to learn forex as a complete beginner?<span className="plus">+</span>
                </summary>
                <p>
                  Learn the vocabulary and chart reading first, then market structure, then risk management — in that
                  order. See our <a href="/blog">blog</a> for the full walkthrough.
                </p>
              </details>
            </div>
            <p style={{ marginTop: 24 }}>
              <a href="/faq" className="btn btn-outline">
                See All 35+ FAQs
              </a>
            </p>
          </div>
        </section>

        <section className="tight soft">
          <div className="container">
            <div className="topics-row reveal">
              <span className="topic-chip">Best Forex Academy in Dubai</span>
              <span className="topic-chip">Forex Academy in Dubai</span>
              <span className="topic-chip">Forex Trading in Dubai</span>
              <span className="topic-chip">Forex Classes in Dubai</span>
              <span className="topic-chip">Forex for Beginners</span>
              <span className="topic-chip">Learn Forex</span>
            </div>
          </div>
        </section>

        <section className="tight">
          <div className="container">
            <div className="cta-banner reveal">
              <div>
                <h2>Ready to start learning forex in Dubai?</h2>
                <p>Call, WhatsApp, or send an enquiry — we typically respond the same day.</p>
              </div>
              <div className="cta-row">
                <a href="tel:+971567188995" className="btn btn-primary">
                  Call +971 56 718 8995
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
