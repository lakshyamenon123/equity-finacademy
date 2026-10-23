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

const path = "/private-group-forex-training-dubai";

export const metadata = pageMetadata({
  title: "Private vs Group Forex Training in Dubai | Equity Fin Academy",
  description:
    "Private forex training and one-to-one forex classes are a different format from group forex training. Equity Fin Academy runs live cohort classes in Al Qusais, Dubai. Personal coaching is not a separate product listed here.",
  keywords:
    "private forex training Dubai, one to one forex classes Dubai, personal forex coaching UAE, group forex training classes Dubai, forex classes near me Dubai, forex cohort Al Qusais",
  path,
});

const pageFaq = [
  {
    q: "Do you offer private one-to-one forex classes in Dubai?",
    text: "A private one-to-one forex class is not a product listed on this website. What is published is live group training in cohorts at M Floor, Arzoo Building, Al Qusais, plus self-paced lessons on the Equity Global channel. Call if you want to ask whether anything else is available. Do not assume a private seat exists.",
  },
  {
    q: "Are the forex classes in Dubai taught as a group?",
    text: "Yes. The paid tracks are live, in person, and priced by cohort. That is group forex training: a shared syllabus, with the instructor in the room, at the Al Qusais academy.",
  },
  {
    q: "Where are forex classes near me if I am in Dubai?",
    text: "Equity Fin Academy is at M Floor, Arzoo Building, Al Qusais, Dubai. That is the only classroom. Walk-ins are welcome Sunday to Friday. Calling ahead means someone can walk you through the tracks.",
  },
  {
    q: "Is personal forex coaching the same as the WhatsApp support?",
    text: "No. Lifetime WhatsApp access to the instructor is included on the Advanced Institutional Strategies track after the course, for questions. It is not a booked one-to-one coaching hour, and it is not part of the Basic to Intermediate track.",
  },
];

export default function PrivateGroupForexTrainingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Private and Group Forex Training", path },
        ])}
      />
      <JsonLd data={faqPageSchema(pageFaq)} />
      <Header active="private-group" />

      <main>
        <section className="tight bg-glow" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span className="current">Private and Group Training</span>
            </nav>
            <span className="eyebrow">CLASS FORMAT · AL QUSAIS, DUBAI</span>
            <h1 className="hero-display" style={{ fontSize: "clamp(1.8rem,5vw,3.1rem)", maxWidth: "16ch" }}>
              Group classes in Dubai, and how they differ from private coaching.
            </h1>
            <p className="hero-sub" style={{ marginTop: 18, maxWidth: "66ch" }}>
              Searches for private forex training in Dubai, one-to-one forex classes, and personal forex coaching in
              the UAE are looking for a different room from group forex training. This page says which of those Equity
              Fin Academy actually runs.
            </p>
          </div>
        </section>

        <section>
          <div className="container prose-block">
            <h2>What is on the timetable</h2>
            <p>
              The paid courses are live group classes at M Floor, Arzoo Building, Al Qusais, Dubai. Fees are quoted by
              cohort because they change, which is why <Link href="/pricing">pricing</Link> lists what is included and
              not a number. You pick Basic to Intermediate or Advanced Institutional Strategies, then attend with the
              other people on that cohort. Practical sessions use Star Trader, an SCA-regulated broker.
            </p>
            <p>
              Alongside that, the Equity Global channel and the <Link href="/blog">blog</Link> are self-paced. The
              about page describes a live mentorship programme that has trained more than 2,000 students together with
              that channel. Mentorship here means teaching over time. It is not a page you can book as a private hourly
              coach.
            </p>
            <p>
              If you searched “forex classes near me” from inside Dubai, the pin is Al Qusais — northern Dubai, beside
              Sharjah, not a campus in every district. The map is on the <Link href="/contact">contact page</Link>.
              Google’s public rating for the academy is 5.0. Read those reviews on{" "}
              <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">
                Google Maps
              </a>
              . We do not reprint them, and we do not state a review count.
            </p>

            <h2>Private one-to-one, stated as it is</h2>
            <p>
              A one-to-one forex class means the instructor’s hour is yours: your chart, your questions, your pace.
              People look for that when they already have a method and want it corrected, or when they will not ask
              questions in a group. Personal forex coaching in the UAE is usually sold that way, often at a higher fee
              per hour than a shared class. That price relationship is how the market works in general. It is not a
              quote for a lesson we have listed.
            </p>
            <p>
              Equity Fin Academy does not publish a private lesson, a one-to-one timetable, or a personal-coaching fee.
              Please do not read this page as an offer of one. If you specifically need a private seat, call{" "}
              <a href="tel:+971567188995">+971 56 718 8995</a> and ask what is actually available. Until that
              conversation, the format you can enrol in is the group cohort.
            </p>
            <p>
              WhatsApp access is narrower still. Students on Advanced Institutional Strategies keep lifetime access to
              the instructor for questions after the course. Beginners on the first track do not get that line item.
              Messages are not a substitute for either a group class or a private session.
            </p>

            <h2>When the group class is the right room</h2>
            <ul className="guide-list">
              <li>You are new, and you want the topics in order: pairs, candles, structure, then risk. That sequence is the Basic to Intermediate track on the <Link href="/courses">courses page</Link>.</li>
              <li>You want other people hearing the same explanation, so a question you would not have asked still gets answered.</li>
              <li>You can come to Al Qusais. Walk-ins are welcome Sunday to Friday. Calling first means someone is free to match you to a track.</li>
              <li>You do not need a guarantee. Forex can lose money. The academy does not promise profits, in a group or otherwise.</li>
            </ul>
            <p>
              Traders who already know structure use the advanced cohort: order flow, market profile, volume with smart
              money concepts, Fibonacci, psychology, and bot-trading concepts.{" "}
              <Link href="/blog-forex-course-dubai-beginners">What beginners should expect</Link> describes the first
              track in more detail. <Link href="/blog-choose-forex-academy-uae">How to choose an academy in the UAE</Link>{" "}
              is the checklist if you are still comparing schools.
            </p>

            <h2>How to enquire without guessing the format</h2>
            <p>
              Say whether you want the next group cohort, and which track matches your experience. Ask the fee for that
              cohort. Ask the dates. If you also want to know about one-to-one, ask it as a separate question and accept
              a no. The instructor is <Link href="/about">Gopi Chandran</Link>. The classroom does not move to Abu Dhabi
              or Sharjah — those pages explain the same Al Qusais address for{" "}
              <Link href="/forex-course-abu-dhabi">Abu Dhabi</Link> and <Link href="/forex-course-sharjah">Sharjah</Link> students.
            </p>
          </div>
        </section>

        <YouTubeSection
          videos={[VIDEOS.howToStart]}
          title="A public lesson, not a private session"
          intro="This Equity Global recording is a free introduction, in Malayalam. It is self-paced video, not one-to-one coaching and not the live group class."
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
            <p style={{ marginTop: 28 }}>
              <Link href="/contact" className="btn btn-primary">
                Enquire About a Group Cohort
              </Link>
            </p>
          </div>
        </section>

        <section className="tight soft">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">RELATED</span>
              <h2>Curriculum and location</h2>
            </div>
            <RelatedTraining current={path} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
