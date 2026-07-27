import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Forex Trading Courses Dubai — Basic to Advanced Institutional Strategies | Equity Fin Academy",
  description:
    "Two structured forex trading course tracks in Al Qusais, Dubai: Basic to Intermediate forex fundamentals, and Advanced Institutional Strategies covering order flow, SMC, market profile and risk management.",
  keywords:
    "forex course Dubai, learn forex trading UAE, forex trading classes Dubai, smart money concepts course, order flow analysis course, market profile trading, Fibonacci retracement course, bot trading strategies forex, risk management course Dubai, institutional forex strategies course, candlestick pattern course Dubai, best forex course for beginners",
  openGraph: {
    title: "Forex Trading Courses Dubai — Basic to Advanced Institutional Strategies",
    description: "Basic to Intermediate and Advanced Institutional Strategies forex courses in Al Qusais, Dubai, with practical sessions on an SCA-regulated broker.",
    type: "website",
  },
  alternates: { canonical: "https://www.equityfinacademy.com/courses" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/" },
    { "@type": "ListItem", position: 2, name: "Forex Courses", item: "/courses" },
  ],
};

const courseSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Basic to Intermediate Forex Course",
    description: "Forex fundamentals, candlestick patterns, market structure and smart money concepts for traders starting from scratch.",
    provider: { "@type": "EducationalOrganization", name: "Equity Fin Academy", sameAs: "/" },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "In Person",
      location: { "@type": "Place", name: "Equity Fin Academy", address: "M Floor, Arzoo Building, Al Qusais, Dubai, UAE" },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Advanced Institutional Strategies Forex Course",
    description: "Order flow analysis, market profile, volume with SMC, Fibonacci retracement and risk psychology management for experienced forex traders.",
    provider: { "@type": "EducationalOrganization", name: "Equity Fin Academy", sameAs: "/" },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "In Person",
      location: { "@type": "Place", name: "Equity Fin Academy", address: "M Floor, Arzoo Building, Al Qusais, Dubai, UAE" },
    },
  },
];

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 13l4 4L19 7" />
  </svg>
);

const track1 = [
  "Basics of Forex",
  "Candlestick Patterns",
  "HA Pattern Strategy",
  "Market Structure",
  "Orders Placed by Smart Money",
  "Imbalance in the Market",
  "Best Indicators in the Market",
  "G.C. Strategy for the Market",
];

const track2 = [
  "Basics of Forex",
  "Fundamental Analysis",
  "Market Structure",
  "Order Flow Analysis",
  "Tools Used by Institutions",
  "Market Profile Analysis",
  "Volume Method with SMC",
  "Fibonacci Retracement Tool",
  "Risk and Psychology Management",
  "Bot Trading Strategies and Concepts",
  "Lifetime Support via WhatsApp",
];

