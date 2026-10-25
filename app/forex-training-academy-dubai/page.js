import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import RelatedTraining from "../components/RelatedTraining";
import YouTubeSection from "../components/YouTubeSection";
import Link from "next/link";
import OpenChatLink from "../components/OpenChatLink";
import { pageMetadata } from "../lib/seo";
import { breadcrumbSchema, faqPageSchema, organizationSchema } from "../lib/schema";
import { SITE } from "../lib/site";
import { VIDEOS } from "../lib/videos";
import { COURSE_WHATSAPP_TEXT, STARTRADER_LIVE_URL, whatsappHref } from "../lib/whatsapp";

const path = "/forex-training-academy-dubai";
const whatsapp = whatsappHref(COURSE_WHATSAPP_TEXT);

export const metadata = pageMetadata({
  title: "Forex Training Academy in Dubai | Equity Fin Academy",
  description:
    "Forex training academy in Dubai for private one-to-one lessons and group classes with live trading. 2,000+ students. Rated 5.0 from 30+ Google reviews.",
  keywords:
    "forex training academy Dubai, forex academy Dubai, forex training Dubai, forex classes Dubai, private forex training Dubai, group forex classes Dubai",
  path,
});

const pageFaq = [
  {
    q: "What is included in forex training in Dubai?",
    text: "Private one-to-one lessons and group classes. Both include live trading sessions. The Basic to Intermediate track covers charts and market structure. The Advanced Institutional Strategies track covers market profile, smart money concepts, Fibonacci, risk, psychology, and bot-trading concepts. Lifetime WhatsApp after the course is part of the advanced track only. Fees are quoted when you enquire.",
  },
  {
    q: "Can I book a private forex lesson in Dubai?",
    text: "Yes. Private one-to-one lessons are taught in Dubai and online across the UAE. You work on your own chart, at your pace, with the same live trading sessions as the group class. The fee is quoted on enquiry and is not published on this page.",
  },
  {
    q: "Does the academy manage client funds?",
    text: "No. Equity Fin Academy teaches. Practical sessions use a StarTrader account that you open yourself. The academy does not hold or manage those funds. The StarTrader link on this site is the academy's affiliate link.",
  },
  {
    q: "Are the classes only for people who already trade?",
    text: "No. Beginners start on the Basic to Intermediate track. Traders who already read charts can ask about the advanced track. Say how much chart time you have when you WhatsApp, and the academy will point you at one track.",
  },
  {
    q: "What do the public reviews say in numbers?",
    text: "The academy is rated 5.0 on Google from 30+ reviews. The Equity Global channels have 200+ YouTube reviews and comments. More than 2,000 students have been trained through the channel and live mentorship. Those figures are not a promise about your results.",
  },
  {
    q: "How do I ask about the next Dubai cohort?",
    text: "WhatsApp +971 55 904 7030 or use the chat on this site. The academy is in Dubai, UAE, and is open 24/7. Ask for the next dates and the current fee.",
  },
  {
    q: "Is Equity Fin Academy a forex institute in Dubai?",
    text: "Yes. It is a forex institute in Dubai with a named instructor, two published tracks, private one-to-one lessons, group classes, and live trading sessions, in person and online across the UAE. Fees are quoted when you enquire. The fees page explains what changes a quote, and the FAQ collects the shorter answers.",
  },
];

