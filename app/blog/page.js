import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Forex Trading Blog — Education Articles | Equity Fin Academy Dubai",
  description:
    "Educational forex trading articles from Equity Fin Academy: candlestick patterns, market structure, risk management, smart money concepts and common beginner mistakes.",
  keywords: "forex trading blog, forex education articles, learn forex trading online, forex trading tips for beginners",
  openGraph: {
    title: "Forex Trading Blog | Equity Fin Academy Dubai",
    description: "Educational articles on candlestick patterns, market structure, risk management and smart money concepts.",
    type: "website",
  },
  alternates: { canonical: "https://www.equityfinacademy.com/blog" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "/blog" },
  ],
};

const posts = [
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
              No signals, no hype — just plain-language explanations of the concepts that actually matter.
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
