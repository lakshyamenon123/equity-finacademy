import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import YouTubeSection from "../components/YouTubeSection";
import AcademyLinks from "../components/AcademyLinks";
import Link from "next/link";
import AuthorByline from "../components/AuthorByline";
import { pageMetadata } from "../lib/seo";
import { articleSchema, breadcrumbSchema } from "../lib/schema";
import { ENGLISH_VIDEOS, VIDEOS } from "../lib/videos";
import { STARTRADER_LIVE_URL } from "../lib/whatsapp";

const path = "/blog-forex-spreads-swaps-pip-value-uae";
const headline = "Forex Spreads, Swaps, and Pip Value for Traders in the UAE";
const description =
  "How to read the spread on MetaTrader 5, what a pip is worth in dollars and dirhams, and where the overnight swap shows up before a class in Dubai.";

const mt5English = ENGLISH_VIDEOS.find((video) => video.id === "ssUPlUHnDLo");

export const metadata = pageMetadata({
  title: "Forex Spreads, Swaps, and Pip Value in the UAE | Equity Fin Academy",
  description,
  keywords:
    "forex spread UAE, pip value AED, forex swap Dubai, MetaTrader 5 spread, forex course Dubai costs, forex training academy UAE",
  path,
  type: "article",
});

const postSchema = articleSchema({
  headline,
  description,
  path,
  datePublished: "2026-11-01",
});

