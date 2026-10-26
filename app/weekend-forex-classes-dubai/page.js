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

const path = "/weekend-forex-classes-dubai";
const whatsapp = whatsappHref("Hi, I'd like weekend forex classes in Dubai");

export const metadata = pageMetadata({
  title: "Weekend Forex Classes in Dubai | Equity Fin Academy",
  description:
    "Weekend forex classes in Dubai and online across the UAE. Open Saturday and Sunday. No timetable is published. Ask for the next seat.",
  keywords:
    "weekend forex classes Dubai, Saturday forex course Dubai, Sunday forex class UAE, weekend trading course Dubai, part time forex course Dubai, online weekend forex class UAE",
  path,
});

const pageFaq = [
  {
    q: "Do you run weekend forex classes in Dubai?",
    text: "The academy is open 24/7, which includes Saturday and Sunday. There is no published weekly timetable, so a weekend seat is arranged when you enquire rather than taken from a printed calendar. WhatsApp +971 55 904 7030, name Saturday or Sunday, and ask whether the next opening is a private hour or a group seat.",
  },
  {
    q: "Can I join the weekend class online if I am not in Dubai?",
    text: "Yes. Online study covers the UAE, including Abu Dhabi, Sharjah, and the other emirates, on the same tracks and with the same instructor. In-person weekend classes, when one is arranged, are in Dubai. Say which you want.",
  },
  {
    q: "Is the forex market open on Saturday in the UAE?",
    text: "No. From Saturday morning until Monday morning, UAE time, the forex market is shut. A class can still meet. The chart will not be printing new candles. Live market hours, including the Sunday open in New York that falls in the early hours of Monday in the UAE, are explained on the market-hours page.",
  },
  {
    q: "Is a weekend class a different course?",
    text: "No. Weekend study uses the same two tracks: Basic to Intermediate, and Advanced Institutional Strategies. Private one-to-one lessons and group classes both include live trading sessions. The fee is quoted when you enquire. A weekend request is not a separate price list.",
  },
  {
    q: "What should I say when I ask for a weekend seat?",
    text: "Say Saturday or Sunday, private or group, beginner or advanced, and whether you will be in Dubai or online. If you can only protect one hour, name it. The academy is open 24/7 and will quote the fee with the next dates that fit.",
  },
];

export default function WeekendForexClassesDubaiPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Weekend Forex Classes in Dubai", path },
        ])}
      />
      <JsonLd data={faqPageSchema(pageFaq)} />
      <Header active="weekend-dubai" />
      <main>
        <section className="tight bg-glow" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span className="current">Weekend Forex Classes in Dubai</span>
            </nav>
            <span className="eyebrow">DUBAI · SATURDAY AND SUNDAY · ALSO ONLINE</span>
            <h1 className="hero-display" style={{ fontSize: "clamp(1.8rem,5vw,3.1rem)", maxWidth: "16ch" }}>
              Weekend Forex Classes in Dubai
            </h1>
            <p className="hero-sub" style={{ marginTop: 18, maxWidth: "68ch" }}>
              Weekend forex classes in Dubai are for people whose working week already owns the daytime. Equity Fin Academy is open 24/7, Saturday and Sunday included, in person in Dubai and online across the UAE. There is no printed timetable on this page. You name the hour you can keep, and the next seat is quoted with the fee.
            </p>
            <div className="topics-row" style={{ marginTop: 22 }}>
              <span className="topic-chip">Open Saturday and Sunday</span>
              <span className="topic-chip">Online across the UAE</span>
              <span className="topic-chip">2,000+ students trained</span>
            </div>
            <div className="cta-row" style={{ marginTop: 22 }}>
              <a href={whatsapp} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                WhatsApp +971 55 904 7030
              </a>
              <a href="tel:+971559047030" className="btn btn-outline">
                Call
              </a>
              <OpenChatLink className="btn btn-outline">Ask for a weekend seat</OpenChatLink>
            </div>
          </div>
        </section>

        <section>
          <div className="container prose-block">
            <h2>Why a weekend class is a scheduling question, not a different course</h2>
            <p>
              Most people looking for weekend forex classes in Dubai do not need a simpler syllabus. They need an hour that survives a job. Equity Fin Academy teaches the same two tracks on a weekday or a weekend: Basic to Intermediate, and Advanced Institutional Strategies. Gopi Chandran is the instructor either way. The academy is open 24/7. What changes is when you can sit down, and whether that hour is private or shared.
            </p>
            <p>
              There is no published weekly timetable, because dates move. This page will not invent a standing Saturday morning cohort to look helpful. When you enquire, name the times you can actually attend, including Saturday or Sunday, and ask whether the next opening is a private hour or a group seat. A private lesson is the easier format to place around a shift, because the hour is yours. A group cohort has a shared date, so you fit yourself to the class. Neither one is a recording you start whenever you like.
            </p>
            <p>
              The longer note on fitting a class around a working week, including evenings, is in{" "}
              <Link href="/blog-private-vs-group-forex-classes-dubai">private versus group classes</Link>. The room comparison, without the weekend detail, is{" "}
              <Link href="/private-group-forex-training-dubai">private and group training in Dubai</Link>. Read those if you are still choosing the format. Stay here if the only question is the calendar.
            </p>

            <h2>What you can study when the market is shut</h2>
            <p>
              The forex week follows New York. It opens at 17:00 New York time on Sunday, which is the early hours of Monday in the UAE, and it closes at 17:00 New York time on Friday, which is the early hours of Saturday in the UAE. When the United States is on daylight saving time, those moments fall near 01:00 Gulf Standard Time. When the United States is on standard time, they fall near 02:00. From Saturday morning until Monday morning, UAE time, the forex market is shut.
            </p>
            <p>
              A class can still meet in that window. The chart will not be printing new candles. That makes Saturday a strong hour for the work that does not need a live tick: marking structure on last week&apos;s swings, reviewing the orders you placed, and going back through a candle you misread. It is a poor hour if you only wanted to watch a live London move, because London is not in session. The full tables, including the late-afternoon overlap of London and New York in Gulf Standard Time, are in{" "}
              <Link href="/blog-forex-market-hours-dubai">forex market hours in Dubai</Link>. Read them before you ask for a &quot;live&quot; Saturday. The academy would rather move you to an hour when the market is open than pretend Saturday is New York.
            </p>
            <p>
              Sunday in the UAE is still inside that shut window until Monday morning. If the session you care about is the weekly open, say so, and ask for an hour that matches the clock rather than the word weekend. Students who work a normal daytime can often keep a weekday evening for the London and New York overlap, which in summer is about 16:00 to 20:00 Gulf Standard Time and in winter about 17:00 to 21:00. Weekend forex classes in Dubai are the alternative when those evenings are already gone.
            </p>

            <h2>The same two tracks, taught when you can attend</h2>
            <p>
              Basic to Intermediate is the starting point: the basics of forex, candlestick patterns, the HA pattern strategy, market structure, orders placed by smart money, imbalance, indicators, and the G.C. strategy. You do not skip it because your only free day is Saturday. Structure on a Saturday is the same structure. The classroom sequence is written up in{" "}
              <Link href="/blog-forex-course-dubai-beginners">what beginners should expect</Link>, and the topic list is on <Link href="/courses">Courses</Link>.
            </p>
            <p>
              Advanced Institutional Strategies is for people who already have that base. It adds fundamental analysis, tools used by institutions, market profile, volume with smart money concepts, Fibonacci, risk and psychology, and bot-trading concepts. Lifetime WhatsApp after the course is part of this track only, and it does not depend on whether you attended at the weekend. If smart money concepts are the reason you are booking, the class page is the{" "}
              <Link href="/smc-ict-trading-course-dubai">SMC and ICT trading course</Link>, and the definitions are in{" "}
              <Link href="/blog-smart-money-concepts">the SMC article</Link>.
            </p>
            <p>
              Both formats include live trading sessions and training. Practical work is on StarTrader, an SCA-regulated broker, using MetaTrader 5. You open the account yourself. The link is the academy&apos;s affiliate link:{" "}
              <a href={STARTRADER_LIVE_URL} target="_blank" rel="sponsored noopener noreferrer">
                StarTrader live account
              </a>
              . The academy does not manage the funds. Install the platform before you arrive if you can. The clicks are in{" "}
              <Link href="/blog-start-forex-trading-uae-mt5">how to start with MT5</Link>. Gold, indices, and stocks on that platform can be the chart you bring to a weekend hour, alongside forex. Say so if that is the symbol. The explanation is the{" "}
              <Link href="/stock-market-course-dubai">stock market course in Dubai</Link>.
            </p>

            <h2>In Dubai, or online from anywhere in the UAE</h2>
            <p>
              Come in person if you are in Dubai and a weekend trip to the class is realistic. The marketing pages do not print a floor or a building name. Ask on WhatsApp and you will be told where to come. The institute page, which describes the school rather than the calendar, is{" "}
              <Link href="/forex-training-academy-dubai">forex training academy Dubai</Link>.
            </p>
            <p>
              Join online if you are in Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, or Umm Al Quwain, or if you are in Dubai and would rather not cross the city on your day off. The instructor, the tracks, and the live sessions are the same. There is no second campus and no second syllabus for the weekend. The national page is{" "}
              <Link href="/forex-training-academy-uae">forex training academy UAE</Link>. The online sequence you can read before you book is{" "}
              <Link href="/online-forex-course-uae">the online forex course in the UAE</Link>. City notes for people comparing a drive with a laptop are on{" "}
              <Link href="/forex-course-abu-dhabi">Abu Dhabi</Link> and <Link href="/forex-course-sharjah">Sharjah</Link>.
            </p>
            <p>
              Gulf Standard Time does not change inside the UAE, so a student in another emirate is on the same clock as the room in Dubai. You do not need a second weekend timetable for the country. You do need to convert broker server time if you are checking candles on your own, because MetaTrader 5 often stamps them in a European offset. That warning, and the tables, live on the market-hours page. This page will not repeat the whole article.
            </p>

            <h2>How coaching fits a weekend, and what the fee depends on</h2>
            <p>
              A weekend hour with a trading coach is usually a private lesson: your chart, your questions, one sitting. Mentorship as a longer relationship, including the advanced-track WhatsApp after the course, is described on{" "}
              <Link href="/forex-mentorship-dubai">forex mentorship in Dubai</Link>. Use that page if you want the coaching named properly, and use this page if you want the day of the week named properly. They are not the same question.
            </p>
            <p>
              Forex course fees in Dubai are not printed, on a weekday or a weekend. The quote depends on the track, on whether you want a private hour or a group seat, and on the cohort you are joining. Nothing here says a Saturday costs more or less. Ask, and the reply will carry the figure. The factors are written out on{" "}
              <Link href="/forex-course-fees-dubai">forex course fees in Dubai (2026)</Link> and the included items are on <Link href="/pricing">pricing</Link>. Broker funding is separate from tuition.
            </p>
            <p>
              More than 2,000 students have been trained through Equity Global and live mentorship. The academy is rated 5.0 on Google from 30+ reviews. The channels carry 200+ YouTube reviews and comments. A weekend seat does not change those facts, and those facts do not change what your chart will do. Read the reviews on Google. The <Link href="/success-stories">reviews page</Link> explains why we do not write the quotes for you.
            </p>

            <h2>What to send so the weekend reply is useful</h2>
            <p>
              WhatsApp {SITE.telephoneDisplay} with five short lines. Saturday, Sunday, or either. Private or group. Beginner or already marking structure. In Dubai or online, and the emirate if you are outside Dubai. The symbol if it is not a major forex pair, for example gold or a stock. The academy is open 24/7, so a message sent on Friday night is not early. Call the same number if you would rather talk.
            </p>
            <p>
              If you are still deciding whether any academy is worth a weekend, use{" "}
              <Link href="/blog-choose-forex-academy-uae">how to choose a forex academy in the UAE</Link> and{" "}
              <Link href="/best-forex-course-dubai">how to judge a course in Dubai</Link>. Then come back and ask for the hour. English lessons you can play before that message are below. Malayalam recordings are on their own tab and are labelled Malayalam. The class, when you book it, is the live hour, not the video.
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
          videos={[VIDEOS.howToStart, VIDEOS.whatIsForex, VIDEOS.metatrader]}
          eyebrow="BEFORE THE WEEKEND"
          title="Use a free lesson to prepare, then book the live hour"
          intro="English lessons are listed first. The Malayalam tab has Equity Global introductions, including a MetaTrader 5 walkthrough. They are preparation for a weekend class, not a replacement for it."
          id="weekend-videos"
        />

        <section className="tight soft">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">QUESTIONS</span>
              <h2>Weekend forex classes in Dubai — common questions</h2>
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
