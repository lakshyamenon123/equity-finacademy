import Header from "../components/Header";
import Footer from "../components/Footer";
import AcademyLinks from "../components/AcademyLinks";
import Link from "next/link";
import JsonLd from "../components/JsonLd";
import { pageMetadata } from "../lib/seo";
import { breadcrumbSchema } from "../lib/schema";

const headline = "7 Common Mistakes Beginner Forex Traders Make in the UAE";

export const metadata = pageMetadata({
  title: "7 Beginner Forex Mistakes in the UAE | Equity Fin Academy",
  description:
    "The mistakes beginner forex traders in Dubai and the UAE repeat — from overleveraging to an unregulated broker — and how a structured class avoids them.",
  keywords:
    "common forex trading mistakes UAE, beginner forex mistakes Dubai, forex trading pitfalls UAE, SCA regulated broker, mistakes new traders make Dubai",
  path: "/blog-common-mistakes",
  type: "article",
});

const postSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline,
  author: { "@type": "Person", "@id": "https://www.equityfinacademy.com/#gopi", name: "Gopi Chandran", url: "https://www.equityfinacademy.com/about" },
  publisher: { "@type": "EducationalOrganization", "@id": "https://www.equityfinacademy.com/#organization", name: "Equity Fin Academy", url: "https://www.equityfinacademy.com/" },
  mainEntityOfPage: "https://www.equityfinacademy.com/blog-common-mistakes",
  image: ["https://www.equityfinacademy.com/og-image.png"],
  inLanguage: "en-AE",
  // TODO(owner): add datePublished. This article did not record one, so it is omitted.
  description: "The most common mistakes beginner forex traders make, and how to avoid them.",
};

export default function BlogCommonMistakesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema) }} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Common Mistakes", path: "/blog-common-mistakes" },
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
              <span className="current">Common Mistakes</span>
            </nav>

            <div className="blog-article">
              <span className="eyebrow">BEGINNER MISTAKES</span>
              <h1>7 Common Mistakes Beginner Forex Traders Make in the UAE</h1>
              <div className="meta">By Gopi Chandran · Equity Fin Academy · 7 min read</div>

              <p>
                Most beginner trading losses aren&apos;t caused by a single bad decision — they&apos;re caused by a handful of repeating patterns. The list below is the one we see from students in Dubai and from people studying online in Abu Dhabi, Sharjah, and the other emirates. Recognising them in your own trading is the fastest way to stop them.
              </p>

              <h2>1. Risking too much on a single trade</h2>
              <p>
                Without a clear rule limiting risk per trade (see our guide on <Link href="/blog-risk-management">forex risk management</Link>),
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
              <p>
                Choosing a platform based purely on marketing, without checking whether it&apos;s regulated by a recognised financial authority, removes a layer of protection that matters — especially early on when you&apos;re least equipped to spot problems. In the UAE, look for Securities and Commodities Authority (SCA) regulation. Practical sessions at Equity Fin Academy use Star Trader, which is SCA-regulated.
              </p>

              <h2>7. Not keeping a trading journal</h2>
              <p>
                Without a record of what you traded, why, and what happened, the same mistakes repeat invisibly. A journal is what turns experience into actual improvement. A simple page for UAE learners, with the rules written before the session, is in{" "}
                <Link href="/blog-forex-trading-plan-uae">how to write a trading plan and journal</Link>.
              </p>

              <h2>The pattern behind all seven</h2>
              <p>
                Every mistake on this list comes back to the same root cause: skipping structure and risk management
                in favour of speed. A structured course won&apos;t make you immune to mistakes, but it front-loads
                exactly the parts beginners tend to skip — market structure, risk management, and discipline — before
                introducing strategy.
              </p>

              <AcademyLinks lead="If you want these mistakes corrected in class, start with the" />
              <div className="blog-cta">
                <p>Our Basic to Intermediate course is built specifically to avoid these mistakes from day one.</p>
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
              <Link href="/blog-candlestick-patterns" className="blog-card reveal">
                <div className="blog-card-thumb">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M6 4v4M6 8h0v8M6 16v4M12 2v3M12 5h0v11M12 16v6M18 6v2M18 8h0v9M18 17v3" />
                  </svg>
                </div>
                <div className="blog-card-body">
                  <span className="cat">Chart Reading</span>
                  <h3>How to Read Candlestick Patterns: A Beginner&apos;s Guide for Dubai</h3>
                  <p>What each candle tells you, and the patterns worth actually learning first.</p>
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
