import Header from "../components/Header";
import Footer from "../components/Footer";
import AcademyLinks from "../components/AcademyLinks";
import Link from "next/link";
import JsonLd from "../components/JsonLd";
import { pageMetadata } from "../lib/seo";
import { articleSchema, breadcrumbSchema } from "../lib/schema";

const headline = "How to Read Candlestick Patterns: A Beginner's Guide for Dubai";

export const metadata = pageMetadata({
  title: "Candlestick Patterns in Dubai | Equity Fin Academy",
  description:
    "How to read forex candlestick patterns in Dubai and the UAE: what one candle shows, and which patterns to learn first.",
  keywords:
    "how to read candlestick patterns Dubai, candlestick patterns for beginners UAE, forex candlestick guide Dubai, candlestick chart explained, doji hammer engulfing pattern",
  path: "/blog-candlestick-patterns",
  type: "article",
});

const postSchema = articleSchema({
  headline,
  description:
    "What a candle represents for beginners in Dubai and across the UAE, and the patterns worth learning first.",
  path: "/blog-candlestick-patterns",
});

export default function BlogCandlestickPatternsPage() {
  return (
    <>
      <JsonLd data={postSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Candlestick Patterns", path: "/blog-candlestick-patterns" },
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
              <span className="current">Candlestick Patterns</span>
            </nav>

            <div className="blog-article">
              <span className="eyebrow">CHART READING</span>
              <h1>How to Read Candlestick Patterns: A Beginner&apos;s Guide for Dubai</h1>
              <div className="meta">By Gopi Chandran · Equity Fin Academy · 8 min read</div>

              <p>
                Candlestick charts are the most common way to visualise price movement in forex trading. Before
                learning any pattern, it helps to understand exactly what a single candle is telling you — because
                every pattern is really just a sequence of these individual pieces of information. This is the version
                taught in Dubai, and online for students in Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and
                Umm Al Quwain. When you mark a session, use Gulf Standard Time (UTC+4). The UAE does not change clocks.
                MetaTrader 5 often stamps candles in the broker&apos;s server time, so check that offset before you
                call a candle the London open. The session tables are on the{" "}
                <Link href="/blog-forex-market-hours-dubai">Dubai market-hours page</Link>.
              </p>

              <h2>What a single candle shows you</h2>
              <p>
                Each candlestick represents price movement over a fixed period (a minute, an hour, a day — whatever
                timeframe you&apos;re viewing) and shows four data points: the open, high, low and close.
              </p>
              <ul>
                <li>The <strong>body</strong> is the range between the open and close price.</li>
                <li>The <strong>wicks</strong> (or shadows) above and below the body show the highest and lowest price reached during that period.</li>
                <li>A <strong>bullish (up) candle</strong> closes higher than it opened, usually shown in green.</li>
                <li>A <strong>bearish (down) candle</strong> closes lower than it opened, usually shown in red.</li>
              </ul>
              <p>
                A long body means strong momentum in one direction. Long wicks with a small body mean the price
                moved a lot during the period but was pushed back — a sign of rejection or indecision at that level.
              </p>

              <h2>Patterns worth learning first</h2>
              <p>
                There are dozens of named candlestick patterns, but you don&apos;t need to memorise all of them. A
                handful come up repeatedly and are genuinely useful once you understand the context they appear in:
              </p>
              <ul>
                <li><strong>Doji</strong> — open and close are nearly equal, signalling indecision between buyers and sellers.</li>
                <li><strong>Hammer / Inverted Hammer</strong> — a small body with a long wick on one side, often appearing after a decline and suggesting a possible reversal.</li>
                <li><strong>Engulfing pattern</strong> — a candle whose body completely &quot;engulfs&quot; the previous candle&apos;s body, often signalling a shift in momentum.</li>
                <li><strong>Pin bar</strong> — a candle with a small body and a long wick showing strong rejection of a price level.</li>
              </ul>

              <h2>The mistake most beginners make</h2>
              <p>
                Treating a candlestick pattern as a standalone signal — &quot;I saw a hammer, so I should buy&quot;
                — is one of the most common beginner mistakes. A pattern only means something in context: where it
                forms relative to market structure, whether it&apos;s at a level that&apos;s already significant,
                and what the broader trend is doing. A hammer in the middle of a range means far less than a hammer
                forming at a key support level within an established uptrend.
              </p>
              <p>
                This is exactly why our <Link href="/courses">Basic to Intermediate course</Link> teaches candlestick
                patterns alongside market structure from day one, rather than as an isolated topic.
              </p>

              <h2>Next step</h2>
              <p>
                Once candlestick reading feels comfortable, the natural next topic is market structure —
                understanding how these candles combine to form swing highs, swing lows, and trends. Read{" "}
                <Link href="/blog-market-structure">What Is Market Structure in Forex? A Guide for UAE Traders</Link> next.
              </p>

              <AcademyLinks lead="When you want candles taught on a live chart, book the" />
              <div className="blog-cta">
                <p>Want to see this applied to live charts, not just static examples?</p>
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
                  <h3>What Is Market Structure in Forex? A Guide for UAE Traders</h3>
                  <p>Swing highs, swing lows, and how to tell a trend from a range.</p>
                </div>
              </Link>
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
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
