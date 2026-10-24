import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import YouTubeSection from "../components/YouTubeSection";
import Link from "next/link";
import { pageMetadata } from "../lib/seo";
import { articleSchema, breadcrumbSchema } from "../lib/schema";
import { VIDEOS } from "../lib/videos";

const path = "/blog-forex-course-dubai-beginners";
const headline = "Forex Course in Dubai for Beginners: What to Expect";

export const metadata = pageMetadata({
  title: `${headline} | Equity Fin Academy`,
  description:
    "What a beginner forex course in Dubai includes at Equity Fin Academy: the Basic to Intermediate group class in Dubai, the topics in order, and what is not promised.",
  keywords:
    "forex course Dubai for beginners, forex classes for beginners Dubai, what to expect forex course, group forex training classes Dubai, forex classes near me Dubai",
  path,
  type: "article",
});

const postSchema = articleSchema({
  headline,
  description:
    "What beginners actually study in the Dubai classroom, how a cohort runs, and which promises are not part of the course.",
  path,
  datePublished: "2026-10-23",
});

export default function BeginnersCoursePost() {
  return (
    <>
      <JsonLd data={postSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Forex Course for Beginners", path },
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
              <span className="current">Forex Course for Beginners</span>
            </nav>

            <div className="blog-article">
              <span className="eyebrow">BEGINNERS</span>
              <h1>Forex Course in Dubai for Beginners: What to Expect</h1>
              <div className="meta">By Gopi Chandran · Equity Fin Academy · 23 Oct 2026 · 8 min read</div>

              <p>
                A beginner forex course should feel slower than the ads. You are learning a market that can lose money,
                with a specific list of topics. This is that list for Equity Fin Academy in Dubai, UAE — what happens before you enrol, what the Basic to Intermediate class covers, and what we will
                not pretend is included.
              </p>

              <h2>Who the first track is for</h2>
              <p>
                Basic to Intermediate assumes no trading experience. If you already read market structure, look at Advanced Institutional Strategies instead. The split is on the{" "}
                <Link href="/courses">courses page</Link>. Starting on the advanced track to “save time” usually means
                sitting through vocabulary you do not have yet, which wastes the cohort rather than shortening it.
              </p>
              <p>
                You do not need trading capital to start learning. Capital matters later, on a demo and then on a small
                live account, and only with money you can afford to lose. That is also the answer in the{" "}
                <Link href="/faq">FAQ</Link>.
              </p>

              <h2>Before the first class</h2>
              <p>
                Enrolment is a conversation, not a checkout. Call or message, say what you have and have not done, and
                we place you on a track. Classes are group cohorts in Dubai, and private one-to-one lessons are
                available too, including live trading sessions and training. Read{" "}
                <Link href="/private-group-forex-training-dubai">private and group forex training</Link>{" "}
                before you book, so the format matches what you want.
              </p>
              <p>
                There is no weekly timetable published here, because dates move with the cohort. Ask for the next dates
                when you enquire. Fees move too. <Link href="/pricing">What the fee includes</Link> is public; the
                number is quoted to you.
              </p>
              <p>
                If you want a head start, read <Link href="/blog-candlestick-patterns">candlestick patterns</Link>,{" "}
                <Link href="/blog-risk-management">how much to risk per trade</Link>, and{" "}
                <Link href="/blog-start-forex-trading-uae-mt5">how to start on MetaTrader 5</Link>. The class will still teach them.
                Arriving with the words already familiar means your questions can be about your own chart.
              </p>

              <h2>What you actually study</h2>
              <p>The beginner track, in the order it is taught, covers:</p>
              <ul>
                <li>
                  <strong>Basics of forex.</strong> Pairs, pips, lots, leverage, and why leverage magnifies losses as
                  well as gains.
                </li>
                <li>
                  <strong>Candlestick patterns.</strong> What one candle records, then the handful of patterns worth
                  knowing before you collect fifty names.
                </li>
                <li>
                  <strong>Heikin Ashi as a tool, not a personality.</strong> The HA pattern work sits inside price
                  action, not instead of it.
                </li>
                <li>
                  <strong>Market structure.</strong> Swing highs and lows, trend versus range. This is the spine. The{" "}
                  <Link href="/blog-market-structure">explainer</Link> is the written version.
                </li>
                <li>
                  <strong>Where larger orders show up.</strong> Smart-money order placement and imbalance, introduced
                  only after structure is visible. The fuller SMC piece is a{" "}
                  <Link href="/blog-smart-money-concepts">separate article</Link>, not day-one homework.
                </li>
                <li>
                  <strong>A small set of indicators, and the G.C. strategy.</strong> Indicators describe price. They
                  do not replace the structure lesson that comes first.
                </li>
              </ul>
              <p>
                Practical screens use Star Trader, regulated by the SCA, so the buttons you learn are the buttons on a
                regulated account. That does not fund the account for you, and it does not make the trade safe.
              </p>

              <h2>What beginners should not expect</h2>
              <ul>
                <li>No guaranteed profit, and no “daily income” claim. Most new traders lose money. We will say that in class.</li>
                <li>No lifetime WhatsApp line on the beginner track. That support is part of Advanced Institutional Strategies, after the course, for questions.</li>
                <li>No second campus. Classes are in person in Dubai, UAE, and online across the UAE. The <Link href="/forex-academy-in-dubai">Dubai academy page</Link> is the location overview.</li>
                <li>A private one-to-one lesson is available, with live trading sessions. It is a separate booking from the group cohort, and the fee is quoted when you enquire.</li>
              </ul>
              <p>
                Common ways beginners damage an account — oversizing, revenge trades, strategy-hopping — are written up
                in <Link href="/blog-common-mistakes">seven mistakes</Link>. The course treats risk and patience as part
                of the subject, not as a disclaimer under a setup.
              </p>

              <h2>After the cohort</h2>
              <p>
                You leave with a way to read structure and a way to size risk. You do not leave with a finished trading
                career. The useful next step is a journal: what you saw, what you did, whether the risk was decided
                before the entry. Some students later take the advanced track. Some keep using the free Equity Global
                lessons. English recordings are listed first below, and Malayalam recordings are on the Malayalam tab. The articles on this site are in English.
              </p>
              <p>
                The instructor is <Link href="/about">Gopi Chandran</Link>. More than 2,000 students have been trained
                through that channel and live mentorship. The academy is rated 5.0 on Google from 30+ reviews, and the
                Equity Global channel has 200+ YouTube reviews and comments — check Google yourself rather than a quote
                reconstructed here. If you are still comparing schools, use{" "}
                <Link href="/blog-choose-forex-academy-uae">how to choose a forex academy in the UAE</Link> on us and on
                everyone else.
              </p>
              <p>
                To ask about the next beginner cohort, <Link href="/contact">contact the academy</Link> or call{" "}
                <a href="tel:+971559047030">+971 55 904 7030</a>.
              </p>
            </div>
          </div>
        </section>

        <YouTubeSection
          videos={[VIDEOS.whatIsForex, VIDEOS.metatrader]}
          title="Watch the introductions before your first class"
          intro="English lessons are listed first. The Malayalam tab has a forex introduction and a MetaTrader 5 walkthrough from Equity Global. They are optional preparation, not the cohort."
        />
      </main>

      <Footer />
    </>
  );
}
