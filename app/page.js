import Header from "./components/Header";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import YouTubeSection from "./components/YouTubeSection";
import Link from "next/link";
import OpenChatLink from "./components/OpenChatLink";
import { pageMetadata } from "./lib/seo";
import FaqList from "./components/FaqList";
import { faqPageSchema, organizationSchema, personSchema } from "./lib/schema";
import { mentorFaq } from "./lib/mentorFaq";
import { homeFaq } from "./lib/homeFaq";
import { SITE } from "./lib/site";
import { VIDEOS } from "./lib/videos";

export const metadata = pageMetadata({
  title: "Forex Training Academy in Dubai, UAE | Equity Fin Academy",
  description:
    "Equity Fin Academy, forex training academy in Dubai, led by mentor Gopi Chandran. Private lessons, group classes, and live trading across the UAE. Open 24/7. Rated 5.0 from 30+ Google reviews.",
  keywords:
    "forex training academy Dubai, forex training academy UAE, forex trading courses in Dubai, forex training Dubai, trading classes in Dubai, forex education UAE",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <head>
        <link rel="canonical" href={`${SITE.url}/`} />
        <link rel="alternate" hrefLang="en-AE" href={`${SITE.url}/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE.url}/`} />
        <meta property="og:url" content={`${SITE.url}/`} />
      </head>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={personSchema()} />
      <JsonLd data={faqPageSchema(homeFaq)} />
      <Header active="home" />

      <main>
        <section className="hero hero-premium">
          <div className="container hero-layout">
            <div className="hero-copy">
              <span className="eyebrow">Dubai, UAE · Open 24/7</span>
              <h1 className="hero-display">Forex Training Academy in Dubai</h1>
              <p className="hero-sub">
                Equity Fin Academy, forex training academy in Dubai, led by mentor Gopi Chandran, is where students in Dubai and across the UAE take private one-to-one lessons, live trading, and group classes. Train in the room in Dubai or online from any emirate, on MetaTrader 5. More than 2,000 students have trained here. The academy is open 24/7 and rated 5.0 on Google from 30+ reviews, with 200+ YouTube reviews and comments on the Equity Global channels.{" "}
                <Link href="/gopi-chandran">Meet Gopi Chandran</Link>.
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
                <a href="https://wa.me/971559047030" className="btn btn-light" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
                <a href="tel:+971559047030" className="btn btn-ghost">
                  Call +971 55 904 7030
                </a>
                <OpenChatLink className="btn btn-ghost">Enquire</OpenChatLink>
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
              <span className="label">Market taught: forex</span>
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
                professional. Everything else is noise. The enrolment checklist, with both syllabuses written out, is on{" "}
                <Link href="/why-choose-us">Why Choose Us</Link>.
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
                <h3>Structure, taught on the chart you trade</h3>
                <p>
                  The syllabus is market structure, taught in depth. On MetaTrader 5 that work covers forex, and gold, indices, and stocks alongside it.{" "}
                  <Link href="/stock-market-course-dubai">Stock market course in Dubai</Link>.
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
                <p>Articles on candlesticks, market structure, UAE session times, and risk.</p>
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
              <Link href="/gopi-chandran" className="teaser reveal">
                <span className="eyebrow mt-0">THE MENTOR</span>
                <h3>Meet Gopi Chandran</h3>
                <p>Founder and lead forex mentor of Equity Fin Academy in Dubai. Private lessons, group classes, and live trading.</p>
                <span className="arrow">Read the mentor profile →</span>
              </Link>
              <Link href="/courses" className="teaser reveal">
                <span className="eyebrow mt-0">CURRICULUM</span>
                <h3>Compare the two course tracks</h3>
                <p>From candlestick fundamentals to the advanced track, including bot strategy and lifetime WhatsApp support.</p>
                <span className="arrow">View courses →</span>
              </Link>
              <OpenChatLink className="teaser reveal">
                <span className="eyebrow mt-0">VISIT OR CALL</span>
                <h3>Book a seat in Dubai</h3>
                <p>Speak with the team, ask about upcoming cohorts, and find out which track fits your experience.</p>
                <span className="arrow">Get in touch →</span>
              </OpenChatLink>
            </div>
          </div>
        </section>

        <section className="tight">
          <div className="container prose-block">
            <span className="eyebrow">HOW CLASSES RUN</span>
            <h2>Group classes, private lessons, and live trading sessions.</h2>
            <p>
              Training is taught in person in Dubai, UAE, and online across the UAE. You can join a group class on a shared syllabus, or book a private one-to-one lesson.
              Both include live trading sessions and training. The academy is open 24/7, including weekends. It is rated 5.0 on Google from
              30+ reviews, and the Equity Global channel has 200+ YouTube reviews and comments. Read the{" "}
              <Link href="/forex-training-academy-dubai">forex training academy Dubai</Link> page for the in-person offer, or the{" "}
              <Link href="/forex-training-academy-uae">forex training academy UAE</Link> page if you will study from another emirate.
              Formats are spelled out on <Link href="/private-group-forex-training-dubai">private one-to-one and group classes</Link>, coaching is on{" "}
              <Link href="/forex-mentorship-dubai">forex mentorship in Dubai</Link>, and the
              tracks are on <Link href="/courses">Courses</Link>. Fees are explained, without a printed price, on{" "}
              <Link href="/forex-course-fees-dubai">forex course fees in Dubai</Link>. Students in Abu Dhabi should read the{" "}
              <Link href="/forex-course-abu-dhabi">Abu Dhabi course page</Link> before they decide between the drive and an online seat.
              Google reviews are linked from <Link href="/success-stories">Reviews</Link>. To ask about a seat, use the{" "}
              <Link href="/contact">contact page</Link>. The city overview is the <Link href="/forex-academy-in-dubai">forex academy in Dubai</Link> page. The <Link href="/blog">blog</Link> includes{" "}
              <Link href="/blog-forex-classes-near-me-dubai">forex classes near me in Dubai</Link>,{" "}
              <Link href="/blog-forex-education-uae">forex education in the UAE</Link>,{" "}
              <Link href="/blog-currency-pairs-uae">currency pairs</Link>,{" "}
              <Link href="/blog-forex-economic-calendar-dubai">the economic calendar in Dubai</Link>,{" "}
              <Link href="/blog-smart-money-concepts">smart money concepts</Link>,{" "}
              <Link href="/blog-forex-classes-working-professionals-dubai">classes for working professionals</Link>,{" "}
              <Link href="/blog-demo-vs-live-mt5-uae">demo versus live accounts on MT5</Link>,{" "}
              <Link href="/blog-personal-forex-coaching-uae">what a personal coaching plan looks like</Link>, and{" "}
              <Link href="/blog-forex-trading-plan-uae">how to write a trading plan and journal</Link>. Newer notes cover{" "}
              <Link href="/blog-gold-xauusd-course-dubai">gold (XAUUSD) in a Dubai class</Link> and{" "}
              <Link href="/blog-group-forex-classes-friends-dubai">group classes for friends and colleagues</Link>.
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
            <FaqList items={mentorFaq} />
            <div className="faq-list reveal">
              <details>
                <summary>
                  How do I start learning forex trading?<span className="plus">+</span>
                </summary>
                <p>
                  Start with the fundamentals — <Link href="/blog-currency-pairs-uae">currency pairs</Link>, candlestick patterns and market structure — before
                  trading live. Our <Link href="/blog">blog</Link> walks through this step by step, and the Basic
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
                  The published syllabus is the two forex tracks, from candlesticks through smart money concepts.
                  Practical sessions use MetaTrader 5, so the same chart work also covers gold, indices, and stocks the
                  broker lists, alongside forex. The{" "}
                  <Link href="/stock-market-course-dubai">stock market course in Dubai</Link> explains that. Say which
                  symbol you want marked when you enquire.
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
              <Link href="/forex-training-academy-dubai" className="topic-chip">forex academy Dubai</Link>
              <Link href="/courses" className="topic-chip">forex trading courses in Dubai</Link>
              <Link href="/forex-training-academy-uae" className="topic-chip">forex course UAE</Link>
              <Link href="/forex-academy-in-dubai" className="topic-chip">Forex Academy in Dubai</Link>
              <Link href="/best-forex-course-dubai" className="topic-chip">Best Forex Course in Dubai</Link>
              <Link href="/private-group-forex-training-dubai" className="topic-chip">Private and Group Classes</Link>
              <Link href="/blog-forex-course-dubai-beginners" className="topic-chip">Beginner Course: What to Expect</Link>
              <Link href="/blog-private-vs-group-forex-classes-dubai" className="topic-chip">Private vs Group Classes</Link>
              <Link href="/blog-start-forex-trading-uae-mt5" className="topic-chip">Start Forex with MT5</Link>
              <Link href="/blog-currency-pairs-uae" className="topic-chip">Currency Pairs</Link>
              <Link href="/blog-forex-economic-calendar-dubai" className="topic-chip">Economic Calendar in Dubai</Link>
              <Link href="/blog-smart-money-concepts" className="topic-chip">Smart Money Concepts</Link>
              <Link href="/blog-market-structure" className="topic-chip">Market Structure</Link>
              <Link href="/blog-candlestick-patterns" className="topic-chip">Candlestick Patterns</Link>
              <Link href="/blog-risk-management" className="topic-chip">Risk Management</Link>
              <Link href="/blog-forex-trading-courses-dubai" className="topic-chip">How to read a course syllabus</Link>
              <Link href="/blog-one-to-one-forex-classes-dubai" className="topic-chip">Prepare for a one-to-one class</Link>
              <Link href="/stock-market-course-dubai" className="topic-chip">Stock Market Course Dubai</Link>
              <Link href="/forex-course-fees-dubai" className="topic-chip">Forex Course Fees Dubai</Link>
              <Link href="/forex-mentorship-dubai" className="topic-chip">Forex Mentorship Dubai</Link>
              <Link href="/smc-ict-trading-course-dubai" className="topic-chip">SMC and ICT Course</Link>
              <Link href="/weekend-forex-classes-dubai" className="topic-chip">Weekend Forex Classes</Link>
              <Link href="/blog" className="topic-chip">Forex class notes</Link>
              <Link href="/forex-course-abu-dhabi" className="topic-chip">Forex course for Abu Dhabi</Link>
              <Link href="/success-stories" className="topic-chip">Google reviews</Link>
              <Link href="/gopi-chandran" className="topic-chip">Gopi Chandran</Link>
              <Link href="/contact" className="topic-chip">Book a class in Dubai</Link>
              <Link href="/blog-gold-xauusd-course-dubai" className="topic-chip">Gold (XAUUSD) course</Link>
              <Link href="/blog-group-forex-classes-friends-dubai" className="topic-chip">Group classes for friends</Link>
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
                <a href="https://wa.me/971559047030" className="btn btn-light" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
                <a href="tel:+971559047030" className="btn btn-ghost">
                  Call
                </a>
                <OpenChatLink className="btn btn-ghost">Enquire</OpenChatLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
