import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "7 Common Mistakes Beginner Forex Traders Make | Equity Fin Academy",
  description:
    "The most common mistakes beginner forex traders make — from overleveraging to revenge trading — and how a structured learning approach avoids them.",
  keywords: "common forex trading mistakes, beginner forex mistakes, why do forex traders lose money, forex trading pitfalls, mistakes new traders make",
  openGraph: {
    title: "7 Common Mistakes Beginner Forex Traders Make",
    description: "The patterns that quietly drain new trading accounts, and how to avoid them.",
    type: "article",
  },
  alternates: { canonical: "https://www.equityfinacademy.com/blog-common-mistakes" },
};

const postSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "7 Common Mistakes Beginner Forex Traders Make",
  author: { "@type": "Person", name: "Gopi Chandran" },
  publisher: { "@type": "EducationalOrganization", name: "Equity Fin Academy" },
  description: "The most common mistakes beginner forex traders make, and how to avoid them.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "/blog" },
    { "@type": "ListItem", position: 3, name: "Common Mistakes", item: "/blog-common-mistakes" },
  ],
};

export default function BlogCommonMistakesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header active="blog" />

      <main>
        <section className="tight">
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span className="sep">/</span>
              <a href="/blog">Blog</a>
              <span className="sep">/</span>
              <span className="current">Common Mistakes</span>
            </nav>

            <div className="blog-article">
              <span className="eyebrow">BEGINNER MISTAKES</span>
              <h1>7 Common Mistakes Beginner Forex Traders Make</h1>
              <div className="meta">By Gopi Chandran · Equity Fin Academy · 7 min read</div>

              <p>Most beginner trading losses aren&apos;t caused by a single bad decision — they&apos;re caused by a handful of repeating patterns. Recognising them in your own trading is the fastest way to stop them.</p>

              <h2>1. Risking too much on a single trade</h2>
              <p>
                Without a clear rule limiting risk per trade (see our guide on <a href="/blog-risk-management">forex risk management</a>),
                it&apos;s easy to size positions based on conviction rather than a calculation — and a single bad
                trade can undo weeks of progress.
              </p>

              <h2>2. Trading a strategy you don&apos;t actually understand</h2>
              <p>Copying an entry rule from a video without understanding the market structure it depends on means you can&apos;t tell when the strategy no longer applies. It becomes guesswork with extra steps.</p>

              <h2>3. Skipping practice before going live</h2>
              <p>Jumping straight to a live account with real capital, without first practising the mechanics on a demo or small account, means your first real mistakes cost real money.</p>

              <h2>4. Revenge trading</h2>
              <p>Increasing position size after a loss to &quot;win it back&quot; is one of the fastest ways to turn a manageable loss into a serious one. It&apos;s an emotional response, not a strategic one.</p>

              <h2>5. Overleveraging</h2>
              <p>Leverage lets you control a larger position than your capital alone allows — but it magnifies losses just as much as gains. Beginners often use far more leverage than their risk tolerance or experience level can handle.</p>

              <h2>6. Trading through an unregulated broker</h2>
              <p>Choosing a platform based purely on marketing, without checking whether it&apos;s regulated by a recognised financial authority, removes a layer of protection that matters — especially early on when you&apos;re least equipped to spot problems.</p>

              <h2>7. Not keeping a trading journal</h2>
              <p>Without a record of what you traded, why, and what happened, the same mistakes repeat invisibly. A journal is what turns experience into actual improvement.</p>

              <h2>The pattern behind all seven</h2>
              <p>
                Every mistake on this list comes back to the same root cause: skipping structure and risk management
                in favour of speed. A structured course won&apos;t make you immune to mistakes, but it front-loads
                exactly the parts beginners tend to skip — market structure, risk management, and discipline — before
                introducing strategy.
              </p>

              <div className="blog-cta">
                <p>Our Basic to Intermediate course is built specifically to avoid these mistakes from day one.</p>
                <a href="/courses" className="btn btn-primary">
                  See Our Forex Courses
                </a>
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
              <a href="/blog-risk-management" className="blog-card reveal">
                <div className="blog-card-thumb">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M12 2l8 4v6c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-4z" />
                  </svg>
                </div>
                <div className="blog-card-body">
                  <span className="cat">Risk Management</span>
                  <h3>Forex Risk Management: How Much Should You Risk Per Trade?</h3>
                  <p>Position sizing, stop-losses, and why this matters more than entries.</p>
                </div>
              </a>
              <a href="/blog-candlestick-patterns" className="blog-card reveal">
                <div className="blog-card-thumb">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M6 4v4M6 8h0v8M6 16v4M12 2v3M12 5h0v11M12 16v6M18 6v2M18 8h0v9M18 17v3" />
                  </svg>
                </div>
                <div className="blog-card-body">
                  <span className="cat">Chart Reading</span>
                  <h3>How to Read Candlestick Patterns: A Beginner&apos;s Guide</h3>
                  <p>What each candle tells you, and the patterns worth actually learning first.</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
