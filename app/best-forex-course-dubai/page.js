import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import RelatedTraining from "../components/RelatedTraining";
import YouTubeSection from "../components/YouTubeSection";
import Link from "next/link";
import { pageMetadata } from "../lib/seo";
import { breadcrumbSchema, faqPageSchema } from "../lib/schema";
import { SITE } from "../lib/site";
import { VIDEOS } from "../lib/videos";

const path = "/best-forex-course-dubai";

export const metadata = pageMetadata({
  title: "Best Forex Course in Dubai: How to Choose | Equity Fin Academy",
  description:
    "A practical guide to choosing a forex course in Dubai. Equity Fin Academy in Dubai is rated 5.0 on Google from 30+ reviews and has trained 2,000+ students — here is what to check before you enrol anywhere.",
  keywords:
    "best forex course in Dubai, best forex training Dubai, forex course comparison UAE, forex academy reviews Dubai, how to choose a forex course Dubai",
  path,
});

const guideFaq = [
  {
    q: "What does “best forex course in Dubai” actually mean?",
    text: "It means the course matches your level, names a real instructor, teaches a sequenced forex curriculum, and lets you practise on a regulated broker. A ranking claim without those checks is advertising, not a comparison.",
  },
  {
    q: "Is Equity Fin Academy rated 5.0 on Google?",
    text: "Yes. Equity Fin Academy is rated 5.0 on Google from 30+ reviews. Read them on Google Maps. This site does not reprint the quotes. The Equity Global channel also has 200+ YouTube reviews and comments.",
  },
  {
    q: "How many students has Equity Fin Academy trained?",
    text: "More than 2,000 students, through the Equity Global YouTube channel and live mentorship, across self-paced and cohort-based formats.",
  },
  {
    q: "Does the academy promise trading profits?",
    text: "No. Equity Fin Academy teaches process, structure and risk management. Anyone promising guaranteed returns from a forex course is not being straight with you.",
  },
];

