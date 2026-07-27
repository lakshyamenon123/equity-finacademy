import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Smart Money Concepts (SMC) Explained for Beginners | Equity Fin Academy",
  description: "Smart money concepts (SMC) explained in plain language: liquidity, imbalance, order blocks, and how SMC builds on basic market structure.",
  keywords: "smart money concepts explained, what is SMC trading, liquidity forex trading, order block trading, imbalance in forex market, SMC for beginners",
  openGraph: {
    title: "Smart Money Concepts (SMC) Explained for Beginners",
    description: "Liquidity, imbalance and order blocks, in plain language.",
    type: "article",
  },
  alternates: { canonical: "https://www.equityfinacademy.com/blog-smart-money-concepts" },
};

const postSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Smart Money Concepts (SMC) Explained for Beginners",
  author: { "@type": "Person", name: "Gopi Chandran" },
  publisher: { "@type": "EducationalOrganization", name: "Equity Fin Academy" },
  description: "Liquidity, imbalance and order blocks, in plain language.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "/blog" },
    { "@type": "ListItem", position: 3, name: "Smart Money Concepts", item: "/blog-smart-money-concepts" },
  ],
};

export default function BlogSmartMoneyConceptsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header active="blog" />

      <main>
        <section className="tight">
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <Link href="/blog">Blog</Link>
              <span className="sep">/</span>
              <span className="current">Smart Money Concepts</span>
            </nav>

            <div className="blog-article">
              <span className="eyebrow">STRATEGY</span>
              <h1>Smart Money Concepts (SMC) Explained for Beginners</h1>
              <div className="meta">By Gopi Chandran · Equity Fin Academy · 9 min read</div>

              <p>
                Smart money concepts (SMC) is a popular framework for analysing forex charts based on the idea of
                reading where larger market participants — banks, institutions, large funds — may be positioned,
                using liquidity and price imbalance rather than lagging indicators. It&apos;s an extension of market
                structure, not a replacement for it.
              </p>

              <h2>Why &quot;smart money&quot;?</h2>
              <p>
                The term refers to the idea that large institutional participants move enough capital to influence
                price in ways visible on a chart, if you know what to look for. SMC doesn&apos;t claim to know
                exactly what any institution is doing — it&apos;s a set of concepts for interpreting price behaviour
                that&apos;s consistent with how large orders tend to interact with liquidity.
              </p>

              <h2>Core concepts</h2>
              <ul>
                <li><strong>Liquidity</strong> — areas where a cluster of orders (such as stop-losses) are likely to sit, often just beyond an obvious swing high or low.</li>
                <li><strong>Liquidity grab / sweep</strong> — a price move that briefly pushes beyond a swing point to trigger those orders, before reversing.</li>
                <li><strong>Imbalance / fair value gap</strong> — a section of the chart where price moved so quickly that it left a visible gap between candles, often considered an area price may return to &quot;fill.&quot;</li>
                <li><strong>Order block</strong> — the last opposing candle before a strong, structural price move, treated as a zone of interest for future price reaction.</li>
                <li><strong>Change of character (CHoCH)</strong> — an early signal that the current trend may be shifting, based on a break in the established sequence of highs and lows.</li>
              </ul>

              <h2>Why SMC only makes sense after structure</h2>
              <p>
                Every one of these concepts is defined relative to market structure — you can&apos;t identify a
                liquidity sweep without first knowing where the relevant swing high or low is. This is why our{" "}
                <Link href="/courses">Advanced Institutional Strategies course</Link> only introduces SMC after market
                structure and order flow fundamentals are already solid. Learning SMC terminology without that
                foundation tends to produce pattern-matching without real understanding.
              </p>

              <h2>A common misconception</h2>
              <p>
                SMC is sometimes marketed as a way to &quot;trade like a bank&quot; or predict institutional
                behaviour with certainty. It isn&apos;t. It&apos;s a lens for interpreting price behaviour — one of
                several valid frameworks — not a crystal ball. Like any strategy, it works within a broader plan
                that includes risk management and requires practice to apply consistently.
              </p>

              <div className="blog-cta">
                <p>SMC, order flow and market profile are covered in depth in our advanced track.</p>
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
              <Link href="/blog-market-structure" className="blog-card reveal">
                <div className="blog-card-thumb">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M3 17l5-6 4 3 8-10" />
                  </svg>
                </div>
                <div className="blog-card-body">
                  <span className="cat">Market Structure</span>
                  <h3>What Is Market Structure in Forex Trading?</h3>
                  <p>Swing highs, swing lows, and how to tell a trend from a range.</p>
                </div>
              </Link>
              <Link href="/blog-common-mistakes" className="blog-card reveal">
                <div className="blog-card-thumb">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 8v5M12 16h.01" />
                  </svg>
                </div>
                <div className="blog-card-body">
                  <span className="cat">Beginner Mistakes</span>
                  <h3>7 Common Mistakes Beginner Forex Traders Make</h3>
                  <p>The patterns that quietly drain new trading accounts.</p>
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
