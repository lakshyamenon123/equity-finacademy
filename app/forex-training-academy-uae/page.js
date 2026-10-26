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

const path = "/forex-training-academy-uae";
const whatsapp = whatsappHref(COURSE_WHATSAPP_TEXT);

export const metadata = pageMetadata({
  title: "Forex Training Academy in the UAE | Equity Fin Academy",
  description:
    "Forex training academy in the UAE for online classes across the emirates and in-person classes in Dubai. Private lessons, group classes, and live trading.",
  keywords:
    "forex training academy UAE, forex course UAE, forex academy UAE, online forex training UAE, forex classes Abu Dhabi, forex classes Sharjah",
  path,
});

const pageFaq = [
  {
    q: "Can I join the forex training academy from outside Dubai?",
    text: "Yes. Group classes and private one-to-one lessons run online across the UAE, and in person in Dubai. Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain use the same instructor and the same two tracks. You do not need a second campus.",
  },
  {
    q: "Is an online forex course in the UAE the same syllabus as Dubai?",
    text: "Yes. Basic to Intermediate covers charts and market structure. Advanced Institutional Strategies covers market profile, smart money concepts, Fibonacci, risk, psychology, and bot-trading concepts. Live trading sessions are part of both. Lifetime WhatsApp after the course is the advanced track only.",
  },
  {
    q: "Do I have to travel to Dubai?",
    text: "No. Online is a full seat, not a recording sold as a class. Travel when you want the room. The Dubai training page describes that in-person offer. Many students outside Dubai stay online for the whole course.",
  },
  {
    q: "Which broker is used for practice?",
    text: "Practical sessions use StarTrader, regulated by the UAE Securities and Commodities Authority. You open the account. The academy's link is an affiliate link. The academy does not manage the funds.",
  },
  {
    q: "What should I trust before I pay a forex course in the UAE?",
    text: "Ask who teaches, whether live trading is in the fee, and whether the fee is quoted in writing. This academy is rated 5.0 on Google from 30+ reviews, has trained more than 2,000 students, and has 200+ YouTube reviews and comments. None of that is a promise about your trades.",
  },
  {
    q: "How do I start?",
    text: "WhatsApp +971 55 904 7030 or open the site chat. Say your emirate, whether you want private or group, and whether you have used a chart before. The academy is open 24/7. The fee is quoted when you ask.",
  },
];

