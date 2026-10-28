import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import RelatedTraining from "../components/RelatedTraining";
import YouTubeSection from "../components/YouTubeSection";
import Link from "next/link";
import OpenChatLink from "../components/OpenChatLink";
import { pageMetadata } from "../lib/seo";
import { breadcrumbSchema, faqPageSchema } from "../lib/schema";
import { ENGLISH_VIDEOS, VIDEOS } from "../lib/videos";
import { STARTRADER_LIVE_URL } from "../lib/whatsapp";

const path = "/forex-course-abu-dhabi";
const mt5English = ENGLISH_VIDEOS.find((video) => video.id === "ssUPlUHnDLo");

export const metadata = pageMetadata({
  title: "Forex Course for Abu Dhabi Students | Equity Fin Academy",
  description:
    "Forex course options for Abu Dhabi residents: study online on Gulf Standard Time, or attend class in Dubai. How that choice differs from Sharjah.",
  keywords:
    "forex course Abu Dhabi, forex training Abu Dhabi, online forex course Abu Dhabi, forex classes Abu Dhabi to Dubai, learn forex trading Abu Dhabi",
  path,
});

const pageFaq = [
  {
    q: "Is there an Equity Fin Academy campus in Abu Dhabi?",
    text: "No. In-person classes are in Dubai, UAE. You can also learn online across the UAE. There is no Abu Dhabi classroom.",
  },
  {
    q: "What will I study if I travel from Abu Dhabi?",
    text: "The same two tracks as Dubai students: Basic to Intermediate, or Advanced Institutional Strategies if you already know forex fundamentals and market structure. Practical sessions use Star Trader, an SCA-regulated broker.",
  },
  {
    q: "Can I start learning before I make the trip?",
    text: "Yes. Read the blog and watch the Equity Global lessons, then call so the visit is booked around a real conversation about which track fits.",
  },
  {
    q: "Should I drive from Abu Dhabi every week?",
    text: "Only if that drive is already a normal part of your week. Many Abu Dhabi students take the same syllabus online on Gulf Standard Time, or visit Dubai once and then continue on a screen. The course does not change. The journey does.",
  },
  {
    q: "Is the online course a different syllabus from the Dubai classroom?",
    text: "No. Basic to Intermediate and Advanced Institutional Strategies are the same two tracks. Online study is the same instructor and the same topic order, without the drive from Abu Dhabi.",
  },
];

export default function ForexCourseAbuDhabiPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Forex Course in Abu Dhabi", path },
        ])}
      />
      <JsonLd data={faqPageSchema(pageFaq)} />
      <Header active="abu-dhabi" />

      <main>
        <section className="tight bg-glow" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span className="current">Forex Course in Abu Dhabi</span>
            </nav>
            <span className="eyebrow">ABU DHABI STUDENTS · CLASSROOM IN DUBAI</span>
            <h1 className="hero-display" style={{ fontSize: "clamp(1.8rem,5vw,3.1rem)", maxWidth: "18ch" }}>
              A forex course Abu Dhabi residents can attend in Dubai.
            </h1>
            <p className="hero-sub" style={{ marginTop: 18, maxWidth: "64ch" }}>
              Equity Fin Academy does not run a classroom in Abu Dhabi. Classes are in person in Dubai, UAE, and online across the UAE. This page is for people comparing forex training from Abu Dhabi: what the
              trip is for, what you will actually learn, and what you can study before you travel.
            </p>
            <div className="cta-row" style={{ marginTop: 28 }}>
              <a href="tel:+971559047030" className="btn btn-outline">
                Call +971 55 904 7030
              </a>
              <OpenChatLink className="btn btn-primary">Book a Seat</OpenChatLink>
            </div>
          </div>
        </section>

        <section>
          <div className="container prose-block">
            <span className="eyebrow">LOCATION, STATED PLAINLY</span>
            <h2>There is one classroom. It is in Dubai, not Abu Dhabi.</h2>
            <p>
              From Abu Dhabi, the drive to Dubai is commonly on the order of an hour and a half to two hours, depending on where you start and on
              traffic. That is geography, not a promise about your commute. If a weekly trip is unrealistic, learn online across the UAE, or start with
              the free material and only come when a cohort conversation is worth it. The academy is open 24/7. Calling
              ahead is the useful step: a booked visit means someone can walk you through both tracks and private
              one-to-one lessons.
            </p>
            <p>
              Sharjah residents are closer to Dubai. If that is you, the{" "}
              <Link href="/forex-course-sharjah">Sharjah forex course page</Link> is the more relevant note. The full
              Dubai overview is on <Link href="/forex-academy-in-dubai">forex academy in Dubai</Link>.
            </p>

            <h2>What the course covers once you are in the room</h2>
            <p>
              Beginners start on Basic to Intermediate: forex basics, candlestick patterns, market structure, smart-money
              order placement, imbalance, and a small set of indicators. The point of the sequence is that structure and
              risk come before anyone asks you to “take a setup”. The topic list is on the{" "}
              <Link href="/courses">courses page</Link>, and the classroom rhythm is described in{" "}
              <Link href="/blog-forex-course-dubai-beginners">what beginners should expect</Link>.
            </p>
            <p>
              If you already read structure, Advanced Institutional Strategies moves into fundamental analysis, market profile, volume with smart money concepts, Fibonacci, risk and psychology, and bot-trading
              concepts. Lifetime WhatsApp access to the instructor is part of that advanced track, not something we
              attach to every beginner seat.
            </p>
            <p>
              Practical sessions run on Star Trader, regulated by the UAE Securities and Commodities Authority. You are
              learning the platform you would use on a regulated account. The academy teaches. It does not place trades
              for you or guarantee a result.
            </p>

            <h2>Abu Dhabi is on the same clock as Dubai</h2>
            <p>
              The UAE does not split time zones. Abu Dhabi and Dubai both use Gulf Standard Time, UTC+4, all year. A class timed for 7pm is 7pm in both cities. You do not add or subtract an hour because you live in the capital. What changes is the journey, not the session. London and New York hours, converted to that clock, are on the{" "}
              <Link href="/blog-forex-market-hours-dubai">Dubai market-hours page</Link>.
            </p>
            <p>
              If the drive is the problem, take the same tracks online. The <Link href="/online-forex-course-uae">online forex course</Link> is the same instructor and the same syllabus. If the problem is a weekday job, read{" "}
              <Link href="/blog-forex-classes-working-professionals-dubai">forex classes for working professionals in Dubai</Link> and <Link href="/weekend-forex-classes-dubai">weekend classes</Link>, then say which hours you can keep. Practise between lessons on a demo account first. The difference between that and a live account is in{" "}
              <Link href="/blog-demo-vs-live-mt5-uae">demo versus live on MT5</Link>.
            </p>

            <h2>What to send if you are writing from Abu Dhabi</h2>
            <p>
              Tell the academy you are in Abu Dhabi, whether you want to drive to Dubai or study online, and whether you want a group seat or a private lesson. Name the track: Basic to Intermediate, or Advanced Institutional Strategies if you already read structure. Ask for the fee in AED and the next time that fits. WhatsApp is{" "}
              <a href="https://wa.me/971559047030" target="_blank" rel="noopener noreferrer">+971 55 904 7030</a>. The form is on the <Link href="/contact">contact page</Link>.
            </p>
            <p>
              The written version of the advanced topic most people ask about is <Link href="/blog-smart-money-concepts">smart money concepts</Link>. It is an explanation, not the class. Reviews of the academy are on Google, linked from the <Link href="/success-stories">reviews page</Link>. This page does not add quotes. The Dubai school, written as the in-person offer, is the <Link href="/forex-training-academy-dubai">forex training academy Dubai</Link> page. The wider UAE page is <Link href="/forex-training-academy-uae">forex training academy UAE</Link>.
            </p>

            <h2>Three ways people in Abu Dhabi actually study</h2>
            <p>
              The syllabus is not the decision. The journey is. Abu Dhabi students tend to use one of three patterns, and it helps to name yours before you enquire.
            </p>
            <ul className="guide-list">
              <li>
                <strong>Online every week.</strong> You stay in Abu Dhabi. The class is on Gulf Standard Time, the same clock as Dubai. This is the usual choice when an evening drive would replace the study itself.
              </li>
              <li>
                <strong>One visit, then online.</strong> You come to Dubai once, see how a live hour works, agree the track, and continue on a screen. The visit is for the conversation, not for a different course.
              </li>
              <li>
                <strong>A regular drive.</strong> You already travel between the two cities, so an in-person seat in Dubai is realistic. Say so. The academy will not guess your commute.
              </li>
            </ul>
            <p>
              The <Link href="/forex-course-sharjah">Sharjah course page</Link> is a different decision because the trip is short and the question is usually whether to cross over for class. Living in Dubai is different again: the classroom is in the same city, and the{" "}
              <Link href="/forex-academy-in-dubai">forex academy in Dubai</Link> page describes that school day. This page does not repeat either of those. It is the capital-to-Dubai choice.
            </p>

            <h2>What an Abu Dhabi week looks like</h2>
            <p>
              Many private-sector jobs in the UAE run Sunday to Thursday. An evening class on one of those days can be online at 7pm Gulf Standard Time without adding a drive on top of the office. If you would rather travel when the roads are quieter, a Saturday or Sunday session is possible, with one limit: from Saturday morning until Monday morning, UAE time, the forex market is shut. A weekend hour can still review a chart. It will not show a new London candle. That arrangement is described on{" "}
              <Link href="/weekend-forex-classes-dubai">weekend forex classes</Link>.
            </p>
            <p>
              Between classes, mark one pair on MetaTrader 5. If the platform is not installed, the English walkthrough below shows an account opening and the MT5 layout. To start trading you need MT5 and an account with a trusted broker such as{" "}
              <a href={STARTRADER_LIVE_URL} target="_blank" rel="sponsored noopener noreferrer">
                StarTrader
              </a>
              . Practical sessions at the academy use StarTrader, which is regulated by the UAE Securities and Commodities Authority. The course fee and any broker balance are separate. Practise on a demo account until the buttons are familiar. The difference between that account and a live one is in{" "}
              <Link href="/blog-demo-vs-live-mt5-uae">demo versus live on MT5</Link>.
            </p>
            <p>
              Write the aim down before the first hour. A one-page coaching plan, and a journal you can bring back, are explained in{" "}
              <Link href="/blog-personal-forex-coaching-uae">personal forex coaching in the UAE</Link> and{" "}
              <Link href="/blog-forex-trading-plan-uae">how to write a trading plan</Link>. They are reading, not a seat.
            </p>

            <h2>How to decide if the drive is worth it</h2>
            <ul className="guide-list">
              <li>You want live correction, not another playlist. The YouTube channel is free and useful; class is the feedback.</li>
              <li>You can name your level honestly. New traders should not skip into the advanced track to save a trip.</li>
              <li>You have read at least one foundation article — <Link href="/blog-candlestick-patterns">candlesticks</Link> or <Link href="/blog-market-structure">market structure</Link> — so the first hour is not spent on vocabulary you could have learned at home.</li>
              <li>You are comfortable that forex can lose money. If you need a guaranteed return, this is the wrong course and the wrong market.</li>
            </ul>
            <p>
              Fees are not printed, because they move with the cohort. <Link href="/pricing">Pricing</Link> lists what
              each track includes. Call <a href="tel:+971559047030">+971 55 904 7030</a> for the current number and the
              next dates. Private one-to-one lessons, with live trading sessions, are available as well as the group
              cohorts. The instructor is <Link href="/about">Gopi Chandran</Link>. The academy is rated 5.0 on Google
              from 30+ reviews, and more than 2,000 students have been trained through Equity Global and live
              mentorship — read the reviews on Google rather than a testimonial we wrote. A comparison checklist is on the{" "}
              <Link href="/best-forex-course-dubai">best forex course in Dubai</Link> guide.
            </p>
          </div>
        </section>

        <YouTubeSection
          videos={[VIDEOS.howToStart, VIDEOS.metatrader]}
          englishVideos={[mt5English]}
          title="Study the platform before you drive from Abu Dhabi"
          intro="The English lesson, from Equity Global English, shows how to open a broker account and use MetaTrader 5. Watch it in Abu Dhabi before any trip, so a visit to Dubai is not spent on a download. The Malayalam tab has an introduction and an MT5 tutorial from Equity Global. The recordings are a preview, not the live class."
        />

        <section className="tight">
          <div className="container">
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

        <section className="tight soft">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">RELATED</span>
              <h2>Other ways to start</h2>
            </div>
            <RelatedTraining current={path} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
