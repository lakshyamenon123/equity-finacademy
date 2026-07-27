import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Forex Trading FAQ — 35+ Answers for Beginners | Equity Fin Academy Dubai",
  description:
    "Answers to 35+ common questions about learning forex trading: how to start, how long it takes, is it hard, forex basics explained, and everything about Equity Fin Academy's courses.",
  keywords:
    "forex trading FAQ, how do I start forex learning, is forex trading hard, how long does it take to learn forex, forex trading for beginners questions, is equity fin academy good for beginners",
  openGraph: {
    title: "Forex Trading FAQ — 35+ Answers for Beginners",
    description: "Answers to the most common questions about learning forex trading and studying at Equity Fin Academy.",
    type: "website",
  },
  alternates: { canonical: "https://www.equityfinacademy.com/faq" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/" },
    { "@type": "ListItem", position: 2, name: "FAQ", item: "/faq" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I start Forex learning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start with the vocabulary (currency pairs, pips, lots, leverage), then learn to read candlestick charts, then market structure, then risk management — in that order. Our Beginner's Guide walks through each step, and the Basic to Intermediate course builds on it with live instruction.",
      },
    },
    {
      "@type": "Question",
      name: "Is it hard to learn Forex trading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The core concepts aren't especially difficult to understand. What's genuinely hard is the discipline: managing risk consistently and staying calm when a trade moves against you. Most beginners underestimate the psychological side.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to learn Forex?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Understanding the basics can take a few weeks of focused study. Building consistent, disciplined execution typically takes months of deliberate practice. Anyone promising results in days isn't being realistic with you.",
      },
    },
    {
      "@type": "Question",
      name: "How do I start trading Forex by myself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Learn the fundamentals first, practice on a demo account, then trade small size on a live account through a regulated broker while keeping a trading journal. Structured instruction significantly shortens this process compared to trial and error alone.",
      },
    },
    {
      "@type": "Question",
      name: "Should I start learning Forex trading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you're genuinely interested in markets, comfortable with real risk of financial loss, and willing to treat it as a skill built over months, it's a reasonable thing to learn. If you want a fast or guaranteed way to make money, that's the wrong starting assumption.",
      },
    },
    {
      "@type": "Question",
      name: "How do beginners learn Forex trading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most successful beginners combine structured education (a course or guide that sequences topics correctly) with hands-on practice on a demo or small live account, and review their trades in a journal.",
      },
    },
    {
      "@type": "Question",
      name: "Is Equity Fin Academy good for beginners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Basic to Intermediate track is built specifically for traders with no prior experience, starting from forex fundamentals before moving into structure and strategy.",
      },
    },
    {
      "@type": "Question",
      name: "Are online Forex trading classes worth it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A structured course from a credible instructor can meaningfully shorten the learning curve by sequencing topics correctly and correcting mistakes early. Quality varies enormously, so check the instructor's real background and whether the curriculum is structured rather than a random pile of videos.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Equity Fin Academy unique?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An instructor with a background inside institutional trading desks, practical sessions on an SCA-regulated broker, a single-market forex focus taught in depth, and an honest approach with no guaranteed-profit promises.",
      },
    },
    {
      "@type": "Question",
      name: "What is forex trading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Forex trading is the buying and selling of one currency against another with the aim of profiting from changes in their relative value. It's the largest financial market in the world by trading volume.",
      },
    },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header active="faq" />

      <main>
        <section className="tight bg-glow" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span className="current">FAQ</span>
            </nav>
            <span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span>
            <h1 className="hero-display" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", maxWidth: "22ch" }}>
              Forex trading FAQ.
            </h1>
            <p style={{ maxWidth: "60ch", marginTop: 18 }}>
              35+ straight answers, organised by topic. Can&apos;t find yours? <Link href="/contact">Ask us directly</Link>.
            </p>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="faq-jumplinks reveal">
              <a href="#getting-started">Getting Started</a>
              <a href="#about-us">About Equity Fin Academy</a>
              <a href="#courses">Courses &amp; Enrolment</a>
              <a href="#basics">Forex Basics</a>
              <a href="#risk">Risk &amp; Safety</a>
            </div>

            <div className="faq-category" id="getting-started">
              <h2>Getting Started With Forex</h2>
              <div className="faq-list reveal">
                <details>
                  <summary>
                    How do I start Forex learning?<span className="plus">+</span>
                  </summary>
                  <p>
                    Start with the vocabulary — currency pairs, pips, lots, leverage — then learn to read candlestick
                    charts, then market structure, then risk management, in that order. Our <Link href="/blog">blog</Link>{" "}
                    covers each of these step by step, and the Basic to Intermediate course builds on it with live
                    instruction.
                  </p>
                </details>
                <details>
                  <summary>
                    Is it hard to learn Forex trading?<span className="plus">+</span>
                  </summary>
                  <p>
                    The core concepts — pairs, charts, structure — aren&apos;t especially difficult to understand.
                    What&apos;s genuinely hard is the discipline: managing risk consistently and staying calm when a
                    trade moves against you. Most beginners underestimate the psychological side and overestimate
                    the technical side.
                  </p>
                </details>
                <details>
                  <summary>
                    How long does it take to learn Forex?<span className="plus">+</span>
                  </summary>
                  <p>
                    Understanding the basics can take a few weeks of focused study. Building consistent, disciplined
                    execution typically takes months of deliberate practice — not days. A structured course
                    compresses the learning curve, but doesn&apos;t eliminate the practice time needed.
                  </p>
                </details>
                <details>
                  <summary>
                    How do I start trading Forex by myself?<span className="plus">+</span>
                  </summary>
                  <p>
                    Learn the fundamentals, practice on a demo account, then trade small size on a live account
                    through a regulated broker while keeping a trading journal. Self-teaching is possible but slower
                    and more error-prone than structured instruction.
                  </p>
                </details>
                <details>
                  <summary>
                    Should I start learning Forex trading?<span className="plus">+</span>
                  </summary>
                  <p>
                    If you&apos;re genuinely interested in markets, comfortable with real risk of financial loss, and
                    willing to treat it as a skill built over months, it&apos;s a reasonable thing to learn. If
                    you&apos;re looking for a fast or guaranteed way to make money, that&apos;s the wrong starting
                    assumption regardless of who&apos;s teaching it.
                  </p>
                </details>
                <details>
                  <summary>
                    How do beginners learn Forex trading?<span className="plus">+</span>
                  </summary>
                  <p>
                    Most successful beginners combine structured education — a course or guide that sequences topics
                    correctly — with hands-on practice and honest review of their own trades in a journal.
                  </p>
                </details>
                <details>
                  <summary>
                    What do I need to start learning Forex trading?<span className="plus">+</span>
                  </summary>
                  <p>
                    Just time and a willingness to learn the vocabulary and charts first. You don&apos;t need trading
                    capital to start learning — that only becomes relevant once you move to practice trading on a
                    demo or live account.
                  </p>
                </details>
                <details>
                  <summary>
                    Can I learn Forex trading for free?<span className="plus">+</span>
                  </summary>
                  <p>
                    Yes, to a point. Our free <Link href="/blog">blog</Link> can teach the fundamentals. Structured, live
                    instruction with feedback typically accelerates progress beyond what free content alone can
                    offer.
                  </p>
                </details>
                <details>
                  <summary>
                    What is the best way to learn Forex trading?<span className="plus">+</span>
                  </summary>
                  <p>
                    A sequenced approach: vocabulary, chart reading, market structure, risk management, then strategy
                    — combined with practice and review. The order matters more than the specific resource you use.
                  </p>
                </details>
                <details>
                  <summary>
                    Do I need a lot of money to start trading Forex?<span className="plus">+</span>
                  </summary>
                  <p>
                    No — many regulated brokers allow small account sizes, and learning itself requires no trading
                    capital at all. Whatever capital you eventually trade with should be money you can genuinely
                    afford to lose.
                  </p>
                </details>
              </div>
            </div>

            <div className="faq-category" id="about-us">
              <h2>About Equity Fin Academy</h2>
              <div className="faq-list reveal">
                <details>
                  <summary>
                    Is Equity Fin Academy good for beginners?<span className="plus">+</span>
                  </summary>
                  <p>
                    Yes. The Basic to Intermediate track is built specifically for traders with no prior experience,
                    starting from forex fundamentals before moving into structure and strategy.
                  </p>
                </details>
                <details>
                  <summary>
                    Are online Forex trading classes worth it?<span className="plus">+</span>
                  </summary>
                  <p>
                    A structured course from a credible instructor can meaningfully shorten the learning curve.
                    Quality varies enormously across providers — check the instructor&apos;s real background and
                    whether the curriculum is genuinely sequenced, not a random pile of videos.
                  </p>
                </details>
                <details>
                  <summary>
                    What makes Equity Fin Academy unique?<span className="plus">+</span>
                  </summary>
                  <p>
                    An instructor with a background inside institutional trading desks, practical sessions on an
                    SCA-regulated broker, a single-market forex focus taught in depth, and an honest approach with no
                    guaranteed-profit promises. See <Link href="/why-choose-us">Why Choose Us</Link> for the full
                    comparison.
                  </p>
                </details>
                <details>
                  <summary>
                    Who teaches at Equity Fin Academy?<span className="plus">+</span>
                  </summary>
                  <p>
                    Gopi Chandran, founder and lead instructor — MBA in Finance, full-time forex trader since 2016,
                    with a background inside institutional trading desks. Read his full profile on the{" "}
                    <Link href="/about">About Us</Link> page.
                  </p>
                </details>
                <details>
                  <summary>
                    Where is Equity Fin Academy located?<span className="plus">+</span>
                  </summary>
                  <p>
                    M Floor, Arzoo Building, Al Qusais, Dubai, United Arab Emirates. See the{" "}
                    <Link href="/contact">Contact page</Link> for the map and directions.
                  </p>
                </details>
              </div>
            </div>

            <div className="faq-category" id="courses">
              <h2>Courses &amp; Enrolment</h2>
              <div className="faq-list reveal">
                <details>
                  <summary>
                    What forex courses does Equity Fin Academy offer?<span className="plus">+</span>
                  </summary>
                  <p>
                    Two tracks: Basic to Intermediate (fundamentals, candlesticks, market structure) and Advanced
                    Institutional Strategies (order flow, market profile, SMC, risk psychology). See the full
                    curriculum on the <Link href="/courses">Courses</Link> page.
                  </p>
                </details>
                <details>
                  <summary>
                    Which course should I start with?<span className="plus">+</span>
                  </summary>
                  <p>
                    If you&apos;re new to trading, start with Basic to Intermediate. If you already understand
                    fundamentals and structure, Advanced Institutional Strategies goes straight into order flow and
                    institutional tools.
                  </p>
                </details>
                <details>
                  <summary>
                    Do I need trading experience to join?<span className="plus">+</span>
                  </summary>
                  <p>
                    No — the Basic to Intermediate course assumes no prior experience. Advanced Institutional
                    Strategies assumes you already understand forex fundamentals and basic market structure.
                  </p>
                </details>
                <details>
                  <summary>
                    What is included in the Advanced Institutional Strategies course?<span className="plus">+</span>
                  </summary>
                  <p>
                    Fundamental analysis, market structure, order flow analysis, institutional tools, market profile
                    analysis, volume with SMC, Fibonacci retracement, risk and psychology management, bot trading
                    concepts, and lifetime WhatsApp support. Full list on the <Link href="/courses">Courses</Link> page.
                  </p>
                </details>
                <details>
                  <summary>
                    Is there ongoing support after the course ends?<span className="plus">+</span>
                  </summary>
                  <p>
                    Advanced Institutional Strategies students get lifetime access to the instructor via WhatsApp for
                    questions after the course ends.
                  </p>
                </details>
                <details>
                  <summary>
                    How much does the course cost?<span className="plus">+</span>
                  </summary>
                  <p>
                    Fees vary by cohort, so we don&apos;t publish a number that could go stale. See what&apos;s
                    included in each track on our <Link href="/pricing">Pricing</Link> page, then call or message us for
                    current fees.
                  </p>
                </details>
              </div>
            </div>

            <div className="faq-category" id="basics">
              <h2>Forex Trading Basics</h2>
              <div className="faq-list reveal">
                <details>
                  <summary>
                    What is forex trading?<span className="plus">+</span>
                  </summary>
                  <p>
                    Forex trading is the buying and selling of one currency against another, aiming to profit from
                    changes in their relative value. It&apos;s the largest financial market in the world by trading
                    volume.
                  </p>
                </details>
                <details>
                  <summary>
                    What is a currency pair?<span className="plus">+</span>
                  </summary>
                  <p>
                    Two currencies quoted against each other, such as EUR/USD. The first is the &quot;base&quot;
                    currency; the second is the &quot;quote&quot; currency.
                  </p>
                </details>
                <details>
                  <summary>
                    What is a pip in Forex trading?<span className="plus">+</span>
                  </summary>
                  <p>
                    The smallest standard unit of price movement in a currency pair — typically the fourth decimal
                    place for most pairs.
                  </p>
                </details>
                <details>
                  <summary>
                    What is leverage in Forex trading?<span className="plus">+</span>
                  </summary>
                  <p>
                    Borrowed capital that lets a trader control a position larger than their account balance. It
                    magnifies both potential gains and potential losses, so it needs to be used carefully.
                  </p>
                </details>
                <details>
                  <summary>
                    What is a candlestick pattern?<span className="plus">+</span>
                  </summary>
                  <p>
                    A chart formation made up of one or more candlesticks (each showing open, high, low and close
                    price) used to read short-term price action and sentiment. See our{" "}
                    <Link href="/blog-candlestick-patterns">candlestick guide</Link> for more.
                  </p>
                </details>
                <details>
                  <summary>
                    What is market structure in trading?<span className="plus">+</span>
                  </summary>
                  <p>
                    The pattern formed by a market&apos;s swing highs and lows, used to judge whether price is
                    trending, ranging, or potentially reversing. Read our full explainer on{" "}
                    <Link href="/blog-market-structure">market structure</Link>.
                  </p>
                </details>
                <details>
                  <summary>
                    What are smart money concepts (SMC)?<span className="plus">+</span>
                  </summary>
                  <p>
                    A framework for analysing price based on liquidity, imbalance and order placement, aiming to read
                    where larger market participants may be positioned. See our full{" "}
                    <Link href="/blog-smart-money-concepts">SMC explainer</Link>.
                  </p>
                </details>
                <details>
                  <summary>
                    Can you make a living trading Forex?<span className="plus">+</span>
                  </summary>
                  <p>
                    Some experienced, disciplined traders do generate meaningful income from forex trading, but
                    it&apos;s not typical, and it&apos;s not guaranteed for anyone — most traders lose money,
                    especially early on. Treat any claim otherwise with scepticism, including from us.
                  </p>
                </details>
              </div>
            </div>

            <div className="faq-category" id="risk">
              <h2>Risk &amp; Safety</h2>
              <div className="faq-list reveal">
                <details>
                  <summary>
                    Is Forex trading risky?<span className="plus">+</span>
                  </summary>
                  <p>
                    Yes. Forex trading carries a significant risk of loss and is not suitable for every investor.
                    Leverage in particular can magnify losses quickly if risk isn&apos;t managed properly.
                  </p>
                </details>
                <details>
                  <summary>
                    Do I need a regulated broker to trade Forex?<span className="plus">+</span>
                  </summary>
                  <p>
                    You should only ever trade through a broker regulated by a recognised financial authority.
                    Regulation doesn&apos;t eliminate trading risk, but it provides a baseline of oversight and
                    client protection that unregulated platforms don&apos;t offer.
                  </p>
                </details>
                <details>
                  <summary>
                    Can I lose more money than I deposit in Forex trading?<span className="plus">+</span>
                  </summary>
                  <p>
                    Depending on your broker, account type and leverage used, this is possible in some circumstances.
                    Understand your broker&apos;s specific policies (such as negative balance protection) before
                    trading live.
                  </p>
                </details>
                <details>
                  <summary>
                    Does Equity Fin Academy guarantee profits?<span className="plus">+</span>
                  </summary>
                  <p>
                    No, and you should be sceptical of anyone who does. We teach process, structure and risk
                    management. Past educational outcomes and student results do not guarantee future performance.
                  </p>
                </details>
                <details>
                  <summary>
                    Is Forex trading gambling?<span className="plus">+</span>
                  </summary>
                  <p>
                    Trading and gambling both involve risking capital on an uncertain outcome, but disciplined
                    trading applies analysis, risk management and a repeatable process — closer to a
                    probability-based skill than pure chance. Trading without any of those, however, can function a
                    lot like gambling.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        <section className="tight soft">
          <div className="container">
            <div className="cta-banner reveal">
              <div>
                <h2>Still have a question?</h2>
                <p>Call, WhatsApp, or send a message — we typically respond the same day.</p>
              </div>
              <Link href="/contact" className="btn btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
