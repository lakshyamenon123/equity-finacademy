import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Forex Risk Management: How Much Should You Risk Per Trade? | Equity Fin Academy",
  description:
    "A practical guide to forex risk management for beginners: position sizing, stop-losses, the 1-2% rule, and why risk management matters more than any entry strategy.",
  keywords: "forex risk management, how much to risk per trade forex, position sizing forex, stop loss strategy forex, risk management for beginners",
  openGraph: {
    title: "Forex Risk Management: How Much Should You Risk Per Trade?",
    description: "Position sizing, stop-losses, and why risk management matters more than entries.",
    type: "article",
  },
  alternates: { canonical: "https://www.equityfinacademy.com/blog-risk-management" },
};

const postSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Forex Risk Management: How Much Should You Risk Per Trade?",
  author: { "@type": "Person", name: "Gopi Chandran" },
  publisher: { "@type": "EducationalOrganization", name: "Equity Fin Academy" },
  description: "Position sizing, stop-losses, and why risk management matters more than entries.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "/blog" },
    { "@type": "ListItem", position: 3, name: "Risk Management", item: "/blog-risk-management" },
  ],
};

export default function BlogRiskManagementPage() {
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
              <span className="current">Risk Management</span>
            </nav>

            <div className="blog-article">
              <span className="eyebrow">RISK MANAGEMENT</span>
              <h1>Forex Risk Management: How Much Should You Risk Per Trade?</h1>
              <div className="meta">By Gopi Chandran · Equity Fin Academy · 6 min read</div>

              <p>
                Ask most beginner traders what strategy they use, and they&apos;ll have an answer. Ask how they size
                their positions, and you&apos;ll often get a shrug. That gap is exactly why most new trading accounts
                don&apos;t survive their first few months — not because the strategy was wrong, but because risk
                wasn&apos;t managed.
              </p>

              <h2>The 1–2% rule</h2>
              <p>
                A widely used guideline is to risk no more than 1–2% of total trading capital on any single trade.
                If you have a $1,000 account, that means risking $10–$20 per trade, not $200. This isn&apos;t about
                being timid — it&apos;s about surviving a losing streak, which every trader experiences, without
                wiping out the account.
              </p>
              <p>The maths matters here: a 50% loss requires a 100% gain just to break even. Keeping individual losses small keeps that hole shallow enough to climb out of.</p>

              <h2>Position sizing, not gut feeling</h2>
              <p>
                Position size should be calculated from three things: your account size, the percentage you&apos;re
                willing to risk, and the distance (in pips) between your entry and your stop-loss. A wider stop-loss
                means a smaller position size to keep the dollar risk constant — not the other way around. Deciding
                &quot;I&apos;ll trade one lot&quot; without doing this calculation means your actual risk changes
                randomly from trade to trade.
              </p>

              <h2>Always use a stop-loss</h2>
              <p>
                A stop-loss is a predetermined price level where a losing trade closes automatically. Trading
                without one means a single bad move can erase weeks of gains — or the account entirely. Set it
                before entering the trade, based on where your analysis is invalidated, not based on how much money
                you&apos;re comfortable losing.
              </p>

              <h2>Risk-to-reward ratio</h2>
              <p>
                Beyond position sizing, look at the relationship between how much you&apos;re risking and how much
                you stand to gain if the trade works. A strategy that wins only 40% of the time can still be
                profitable overall if winning trades are, on average, meaningfully larger than losing trades. This is
                why entries alone don&apos;t determine profitability — the risk-to-reward structure around them
                does.
              </p>

              <h2>Trading psychology is part of risk management</h2>
              <p>
                Even a perfect risk management plan fails if it isn&apos;t followed under pressure. Moving a
                stop-loss further away because &quot;it&apos;ll probably come back,&quot; or doubling position size
                after a loss to &quot;win it back,&quot; are psychological failures, not technical ones. This is
                exactly why our courses cover risk and psychology management as a single connected topic rather than
                two separate ones.
              </p>

              <blockquote>
                &quot;Position sizing and trading psychology are covered as core curriculum, not an afterthought
                bolted onto strategy lessons.&quot; — Gopi Chandran, Founder, Equity Fin Academy
              </blockquote>

              <div className="blog-cta">
                <p>Risk management is taught as core curriculum in both of our course tracks.</p>
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
              <a href="/blog-common-mistakes" className="blog-card reveal">
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
              </a>
              <a href="/blog-market-structure" className="blog-card reveal">
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
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
