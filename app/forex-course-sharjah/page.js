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

const path = "/forex-course-sharjah";

export const metadata = pageMetadata({
  title: "Forex Course in Sharjah | Equity Fin Academy",
  description:
    "Forex course for Sharjah students at Equity Fin Academy. Live classes are in Dubai, UAE, or online across the UAE. See who should come and how to enquire.",
  keywords:
    "forex course Sharjah, forex training Sharjah, forex classes near Sharjah, learn forex Al Nahda, forex academy near Sharjah Dubai",
  path,
});

const pageFaq = [
  {
    q: "Do you have a forex classroom in Sharjah?",
    text: "No. In-person classes are in Dubai, UAE, a short trip from Sharjah. You can also learn online across the UAE.",
  },
  {
    q: "Which course should a Sharjah beginner take?",
    text: "Basic to Intermediate, unless you already understand forex fundamentals and market structure. The advanced track assumes that base and adds market profile and risk psychology.",
  },
  {
    q: "Can I visit without an appointment?",
    text: "The academy is open 24/7. Calling ahead means someone is free to walk you through the tracks, including private one-to-one lessons, in person.",
  },
];

export default function ForexCourseSharjahPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Forex Course in Sharjah", path },
        ])}
      />
      <JsonLd data={faqPageSchema(pageFaq)} />
      <Header active="sharjah" />

      <main>
        <section className="tight bg-glow" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span className="current">Forex Course in Sharjah</span>
            </nav>
            <span className="eyebrow">SHARJAH STUDENTS · DUBAI, UAE</span>
            <h1 className="hero-display" style={{ fontSize: "clamp(1.8rem,5vw,3.1rem)", maxWidth: "18ch" }}>
              Forex training a short trip from Sharjah.
            </h1>
            <p className="hero-sub" style={{ marginTop: 18, maxWidth: "64ch" }}>
              Equity Fin Academy teaches in person in Dubai, UAE, a short trip from Sharjah, and online across the UAE. There is no second campus in Sharjah.
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
            <h2>Why Dubai comes up in Sharjah searches</h2>
            <p>
              In-person classes are in Dubai, UAE, close enough that many Sharjah students make the trip. We will not invent a door-to-door minute count.
              Directions are on the map on the <Link href="/contact">contact page</Link>. You can also learn online across the UAE. Abu Dhabi is a longer drive; that situation is described on
              the <Link href="/forex-course-abu-dhabi">Abu Dhabi course page</Link>.
            </p>

            <h2>What you are travelling for</h2>
            <p>
              A live forex curriculum, not a webinar replay. Beginners take Basic to Intermediate: how pairs are quoted,
              how to read a candle, how swing highs and lows define structure, where imbalance shows up, and how risk
              sits inside that picture. Traders who already have that base can take Advanced Institutional Strategies,
              which adds market profile, volume with smart money concepts, Fibonacci, psychology, and bot
              trading concepts, plus lifetime WhatsApp access to the instructor after the course.
            </p>
            <p>
              Both tracks are forex only. Practical platform work uses Star Trader, an SCA-regulated broker, so the
              screens in class match a regulated account. SCA regulation applies to the broker. It is not a claim that
              the academy manages client funds.
            </p>
            <p>
              More than 2,000 students have been trained through the Equity Global channel and live mentorship. The
              academy is rated 5.0 on Google from 30+ reviews. Both figures are published so you can check them — the rating on Google itself, the
              student number as teaching reach, not as a statement about anyone&apos;s trading account. The{" "}
              <Link href="/best-forex-course-dubai">Dubai course guide</Link> shows the other checks worth making.
            </p>

            <h2>Before you cross over for a visit</h2>
            <ul className="guide-list">
              <li>Read <Link href="/blog-forex-course-dubai-beginners">what a beginner course in Dubai includes</Link> so the level is obvious before you arrive.</li>
              <li>Skim <Link href="/courses">the full topic list</Link>. If a provider will not show the syllabus, that is its own answer.</li>
              <li>Bring a question about your experience, not a request for a signal. The first conversation is which track fits.</li>
              <li>If you cannot attend in person, learn online across the UAE. The <Link href="/online-forex-course-uae">online study page</Link> explains how that works.</li>
            </ul>
            <p>
              The founder is <Link href="/about">Gopi Chandran</Link>. Call or WhatsApp <a href="tel:+971559047030">+971 55 904 7030</a> for the next class. Fees
              change, so they are quoted when you enquire — <Link href="/pricing">see what is included</Link> first.
            </p>
          </div>
        </section>

        <YouTubeSection
          videos={[VIDEOS.whatIsForex, VIDEOS.howToStart]}
          title="Preview the lessons from Sharjah"
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
              <h2>Keep reading</h2>
            </div>
            <RelatedTraining current={path} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
