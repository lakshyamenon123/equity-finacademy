import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import YouTubeSection from "../components/YouTubeSection";
import AcademyLinks from "../components/AcademyLinks";
import Link from "next/link";
import { pageMetadata } from "../lib/seo";
import { articleSchema, breadcrumbSchema } from "../lib/schema";
import { ENGLISH_VIDEOS, VIDEOS } from "../lib/videos";
import { SITE } from "../lib/site";
import { MT5_URL, STARTRADER_LIVE_URL, whatsappHref } from "../lib/whatsapp";

const path = "/blog-demo-vs-live-mt5-uae";
const headline = "Demo versus live: practising on MT5 before you trade in the UAE";
const description =
  "What a MetaTrader 5 demo account teaches, what it hides, and when a UAE trader should open a live account with an SCA-regulated broker.";

const mt5English = ENGLISH_VIDEOS.find((video) => video.id === "ssUPlUHnDLo");
const brokerEnglish = ENGLISH_VIDEOS.find((video) => video.id === "bC097etTQeI");
const whatsapp = whatsappHref("Hi, I would like to practise on MT5 before a live account");

export const metadata = pageMetadata({
  title: "Demo vs Live MT5 Accounts in the UAE | Equity Fin Academy",
  description,
  keywords:
    "demo vs live account MT5 UAE, MetaTrader 5 demo account Dubai, forex demo account UAE, when to go live forex Dubai, StarTrader MT5",
  path,
  type: "article",
});

const postSchema = articleSchema({
  headline,
  description,
  path,
  datePublished: "2026-10-27",
  type: "BlogPosting",
});