export default function BestForexCourseDubaiPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Best Forex Course in Dubai", path },
        ])}
      />
      <JsonLd data={faqPageSchema(guideFaq)} />
      <Header active="best-dubai" />

      <main>
        <section className="tight bg-glow" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span className="current">Best Forex Course in Dubai</span>
            </nav>
            <span className="eyebrow">A COMPARISON GUIDE · DUBAI</span>
            <h1 className="hero-display" style={{ fontSize: "clamp(1.8rem,5vw,3.2rem)", maxWidth: "18ch" }}>
              How to judge the best forex course in Dubai.
            </h1>
            <p className="hero-sub" style={{ marginTop: 18, maxWidth: "62ch" }}>
              “Best” is a fit question. This page is the checklist we would want you to use on any academy in Dubai,
              including ours. Equity Fin Academy is rated 5.0 on Google from 30+ reviews and has trained 2,000+ students.
            </p>
          </div>
        </section>

        <section className="tight">
          <div className="container">
            <div className="stats-grid" style={{ padding: 0 }}>
              <div className="stat-block">
                <span className="value">5.0</span>
                <span className="label">5.0 on Google from 30+ reviews</span>
              </div>
              <div className="stat-block">
                <span className="value">2000+</span>
                <span className="label">Students Trained</span>
              </div>
              <div className="stat-block">
                <span className="value">2</span>
                <span className="label">Course Tracks</span>
              </div>
              <div className="stat-block">
                <span className="value">1</span>
                <span className="label">Market: Forex</span>
              </div>
            </div>
            <p style={{ marginTop: 18, maxWidth: "68ch" }}>
              That rating is 5.0 on Google from 30+ reviews. Open the listing and read them yourself — we do not
              reprint the quotes. The Equity Global channel has 200+ YouTube reviews and comments. Student numbers are
              people trained through that channel and live mentorship, not a claim about trading profits.
            </p>
            <p>
              <a href={SITE.mapsUrl} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                Read Reviews on Google Maps
              </a>
            </p>
          </div>
        </section>

        <section className="tight soft">
          <div className="container prose-block">
            <span className="eyebrow">THE CHECKLIST</span>
            <h2>Six questions to ask before you pay any academy</h2>
            <ol className="guide-list">
              <li>
                <strong>Who teaches, by name?</strong> You should be able to read a real background.{" "}
                <Link href="/about">Gopi Chandran</Link> is the founder and lead instructor: MBA in Finance, full-time
                founder of Equity Fin Academy, with a background inside institutional trading desks.
              </li>
              <li>
                <strong>Is the curriculum sequenced?</strong> Vocabulary, candles, market structure and risk should come
                before order-flow tactics. Our two tracks are listed in full on the <Link href="/courses">courses page</Link>.
              </li>
              <li>
                <strong>Where do you practise?</strong> Practical sessions at Equity Fin Academy run through Star Trader,
                a broker regulated by the UAE Securities and Commodities Authority (SCA). The broker&apos;s regulation is
                not the same thing as the academy being a licensed advisory firm — we teach; we do not manage your money.
              </li>
              <li>
                <strong>Can you visit?</strong> Classes are live and in person in Dubai, UAE,
                Dubai. The academy is open 24/7. Calling ahead means someone can walk you through the tracks, including private one-to-one lessons and live trading sessions.
              </li>
              <li>
                <strong>Where are the reviews?</strong> Prefer a third-party listing you can open yourself. Ours is on
                Google. The <Link href="/success-stories">reviews page</Link> explains why we do not write testimonials for students.
              </li>
              <li>
                <strong>What is refused?</strong> A serious course will not guarantee profits, sell signals, or hide the
                fee behind a deposit into a broker. Current fees are on request — see <Link href="/pricing">what each track includes</Link>.
              </li>
            </ol>
            <p>
              A longer version of this checklist, written for the whole UAE rather than Dubai alone, is in{" "}
              <Link href="/blog-choose-forex-academy-uae">how to choose a forex training academy in the UAE</Link>.
              Beginners who want the classroom sequence itself should read{" "}
              <Link href="/blog-forex-course-dubai-beginners">what to expect from a forex course in Dubai</Link>.
            </p>
          </div>
        </section>

        <section className="tight">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">WHAT WE PUBLISH ABOUT OURSELVES</span>
              <h2>Facts you can check, and claims we will not make.</h2>
            </div>
            <div className="grid-4">
              <div className="card reveal">
                <div className="num">01</div>
                <h3>5.0 on Google from 30+ reviews</h3>
                <p>The public star rating, from 30+ Google reviews. Open Google Maps and read them. We do not quote them on this website.</p>
              </div>
              <div className="card reveal">
                <div className="num">02</div>
                <h3>2,000+ students trained</h3>
                <p>Through Equity Global and live mentorship, in self-paced and cohort formats. That is teaching reach, not a profit record.</p>
              </div>
              <div className="card reveal">
                <div className="num">03</div>
                <h3>Forex, taught in two tracks</h3>
                <p>Basic to Intermediate for newcomers. Advanced Institutional Strategies once structure is already familiar.</p>
              </div>
              <div className="card reveal">
                <div className="num">04</div>
                <h3>One classroom, in Dubai</h3>
                <p>There is no second campus. Abu Dhabi and Sharjah students attend the same Dubai address, or start with the free lessons.</p>
              </div>
            </div>
            <div className="prose-block" style={{ marginTop: 36 }}>
              <p>
                We do not claim to be the only forex course in Dubai, and we do not claim a result no course can promise.
                Compare the curriculum, the instructor and the broker access, then decide. If you want the short version
                of how the academy is built, read <Link href="/why-choose-us">Why Choose Us</Link> and the{" "}
                <Link href="/forex-academy-in-dubai">forex academy in Dubai</Link> page.
              </p>
            </div>
          </div>
        </section>

        <YouTubeSection
          videos={[VIDEOS.howToStart, VIDEOS.whatIsForex]}
          title="Hear the teaching before you compare fees"
          intro="Two introductory recordings from the Equity Global channel. They are in Malayalam. Use them to judge whether the explanations are clear, then compare that with the live syllabus."
        />

        <section className="tight">
          <div className="container">
            <div className="faq-list">
              {guideFaq.map((item) => (
                <details key={item.q}>
                  <summary>
                    {item.q}
                    <span className="plus">+</span>
                  </summary>
                  <p>{item.text}</p>
                </details>
              ))}
            </div>
            <p style={{ marginTop: 28 }}>
              <Link href="/contact" className="btn btn-primary">
                Book a Seat in Dubai
              </Link>
            </p>
          </div>
        </section>

        <section className="tight soft">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">KEEP COMPARING</span>
              <h2>Related pages</h2>
            </div>
            <RelatedTraining current={path} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
