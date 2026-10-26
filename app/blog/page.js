import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Forex Trading Blog | Equity Fin Academy Dubai",
  description:
    "Forex articles from Equity Fin Academy in Dubai: course syllabuses, one-to-one class prep, market hours, and risk.",
  keywords: "forex trading blog, forex education articles, forex market hours Dubai, support and resistance forex, learn forex trading online",
  openGraph: {
    title: "Forex Trading Blog | Equity Fin Academy Dubai",
    description:
      "Forex articles from Equity Fin Academy in Dubai: course syllabuses, one-to-one class prep, market hours, and risk.",
    type: "website",
    url: "https://www.equityfinacademy.com/blog",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Equity Fin Academy — forex training in Dubai, UAE" }],
  },
  alternates: { canonical: "https://www.equityfinacademy.com/blog" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.equityfinacademy.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.equityfinacademy.com/blog" },
  ],
};

const posts = [
  {
    href: "/blog-forex-trading-courses-dubai",
    icon: (
      <>
        <path d="M6 3h9l3 3v15H6z" />
        <path d="M15 3v3h3M8 11h8M8 15h6" />
      </>
    ),
    cat: "Courses",
    title: "How to Read a Forex Trading Course Syllabus in Dubai",
    desc: "Topic order, live sessions, and what a fee quote should include before you enrol.",
    time: "8 min read",
  },
  {
    href: "/blog-one-to-one-forex-classes-dubai",
    icon: (
      <>
        <circle cx="12" cy="8" r="3" />
        <path d="M6 19c.8-2.6 2.8-4 6-4s5.2 1.4 6 4" />
      </>
    ),
    cat: "Private Lessons",
    title: "How to Prepare for One-to-One Forex Classes in Dubai",
    desc: "The chart, the question, and the platform to have ready before a private hour.",
    time: "7 min read",
  },
  {
    href: "/blog-forex-market-hours-dubai",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2" />
      </>
    ),
    cat: "Market Hours",
    title: "Forex Market Hours in Dubai: London and New York in UAE Time",
    desc: "Gulf Standard Time for the London and New York sessions, and why the clock shifts twice a year.",
    time: "7 min read",
  },
  {
    href: "/blog-support-and-resistance-forex",
    icon: (
      <>
        <path d="M4 7h16M4 17h16" />
        <path d="M7 17V10m5 7V7m5 10v-5" />
      </>
    ),
    cat: "Chart Reading",
    title: "Support and Resistance in Forex: A Beginner's Guide",
    desc: "How to mark the areas where price has stalled, and how a Dubai class uses them.",
    time: "8 min read",
  },
  {
    href: "/blog-private-vs-group-forex-classes-dubai",
    icon: (
      <>
        <circle cx="8" cy="8" r="2" />
        <circle cx="16" cy="8" r="2" />
        <path d="M4.5 18c.6-2.4 2.1-3.5 3.5-3.5S11 15.6 11.5 18" />
        <path d="M12.5 18c.6-2.4 2.1-3.5 3.5-3.5s3 1.1 3.5 3.5" />
      </>
    ),
    cat: "Class Format",
    title: "Private vs Group Forex Classes in Dubai",
    desc: "Who a one-to-one lesson suits, and who should start in the group cohort.",
    time: "6 min read",
  },
  {
    href: "/blog-start-forex-trading-uae-mt5",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M7 15l3-4 2.5 2.5L16 9" />
      </>
    ),
    cat: "Getting Started",
    title: "How to Start Forex Trading in the UAE with MT5",
    desc: "What to learn first, then how to install MetaTrader 5 and open an account.",
    time: "6 min read",
  },
  {
    href: "/blog-choose-forex-academy-uae",
    icon: <path d="M12 3l2.2 4.6L19 8.2l-3.5 3.4.8 4.9L12 14.8 7.7 16.5l.8-4.9L5 8.2l4.8-.6L12 3z" />,
    cat: "Choosing a School",
    title: "How to Choose a Forex Training Academy in the UAE",
    desc: "The checks that matter before you pay any forex academy, including this one.",
    time: "8 min read",
  },
  {
    href: "/blog-forex-course-dubai-beginners",
    icon: <path d="M4 19V5m0 14h16M8 15V9m4 6V7m4 8v-4" />,
    cat: "Beginners",
    title: "Forex Course in Dubai for Beginners: What to Expect",
    desc: "The Basic to Intermediate group class in Dubai, topic by topic.",
    time: "8 min read",
  },
  {
    href: "/blog-candlestick-patterns",
    icon: <path d="M6 4v4M6 8h0v8M6 16v4M12 2v3M12 5h0v11M12 16v6M18 6v2M18 8h0v9M18 17v3" />,
    cat: "Chart Reading",
    title: "How to Read Candlestick Patterns: A Beginner's Guide",
    desc: "What each candle tells you, and the patterns worth actually learning first.",
    time: "8 min read",
  },
  {
    href: "/blog-market-structure",
    icon: <path d="M3 17l5-6 4 3 8-10" />,
    cat: "Market Structure",
    title: "What Is Market Structure in Forex Trading?",
    desc: "Swing highs, swing lows, and how to tell a trend from a range.",
    time: "7 min read",
  },
  {
    href: "/blog-risk-management",
    icon: <path d="M12 2l8 4v6c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-4z" />,
    cat: "Risk Management",
    title: "Forex Risk Management: How Much Should You Risk Per Trade?",
    desc: "Position sizing, stop-losses, and why this matters more than entries.",
    time: "6 min read",
  },
  {
    href: "/blog-common-mistakes",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v5M12 16h.01" />
      </>
    ),
    cat: "Beginner Mistakes",
    title: "7 Common Mistakes Beginner Forex Traders Make",
    desc: "The patterns that quietly drain new trading accounts.",
    time: "7 min read",
  },
  {
    href: "/blog-smart-money-concepts",
    icon: (
      <>
        <path d="M4 18l5-6 4 3 7-9" />
        <path d="M20 6h-4v4" />
      </>
    ),
    cat: "Strategy",
    title: "Smart Money Concepts (SMC) Explained for Beginners",
    desc: "Liquidity, imbalance and order blocks, in plain language.",
    time: "9 min read",
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header active="blog" />

      <main>
        <section className="tight bg-glow" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span className="current">Blog</span>
            </nav>
            <span className="eyebrow">FOREX EDUCATION BLOG</span>
            <h1 className="hero-display" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", maxWidth: "20ch" }}>
              Articles on trading forex properly.
            </h1>
            <p style={{ maxWidth: "60ch", marginTop: 18 }}>
              Plain-language explanations of the concepts that matter, from session times in the UAE to the areas where price has stalled. The live classes are the{" "}
              <Link href="/forex-training-academy-dubai">forex training academy Dubai</Link> page and the{" "}
              <Link href="/forex-training-academy-uae">forex training academy UAE</Link> page.
            </p>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">LATEST ARTICLES</span>
              <h2>Start with whichever topic fits where you are</h2>
            </div>
            <div className="blog-grid">
              {posts.map((post) => (
                <a href={post.href} className="blog-card reveal" key={post.href}>
                  <div className="blog-card-thumb">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      {post.icon}
                    </svg>
                  </div>
                  <div className="blog-card-body">
                    <span className="cat">{post.cat}</span>
                    <h3>{post.title}</h3>
                    <p>{post.desc}</p>
                    <span className="meta">{post.time}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="tight soft">
          <div className="container">
            <div className="cta-banner reveal">
              <div>
                <h2>Want this taught live, not just read?</h2>
                <p>Our courses cover every one of these topics in depth, with practical sessions on a regulated broker.</p>
              </div>
              <Link href="/courses" className="btn btn-primary">
                View Courses
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
