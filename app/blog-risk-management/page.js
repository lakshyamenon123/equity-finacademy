import Header from "../components/Header";
import Footer from "../components/Footer";
import AcademyLinks from "../components/AcademyLinks";
import YouTubeSection from "../components/YouTubeSection";
import Link from "next/link";
import AuthorByline from "../components/AuthorByline";
import JsonLd from "../components/JsonLd";
import { pageMetadata } from "../lib/seo";
import { articleSchema, breadcrumbSchema } from "../lib/schema";
import { ENGLISH_VIDEOS, VIDEOS } from "../lib/videos";

const mt5English = ENGLISH_VIDEOS.find((video) => video.id === "ssUPlUHnDLo");

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
  datePublished: "2026-07-25",
  dateModified: "2026-11-09",
  type: "BlogPosting",
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
              <AuthorByline detail="Updated 9 Nov 2026 · 9 min read" />

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
                means a smaller position size to keep the dirham risk constant — not the other way around. The cash MT5 sets aside, which is margin, is a different figure. How to read it is in <Link href="/blog-forex-leverage-margin-mt5-uae">leverage and margin on MT5</Link>. Deciding
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

              <h2>A labelled illustration in dirhams</h2>
              <p>
                This is a blank example so the three numbers sit next to each other. It is not a trade, and it is not a size the academy recommends. Suppose the account is 5,000 AED and you have chosen 1% as the amount you are willing to lose if the stop is hit. That is 50 AED. Suppose the stop you marked on the chart is 20 pips away from the entry you are considering. The volume has to be small enough that 20 pips costs about 50 AED, not the other way around. If your terminal shows that one pip at the volume you typed is worth more than 2.50 AED, the volume is too large for that stop. Change the volume. Do not drag the stop closer just to make the arithmetic nicer.
              </p>
              <p>
                The pip value itself comes from the symbol and the lot size, and it is displayed by the platform. How to read it, including an overnight swap, is in{" "}
                <Link href="/blog-forex-spreads-swaps-pip-value-uae">spreads, swaps, and pip value</Link>. The cash MetaTrader 5 sets aside, which is margin, can be much larger or smaller than 50 AED. That line is explained in{" "}
                <Link href="/blog-forex-leverage-margin-mt5-uae">leverage and margin on MT5</Link>. Where those fields sit on the order window is in{" "}
                <Link href="/blog-mt5-order-ticket-dubai">how to read the MT5 order ticket</Link>.
              </p>

              <h2>One line to write before a class in Dubai</h2>
              <p>
                Before you book, write a single sentence: the account size you are using for practice, the percentage, the dirham amount, and the symbol. “Demo, 5,000 AED, 1%, 50 AED, EURUSD” is enough. Bring it to a group class or a private lesson. In a group, the instructor will usually demonstrate the arithmetic once on the shared chart. In private, the hour can use your numbers. If the sentence is blank, the first part of the lesson will be filling it in, which is useful, and slower.
              </p>
              <p>
                The chart the stop is measured on matters too. A 20-pip stop on a one-minute chart and a 20-pip stop on a four-hour chart are different ideas even when the dirham amount matches. Which button to have open is in{" "}
                <Link href="/blog-forex-chart-timeframes-dubai">which chart timeframe to open before a class</Link>. The swings those stops usually sit beyond are in{" "}
                <Link href="/blog-market-structure">market structure</Link>.
              </p>
              <p>
                Say whether you will be in the room in Dubai, UAE, or online. Abu Dhabi students use the same dirham arithmetic on the same clock. The journey is the separate choice, on the{" "}
                <Link href="/forex-course-abu-dhabi">Abu Dhabi course page</Link>. The tracks are on <Link href="/courses">forex trading courses</Link>. When the sentence is written, the message goes to <Link href="/contact">contact</Link>. The catalogue of the other notes is the <Link href="/blog">blog</Link>.
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
                <Link href="/blog-forex-trading-plan-uae">a forex trading plan for UAE learners</Link>. The unit that turns a pip into dirhams, before you pick the percentage, is{" "}
                <Link href="/blog-forex-spreads-swaps-pip-value-uae">spreads, swaps, and pip value</Link>.
              </p>
              <p>
                The Google listing is a 5.0 rating from 30+ reviews. It is not a statement about this arithmetic, and it is not a trading result. How to read it is on the <Link href="/success-stories">reviews page</Link>. If a review mentions a topic you cannot yet mark, such as a liquidity idea, read{" "}
                <Link href="/blog-smart-money-concepts">the smart money concepts drill</Link> after the swing and the stop are both clear. The school pages are the place to book once the sentence exists.
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

        <YouTubeSection
          videos={[VIDEOS.metatrader]}
          englishVideos={mt5English ? [mt5English] : []}
          title="Find the order ticket on MetaTrader 5"
          intro="The English lesson, from Equity Global English, shows MetaTrader 5, which is where volume and a stop loss are typed. The Malayalam tab is the Equity Global MT5 tutorial. Watch it so a class in Dubai can talk about the dirham amount, not the menu. The recording is a platform preview, not a position size."
        />

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