export default function CoursesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <Header active="courses" />

      <main>
        <section className="tight bg-glow" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span className="current">Forex Courses</span>
            </nav>
            <span className="eyebrow">CURRICULUM</span>
            <h1 className="hero-display" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", maxWidth: "20ch" }}>
              Two tracks. One market. Forex, taught in depth.
            </h1>
            <p style={{ maxWidth: "60ch", marginTop: 18 }}>
              Start at whichever level matches your experience. Both tracks are taught live, with practical sessions
              run through a regulated broker. New to trading? Read our <Link href="/blog">forex education blog</Link>{" "}
              first.
            </p>
          </div>
        </section>

        <section className="tight">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">HOW ENROLMENT WORKS</span>
              <h2>Three steps to your first class</h2>
            </div>
            <div className="process-grid">
              <div className="process-step reveal">
                <div className="step-num">01</div>
                <h3>Enquire</h3>
                <p>Call or message us and tell us your current trading experience.</p>
              </div>
              <div className="process-step reveal">
                <div className="step-num">02</div>
                <h3>Pick a track</h3>
                <p>Basic to Intermediate, or Advanced Institutional Strategies.</p>
              </div>
              <div className="process-step reveal">
                <div className="step-num">03</div>
                <h3>Attend live sessions</h3>
                <p>Practical classes on Star Trader, an SCA-regulated broker.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="course-grid">
              <div className="course-card reveal">
                <span className="level">TRACK 01</span>
                <h3>Basic to Intermediate Course</h3>
                <p className="desc">
                  For traders starting from the fundamentals — how to read a chart, understand structure, and
                  recognise where smart money is positioned.
                </p>
                <ul className="course-list">
                  {track1.map((item) => (
                    <li key={item}>
                      <Check />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="cta-row">
                  <Link href="/contact?course=basic-intermediate" className="btn btn-outline btn-block">
                    Enquire About This Course
                  </Link>
                </div>
              </div>

              <div className="course-card featured reveal">
                <span className="level">TRACK 02</span>
                <h3>Advanced Institutional Strategies</h3>
                <p className="desc">
                  For traders who already understand the basics and want the frameworks used on institutional desks
                  — order flow, market profile and risk discipline.
                </p>
                <ul className="course-list">
                  {track2.map((item) => (
                    <li key={item}>
                      <Check />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="cta-row">
                  <Link href="/contact?course=advanced-institutional" className="btn btn-primary btn-block">
                    Enquire About This Course
                  </Link>
                </div>
              </div>
            </div>
            <p className="text-center" style={{ marginTop: 28 }}>
              <Link href="/pricing" className="btn btn-outline">
                View Pricing &amp; What&apos;s Included
              </Link>
            </p>
          </div>
        </section>

        <section className="tight broker-section soft">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">PRACTICAL SESSIONS</span>
              <h2>Trade through a regulated broker, not a demo gimmick.</h2>
            </div>
            <div className="broker-panel reveal">
              <div className="broker-mark">STAR TRADER</div>
              <div className="broker-copy">
                <span className="badge">SCA-REGULATED</span>
                <h3>Our practical sessions run through Star Trader</h3>
                <p style={{ margin: 0 }}>
                  Star Trader is regulated by the UAE Securities and Commodities Authority (SCA), so the platform
                  mechanics you practise on in class match what you&apos;d use in a live, regulated account.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="tight">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">COURSE FAQS</span>
              <h2>Questions about the curriculum</h2>
            </div>
            <div className="faq-list reveal">
              <details>
                <summary>
                  Which track should I start with?<span className="plus">+</span>
                </summary>
                <p>
                  If you&apos;re new to trading, start with Basic to Intermediate — it covers forex fundamentals,
                  candlestick patterns and market structure. If you already understand these, Advanced Institutional
                  Strategies goes straight into order flow and institutional tools.
                </p>
              </details>
              <details>
                <summary>
                  Is this course only about forex?<span className="plus">+</span>
                </summary>
                <p>
                  Yes. Both tracks focus exclusively on forex, taught as one connected market-structure framework
                  rather than spread thin across other asset classes.
                </p>
              </details>
              <details>
                <summary>
                  What is &quot;Lifetime Support via WhatsApp&quot;?<span className="plus">+</span>
                </summary>
                <p>Students on the Advanced Institutional Strategies track get ongoing access to the instructor via WhatsApp for questions after the course ends.</p>
              </details>
              <details>
                <summary>
                  Is broker access included in the course fee?<span className="plus">+</span>
                </summary>
                <p>
                  Practical sessions are run through Star Trader, an SCA-regulated broker. See <Link href="/pricing">Pricing</Link>{" "}
                  or call us for current enrolment and account details.
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
              <span className="topic-chip">Forex Course Dubai</span>
              <span className="topic-chip">Learn Forex Trading UAE</span>
              <span className="topic-chip">Forex Classes for Beginners</span>
              <span className="topic-chip">Order Flow Analysis</span>
              <span className="topic-chip">Market Profile Trading</span>
              <span className="topic-chip">Fibonacci Retracement</span>
              <span className="topic-chip">Bot Trading Strategies</span>
              <span className="topic-chip">Trading Psychology Course</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