export default function DemoVsLiveMt5Post() {
  return (
    <>
      <JsonLd data={postSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Demo vs Live on MT5", path },
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
              <span className="current">Demo vs Live on MT5</span>
            </nav>

            <div className="blog-article">
              <span className="eyebrow">PRACTICE</span>
              <h1>{headline}</h1>
              <div className="meta">By Gopi Chandran · Equity Fin Academy · 27 Oct 2026 · 8 min read</div>

              <p>
                A MetaTrader 5 demo account and a live account share the same screen. They do not share the same
                lesson. The demo account is where you learn the buttons and the chart without sending dirhams. The
                live account is where size, slippage, and your own hesitation show up. In the UAE, the live account
                should be with a broker you can name, and the course fee at Equity Fin Academy is a separate payment.
              </p>

              <h2>What the demo account is for</h2>
              <p>
                Use the demo to learn the desk. Market Watch, the chart, the timeframe buttons, and the New Order
                ticket are the same objects you will see later. Place a trade with a stop loss and a small volume,
                then find that trade in the Toolbox. If you cannot point at the stop after you have sent the ticket,
                you are not ready to fund anything. The install, the server name, and the first login are covered in{" "}
                <Link href="/blog-start-forex-trading-uae-mt5">how to start forex trading in the UAE with MT5</Link>.
                This page starts after the platform is open.
              </p>
              <p>
                A useful demo week is a journal, not a scoreboard. For each ticket write the pair, the timeframe, the
                swing you used, the stop, and whether the size was chosen before the entry. Read{" "}
                <Link href="/blog-risk-management">how much to risk per trade</Link> so the volume is a number you can
                explain in AED, even while the balance is virtual. Then read{" "}
                <Link href="/blog-market-structure">market structure</Link> if the swing itself is still a guess.
              </p>

              <h2>What the demo account hides</h2>
              <p>
                Demo fills are often cleaner than live fills. A quiet demo ticket can become a slipped live ticket
                when the spread widens at the London and New York overlap. The clock for that overlap, in Gulf
                Standard Time, is on the <Link href="/blog-forex-market-hours-dubai">Dubai market-hours page</Link>.
                The demo balance also resets the feeling. Losing virtual dirhams does not feel like losing money you
                earned in Dubai. That gap is the reason a green demo week is not evidence you should increase size.
              </p>
              <ul>
                <li>Spreads and slippage on a live ticket can be worse than the demo showed, especially in a fast hour.</li>
                <li>A demo balance that you can top up teaches a habit of adding money after a loss. A live account does not forgive that habit.</li>
                <li>Indicators and templates carry over. Discipline does not. The ticket still needs a stop you chose first.</li>
                <li>A demo server can differ from the live server your broker assigns. Check the server name in the login window rather than assuming they match.</li>
              </ul>

              <h2>When a live account is the next step</h2>
              <p>
                Move when you can describe one trade without looking at the result: where price was in the structure,
                where the stop was, and what the loss would be in AED if the stop was hit. That is a process check.
                It is not a winning streak. A run of demo winners is a weak reason to deposit. A written rule you
                have followed for a set of trades is a better one.
              </p>
              <p>
                Keep the first live size smaller than the demo size you were comfortable with. The point of the first
                live tickets is to feel the difference, not to recover a target. If you cannot watch the position
                without moving the stop further away, go back to the demo and to the{" "}
                <Link href="/blog-common-mistakes">mistakes beginners repeat</Link>. The academy will not tell you a
                deposit amount. The broker sets the minimum. You choose the amount you can lose without it changing
                your rent.
              </p>

              <h2>Which live account the classes use</h2>
              <p>
                Practical sessions at Equity Fin Academy use{" "}
                <a href={STARTRADER_LIVE_URL} target="_blank" rel="sponsored noopener noreferrer">
                  StarTrader
                </a>
                , regulated by the UAE Securities and Commodities Authority, on MetaTrader 5. The link is the
                academy&apos;s affiliate link. You open the account yourself. The academy does not hold the funds and
                does not log in for you. Download MT5 from{" "}
                <a href={MT5_URL} target="_blank" rel="noopener noreferrer">
                  metatrader5.com
                </a>{" "}
                or the official app stores, not from a file in a chat.
              </p>
              <p>
                The course fee, quoted in AED when you <Link href="/contact">enquire</Link>, is not a broker deposit.
                Paying for a class does not open the live account, and opening the live account does not enrol you.
                Questions to ask about a broker, before you fund it, are a separate skill. The English lesson linked
                below walks through that conversation. It is a preview from Equity Global English, not a recommendation
                to skip the documents the broker asks for.
              </p>

              <h2>How a class in Dubai uses the two accounts</h2>
              <p>
                In the Basic to Intermediate track, the first platform work can stay on demo while candlesticks,
                structure, and risk are still new. Live trading sessions are part of both the group class and the
                private lesson. The instructor can watch a demo ticket and a live ticket. The syllabus does not
                require you to deposit before the first hour. The topic list is on the <Link href="/courses">courses page</Link>.
              </p>
              <p>
                A private hour is the place to put your own demo journal on the screen. A group hour follows the
                shared sequence. The difference is explained in{" "}
                <Link href="/blog-private-vs-group-forex-classes-dubai">private versus group classes</Link> and on the{" "}
                <Link href="/private-group-forex-training-dubai">private and group training page</Link>. If your
                practice has to happen after a job in Dubai, read{" "}
                <Link href="/blog-forex-classes-working-professionals-dubai">forex classes for working professionals</Link>{" "}
                and book the hour you can keep. Students in Abu Dhabi are on the same Gulf Standard Time. The{" "}
                <Link href="/forex-course-abu-dhabi">Abu Dhabi course page</Link> covers the drive and the online seat.
              </p>
              <p>
                Smart money concepts are a later layer. Practise structure on the demo before you rename a candle an
                order block. The definitions are in <Link href="/blog-smart-money-concepts">the SMC article</Link>.
                The instructor is <Link href="/about">Gopi Chandran</Link>. The academy is rated 5.0 on Google from
                30+ reviews, and more than 2,000 students have trained through Equity Global and live classes. Those
                numbers are not a promise about the next ticket you send. Reviews are linked from the{" "}
                <Link href="/success-stories">reviews page</Link>.
              </p>

              <h2>Ask before you fund</h2>
              <p>
                If you want the sequence taught rather than read, say whether you are still on demo or already live,
                and whether you want a group seat or a private lesson in Dubai or online. Call{" "}
                <a href={`tel:${SITE.telephoneTel}`}>{SITE.telephoneDisplay}</a> or message on{" "}
                <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
                . The <Link href="/contact">contact page</Link> has the same enquiry. The academy is open 24/7.
              </p>
              <AcademyLinks lead="When you want that practice corrected live, the class is the" />
            </div>
          </div>
        </section>

        <YouTubeSection
          videos={[VIDEOS.metatrader]}
          englishVideos={[mt5English, brokerEnglish]}
          title="Watch the platform, then the broker questions"
          intro="Two English lessons from Equity Global English: using MetaTrader 5, and questions to ask before you trust a forex broker in the UAE. The Malayalam tab is the Equity Global MT5 tutorial. None of these recordings replaces a live class in Dubai, UAE, or online across the UAE."
        />

        <section className="tight">
          <div className="container">
            <div className="cta-banner reveal">
              <div>
                <h2>Bring the demo journal to a live class.</h2>
                <p>Group classes and private lessons in Dubai, UAE, with live trading sessions. Ask for the next dates.</p>
              </div>
              <div className="cta-row">
                <a href={whatsapp} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
                <Link href="/courses" className="btn btn-outline">
                  View Courses
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
