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
  title: "Online Forex Course in the UAE — What to Use and What We Teach | Equity Fin Academy",
  description:
    "Searching for an online forex course in the UAE? Equity Fin Academy's paid tracks are live in Al Qusais, Dubai. Here is the free self-paced path, and how to judge any online course before you pay.",
  keywords:
    "online forex course UAE, forex course online Dubai, learn forex trading online UAE, self paced forex course, Equity Global YouTube, forex classes remote UAE",
  path,
});

const pageFaq = [
  {
    q: "Does Equity Fin Academy sell a paid online forex course?",
    text: "Not as a separate product on this site. The paid tracks are taught live at M Floor, Arzoo Building, Al Qusais, Dubai. Free self-paced lessons are on the Equity Global YouTube channel and on the blog. Call if you need to ask about a specific cohort — do not assume a remote seat exists.",
  },
  {
    q: "Are the YouTube lessons in English?",
    text: "The Equity Global recordings linked on this page are in Malayalam. The written lessons on this website are in English.",
  },
  {
    q: "Can an online course replace live practice?",
    text: "It can teach vocabulary and chart reading. It cannot watch you place a trade and correct the mistake in the moment. That is what the Al Qusais classes are for, using Star Trader, an SCA-regulated broker.",
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
              Equity Fin Academy&apos;s paid courses are taught in person in Al Qusais, Dubai. The free path is written
              lessons on this site and video on the Equity Global channel. This page separates those two things, then
              shows how to judge any online forex course before you pay someone else.
            </p>
          </div>
        </section>

        <section>
          <div className="container prose-block">
            <h2>What “online” means here</h2>
            <p>
              Two formats get mixed together in search results. One is a video library you watch alone. The other is a
              live class that happens to be reachable from anywhere in the UAE. We publish the first for free. We sell
              the second only as a classroom course at M Floor, Arzoo Building, Al Qusais. There is no fee, timetable
              or checkout on this website for a remote cohort. If you cannot travel, call{" "}
              <a href="tel:+971567188995">+971 56 718 8995</a> and ask what is actually running — the honest answer may
              be “come to Al Qusais, or use the free lessons until you can.”
            </p>
            <p>
              People in <Link href="/forex-course-sharjah">Sharjah</Link> are close to the classroom. People in{" "}
              <Link href="/forex-course-abu-dhabi">Abu Dhabi</Link> are a longer drive. Both still use the same course.
            </p>

            <h2>A free sequence that is actually ordered</h2>
            <p>If you are starting online, use this order. Skipping ahead is how most free content wastes a month.</p>
            <ol className="guide-list">
              <li>
                Read <Link href="/blog-forex-course-dubai-beginners">what a beginner course covers</Link> so you know the destination.
              </li>
              <li>
                Read <Link href="/blog-candlestick-patterns">how to read candlesticks</Link>, then{" "}
                <Link href="/blog-market-structure">market structure</Link>, then{" "}
                <Link href="/blog-risk-management">how much to risk</Link>.
              </li>
              <li>
                Watch the Equity Global introductions below. They are in Malayalam. The articles are in English, so you can pair them.
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
              <li>Reviews live on a third party. Equity Fin Academy is rated 5.0 on Google. We do not reprint quotes, and we do not state a review count on this page.</li>
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
          intro="These three Equity Global videos are the public introductions: what forex is, how to start, and a MetaTrader 5 walkthrough. All three are in Malayalam. Play them here without loading YouTube until you press play."
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
