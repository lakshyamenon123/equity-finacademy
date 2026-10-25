import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import RelatedTraining from "../components/RelatedTraining";
import YouTubeSection from "../components/YouTubeSection";
import Link from "next/link";
import OpenChatLink from "../components/OpenChatLink";
import { pageMetadata } from "../lib/seo";
import { breadcrumbSchema, faqPageSchema } from "../lib/schema";
import { SITE } from "../lib/site";
import { VIDEOS } from "../lib/videos";
import { STARTRADER_LIVE_URL, whatsappHref } from "../lib/whatsapp";

const path = "/smc-ict-trading-course-dubai";
const whatsapp = whatsappHref("Hi, I'm interested in the SMC and ICT trading course in Dubai");

export const metadata = pageMetadata({
  title: "SMC and ICT Trading Course in Dubai | Equity Fin Academy",
  description:
    "Smart money concepts and ICT trading course in Dubai. Liquidity, imbalance, and order blocks, taught after market structure, in person or online across the UAE.",
  keywords:
    "SMC trading course Dubai, ICT trading course Dubai, smart money concepts course Dubai, ICT concepts course UAE, order block course Dubai, liquidity trading course Dubai",
  path,
});

const pageFaq = [
  {
    q: "What is the SMC and ICT trading course in Dubai?",
    text: "It is Equity Fin Academy's live teaching of smart money concepts: liquidity, imbalance, and order blocks, built on market structure. ICT is the name many traders use for that style of reading. The ideas are taught inside the two published tracks, not as a separate unlisted module. Gopi Chandran teaches them in Dubai and online across the UAE.",
  },
  {
    q: "Do I need market structure before SMC or ICT?",
    text: "Yes. A liquidity sweep is defined against a swing high or swing low. Without that, the vocabulary is pattern-matching. Beginners start on Basic to Intermediate, which includes orders placed by smart money and imbalance after candles and structure. Market profile and volume with SMC are on the advanced track.",
  },
  {
    q: "Is this an official ICT certification?",
    text: "No. The academy does not claim a licence, badge, or partnership from any ICT brand. It teaches the chart ideas under its own topic names, in its own classroom, with its own instructor. Read the plain-language article on smart money concepts before you compare that with anyone else's brochure.",
  },
  {
    q: "Are SMC and ICT only for advanced students?",
    text: "The words appear on both tracks, at different depths. Basic to Intermediate includes orders placed by smart money and imbalance in the market. Advanced Institutional Strategies includes volume with SMC, market profile, Fibonacci, and risk and psychology. Lifetime WhatsApp after the course is advanced only.",
  },
  {
    q: "How do I enrol, and what does it cost?",
    text: "WhatsApp +971 55 904 7030 or use the chat. Say whether you already read market structure, and whether you want a group seat or a private lesson. The fee is quoted when you enquire and is not published. The academy is open 24/7.",
  },
];

export default function SmcIctTradingCourseDubaiPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "SMC and ICT Trading Course in Dubai", path },
        ])}
      />
      <JsonLd data={faqPageSchema(pageFaq)} />
      <Header active="smc-dubai" />
      <main>
        <section className="tight bg-glow" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span className="current">SMC and ICT Trading Course in Dubai</span>
            </nav>
            <span className="eyebrow">DUBAI · SMART MONEY CONCEPTS · ICT</span>
            <h1 className="hero-display" style={{ fontSize: "clamp(1.8rem,5vw,3.1rem)", maxWidth: "16ch" }}>
              SMC and ICT Trading Course in Dubai
            </h1>
            <p className="hero-sub" style={{ marginTop: 18, maxWidth: "68ch" }}>
              An SMC and ICT trading course in Dubai should teach you to see liquidity and imbalance on a chart you can point at, after you can already see market structure. Equity Fin Academy teaches that sequence live, in Dubai and online across the UAE. The plain-language version, without the enrolment detail, is the{" "}
              <Link href="/blog-smart-money-concepts">smart money concepts article</Link>.
            </p>
            <div className="cta-row" style={{ marginTop: 22 }}>
              <a href={whatsapp} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                WhatsApp +971 55 904 7030
              </a>
              <Link href="/blog-smart-money-concepts" className="btn btn-outline">
                Read the SMC article
              </Link>
              <OpenChatLink className="btn btn-outline">Ask which track</OpenChatLink>
            </div>
          </div>
        </section>

        <section>
          <div className="container prose-block">
            <h2>What SMC and ICT mean in this classroom</h2>
            <p>
              Smart money concepts, usually shortened to SMC, are a way of reading a forex chart by asking where liquidity sits and where price moved so fast that it left an imbalance. The name points at large participants, because size is what makes those footprints visible. It does not mean the academy knows what any particular bank did this morning. It means the class teaches a set of ideas for interpreting price that line up with how large orders meet resting liquidity.
            </p>
            <p>
              ICT is the name many traders use for the same family of ideas. You will see it on videos and in course titles across Dubai. In this academy it is not a separate product and not a badge. There is no claim of an official ICT certification, a licence, or a partnership. The chart ideas are taught under the topic names already published on the <Link href="/courses">courses page</Link>: orders placed by smart money, imbalance in the market, and, on the advanced track, volume with SMC and market profile. If you searched for an ICT trading course in Dubai, you are in the right room as long as you want those ideas taught live by <Link href="/about">Gopi Chandran</Link>, not a certificate with someone else&apos;s logo.
            </p>
            <p>
              The article that defines the words, slowly, is{" "}
              <Link href="/blog-smart-money-concepts">Smart Money Concepts explained</Link>. Read it before you enquire if the vocabulary is new. This page will not paste that article again. It will tell you where the ideas sit in the course, who the class is for, and how a session runs.
            </p>

            <h2>The ideas, in the order the class uses them</h2>
            <p>
              Liquidity is the cluster of orders that tends to sit just beyond an obvious swing high or swing low. A liquidity grab, sometimes called a sweep, is a push beyond that swing which triggers those orders and then turns. You cannot call a sweep until you can point at the swing. That is why <Link href="/blog-market-structure">market structure</Link> comes first, in the blog and in the room.
            </p>
            <p>
              Imbalance, often called a fair value gap, is a stretch of the chart where price moved so quickly that it left a gap between candles. Traders treat that gap as a place price may return to. An order block, in the same language, is the last opposing candle before a strong structural move, treated as a zone to watch rather than as a promise. A change of character is an early break in the sequence of highs and lows, a hint that the swing you were trading may be ending. Every one of those sentences depends on structure. Learning the nicknames first is how people collect screenshots and still cannot say what the chart is doing.
            </p>
            <p>
              Basic to Intermediate introduces this after candles and structure. The published lines are &quot;Orders Placed by Smart Money&quot; and &quot;Imbalance in the Market&quot;, alongside candlestick patterns, the HA pattern strategy, indicators, and the G.C. strategy. Advanced Institutional Strategies assumes that base and goes further: tools used by institutions, market profile, volume with SMC, Fibonacci retracement, risk and psychology, and bot-trading concepts. Lifetime WhatsApp after the course belongs to the advanced track only.
            </p>
            <p>
              Support and resistance, the plainer cousin of these zones, is taught as its own idea in{" "}
              <Link href="/blog-support-and-resistance-forex">the support and resistance guide</Link>. Students who skip it and jump to order blocks usually redraw the same level three times under three names. The class will not let you do that. Candles, the marks those levels are made of, are in{" "}
              <Link href="/blog-candlestick-patterns">the candlestick article</Link>.
            </p>

            <h2>How a live SMC session is different from a playlist</h2>
            <p>
              A video can define an order block. It cannot see the one you just drew on the wrong swing. The class exists for that correction. You put MetaTrader 5 on the screen. The instructor marks the swing, then the liquidity beyond it, then asks you to say whether the last push was a sweep or just a break. If you are wrong, you hear it before the session ends. That is the test of an SMC trading course in Dubai. Definitions are free. Correction is the reason you book a seat.
            </p>
            <p>
              Practical sessions use StarTrader, an SCA-regulated broker. You open the account yourself. The academy&apos;s link is its affiliate link:{" "}
              <a href={STARTRADER_LIVE_URL} target="_blank" rel="sponsored noopener noreferrer">
                StarTrader live account
              </a>
              . The academy does not manage the funds. The course fee and the broker balance are separate. Platform setup is in{" "}
              <Link href="/blog-start-forex-trading-uae-mt5">how to start with MT5</Link>. The same platform is where gold, indices, and stocks are marked when you want SMC read on those symbols as well as on forex. That symbol choice is explained on the{" "}
              <Link href="/stock-market-course-dubai">stock market course page</Link>. The method does not change with the ticker.
            </p>
            <p>
              Group classes put several students on the same chart, which is useful, because a bad order block is rarely only yours. Private one-to-one lessons put the hour on the chart you already trade. Both include live trading sessions. The rooms are compared on{" "}
              <Link href="/private-group-forex-training-dubai">the private and group page</Link>. If what you want is a coach on your plan, including WhatsApp after the advanced course, read{" "}
              <Link href="/forex-mentorship-dubai">forex mentorship in Dubai</Link> and use those words when you enquire.
            </p>

            <h2>Who should start now, and who should wait a month</h2>
            <p>
              Start on Basic to Intermediate if phrases like swing high, bullish candle, and session time are still fuzzy. You will meet smart money ideas inside that track, after the foundation, which is the point. Forcing an ICT trading course in Dubai onto a student who cannot yet mark structure is how the words become superstition. The beginner sequence, topic by topic, is{" "}
              <Link href="/blog-forex-course-dubai-beginners">what a beginner course covers</Link>.
            </p>
            <p>
              Move to the advanced track if you already mark structure and you want market profile and volume with SMC, with Fibonacci and the psychology work beside them. Say how long you have been marking charts when you message. The academy would rather put you on the shorter track than let you nod through a lesson you cannot yet use. More than 2,000 students have been trained through Equity Global and live mentorship. The academy is rated 5.0 on Google from 30+ reviews, with 200+ YouTube reviews and comments. None of that replaces the placement question.
            </p>
            <p>
              The academy does not sell the idea that SMC lets you trade like a bank, or that a fair value gap is a certainty. The blog states the misconception directly, and the class holds the same line. The framework is one way to interpret price. It sits inside a plan that includes the risk and psychology topics on the advanced track. If another school promises certainty from the vocabulary, compare it with{" "}
              <Link href="/blog-choose-forex-academy-uae">how to choose an academy in the UAE</Link> before you pay.
            </p>

            <h2>Where you sit, and when</h2>
            <p>
              Classes are in person in Dubai and online across the UAE. The marketing pages do not print a floor or a building name. Ask where to come and you will be told. The school, written as an institute rather than as a topic, is the{" "}
              <Link href="/forex-training-academy-dubai">forex training academy Dubai</Link> page. Students in other emirates should also read the{" "}
              <Link href="/forex-training-academy-uae">UAE training page</Link>, plus the notes for{" "}
              <Link href="/forex-course-abu-dhabi">Abu Dhabi</Link> and <Link href="/forex-course-sharjah">Sharjah</Link>.
            </p>
            <p>
              The academy is open 24/7. There is no printed weekly timetable. If you need a Saturday or a Sunday, say so. Weekend study, and the hours when the forex market is actually shut, are on{" "}
              <Link href="/weekend-forex-classes-dubai">weekend forex classes in Dubai</Link>. SMC does not require the market to be open for a review of last week&apos;s sweeps. Live candles, when you want them, follow the clock in{" "}
              <Link href="/blog-forex-market-hours-dubai">forex market hours in Dubai</Link>.
            </p>

            <h2>How to enquire without using the jargon as a disguise</h2>
            <p>
              WhatsApp {SITE.telephoneDisplay}. You do not need to perform the vocabulary. &quot;I can mark a swing high and I want the imbalance lesson&quot; is a clear message. &quot;I have only watched videos&quot; is a clearer one. Say private or group, Dubai or online, and whether a weekend is the only hour you can keep. The fee is quoted in the reply. What changes it is on{" "}
              <Link href="/forex-course-fees-dubai">forex course fees in Dubai</Link> and on <Link href="/pricing">pricing</Link>. The <Link href="/faq">FAQ</Link> has the shorter answers.
            </p>
            <p>
              English recordings are below, newest first on the English tab. Malayalam recordings are labelled and kept on their own tab. Watch one lesson if you want to hear how a topic is explained. Then book the class if you want someone to correct the chart in your hands. The academy is open 24/7.
            </p>
            <div className="cta-row">
              <a href={whatsapp} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                WhatsApp +971 55 904 7030
              </a>
              <Link href="/blog-smart-money-concepts" className="btn btn-outline">
                Read the SMC explainer
              </Link>
              <OpenChatLink className="btn btn-outline">Open the chat</OpenChatLink>
            </div>
          </div>
        </section>

        <YouTubeSection
          videos={[VIDEOS.howToStart, VIDEOS.metatrader, VIDEOS.whatIsForex]}
          eyebrow="BEFORE THE JARGON"
          title="Watch a plain lesson, then come back to the SMC page"
          intro="English lessons are listed first. The Malayalam tab has Equity Global introductions. SMC and ICT are taught live after this kind of foundation, not instead of it."
          id="smc-course-videos"
        />

        <section className="tight soft">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">QUESTIONS</span>
              <h2>SMC and ICT course in Dubai — common questions</h2>
            </div>
            <div className="faq-list">
              {pageFaq.map((item) => (
                <details key={item.q}>
                  <summary>
                    {item.q}
                    <span className="plus">+</span>
                  </summary>
                  <p>{item.text}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="tight">
          <div className="container">
            <RelatedTraining current={path} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
