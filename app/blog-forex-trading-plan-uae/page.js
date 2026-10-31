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
import { SITE } from "../lib/site";
import { STARTRADER_LIVE_URL, whatsappHref } from "../lib/whatsapp";

const path = "/blog-forex-trading-plan-uae";
const headline = "How to Write a Forex Trading Plan and Journal in the UAE";
const description =
  "A simple forex trading plan and journal for learners in Dubai and the UAE: the rules before a session, and the notes after each trade.";

const brokerEnglish = ENGLISH_VIDEOS.find((video) => video.id === "bC097etTQeI");
const whatsapp = whatsappHref("Hi, I would like help building a forex trading plan in the UAE");

export const metadata = pageMetadata({
  title: "Forex Trading Plan for UAE Learners | Equity Fin Academy",
  description,
  keywords:
    "forex trading plan UAE, forex trading journal Dubai, trading plan for beginners UAE, forex education UAE, how to journal forex trades",
  path,
  type: "article",
});

const postSchema = articleSchema({
  headline,
  description,
  path,
  datePublished: "2026-10-28",
  type: "BlogPosting",
});

export default function ForexTradingPlanPost() {
  return (
    <>
      <JsonLd data={postSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Trading Plan and Journal", path },
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
              <span className="current">Trading Plan and Journal</span>
            </nav>

            <div className="blog-article">
              <span className="eyebrow">TRADING PLAN</span>
              <h1>{headline}</h1>
              <AuthorByline detail="28 Oct 2026 · 8 min read" />

              <p>
                A trading plan is what you write before the session. A journal is what you write after the trade. Learners in Dubai and the rest of the UAE can use the same page, because the country keeps one clock: Gulf Standard Time, UTC+4, all year. This guide is the blank page. It is not a strategy, and it does not tell you which pair will move tomorrow.
              </p>

              <h2>The plan, on one page</h2>
              <p>Six lines are enough. If you cannot say a line out loud, it is not ready.</p>
              <ul>
                <li>
                  <strong>Market.</strong> One symbol. EUR/USD is a fine start if you already watch it. Adding a second symbol in the same hour splits your attention.
                </li>
                <li>
                  <strong>Time.</strong> Which part of the day you will be at the screen, written in UAE time. London and New York hours, converted to that clock, are on the{" "}
                  <Link href="/blog-forex-market-hours-dubai">Dubai market-hours page</Link>. You do not have to sit the busy overlap. You do have to name the hour you will actually use.
                </li>
                <li>
                  <strong>Setup, in one sentence.</strong> An example of a sentence, not a recommendation: &quot;I only look for a trade in the direction of the last two swing highs and swing lows I marked.&quot; The words for those swings are in{" "}
                  <Link href="/blog-market-structure">market structure</Link>. A level you might use is in{" "}
                  <Link href="/blog-support-and-resistance-forex">support and resistance</Link>.
                </li>
                <li>
                  <strong>Risk in AED.</strong> The dirhams you can lose if the idea is wrong. How to arrive at a size is in{" "}
                  <Link href="/blog-risk-management">how much to risk per trade</Link>. Write the number down. Changing it after you are in the trade is a different decision, and the journal should say that you changed it.
                </li>
                <li>
                  <strong>Where the idea is wrong.</strong> The price, or the swing, that means you step aside. A plan without that line is a hope with a chart attached.
                </li>
                <li>
                  <strong>When you stop for the day.</strong> A number of attempts, or a time. This is the line that keeps a difficult morning from becoming a long afternoon.
                </li>
              </ul>

              <h2>The journal, after the trade</h2>
              <p>
                Fill this in the same day, in Gulf Standard Time, while you still remember why you clicked. A useful row has more than a profit or a loss.
              </p>
              <ul>
                <li>Date and time in GST.</li>
                <li>Symbol, and whether the ticket was demo or live.</li>
                <li>The plan line you were using, copied in a few words.</li>
                <li>Whether you followed it. Yes or no is enough. A paragraph of excuses is optional and usually less honest.</li>
                <li>One sentence on what you would repeat, or what you would leave out next time.</li>
                <li>The result in AED, if you want it. It can be a column. It should not be the only column.</li>
              </ul>
              <p>
                An example of a note, written as a blank you can copy, not as someone&apos;s trade: &quot;28 Oct 2026, 19:40 GST, EUR/USD, demo. Plan line: only in the direction of the swings I marked. Followed: no. I moved the stop. Next time the stop stays where the plan put it.&quot; There is no result in that example on purpose. The point of the row is the broken rule, not a dirham figure.
              </p>
              <p>
                Skipping the journal is one of the mistakes listed in{" "}
                <Link href="/blog-common-mistakes">seven beginner mistakes</Link>. The record is how you notice that you are repeating it.
              </p>

              <h2>What to leave off the page</h2>
              <p>
                A second setup for the same hour. A folder of screenshots with no sentence under them. A trade you took because someone else posted it. Three indicators you cannot explain. If a line does not change what you will do at the next candle, it is clutter.
              </p>
              <p>
                Candles still matter. If the sentence uses a pattern, you should be able to name it from{" "}
                <Link href="/blog-candlestick-patterns">the candlestick guide</Link>. If it uses liquidity or an order block, read{" "}
                <Link href="/blog-smart-money-concepts">smart money concepts</Link> first and make sure the swing is marked. A label without the swing is not a plan.
              </p>

              <h2>Demo first, then a live account</h2>
              <p>
                Keep the same columns on a demo account. The journal is more useful there if you still mark whether you followed the plan, because a demo result is easy to ignore. What a demo hides, and when a live account is the next step, is in{" "}
                <Link href="/blog-demo-vs-live-mt5-uae">demo versus live on MT5</Link>.
              </p>
              <p>
                To start trading you need MetaTrader 5 and an account with a trusted broker such as{" "}
                <a href={STARTRADER_LIVE_URL} target="_blank" rel="sponsored noopener noreferrer">
                  StarTrader
                </a>
                . Practical sessions at Equity Fin Academy use StarTrader, regulated by the UAE Securities and Commodities Authority. The link is the academy&apos;s affiliate link. You open the account. The academy does not hold the funds, and the course fee is separate from the balance. Install steps are in{" "}
                <Link href="/blog-start-forex-trading-uae-mt5">how to start forex trading in the UAE with MT5</Link>.
              </p>

              <h2>How a class in Dubai uses the pages</h2>
              <p>
                Bring the plan and a few journal rows to a group class or a private lesson. A group hour follows the shared syllabus on the <Link href="/courses">courses page</Link>. Your journal is how you show where you are in that list. A private hour can be spent on the rows, which is why{" "}
                <Link href="/blog-one-to-one-forex-classes-dubai">preparing for a one-to-one class</Link> asks you to arrive with one question. If the pages are meant to cover several weeks with a coach, read{" "}
                <Link href="/blog-personal-forex-coaching-uae">what a coaching plan looks like</Link> and the offer on{" "}
                <Link href="/forex-mentorship-dubai">forex mentorship in Dubai</Link>.
              </p>
              <p>
                People fitting this around a job should also read <Link href="/blog-forex-classes-working-professionals-dubai">classes for working professionals</Link>. Abu Dhabi students who will not drive every week should read the{" "}
                <Link href="/forex-course-abu-dhabi">Abu Dhabi course page</Link> and study online on the same clock. The instructor is <Link href="/about">Gopi Chandran</Link>. The academy is open 24/7 and rated 5.0 on Google from 30+ reviews. Read those reviews on the <Link href="/success-stories">reviews page</Link>. A rating is not a line in your journal.
              </p>

              <h2>Ask for a seat if you want the pages reviewed</h2>
              <p>
                You can write the plan alone. If you want someone to tell you the swing is the wrong one, enquire. Name the symbol, whether the journal is demo or live, and whether you want a group seat or a private lesson in Dubai or online. Ask for the fee in AED.
              </p>
              <p>
                Call <a href={`tel:${SITE.telephoneTel}`}>{SITE.telephoneDisplay}</a>, message on{" "}
                <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
                , or use the <Link href="/contact">contact form</Link>.
              </p>
              <AcademyLinks lead="The class that can review the plan is the" />
            </div>
          </div>
        </section>

        <YouTubeSection
          videos={[VIDEOS.howToStart, VIDEOS.metatrader]}
          englishVideos={[brokerEnglish]}
          title="Choose the broker, then write it into the plan"
          intro="The English lesson, from Equity Global English, looks at questions to ask when choosing a forex broker in the UAE. Use it when the plan needs a named broker, then open MetaTrader 5 yourself. The Malayalam tab has a beginner introduction and an MT5 tutorial from Equity Global. The recordings are a preview, not a class in Dubai, UAE."
        />

        <section className="tight">
          <div className="container">
            <div className="cta-banner reveal">
              <div>
                <h2>Write the plan, then bring it to class.</h2>
                <p>Group classes and private lessons in Dubai, UAE, and online across the UAE. The fee is quoted in AED.</p>
              </div>
              <div className="cta-row">
                <a href={whatsapp} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
                <Link href="/courses" className="btn btn-outline">
                  View courses
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