export default function ForexTrainingAcademyUaePage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Forex Training Academy in the UAE", path },
        ])}
      />
      <JsonLd data={faqPageSchema(pageFaq)} />
      <Header active="academy-uae" />
      <main>
        <section className="tight bg-glow" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span className="current">Forex Training Academy in the UAE</span>
            </nav>
            <span className="eyebrow">UAE · DUBAI CLASSROOM AND ONLINE</span>
            <h1 className="hero-display" style={{ fontSize: "clamp(1.8rem,5vw,3.1rem)", maxWidth: "18ch" }}>
              Forex Training Academy in the UAE
            </h1>
            <p className="hero-sub" style={{ marginTop: 18, maxWidth: "66ch" }}>
              Equity Fin Academy is a forex training academy in the UAE for students who cannot treat Dubai traffic as part of the syllabus. The same private lessons and group classes run online across the emirates, and in person in Dubai when you want the room. Live trading sessions are included either way.
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
              <OpenChatLink className="btn btn-outline">Chat about a seat</OpenChatLink>
            </div>
          </div>
        </section>

        <section>
          <div className="container prose-block">
            <h2>One academy, seven emirates</h2>
            <p>
              A forex course in the UAE fails when it pretends every student can reach the same building at the same hour. Equity Fin Academy does not pretend that. In-person classes are in Dubai. Online classes cover Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain, plus anyone in Dubai who would rather stay at the desk. There is no second campus and no second syllabus.
            </p>
            <p>
              The instructor is Gopi Chandran. More than 2,000 students have been trained through Equity Global and live mentorship. The academy is rated 5.0 on Google from 30+ reviews. The channels have 200+ YouTube reviews and comments. The academy is open 24/7. Those are the facts worth checking. They are not a forecast of your account.
            </p>
            <p>
              If your question is only &quot;is there a paid online course, and what should I read first&quot;, that answer already lives on the{" "}
              <Link href="/online-forex-course-uae">online forex course</Link> page, including a study order. This page is the national offer: who the seat is for, what stays the same outside Dubai, and how you book it. Read one, then the other, rather than the same essay with the city name swapped.
            </p>

            <h2>What stays the same outside Dubai</h2>
            <p>
              The group class is still a cohort on a shared syllabus. The private lesson is still your chart and your question. Both still include live trading sessions. Beginners start on Basic to Intermediate: candles, market structure, and the risk habits that belong in week one. The advanced track assumes that base and moves into market profile, volume with smart money concepts, Fibonacci, risk and psychology, and bot-trading concepts. The topic lists are on the{" "}
              <Link href="/courses">forex trading courses in Dubai</Link> page. A way to read any syllabus before you enquire is{" "}
              <Link href="/blog-forex-trading-courses-dubai">how to read a forex course syllabus</Link>.
            </p>
            <p>
              Lifetime WhatsApp with the instructor, after the course, belongs to the Advanced Institutional Strategies track only. Do not expect it on the beginner seat. Fees are quoted when you enquire. They are not printed here, because a number on a page goes stale and then looks like a promise.
            </p>
            <p>
              Practical sessions use StarTrader, an SCA-regulated broker. You open the account on the academy&apos;s affiliate link:{" "}
              <a href={STARTRADER_LIVE_URL} target="_blank" rel="sponsored noopener noreferrer">
                StarTrader
              </a>
              . The academy does not manage the funds, and the broker balance is not the course fee. Install MetaTrader 5 before the first live session if you can. The clicks are written up in{" "}
              <Link href="/blog-start-forex-trading-uae-mt5">the MT5 starting guide</Link>.
            </p>

            <h2>Abu Dhabi, Sharjah, and the northern emirates</h2>
            <p>
              Sharjah is close enough that some students drive to the Dubai class and some stay on the screen. Abu Dhabi is a longer drive, so most of those students take the online seat and visit when a particular session is worth the road. The notes for those two choices are on the{" "}
              <Link href="/forex-course-abu-dhabi">Abu Dhabi course page</Link> and the{" "}
              <Link href="/forex-course-sharjah">Sharjah course page</Link>. They talk about the trip. This page talks about the course you get either way.
            </p>
            <p>
              Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain are taught online on the same tracks. You do not get a thinner class because the emirate is smaller. You get the same explanation, the same live session, and the same way to ask a question. If a week in the Dubai room would help, book it as a visit. The in-person description is the{" "}
              <Link href="/forex-training-academy-dubai">forex training academy Dubai</Link> page. The city context, without the enrolment detail, remains the{" "}
              <Link href="/forex-academy-in-dubai">forex academy in Dubai</Link> overview.
            </p>
            <p>
              Time zone is not a problem inside the UAE. Dubai&apos;s clock is the class clock. You are not joining a webinar recorded for another continent and hoping the questions still make sense at midnight.
            </p>

            <h2>How an online seat is different from a video</h2>
            <p>
              Free videos are a preview. The English tab on this page plays the five newest Equity Global English uploads, newest first. The Malayalam tab is labelled and kept separate. Use them to judge whether the explanations are clear. Do not treat them as the course you paid for, because you have not paid for them.
            </p>
            <p>
              A seat, online or in Dubai, is a person who can stop and correct you. That is the difference from a forex course UAE students can buy as a folder of recordings. If you want the recording, watch the channel. If you want the correction, book the class. The chat on this website is the short way to do that. WhatsApp {SITE.telephoneDisplay} is the other.
            </p>
            <p>
              Choosing between the private hour and the group cohort is a format question, not a city question. The comparison is on{" "}
              <Link href="/blog-private-vs-group-forex-classes-dubai">private versus group classes</Link> and on the{" "}
              <Link href="/private-group-forex-training-dubai">training formats page</Link>. Read those before you send a message that only says &quot;price&quot;.
            </p>

            <h2>What to ask any forex course in the UAE, including this one</h2>
            <p>
              Ask who is in the room when you are stuck. Ask whether live trading is included or sold later. Ask for the fee in the same conversation as the dates. Ask what happens after the last class, and notice if lifetime contact is reserved for one track. A checklist for that conversation is{" "}
              <Link href="/blog-choose-forex-academy-uae">how to choose a forex academy in the UAE</Link>. Use it here. The academy would rather lose a seat than win one on a sentence this page did not say.
            </p>
            <p>
              The site is in English. English videos are the first tab. Malayalam recordings are available and labelled. You will not be handed a different curriculum because of the language of a preview.
            </p>

            <h2>Book the UAE seat</h2>
            <p>
              Send your emirate, the format you want, and whether you are new to charts. The reply quotes the fee and the next time a class runs. The academy is open 24/7. Call {SITE.telephoneDisplay} if you would rather talk. The chat on this page opens in place and does not send you to another site.
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
          videos={[VIDEOS.whatIsForex, VIDEOS.howToStart, VIDEOS.metatrader]}
          eyebrow="ENGLISH FIRST"
          title="English lessons from Equity Global English"
          intro="Five recent English lessons are shown first. Malayalam lessons from Equity Global are on the Malayalam tab. They are a preview, not the live class."
          id="uae-academy-videos"
        />

        <section className="tight soft">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">QUESTIONS</span>
              <h2>Forex training academy UAE — common questions</h2>
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