export default function ForexSpreadsSwapsPipValuePost() {
  return (
      <>
      <JsonLd data={postSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Spreads, Swaps, and Pip Value", path },
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
              <span className="current">Spreads, Swaps, and Pip Value</span>
            </nav>

            <div className="blog-article">
              <span className="eyebrow">COSTS · DUBAI, UAE</span>
              <h1>{headline}</h1>
              <AuthorByline detail="1 Nov 2026 · 9 min read" />

              <p>
                A forex course in Dubai can teach you where to mark a level and still leave the bill of the trade unread. Three numbers sit on every position: the spread you pay as it opens, the swap if it stays open overnight, and the pip value that turns a move into dirhams. This note is how to find those three on MetaTrader 5 before you book a group class or a private lesson at Equity Fin Academy. It is an illustration of the units. It is not a live quote, and it is not a result.
              </p>

              <h2>The spread is the gap you can see</h2>
              <p>
                The bid is the price a buyer is showing. The ask is the price a seller is showing. The spread is the gap between them. When you buy, you start from the ask. The position has to travel at least that gap before it is ahead of the entry. On MetaTrader 5 the gap is usually printed beside the symbol in the Market Watch, often as points.
              </p>
              <p>
                A point and a pip are easy to mix up. On a EUR/USD quote that shows five decimal places, a pip is 0.0001, which is ten points. If Market Watch says 12, that is often 1.2 pips, not 12 pips. Open the symbol specification and read the digits before you decide the cost is large. The number changes. It tends to be tighter when London and New York are both active on the Dubai clock, and wider when the market is quiet or a data release is due. Those hours are on the <Link href="/blog-forex-market-hours-dubai">forex market hours page</Link>. The release diary is the <Link href="/blog-forex-economic-calendar-dubai">economic calendar in Dubai time</Link>.
              </p>
              <p>
                Read the spread on your own symbol. A blog cannot print today&apos;s gap, because it moves. If the quote itself is still new, start with <Link href="/blog-currency-pairs-uae">how currency pairs are quoted for UAE learners</Link>, then come back to the cost.
              </p>

              <h2>A pip is a unit, then a sum of money</h2>
              <p>
                On most major pairs a pip is the fourth decimal place, 0.0001. Pairs quoted in yen use the second decimal place, 0.01. Gold is a different symbol again. If XAUUSD is the chart you care about, read <Link href="/blog-gold-xauusd-course-dubai">how a Dubai class treats gold</Link> and then check that symbol&apos;s specification. Do not copy the euro figure onto gold.
              </p>
              <p>
                The money value of one pip depends on the contract size and on which currency the pair is quoted in. MetaTrader 5 usually offers three sizes. A standard lot is 100,000 units of the base currency, a mini lot is 10,000, and a micro lot is 1,000. Confirm those numbers in the specification. A broker can name a lot differently.
              </p>
              <p>
                Here is the arithmetic for EUR/USD, where the quote currency is the US dollar. One pip is 0.0001. On a standard lot, 100,000 times 0.0001 is 10 US dollars. On a mini lot it is 1 US dollar. On a micro lot it is 10 cents. That is the unit, worked out from the contract size. It is not today&apos;s price, and it is not a statement from a broker. If the quote currency is not the dollar, as with USD/JPY, the pip value is in the quote currency first and has to be converted. The specification, or a position-size calculator inside MT5, is the place to read that conversion.
              </p>

              <h2>From dollars to dirhams</h2>
              <p>
                The UAE dirham is pegged to the US dollar at 3.6725 dirhams per dollar. At that rate, the 10 dollar pip on a standard lot of EUR/USD is about 36.73 dirhams. A mini-lot pip is about 3.67 dirhams. A micro-lot pip is a fraction of a dirham. Use the arithmetic to understand the unit. Use the broker statement for the figure on a live account, because a conversion, a commission, or a different contract size will move it.
              </p>
              <p>
                This is why a stop described as &quot;20 pips&quot; is incomplete until you name the lot. Twenty pips on a micro lot and twenty pips on a standard lot are not the same dirham risk. The page that turns that gap into a percentage of the account is <Link href="/blog-risk-management">how much to risk per trade</Link>. Read the pip value first, then choose the lot so the dirham risk matches the plan.
              </p>

              <h2>Swap is the overnight line</h2>
              <p>
                Swap, often called rollover, is the financing charge or credit when a position is still open at the broker&apos;s rollover time. It is separate from the spread, and it is separate from the course fee. Long and short can carry different amounts. Some nights credit the account. Some nights charge it. The symbol specification in MetaTrader 5 lists the swap for the long and the short.
              </p>
              <p>
                Many brokers apply a larger swap one night mid-week so the weekend is included. Do not assume the night is free, and do not assume every broker uses the same night. Open the specification for the symbol you actually hold. A class in Dubai can explain the line. It cannot replace the number on your account.
              </p>
              <p>
                If you are still on a demo, the swap may be shown and still feel unreal, because the balance is not yours. What a demo hides is the subject of <Link href="/blog-demo-vs-live-mt5-uae">demo versus live on MT5</Link>. Install steps, if the platform is not on the machine yet, are in <Link href="/blog-start-forex-trading-uae-mt5">how to start forex trading in the UAE with MT5</Link>.
              </p>

              <h2>What to check before a class in Dubai</h2>
              <p>
                Bring three readings to the hour, whether you sit in Dubai, UAE, or join online from another emirate on Gulf Standard Time.
              </p>
              <ol className="guide-list">
                <li>The spread on the symbol, in points, and whether you have converted points into pips.</li>
                <li>The lot size you would use, and the dirham value of one pip at that size.</li>
                <li>The swap for long and short, if you might hold past the broker&apos;s rollover.</li>
              </ol>
              <p>
                A group class follows a shared topic, so these three are homework you can do on a demo before the hour. How to show up for that shared hour is in <Link href="/blog-prepare-group-forex-class-dubai">how to prepare for a group forex class in Dubai</Link>. A private lesson can spend the time on your own numbers. The two rooms are compared in <Link href="/blog-private-vs-group-forex-classes-dubai">private versus group classes</Link>. The topic order is on the <Link href="/courses">forex course tracks</Link>.
              </p>
              <p>
                Practical sessions at the academy use StarTrader, a broker regulated by the UAE Securities and Commodities Authority, on MetaTrader 5. You open the account yourself. The course fee, quoted in AED when you enquire, and any balance at the broker are separate. The English recording below walks through opening an account and the MT5 layout, which is where the specification lives.
              </p>
              <p>
                <a href={STARTRADER_LIVE_URL} target="_blank" rel="sponsored noopener noreferrer">
                  Open a StarTrader live account
                </a>{" "}
                when you are ready for a live login. The academy&apos;s affiliate relationship is disclosed here. The academy does not hold the password and does not manage the funds.
              </p>

              <h2>Where this sits in the study order</h2>
              <p>
                Costs come after you can read a quote and before you size a trade. The <Link href="/blog">blog index</Link> lists that order. Abu Dhabi students use the same platform and the same dirham arithmetic. The drive-or-online choice is the <Link href="/forex-course-abu-dhabi">Abu Dhabi course page</Link>. If the next topic you wanted was liquidity rather than the cost of a pip, read <Link href="/blog-smart-money-concepts">smart money concepts</Link> so you ask for the track that teaches it. Reviews of the academy stay on Google. The <Link href="/success-stories">reviews page</Link> explains how to read the listing. To ask for a seat, use the <Link href="/contact">contact page</Link> or WhatsApp +971 55 904 7030. Name the track, group or private, and Dubai or online.
              </p>
              <AcademyLinks lead="The live classes that put these numbers on a chart are the" />
              <div className="blog-cta">
                <p>Bring the spread, the lot, and the swap to the first hour. The fee is quoted in AED.</p>
                <Link href="/courses" className="btn btn-primary">
                  View the course tracks
                </Link>
              </div>
            </div>
          </div>
        </section>

        <YouTubeSection
          videos={[VIDEOS.metatrader]}
          englishVideos={mt5English ? [mt5English] : []}
          title="Find the specification on MetaTrader 5"
          intro="The English lesson, from Equity Global English, shows how to open a broker account and use MetaTrader 5. That is where the symbol specification lists the contract size and the swap. It is not a lecture on pip value. The Malayalam tab is the Equity Global MT5 tutorial. Watch either before a class in Dubai, UAE, so the hour stays on your numbers."
        />
      </main>

      <Footer />
    </>
  );
}
