import Header from "./components/Header";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import YouTubeSection from "./components/YouTubeSection";
import Link from "next/link";
import { pageMetadata } from "./lib/seo";
import { faqPageSchema, organizationSchema } from "./lib/schema";
import { homeFaq } from "./lib/homeFaq";
import { SITE } from "./lib/site";
import { VIDEOS } from "./lib/videos";

export const metadata = pageMetadata({
  title: "Equity Fin Academy — Forex Trading Course & Academy in Dubai",
  description:
    "Learn forex in Dubai, UAE, or online across the UAE. Private one-to-one lessons and group classes with live trading sessions. Open 24/7. Rated 5.0 on Google from 30+ reviews. 2,000+ students trained.",
  keywords:
    "forex trading course Dubai, learn forex trading UAE, how to start forex trading, forex trading for beginners, smart money concepts course, market structure trading, candlestick pattern course, institutional trading strategies, SCA regulated broker training, technical analysis course Dubai, risk management trading course, forex mentor Dubai, best forex course in Dubai, group forex training classes Dubai, private forex training Dubai, one to one forex classes Dubai, forex classes near me Dubai",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={faqPageSchema(homeFaq)} />
      <Header active="home" />

      <main>
        <section className="hero hero-premium">
          <div className="container hero-layout">
            <div className="hero-copy">
              <span className="eyebrow">Dubai, UAE · Open 24/7</span>
              <h1 className="hero-display">Learn Forex the Right Way with the UAE&apos;s 5-Star Rated Trading Academy</h1>
              <p className="hero-sub">
                Private one-to-one lessons and group classes with live trading sessions, trusted by 2,000+ students.
                Learn in Dubai or online across the UAE.
              </p>
              <div className="trust-row">
                <a className="trust-badge" href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">
                  <strong>5.0</strong> on Google from 30+ reviews
                </a>
                <span className="trust-badge">
                  <strong>2,000+</strong> students trained
                </span>
              </div>
              <div className="cta-row">
                <a href="https://wa.me/971567188995" className="btn btn-light" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
                <a href="tel:+971567188995" className="btn btn-ghost">
                  Call +971 56 718 8995
                </a>
                <Link href="/contact" className="btn btn-ghost">
                  Enquire
                </Link>
              </div>
            </div>

            <aside className="hero-panel" aria-label="Training formats">
              <p className="hero-panel-kicker">Dubai, UAE</p>
              <ul className="hero-panel-list">
                <li>
                  <span>Private one-to-one</span>
                  <strong>Your chart, your pace</strong>
                </li>
                <li>
                  <span>Group cohorts</span>
                  <strong>Two forex tracks</strong>
                </li>
                <li>
                  <span>Live trading sessions</span>
                  <strong>On an SCA-regulated broker</strong>
                </li>
              </ul>
              <p className="hero-panel-note">
                <span className="big" data-counter="2000" data-suffix="+">
                  2000+
                </span>
                students trained through Equity Global and live mentorship.
              </p>
            </aside>
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

        <div className="stats-strip stats-premium">
          <div className="container stats-grid">
            <div className="stat-block reveal">
              <span className="value" data-counter="2000" data-suffix="+">2000+</span>
              <span className="label">Students Trained</span>
            </div>
            <div className="stat-block reveal">
              <span className="value" data-counter="200" data-suffix="+">200+</span>
              <span className="label">YouTube reviews</span>
            </div>
            <div className="stat-block reveal">
              <span className="value" data-counter="2" data-suffix="">2</span>
              <span className="label">Course Tracks</span>
            </div>
            <div className="stat-block reveal">
              <span className="value" data-counter="1" data-suffix="">1</span>
              <span className="label">Market. Fully Mastered.</span>
            </div>
          </div>
        </div>

        <section className="tight">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">HOW YOU CAN TRAIN</span>
              <h2>Private lessons, group classes, and live trading sessions.</h2>
              <p>Choose a format, then ask for the current fee. Prices are quoted when you enquire.</p>
            </div>
            <div className="format-grid">
              <article className="format-card reveal">
                <span className="num">01</span>
                <h3>Private one-to-one</h3>
                <p>A booked lesson with the instructor: your questions, your chart, and live trading sessions.</p>
                <Link href="/private-group-forex-training-dubai">Private training in Dubai →</Link>
              </article>
              <article className="format-card reveal">
                <span className="num">02</span>
                <h3>Group cohorts</h3>
                <p>Basic to Intermediate, or Advanced Institutional Strategies, taught live with a shared syllabus.</p>
                <Link href="/courses">View the two tracks →</Link>
              </article>
              <article className="format-card reveal">
                <span className="num">03</span>
                <h3>Live trading sessions</h3>
                <p>Practical sessions on Star Trader, an SCA-regulated broker, in both private and group classes.</p>
                <Link href="/courses#live-trading">How practical sessions work →</Link>
              </article>
            </div>
          </div>
        </section>

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
                  We teach forex exclusively — market structure and risk — rather than spreading a shallow
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
                Market Structure
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
                <p>Basic to Intermediate for fundamentals, or Advanced Institutional Strategies if you already know the basics.</p>
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
              <Link href="/blog" className="card reveal">
                <div className="icon-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 006.5 22H20V2H6.5A2.5 2.5 0 004 4.5v15z" />
                  </svg>
                </div>
                <h3>Blog</h3>
                <p>Articles on candlesticks, market structure, risk and beginner mistakes.</p>
              </Link>
              <Link href="/faq" className="card reveal">
                <div className="icon-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M9.5 9a2.5 2.5 0 015 .5c0 1.5-2.2 1.8-2.4 3.3M12 17h.01" />
                  </svg>
                </div>
                <h3>FAQ</h3>
                <p>30+ answers to common questions about learning forex trading.</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="tight">
          <div className="container">
            <div className="teaser-row">
              <Link href="/about" className="teaser reveal">
                <span className="eyebrow mt-0">THE FOUNDER</span>
                <h3>Meet Gopi Chandran</h3>
                <p>Founder of Equity Fin Academy and Equity Global, teaching private lessons, group classes, and live trading sessions.</p>
                <span className="arrow">Read the full profile →</span>
              </Link>
              <Link href="/courses" className="teaser reveal">
                <span className="eyebrow mt-0">CURRICULUM</span>
                <h3>Compare the two course tracks</h3>
                <p>From candlestick fundamentals to the advanced track, including bot strategy and lifetime WhatsApp support.</p>
                <span className="arrow">View courses →</span>
              </Link>
              <Link href="/contact" className="teaser reveal">
                <span className="eyebrow mt-0">VISIT OR CALL</span>
                <h3>Book a seat in Dubai</h3>
                <p>Speak with the team, ask about upcoming cohorts, and find out which track fits your experience.</p>
                <span className="arrow">Get in touch →</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="tight">
          <div className="container prose-block">
            <span className="eyebrow">HOW CLASSES RUN</span>
            <h2>Group classes, private lessons, and live trading sessions.</h2>
            <p>
              Training is taught in person in Dubai, UAE, and online across the UAE. You can join a group class on a shared syllabus, or book a private one-to-one lesson.
              Both include live trading sessions and training. The academy is open 24/7. It is rated 5.0 on Google from
              30+ reviews, and the Equity Global channel has 200+ YouTube reviews and comments. Formats are spelled out
              on <Link href="/private-group-forex-training-dubai">private one-to-one and group classes</Link>, and the
              tracks are on <Link href="/courses">Courses</Link>.
            </p>
          </div>
        </section>

        <YouTubeSection videos={[VIDEOS.howToStart, VIDEOS.whatIsForex, VIDEOS.metatrader]} />

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
                  risking any capital. Our <Link href="/blog">blog</Link> walks through this step by step, and the Basic
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
              <Link href="/faq" className="btn btn-outline">
                See All 30+ FAQs
              </Link>
            </p>
          </div>
        </section>

        <section className="tight">
          <div className="container">
            <div className="topics-row reveal">
              <Link href="/forex-academy-in-dubai" className="topic-chip">Forex Academy in Dubai</Link>
              <Link href="/best-forex-course-dubai" className="topic-chip">Best Forex Course in Dubai</Link>
              <Link href="/private-group-forex-training-dubai" className="topic-chip">Private and Group Classes</Link>
              <Link href="/blog-forex-course-dubai-beginners" className="topic-chip">Beginner Course: What to Expect</Link>
              <span className="topic-chip">Forex Trading for Beginners</span>
              <span className="topic-chip">Smart Money Concepts</span>
              <span className="topic-chip">Market Structure Trading</span>
              <span className="topic-chip">Candlestick Pattern Course</span>
              <span className="topic-chip">SCA Regulated Broker Training</span>
              <span className="topic-chip">Institutional Trading Strategies</span>
              <span className="topic-chip">Risk Management for Traders</span>
            </div>
          </div>
        </section>

        <section className="tight">
          <div className="container">
            <div className="cta-banner reveal">
              <div>
                <h2>Ask about the next class.</h2>
                <p>
                  The academy is open 24/7 in Dubai, UAE. Call, WhatsApp, or send an enquiry. The fee for a group class
                  or a private lesson is quoted when you ask.
                </p>
              </div>
              <div className="cta-row">
                <a href="https://wa.me/971567188995" className="btn btn-light" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
                <a href="tel:+971567188995" className="btn btn-ghost">
                  Call
                </a>
                <Link href="/contact" className="btn btn-ghost">
                  Enquire
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
