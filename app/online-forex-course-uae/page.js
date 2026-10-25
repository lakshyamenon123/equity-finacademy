import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import RelatedTraining from "../components/RelatedTraining";
import YouTubeSection from "../components/YouTubeSection";
import Link from "next/link";
import { pageMetadata } from "../lib/seo";
import { breadcrumbSchema, faqPageSchema } from "../lib/schema";
import { VIDEOS } from "../lib/videos";

const path = "/online-forex-course-uae";

export const metadata = pageMetadata({
  title: "Online Forex Course in the UAE | Equity Fin Academy",
  description:
    "Learn forex online across the UAE, or in person in Dubai. Private lessons, group classes, and live trading sessions. Fees quoted on enquiry.",
  keywords:
    "online forex course UAE, forex course online Dubai, learn forex trading online UAE, self paced forex course, Equity Global YouTube, forex classes remote UAE",
  path,
});

const pageFaq = [
  {
    q: "Does Equity Fin Academy sell a paid online forex course?",
    text: "Yes. You can learn online across the UAE, or in person in Dubai. Fees are quoted when you enquire and are not published on this site.",
  },
  {
    q: "Are the YouTube lessons in English?",
    text: "Yes. The English tab shows lessons from Equity Global English. The Malayalam tab shows recordings from the Equity Global channel. The written lessons on this website are in English.",
  },
  {
    q: "Can an online course replace live practice?",
    text: "Online lessons can teach vocabulary and chart reading. Live trading sessions, in Dubai or online, are where the instructor can correct a mistake in the moment. Practical sessions use StarTrader, an SCA-regulated broker.",
  },
];

export default function OnlineForexCourseUaePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Online Forex Course UAE", path },
        ])}
      />
      <JsonLd data={faqPageSchema(pageFaq)} />
      <Header active="online-uae" />

      <main>
        <section className="tight bg-glow" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span className="current">Online Forex Course UAE</span>
            </nav>
            <span className="eyebrow">UAE · SELF-PACED AND CLASSROOM</span>
            <h1 className="hero-display" style={{ fontSize: "clamp(1.8rem,5vw,3.1rem)", maxWidth: "16ch" }}>
              Looking for an online forex course in the UAE?
            </h1>
            <p className="hero-sub" style={{ marginTop: 18, maxWidth: "64ch" }}>
              Learn in person in Dubai, UAE, or online across the UAE. Free lessons are also on this site and on the Equity Global channel. This page explains both, then
              shows how to judge any online forex course before you pay someone else.
            </p>
          </div>
        </section>

        <section>
          <div className="container prose-block">
            <h2>What “online” means here</h2>
            <p>
              You can study online across the UAE, or join a class in person in Dubai. Fees are quoted when you enquire and are not listed on this page. Free lessons stay on the Equity Global channel and on this site. Call{" "}
              <a href="tel:+971559047030">+971 55 904 7030</a> and we will tell you which format is running.
            </p>
            <p>
              If your only free time is Saturday or Sunday, say so when you enquire. The academy is open 24/7, and weekend seats are arranged rather than printed on a calendar. Details are on{" "}
              <Link href="/weekend-forex-classes-dubai">weekend forex classes in Dubai</Link>, including online study across the UAE.
            </p>
            <p>
              People in <Link href="/forex-course-sharjah">Sharjah</Link> are close to the classroom. People in{" "}
              <Link href="/forex-course-abu-dhabi">Abu Dhabi</Link> are a longer drive. Both still use the same course. The national offer is the{" "}
              <Link href="/forex-training-academy-uae">forex training academy UAE</Link> page, which is the forex course UAE students book when they want a live seat rather than a reading list.
            </p>

            <h2>A free sequence that is actually ordered</h2>
            <p>If you are starting online, use this order. Skipping ahead is how most free content wastes a month.</p>
            <ol className="guide-list">
              <li>
                Read <Link href="/blog-forex-course-dubai-beginners">what a beginner course covers</Link> so you know the destination.
              </li>
              <li>
                When you are ready for the platform, follow{" "}
                <Link href="/blog-start-forex-trading-uae-mt5">how to start forex trading in the UAE with MT5</Link>.
              </li>
              <li>
                Read <Link href="/blog-candlestick-patterns">how to read candlesticks</Link>, then{" "}
                <Link href="/blog-market-structure">market structure</Link>, then{" "}
                <Link href="/blog-risk-management">how much to risk</Link>.
              </li>
              <li>
                Watch the lessons below. English recordings are listed first, and Malayalam recordings are on the Malayalam tab. The articles are in English, so you can pair them.
              </li>
              <li>
                Only then look at <Link href="/blog-smart-money-concepts">smart money concepts</Link>. SMC without structure is a pile of labels.
              </li>
              <li>
                When you want correction, book the live <Link href="/courses">Basic to Intermediate</Link> track rather than buying a random “online masterclass”.
              </li>
            </ol>

            <h2>How to judge someone else&apos;s online forex course</h2>
            <p>
              The UAE search results are full of funnels. Use the same tests we publish in{" "}
              <Link href="/blog-choose-forex-academy-uae">how to choose a forex training academy in the UAE</Link>:
            </p>
            <ul className="guide-list">
              <li>The instructor is named, with a background you can read. Ours is <Link href="/about">Gopi Chandran</Link>.</li>
              <li>The syllabus is a sequence, not “20 hours of signals”.</li>
              <li>Practice, if any, is on a regulated broker. Our classroom uses Star Trader, regulated by the SCA. A video course that tells you to deposit with an unnamed offshore firm is a distribution channel, not a school.</li>
              <li>Reviews live on a third party. Equity Fin Academy is rated 5.0 on Google from 30+ reviews. We do not reprint the quotes. The Equity Global channel has 200+ YouTube reviews and comments.</li>
              <li>Nobody guarantees profit. More than 2,000 students trained means people taught, through YouTube and live mentorship. It does not mean 2,000 profitable traders.</li>
            </ul>
            <p>
              If the page will not show a curriculum, start with ours: <Link href="/courses">two tracks, topic by topic</Link>.
              Fees for the live course are quoted when you enquire. <Link href="/pricing">See what is included</Link> before you call.
            </p>
          </div>
        </section>

        <YouTubeSection
          videos={[VIDEOS.whatIsForex, VIDEOS.howToStart, VIDEOS.metatrader]}
          title="The self-paced lessons we actually publish"
          intro="English lessons are listed first. The Malayalam tab has the public Equity Global introductions: what forex is, how to start, and a MetaTrader 5 walkthrough. Press play to load a video."
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
              <h2>Classroom pages</h2>
            </div>
            <RelatedTraining current={path} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
