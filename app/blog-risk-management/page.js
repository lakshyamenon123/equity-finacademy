import Header from "../components/Header";
import Footer from "../components/Footer";
import AcademyLinks from "../components/AcademyLinks";
import Link from "next/link";
import JsonLd from "../components/JsonLd";
import { pageMetadata } from "../lib/seo";
import { articleSchema, breadcrumbSchema } from "../lib/schema";

const headline = "Forex Risk Management in the UAE: How Much to Risk Per Trade";

export const metadata = pageMetadata({
  title: "How Much to Risk Per Forex Trade in AED | Equity Fin Academy",
  description:
    "Forex risk management for beginners in the UAE: position sizing in dirhams, stop-losses, the 1–2% rule, and why the amount matters more than the entry.",
  keywords:
    "forex risk management UAE, how much to risk per trade forex AED, position sizing Dubai, stop loss strategy forex, risk management for beginners UAE",
  path: "/blog-risk-management",
  type: "article",
});

const postSchema = articleSchema({
  headline,
  description: "Position sizing in AED, stop-losses, and why risk management matters more than entries for UAE traders.",
  path: "/blog-risk-management",
});

export default function BlogRiskManagementPage() {
  return (
    <>
      <JsonLd data={postSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Risk Management", path: "/blog-risk-management" },
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
              <span className="current">Risk Management</span>
            </nav>

            <div className="blog-article">
              <span className="eyebrow">RISK MANAGEMENT</span>
              <h1>Forex Risk Management in the UAE: How Much to Risk Per Trade</h1>
              <div className="meta">By Gopi Chandran · Equity Fin Academy · 6 min read</div>

              <p>
                Ask most beginner traders what strategy they use, and they&apos;ll have an answer. Ask how they size
                their positions, and you&apos;ll often get a shrug. That gap is exactly why most new trading accounts
                don&apos;t survive their first few months — not because the strategy was wrong, but because risk
                wasn&apos;t managed. The worked example below is in UAE dirhams, which is how course fees are quoted
                in Dubai and how most local accounts are funded.
              </p>

              <h2>The 1–2% rule</h2>
              <p>
                A widely used guideline is to risk no more than 1–2% of total trading capital on any single trade.
                If you have a 5,000 AED account, that means risking 50–100 AED per trade, not 1,000 AED. This isn&apos;t about
                being timid — it&apos;s about surviving a losing streak, which every trader experiences, without
                wiping out the account.
              </p>
              <p>The maths matters here: a 50% loss requires a 100% gain just to break even. Keeping individual losses small keeps that hole shallow enough to climb out of.</p>

              <h2>Position sizing, not gut feeling</h2>
              <p>
                Position size should be calculated from three things: your account size, the percentage you&apos;re
                willing to risk, and the distance (in pips) between your entry and your stop-loss. A wider stop-loss
                means a smaller position size to keep the dirham risk constant — not the other way around. Deciding
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

              <p>
                Write the dirham risk into a plan you can reread when the trade is open. The page for that, including the journal you fill in afterwards, is{" "}
                <Link href="/blog-forex-trading-plan-uae">a forex trading plan for UAE learners</Link>.
              </p>
              <AcademyLinks lead="Risk is part of the live syllabus at the" />
              <div className="blog-cta">
                <p>Risk management is taught as core curriculum in both of our course tracks.</p>
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
              <Link href="/blog-common-mistakes" className="blog-card reveal">
                <div className="blog-card-thumb">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 8v5M12 16h.01" />
                  </svg>
                </div>
                <div className="blog-card-body">
                  <span className="cat">Beginner Mistakes</span>
                  <h3>7 Common Mistakes Beginner Forex Traders Make in the UAE</h3>
                  <p>The patterns that quietly drain new trading accounts.</p>
                </div>
              </Link>
              <Link href="/blog-market-structure" className="blog-card reveal">
                <div className="blog-card-thumb">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M3 17l5-6 4 3 8-10" />
                  </svg>
                </div>
                <div className="blog-card-body">
                  <span className="cat">Market Structure</span>
                  <h3>What Is Market Structure in Forex? A Guide for UAE Traders</h3>
                  <p>Swing highs, swing lows, and how to tell a trend from a range.</p>
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
