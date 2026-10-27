import Header from "../components/Header";
import Footer from "../components/Footer";
import AcademyLinks from "../components/AcademyLinks";
import Link from "next/link";
import JsonLd from "../components/JsonLd";
import { pageMetadata } from "../lib/seo";
import { breadcrumbSchema } from "../lib/schema";

const headline = "What Is Market Structure in Forex? A Guide for UAE Traders";

export const metadata = pageMetadata({
  title: "Market Structure for UAE Traders | Equity Fin Academy",
  description:
    "Market structure for traders in Dubai and across the UAE: swing highs, swing lows, trends, ranges, and why structure comes before any strategy.",
  keywords:
    "what is market structure in forex Dubai, market structure trading UAE, swing high swing low forex, trend vs range trading, forex market structure for beginners Dubai",
  path: "/blog-market-structure",
  type: "article",
});

const postSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline,
  author: { "@type": "Person", "@id": "https://www.equityfinacademy.com/#gopi", name: "Gopi Chandran", url: "https://www.equityfinacademy.com/about" },
  publisher: { "@type": "EducationalOrganization", "@id": "https://www.equityfinacademy.com/#organization", name: "Equity Fin Academy", url: "https://www.equityfinacademy.com/" },
  mainEntityOfPage: "https://www.equityfinacademy.com/blog-market-structure",
  image: ["https://www.equityfinacademy.com/og-image.png"],
  inLanguage: "en-AE",
  // TODO(owner): add datePublished. This article did not record one, so it is omitted.
  description: "Swing highs, swing lows, and how to tell a trend from a range.",
};

export default function BlogMarketStructurePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema) }} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Market Structure", path: "/blog-market-structure" },
        ])}
      />
      <Header active="blog" />

      <main>
        <section className="tight">
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <Link href="/blog">Blog</Link>
              <span className="sep">/</span>
              <span className="current">Market Structure</span>
            </nav>

            <div className="blog-article">
              <span className="eyebrow">MARKET STRUCTURE</span>
              <h1>What Is Market Structure in Forex? A Guide for UAE Traders</h1>
              <div className="meta">By Gopi Chandran · Equity Fin Academy · 7 min read</div>

              <p>
                Market structure is how price organises itself over time — the pattern formed by a market&apos;s
                swing highs and swing lows. It&apos;s arguably the single most important concept in trading, because
                it tells you the context that every other tool (candlesticks, indicators, strategies) operates
                within. Traders in the Dubai classroom, and students joining online from Abu Dhabi, Sharjah, and the
                other emirates, use the same map. The session you are watching still follows Gulf Standard Time.
              </p>

              <h2>Swing highs and swing lows</h2>
              <p>
                A <strong>swing high</strong> is a peak where price reverses downward after rising. A{" "}
                <strong>swing low</strong> is a trough where price reverses upward after falling. Mapping out a
                sequence of these points is the first step to reading structure — everything else builds on
                identifying them correctly. Those same points are where support and resistance usually sit. The{" "}
                <Link href="/blog-support-and-resistance-forex">support and resistance guide</Link> is the next step
                once the swings are visible.
              </p>

              <h2>Trend vs. range</h2>
              <p>Once you can identify swing points, you can classify what the market is doing:</p>
              <ul>
                <li><strong>Uptrend</strong> — a sequence of higher highs and higher lows.</li>
                <li><strong>Downtrend</strong> — a sequence of lower highs and lower lows.</li>
                <li><strong>Range</strong> — price oscillating between a relatively consistent high and low, with no clear directional progression.</li>
              </ul>
              <p>
                A change from higher highs/higher lows to lower highs/lower lows (or vice versa) is often referred to
                as a &quot;structure break&quot; or &quot;change of character&quot; — a signal that the balance of
                control between buyers and sellers may be shifting.
              </p>

              <h2>Why structure matters more than indicators</h2>
              <p>
                Most technical indicators — moving averages, oscillators, and so on — are mathematical derivatives of
                price. They lag behind what price is actually doing. Market structure, by contrast, is a direct read
                of price itself. That&apos;s why our courses teach structure before any indicator: once you can read
                structure confidently, indicators become a secondary confirmation tool rather than your primary
                decision-maker.
              </p>

              <h2>How structure connects to smart money concepts</h2>
              <p>
                Once you understand basic structure, more advanced frameworks like smart money concepts (SMC)
                build directly on top of it — adding layers like liquidity zones and imbalance to
                the same swing-high/swing-low map you&apos;re already reading. If you haven&apos;t already,
                it&apos;s worth reading <Link href="/blog-candlestick-patterns">how to read candlestick patterns</Link>{" "}
                first, since individual candles are the building blocks that form these swing points.
              </p>

              <h2>A word of caution</h2>
              <p>
                Market structure tells you context, not certainty. No structural read guarantees where price goes
                next — it narrows the probabilities and gives you a framework for risk management, which is why
                structure and risk management are taught together, never in isolation.
              </p>

              <AcademyLinks lead="Structure is taught live at the" />
              <div className="blog-cta">
                <p>Structure is taught from lesson one in our Basic to Intermediate course.</p>
                <Link href="/courses" className="btn btn-primary">
                  See Our Forex Courses
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="tight soft">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">KEEP READING</span>
              <h2>More from the blog</h2>
            </div>
            <div className="blog-grid">
              <Link href="/blog-smart-money-concepts" className="blog-card reveal">
                <div className="blog-card-thumb">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M4 18l5-6 4 3 7-9" />
                    <path d="M20 6h-4v4" />
                  </svg>
                </div>
                <div className="blog-card-body">
                  <span className="cat">Strategy</span>
                  <h3>Smart Money Concepts (SMC) Explained for Beginners in Dubai</h3>
                  <p>Liquidity, imbalance and order blocks, in plain language.</p>
                </div>
              </Link>
              <Link href="/blog-risk-management" className="blog-card reveal">
                <div className="blog-card-thumb">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M12 2l8 4v6c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-4z" />
                  </svg>
                </div>
                <div className="blog-card-body">
                  <span className="cat">Risk Management</span>
                  <h3>Forex Risk Management in the UAE: How Much to Risk Per Trade</h3>
                  <p>Position sizing, stop-losses, and why this matters more than entries.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
