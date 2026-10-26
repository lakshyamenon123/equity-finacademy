import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import RelatedTraining from "../components/RelatedTraining";
import YouTubeSection from "../components/YouTubeSection";
import Link from "next/link";
import OpenChatLink from "../components/OpenChatLink";
import { pageMetadata } from "../lib/seo";
import { breadcrumbSchema, faqPageSchema } from "../lib/schema";
import { VIDEOS } from "../lib/videos";

const path = "/forex-course-abu-dhabi";

export const metadata = pageMetadata({
  title: "Forex Course in Abu Dhabi | Equity Fin Academy",
  description:
    "A forex course for Abu Dhabi students, taught live in Dubai, UAE. What you study, how the trip works, and where to start with the free lessons.",
  keywords:
    "forex course Abu Dhabi, forex training Abu Dhabi, forex classes for Abu Dhabi residents, learn forex trading Abu Dhabi, forex academy near Abu Dhabi",
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
          title="Study the intro lessons before you drive from Abu Dhabi"
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
