import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import RelatedTraining from "../components/RelatedTraining";
import YouTubeSection from "../components/YouTubeSection";
import Link from "next/link";
import OpenChatLink from "../components/OpenChatLink";
import { pageMetadata } from "../lib/seo";
import { breadcrumbSchema, faqPageSchema, privateCourseSchema } from "../lib/schema";
import { SITE } from "../lib/site";
import { VIDEOS } from "../lib/videos";

const path = "/private-group-forex-training-dubai";

export const metadata = pageMetadata({
  title: "Private & Group Forex Training Dubai | Equity Fin Academy",
  description:
    "Private one-to-one forex training in Dubai, and group classes on a shared syllabus. Personal coaching across the UAE, with live trading. Fees on enquiry.",
  keywords:
    "private forex training Dubai, one to one forex classes Dubai, personal forex coaching UAE, group forex training classes Dubai, live trading sessions Dubai, forex classes near me Dubai, forex cohort Al Qusais",
  path,
});

const pageFaq = [
  {
    q: "Do you offer private one-to-one forex classes in Dubai?",
    text: "Yes. Equity Fin Academy offers private one-to-one forex lessons in Dubai, UAE, including live trading sessions and training. The fee is quoted when you enquire and is not published on this site.",
  },
  {
    q: "Are the forex classes in Dubai also taught as a group?",
    text: "Yes. The Basic to Intermediate and Advanced Institutional Strategies tracks run as live group cohorts in Dubai, with live trading sessions and training on a shared syllabus. You can choose a group seat or a private one-to-one lesson.",
  },
  {
    q: "Where are forex classes near me if I am in Dubai?",
    text: "Equity Fin Academy is in Dubai, UAE. That is the only classroom. The academy is open 24/7. Calling ahead means someone can walk you through the tracks and the private option.",
  },
  {
    q: "Is personal forex coaching the same as the WhatsApp support?",
    text: "No. A private one-to-one lesson is a booked session with live trading. Lifetime WhatsApp access to the instructor is included on the Advanced Institutional Strategies track after the course, for questions. It is not a booked one-to-one hour, and it is not part of the Basic to Intermediate track.",
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
      <JsonLd data={privateCourseSchema()} />
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
              Private one-to-one lessons and group forex classes in Dubai.
            </h1>
            <p className="hero-sub" style={{ marginTop: 18, maxWidth: "66ch" }}>
              Equity Fin Academy offers both. Private forex training, one-to-one forex classes, and personal forex
              coaching in the UAE are a booked lesson with the instructor. Group forex training is the shared cohort.
              Both include live trading sessions and training at the Dubai classroom.
            </p>
          </div>
        </section>

        <section>
          <div className="container prose-block">
            <h2>What is on the timetable</h2>
            <p>
              Training is in person in Dubai, UAE, and online across the UAE. You can join a group
              cohort on Basic to Intermediate or Advanced Institutional Strategies, or book a private one-to-one
              lesson. Live trading sessions and training are part of both formats. Fees are quoted when you enquire,
              which is why <Link href="/pricing">pricing</Link> lists what a track includes and not a number. Practical
              sessions use Star Trader, an SCA-regulated broker.
            </p>
            <p>
              The academy is open 24/7. Calling ahead still helps: someone can match you to a track and say whether
              the next seat is a group cohort or a private lesson. There is no published weekly timetable, because
              dates move.
            </p>
            <p>
              Alongside the classroom, the Equity Global channel and the <Link href="/blog">blog</Link> are self-paced.
              The about page describes a live mentorship programme that has trained more than 2,000 students together
              with that channel. The channel has 200+ YouTube reviews and comments. Mentorship and the free videos are
              not a substitute for a booked private hour.
            </p>
            <p>
              If you searched “forex classes near me” in Dubai, classes are in Dubai, UAE, and online across the UAE. The map is on the <Link href="/contact">contact page</Link>.
              The academy is rated 5.0 on Google from 30+ reviews. Read them on{" "}
              <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">
                Google Maps
              </a>
              . We do not reprint the quotes.
            </p>

            <h2>Private one-to-one lessons</h2>
            <p>
              A one-to-one forex class means the instructor’s hour is yours: your chart, your questions, your pace,
              with live trading sessions in the room. People book it when they already have a method and want it
              corrected, or when they will not ask questions in a group. The fee is quoted on enquiry. It is not
              printed here, and this page does not invent an hourly rate.
            </p>
            <p>
              To book a private lesson, call <a href="tel:+971559047030">+971 55 904 7030</a> or use the{" "}
              <Link href="/contact">contact form</Link> and say you want one-to-one. Ask the fee and the next
              available session. The instructor is <Link href="/about">Gopi Chandran</Link>.
            </p>
            <p>
              WhatsApp access is separate. Students on Advanced Institutional Strategies keep lifetime access to the
              instructor for questions after the course. Beginners on the first track do not get that line item.
              Messages are not a substitute for a group class or a private session.
            </p>

            <h2>When the group class is the right room</h2>
            <ul className="guide-list">
              <li>You are new, and you want the topics in order: pairs, candles, structure, then risk. That sequence is the Basic to Intermediate track on the <Link href="/courses">courses page</Link>.</li>
              <li>You want other people hearing the same explanation, so a question you would not have asked still gets answered.</li>
              <li>You can come to Dubai. The academy is open 24/7. Calling first means someone is free to match you to a track or a private lesson.</li>
              <li>You do not need a guarantee. Forex can lose money. The academy does not promise profits, in a group or in a private lesson.</li>
            </ul>
            <p>
              Traders who already know structure use the advanced cohort: market profile, volume with smart
              money concepts, Fibonacci, psychology, and bot-trading concepts.{" "}
              <Link href="/blog-forex-course-dubai-beginners">What beginners should expect</Link> describes the first
              track in more detail.{" "}
              <Link href="/blog-private-vs-group-forex-classes-dubai">Private coaching versus a group class</Link>{" "}
              is the longer look at which format suits a working week, a first course, or a chart you already trade.{" "}
              <Link href="/blog-choose-forex-academy-uae">How to choose an academy in the UAE</Link>{" "}
              is the checklist if you are still comparing schools.
            </p>

            <h2>How to enquire</h2>
            <p>
              Say whether you want the next group cohort or a private one-to-one lesson, and which track matches your
              experience. Ask the fee. Ask the dates. Both formats include live trading sessions and training. The
              classroom does not move to Abu Dhabi or Sharjah. Those pages explain the same Dubai classes, and online study across the UAE, for{" "}
              <Link href="/forex-course-abu-dhabi">Abu Dhabi</Link> and <Link href="/forex-course-sharjah">Sharjah</Link> students.
            </p>
          </div>
        </section>

        <YouTubeSection
          videos={[VIDEOS.howToStart]}
          title="A public lesson from Equity Global"
          intro="This Equity Global recording is a free introduction, in Malayalam. It is self-paced video. The live group class and the private one-to-one lesson, including live trading sessions, happen at the academy."
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
              <OpenChatLink className="btn btn-primary">Enquire About Private or Group Training</OpenChatLink>
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