export default function ForexTrainingAcademyDubaiPage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Forex Training Academy in Dubai", path },
        ])}
      />
      <JsonLd data={faqPageSchema(pageFaq)} />
      <Header active="academy-dubai" />
      <main>
        <section className="tight bg-glow" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span className="current">Forex Training Academy in Dubai</span>
            </nav>
            <span className="eyebrow">DUBAI · IN PERSON AND ONLINE</span>
            <h1 className="hero-display" style={{ fontSize: "clamp(1.8rem,5vw,3.1rem)", maxWidth: "18ch" }}>
              Forex Training Academy in Dubai
            </h1>
            <p className="hero-sub" style={{ marginTop: 18, maxWidth: "66ch" }}>
              Equity Fin Academy is a forex training academy in Dubai for people who want a teacher in the room, not another playlist. Private one-to-one lessons and group classes both include live trading sessions. If you live in another emirate, the{" "}
              <Link href="/forex-training-academy-uae">forex training academy UAE</Link> page explains the online seat.
            </p>
            <div className="topics-row" style={{ marginTop: 22 }}>
              <a className="topic-chip" href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">
                5.0 on Google from 30+ reviews
              </a>
              <span className="topic-chip">2,000+ students trained</span>
              <span className="topic-chip">200+ YouTube reviews</span>
            </div>
            <div className="cta-row" style={{ marginTop: 22 }}>
              <a href={whatsapp} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                WhatsApp +971 55 904 7030
              </a>
              <a href="tel:+971559047030" className="btn btn-outline">
                Call
              </a>
              <OpenChatLink className="btn btn-outline">Chat about a seat</OpenChatLink>
            </div>
          </div>
        </section>

        <section>
          <div className="container prose-block">
            <h2>What forex training in Dubai actually looks like</h2>
            <p>
              A forex training academy in Dubai has to survive a simple test. Can you sit with the instructor, put a chart on the screen, and have a mistake corrected before the session ends? Equity Fin Academy is built around that test. Gopi Chandran teaches the classes. The academy is open 24/7. You do not have to guess which week a cohort starts. You ask, and the next dates are quoted with the fee.
            </p>
            <p>
              The city overview, including why Dubai&apos;s clock overlaps the London and Asian sessions, stays on the{" "}
              <Link href="/forex-academy-in-dubai">forex academy in Dubai</Link> page. This page is the training offer: who is in the room, how a lesson runs, and how you book it. The two pages are deliberately different so you are not reading the same article twice.
            </p>
            <p>
              More than 2,000 students have been trained through Equity Global and live mentorship. The academy is rated 5.0 on Google from 30+ reviews. The Equity Global channels carry 200+ YouTube reviews and comments. Check the Google listing yourself. This page does not invent quotes, and it does not promise a profit.
            </p>

            <h2>Private one-to-one lessons</h2>
            <p>
              A private lesson is for a chart you already have an opinion about. You bring the pair, the timeframe, and the question. The hour is spent on that, not on a syllabus slide you have already understood. People book private forex training in Dubai when a group pace is too slow, when they trade a session the cohort does not cover, or when they want the instructor to watch them place the order and say what was early.
            </p>
            <p>
              Private one-to-one lessons are available in Dubai and online across the UAE. They include live trading sessions and training. There is no published price. The fee depends on the length and the track, and it is quoted when you enquire. Nothing on this page is a discount or a payment plan.
            </p>
            <p>
              If you are unsure whether you want the private room, read{" "}
              <Link href="/private-group-forex-training-dubai">private versus group classes</Link> before you message. Say which format you want in the first WhatsApp. It saves a round of questions.
            </p>

            <h2>Group classes</h2>
            <p>
              The group class is a shared syllabus with other students in Dubai, and with students joining online from the rest of the UAE. You hear the same explanation, then you see it on a live chart. Questions are taken in the room. That is the point of a cohort: one person&apos;s confusion is usually three people&apos;s confusion, and the answer lands once.
            </p>
            <p>
              There are two tracks. Basic to Intermediate starts from forex itself: candles, market structure, and the habits that stop a new account being the lesson. Advanced Institutional Strategies is for people who already have that base. It covers market profile, volume with smart money concepts, Fibonacci, risk and psychology, and bot-trading concepts. Lifetime WhatsApp access to the instructor, after the course, is part of the advanced track only. It is not added to the beginner cohort.
            </p>
            <p>
              Topic lists, without the enrolment story, are on <Link href="/courses">Courses</Link>. Beginners who want the class described hour by hour can read{" "}
              <Link href="/blog-forex-course-dubai-beginners">what a beginner forex course in Dubai covers</Link>. This page will not repeat that article.
            </p>

            <h2>Live trading sessions</h2>
            <p>
              Both formats include live trading sessions. The practical work is done on StarTrader, an SCA-regulated broker. You open the account yourself. The link the academy shares is its affiliate link:{" "}
              <a href={STARTRADER_LIVE_URL} target="_blank" rel="sponsored noopener noreferrer">
                StarTrader live account
              </a>
              . The academy does not open the account for you, and it does not manage the funds in it. The course fee and the broker balance are separate.
            </p>
            <p>
              A live session is not a room full of trade calls. The instructor marks the level, explains why it is the level, and lets you see the order placed against a plan that was written before the click. If you want the platform installed before you arrive, the written steps are in{" "}
              <Link href="/blog-start-forex-trading-uae-mt5">how to start with MT5</Link>. MetaTrader 5 is the platform used alongside class practice.
            </p>

            <h2>Who this Dubai seat is for</h2>
            <p>
              Come in person if you are in Dubai or you can reach the class without it becoming the hard part. The academy does not publish a floor or a building name on the marketing pages. Ask on WhatsApp and you will be told where to come. People comparing neighbourhoods can start from the{" "}
              <Link href="/forex-academy-in-dubai">Dubai academy overview</Link>, then come back here to book.
            </p>
            <p>
              Stay online if the drive is the reason you have not started. Abu Dhabi, Sharjah, and the other emirates use the same instructor and the same two tracks. That version of the offer is the{" "}
              <Link href="/forex-training-academy-uae">UAE training page</Link>. Sharjah and Abu Dhabi also have their own notes on{" "}
              <Link href="/forex-course-sharjah">the Sharjah course page</Link> and{" "}
              <Link href="/forex-course-abu-dhabi">the Abu Dhabi course page</Link>.
            </p>
            <p>
              The academy teaches forex. It does not run a second subject, and it does not take responsibility for a trade you place after class. Risk is part of the curriculum because it is part of the activity. Read{" "}
              <Link href="/blog-risk-management">how much to risk</Link> if you want that idea before you enquire.
            </p>

            <h2>A forex institute in Dubai</h2>
            <p>
              Searchers typing forex institute Dubai are usually looking for a school with a named teacher, a syllabus they can read, and a room where a chart gets corrected. Equity Fin Academy is that forex institute: Gopi Chandran teaches, the two tracks are published, and live trading sessions run in Dubai and online across the UAE. It is not a second campus and not a second brand. It is this academy, described as an institute rather than as a topic list.
            </p>
            <p>
              The city context stays on the <Link href="/forex-academy-in-dubai">forex academy in Dubai</Link> page. Students outside the city use the{" "}
              <Link href="/forex-training-academy-uae">UAE training page</Link>. People who want the fee explained before they ask for a number should read{" "}
              <Link href="/forex-course-fees-dubai">forex course fees in Dubai (2026)</Link> and the included-items list on <Link href="/pricing">pricing</Link>. Shorter answers sit on the <Link href="/faq">FAQ</Link>. No dirham figure is printed on any of those pages. The quote comes back when you message.
            </p>
            <p>
              The institute teaches the same chart work on MetaTrader 5 whether the symbol is a forex pair, gold, an index, or a stock the broker lists. That symbol page is the{" "}
              <Link href="/stock-market-course-dubai">stock market course in Dubai</Link>. Weekend hours, for people whose job owns the weekday, are on{" "}
              <Link href="/weekend-forex-classes-dubai">weekend forex classes</Link>. Coaching, as distinct from the private-versus-group choice, is{" "}
              <Link href="/forex-mentorship-dubai">forex mentorship in Dubai</Link>.
            </p>

            <h2>English lessons you can play before you book</h2>
            <p>
              The English tab below is the five newest uploads from Equity Global English, newest first. They are a preview of how a topic is explained. They are not the cohort, and they are not a substitute for the live session. Malayalam recordings from the Equity Global channel sit on the second tab and are labelled Malayalam. The writing on this website stays in English.
            </p>
          </div>
        </section>

        <YouTubeSection
          videos={[VIDEOS.howToStart, VIDEOS.whatIsForex, VIDEOS.metatrader]}
          eyebrow="ENGLISH FIRST"
          title="Watch an English lesson from the academy channels"
          intro="English recordings are listed first. Malayalam recordings are on the Malayalam tab. Press play to load a video."
          id="dubai-academy-videos"
        />

        <section>
          <div className="container prose-block">
            <h2>How to enquire</h2>
            <p>
              WhatsApp {SITE.telephoneDisplay} or open the chat and say three things: private or group, beginner or advanced, and whether you will be in Dubai or online. The fee is quoted in the reply. The academy is open 24/7, so the message does not have to wait for a weekday morning.
            </p>
            <p>
              If you are still comparing schools, use{" "}
              <Link href="/blog-choose-forex-academy-uae">how to choose a forex academy in the UAE</Link> on this academy and on any other name you are holding. The{" "}
              <Link href="/best-forex-course-dubai">notes on judging a Dubai course</Link> put the 5.0 rating and the 2,000+ students figure next to the questions worth asking. Then decide.
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

        <section className="tight soft">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">QUESTIONS</span>
              <h2>Forex training academy Dubai — common questions</h2>
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
