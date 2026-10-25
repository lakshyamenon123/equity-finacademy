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

const path = "/stock-market-course-dubai";
const whatsapp = whatsappHref("Hi, I'm interested in the stock market course in Dubai");

export const metadata = pageMetadata({
  title: "Stock Market Course in Dubai | Equity Fin Academy",
  description:
    "Stock market course in Dubai and stock trading course in Dubai. Practise stocks, indices, and gold on MT5 alongside forex, in person or online across the UAE.",
  keywords:
    "stock market course dubai, stock trading course dubai, stock market classes Dubai, learn stocks Dubai, gold trading course Dubai, indices trading course UAE, MT5 stock trading Dubai",
  path,
});

const pageFaq = [
  {
    q: "Is this a stock market course in Dubai or a forex course?",
    text: "The published syllabus is the two forex tracks on the courses page. Practical work is on MetaTrader 5, so the same class can mark a stock, an index, gold, or a forex pair. Tell us which symbol you want when you enquire. There is no separate unpublished equities diploma.",
  },
  {
    q: "Can a stock trading course in Dubai cover gold and indices as well?",
    text: "Yes. Gold, as XAU/USD, is already one of the symbols the academy uses when it talks about charts. Indices and stocks are further symbols on MetaTrader 5 when the broker lists them. You practise them alongside forex, in the same live session, with the same instructor.",
  },
  {
    q: "Do I need trading experience before I join?",
    text: "No. Beginners start on Basic to Intermediate, even if the chart they care about is a stock or gold. Traders who already read swing highs and swing lows can ask about Advanced Institutional Strategies. Say how much chart time you have in the first message.",
  },
  {
    q: "Where do the practical sessions run?",
    text: "On StarTrader, an SCA-regulated broker, using MetaTrader 5. You open the account yourself. The academy shares its affiliate link and does not manage the funds. The course fee and the broker balance are separate. The fee is quoted when you enquire.",
  },
  {
    q: "Can I take the stock market classes online if I am outside Dubai?",
    text: "Yes. In-person classes are in Dubai. Online study covers the rest of the UAE, and Dubai students who would rather stay at their desk. The academy is open 24/7. Dates are quoted with the fee.",
  },
];

export default function StockMarketCourseDubaiPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Stock Market Course in Dubai", path },
        ])}
      />
      <JsonLd data={faqPageSchema(pageFaq)} />
      <Header active="stock-dubai" />
      <main>
        <section className="tight bg-glow" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span className="current">Stock Market Course in Dubai</span>
            </nav>
            <span className="eyebrow">DUBAI · STOCKS, INDICES, GOLD, AND FOREX</span>
            <h1 className="hero-display" style={{ fontSize: "clamp(1.8rem,5vw,3.1rem)", maxWidth: "16ch" }}>
              Stock Market Course in Dubai
            </h1>
            <p className="hero-sub" style={{ marginTop: 18, maxWidth: "68ch" }}>
              A stock market course in Dubai should name the chart you will mark and the person who will correct it. Equity Fin Academy teaches that chart work in person in Dubai and online across the UAE. A stock trading course in Dubai here means stocks, indices, and gold on MetaTrader 5, alongside forex, with live trading sessions.
            </p>
            <div className="topics-row" style={{ marginTop: 22 }}>
              <a className="topic-chip" href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">
                5.0 on Google from 30+ reviews
              </a>
              <span className="topic-chip">2,000+ students trained</span>
              <span className="topic-chip">Open 24/7</span>
            </div>
            <div className="cta-row" style={{ marginTop: 22 }}>
              <a href={whatsapp} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                WhatsApp +971 55 904 7030
              </a>
              <a href="tel:+971559047030" className="btn btn-outline">
                Call
              </a>
              <OpenChatLink className="btn btn-outline">Ask about a symbol</OpenChatLink>
            </div>
          </div>
        </section>

        <section>
          <div className="container prose-block">
            <h2>What a stock trading course in Dubai covers here</h2>
            <p>
              People search for a stock market course in Dubai because they already watch a share, an index, or gold, and they are tired of videos that never look at their chart. Equity Fin Academy is built for that conversation. Gopi Chandran teaches the classes. The academy is open 24/7. You do not have to guess whether a stock is allowed in the room. You name it, and the reply tells you the next dates and the fee.
            </p>
            <p>
              The published topic lists are the two tracks on the <Link href="/courses">courses page</Link>. There is no third syllabus hidden under a different name. Basic to Intermediate starts from the beginning: the basics of forex, candlestick patterns, the HA pattern strategy, market structure, orders placed by smart money, imbalance, indicators, and the G.C. strategy. Advanced Institutional Strategies is for people who already have that base. It covers fundamental analysis, tools used by institutions, market profile, volume with smart money concepts, Fibonacci, risk and psychology, bot-trading concepts, and lifetime WhatsApp after the course.
            </p>
            <p>
              Those topics are a way of reading a chart. A candle still shows the open, the high, the low, and the close when the symbol is a share. Market structure is still the sequence of swing highs and swing lows. Imbalance is still a fast move that left a visible gap between candles. A stock trading course in Dubai at this academy is that reading, pointed at the symbol you brought, taught in the same room as the forex work. If you want the forex offer written as a school, use the{" "}
              <Link href="/forex-training-academy-dubai">forex training academy Dubai</Link> page. This page is the same school, read from the symbols.
            </p>

            <h2>Stocks, indices, and gold on MetaTrader 5</h2>
            <p>
              Practical sessions use MetaTrader 5. You open the account yourself with StarTrader, a broker regulated by the UAE Securities and Commodities Authority. The link the academy shares is its affiliate link:{" "}
              <a href={STARTRADER_LIVE_URL} target="_blank" rel="sponsored noopener noreferrer">
                StarTrader live account
              </a>
              . The academy does not open the account for you, and it does not hold the balance. The course fee and the money in the broker account are two different things. Installing the platform is written up in{" "}
              <Link href="/blog-start-forex-trading-uae-mt5">how to start with MT5</Link>.
            </p>
            <p>
              The market watch on that platform is not limited to currencies. Gold is already part of how the academy talks about charts. XAU/USD sits next to EUR/USD, GBP/USD, and USD/JPY in the pairs used as examples across the site. An index is another line on the same watchlist. A stock is another line again, when the broker lists it. You do not need a second school, a second login, and a second vocabulary for each one. You learn one way of marking levels, then you change the symbol.
            </p>
            <p>
              Bring the name you actually follow. If you are not sure which stocks or indices the current broker watchlist offers, say that in the first message and the academy will tell you what is there to practise. The academy does not publish a list of shares to buy, and it does not pick a ticker for you in a blog post. The lesson is about reading the symbol in front of you. A free English preview of how US stock investing from the UAE is discussed on the academy channel is in the video section below. It is a preview of the explanation, not the cohort, and not a recommendation.
            </p>

            <h2>How the class runs, from beginner to advanced</h2>
            <p>
              You can join a group class on a shared syllabus, or book a private one-to-one lesson. Both include live trading sessions and training. The group is the better room when you want the topics in order and you are willing to hear questions you would not have asked. One person&apos;s confusion about an index candle is usually three people&apos;s confusion, and the answer lands once. The private hour is the better room when you already have a stock, a gold chart, or an index you trade, and you want the hour spent on that name.
            </p>
            <p>
              Beginners start on Basic to Intermediate even when the symbol they care about is gold or a stock. The advanced labels, including smart money concepts and market profile, come after structure is familiar. Traders who already mark swing points can ask for the advanced track. The comparison of the two rooms, without the symbol story, is on{" "}
              <Link href="/private-group-forex-training-dubai">private and group classes</Link>. If you want a coach on your own plan over time, rather than only a syllabus hour, read{" "}
              <Link href="/forex-mentorship-dubai">forex mentorship in Dubai</Link> and say which of those you mean.
            </p>
            <p>
              More than 2,000 students have been trained through Equity Global and live mentorship. The academy is rated 5.0 on Google from 30+ reviews. The Equity Global channels carry 200+ YouTube reviews and comments. Open the Google listing and read it yourself. This page does not invent quotes, and it does not promise what a share, an index, or a currency will do next.
            </p>

            <h2>Dubai in the room, and online across the UAE</h2>
            <p>
              Come in person if you are in Dubai or you can reach the class without the journey becoming the hard part. The marketing pages do not print a floor or a building name. Ask on WhatsApp and you will be told where to come. The city context, including why the Dubai clock overlaps the London and New York sessions, stays on the{" "}
              <Link href="/forex-academy-in-dubai">forex academy in Dubai</Link> page.
            </p>
            <p>
              Stay online if the drive is the reason you have not started. Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain use the same instructor and the same two tracks. Dubai students who would rather keep the chart on their own desk can take the online seat as well. Sharjah and Abu Dhabi have their own notes on the{" "}
              <Link href="/forex-course-sharjah">Sharjah course page</Link> and the{" "}
              <Link href="/forex-course-abu-dhabi">Abu Dhabi course page</Link>. The national version of the offer is the{" "}
              <Link href="/forex-training-academy-uae">forex training academy UAE</Link> page.
            </p>
            <p>
              If your working week already fills the daytime, a weekend seat is something you ask for rather than something this page pretends is printed on a calendar. The academy is open Saturday and Sunday because it is open 24/7. How that is arranged is on{" "}
              <Link href="/weekend-forex-classes-dubai">weekend forex classes in Dubai</Link>. The forex market itself is shut from Saturday morning until Monday morning, UAE time, so a Saturday meeting can still teach. It will not show new candles. That clock is explained in{" "}
              <Link href="/blog-forex-market-hours-dubai">forex market hours in Dubai</Link>.
            </p>

            <h2>How the method is taught before you pay</h2>
            <p>
              Candles come before nicknames. If you cannot yet say what a swing high is, start with{" "}
              <Link href="/blog-candlestick-patterns">candlestick patterns</Link> and{" "}
              <Link href="/blog-market-structure">market structure</Link>. Support and resistance, the plain version of marking where price has stalled, is in{" "}
              <Link href="/blog-support-and-resistance-forex">the support and resistance guide</Link>. Smart money concepts, which the advanced track teaches after that base, are explained without the classroom timetable in{" "}
              <Link href="/blog-smart-money-concepts">the SMC article</Link>. The course that teaches them live is the{" "}
              <Link href="/smc-ict-trading-course-dubai">SMC and ICT trading course in Dubai</Link>.
            </p>
            <p>
              Read those pages if you want the vocabulary. They are not a substitute for someone watching you place the level. A stock market course in Dubai is worth the enquiry when you want that correction on a symbol you already care about. Compare schools with the checklist on{" "}
              <Link href="/best-forex-course-dubai">how to judge a course in Dubai</Link> and{" "}
              <Link href="/blog-choose-forex-academy-uae">how to choose an academy in the UAE</Link>. Then decide.
            </p>

            <h2>What to send when you ask for a seat</h2>
            <p>
              WhatsApp {SITE.telephoneDisplay} or open the chat. Say whether the first chart should be a stock, an index, gold, or a forex pair. Say private or group. Say whether you have used a chart before. The fee is quoted in the reply, because it is not printed on the site. What changes a quote is written out on the{" "}
              <Link href="/forex-course-fees-dubai">forex course fees in Dubai</Link> page, and what each track includes is on <Link href="/pricing">pricing</Link>.
            </p>
            <p>
              The academy is open 24/7, so the message does not have to wait for a weekday morning. If you would rather talk, call {SITE.telephoneDisplay}. English lessons from Equity Global English are below, newest first, including the recording that discusses US stocks from the UAE. Malayalam recordings are on the second tab and are labelled Malayalam.
            </p>
            <div className="cta-row">
              <a href={whatsapp} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                WhatsApp +971 55 904 7030
              </a>
              <OpenChatLink className="btn btn-outline">Open the chat</OpenChatLink>
              <a href="tel:+971559047030" className="btn btn-outline">
                Call {SITE.telephoneDisplay}
              </a>
            </div>
          </div>
        </section>

        <YouTubeSection
          videos={[VIDEOS.metatrader, VIDEOS.howToStart, VIDEOS.whatIsForex]}
          eyebrow="ENGLISH FIRST"
          title="Watch the platform lesson before you book a symbol"
          intro="English recordings are listed first, including the Equity Global English lesson on choosing a broker in the UAE and US stocks from the UAE. Malayalam recordings are on the Malayalam tab. Press play to load a video."
          id="stock-course-videos"
        />

        <section className="tight soft">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">QUESTIONS</span>
              <h2>Stock market course in Dubai — common questions</h2>
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
