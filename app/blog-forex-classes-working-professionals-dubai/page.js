import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import YouTubeSection from "../components/YouTubeSection";
import AcademyLinks from "../components/AcademyLinks";
import Link from "next/link";
import AuthorByline from "../components/AuthorByline";
import { pageMetadata } from "../lib/seo";
import { articleSchema, breadcrumbSchema } from "../lib/schema";
import { ENGLISH_VIDEOS, VIDEOS } from "../lib/videos";
import { SITE } from "../lib/site";
import { whatsappHref } from "../lib/whatsapp";

const path = "/blog-forex-classes-working-professionals-dubai";
const headline = "Forex Classes for Working Professionals in Dubai";
const description =
  "How working professionals in Dubai fit forex classes around a job: evening and flexible seats, Gulf Standard Time, and what to prepare.";

const mt5English = ENGLISH_VIDEOS.find((video) => video.id === "ssUPlUHnDLo");
const whatsapp = whatsappHref("Hi, I work days in Dubai and would like a forex class after work");

export const metadata = pageMetadata({
  title: "Forex Classes for Dubai Professionals | Equity Fin Academy",
  description,
  keywords:
    "forex classes for working professionals Dubai, evening forex classes Dubai, trading classes in Dubai, forex training Dubai, flexible forex course UAE",
  path,
  type: "article",
});

const postSchema = articleSchema({
  headline,
  description,
  path,
  datePublished: "2026-10-27",
  type: "BlogPosting",
});

export default function ProfessionalsForexClassesPost() {
  return (
    <>
      <JsonLd data={postSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Classes for Professionals", path },
        ])}
      />
      <Header active="blog" />

      <main>
        <section className="tight">
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <Link href="/blog">Blog</Link>
              <span className="sep">/</span>
              <span className="current">Classes for Professionals</span>
            </nav>

            <div className="blog-article">
              <span className="eyebrow">WORKING PROFESSIONALS</span>
              <h1>{headline}</h1>
              <AuthorByline detail="27 Oct 2026 · 8 min read" />

              <p>
                Most people who ask about forex training in Dubai already have a job. The class has to sit after the
                office, not instead of it. Equity Fin Academy is open 24/7, in person in Dubai, UAE, and online across
                the UAE. There is no printed weekly timetable on this site. You name the hours you can keep, and the
                next seat is quoted with the fee in AED.
              </p>

              <h2>What “after work” means on Gulf Standard Time</h2>
              <p>
                Dubai, Abu Dhabi, and the other emirates share Gulf Standard Time, UTC+4, all year. A 7pm class is 7pm
                whether you are in the room or online from another emirate. You do not convert your own city.
              </p>
              <p>
                The forex week is a different clock. It follows New York, so the busy London and New York hours move
                twice a year even though the UAE does not. In the months when both cities are on daylight saving time,
                their overlap falls about 16:00 to 20:00 in the UAE. In the months when both are on standard time, it
                falls about 17:00 to 21:00. The full tables, including the week when the two cities disagree, are on
                the <Link href="/blog-forex-market-hours-dubai">Dubai market-hours page</Link>.
              </p>
              <p>
                That overlap is often still inside a Dubai office day, especially in summer. You do not have to take
                the class during it. Mark the swings before you leave the office, or review them after dinner. A class
                can teach the same chart at the hour you can protect. Watching a live candle is useful. It is not a
                requirement for the first lessons on structure and risk.
              </p>

              <h2>Evening seat or weekend seat</h2>
              <p>
                Use this page if the constraint is a weekday job. Use{" "}
                <Link href="/weekend-forex-classes-dubai">weekend forex classes in Dubai</Link> if Saturday or Sunday
                is the day you can actually attend. From Saturday morning until Monday morning, UAE time, the forex
                market is shut. A weekend class can still meet. The chart will not be printing new candles. Say which
                of the two you mean in the first message, because they are booked as different hours of the same
                course, not as two syllabuses.
              </p>
              <p>
                Many private-sector jobs in the UAE run Sunday to Thursday. If that is your week, an evening on one of
                those days is the ordinary request. If your employer uses a different week, name the day. The academy
                does not assume one calendar.
              </p>

              <h2>Private hour or group cohort</h2>
              <p>
                A private one-to-one lesson is the format that bends around a diary. The hour is yours, on your chart,
                with the questions you brought. A group cohort shares one time. You fit the class, and you hear other
                people&apos;s questions, which is useful when you are new and you do not yet know what to ask.
              </p>
              <p>
                Both include live trading sessions. Neither is a recording you start when the meeting runs late. The
                comparison is in{" "}
                <Link href="/blog-private-vs-group-forex-classes-dubai">private versus group forex classes in Dubai</Link>,
                and the offer is on{" "}
                <Link href="/private-group-forex-training-dubai">private and group training</Link>. If you want the
                hour to be about your own positions rather than the shared syllabus, say private. If you want the
                topic sequence from the beginning, start with the group track and read{" "}
                <Link href="/blog-forex-course-dubai-beginners">what beginners should expect</Link>.
              </p>

              <h2>What to prepare on a weeknight</h2>
              <p>
                Arrive with one chart, not a folder of screenshots. Pick a pair you already watch. Mark the last two
                swing highs and the last two swing lows. Write one question in a sentence: where you think price is,
                and what you do not understand. That is enough for an hour. A second question can wait.
              </p>
              <ul>
                <li>Know which track you are asking for: Basic to Intermediate, or Advanced Institutional Strategies.</li>
                <li>Know whether you will be in Dubai or online. Online covers every emirate on the same clock.</li>
                <li>
                  If MetaTrader 5 is not installed, follow{" "}
                  <Link href="/blog-start-forex-trading-uae-mt5">how to start forex trading in the UAE with MT5</Link>{" "}
                  before the class, so the hour is not spent on a download.
                </li>
                <li>
                  Practise the buttons on a demo account until you can place a stop. The difference between that
                  account and a live one is in{" "}
                  <Link href="/blog-demo-vs-live-mt5-uae">demo versus live on MT5</Link>.
                </li>
              </ul>
              <p>
                The two topic lists, in teaching order, are on the <Link href="/courses">courses page</Link>. Smart
                money concepts come after structure. The plain-language version is{" "}
                <Link href="/blog-smart-money-concepts">the SMC article</Link>. Do not book the advanced track to save
                evenings if the swing high is still unclear.
              </p>

              <h2>What the academy will not schedule for you</h2>
              <p>
                There is no promise that an evening class makes you profitable, and no published dirham fee on this
                page. The fee depends on the cohort and the format, so it is quoted when you ask. The course fee and
                any broker balance are separate. The academy does not hold client funds and does not ask for a broker
                password.
              </p>
              <p>
                If you live in Abu Dhabi and the evening drive is the hard part, study online. The{" "}
                <Link href="/forex-course-abu-dhabi">Abu Dhabi course page</Link> is the note for that choice. Sharjah
                is closer, and it has its own page: <Link href="/forex-course-sharjah">forex course in Sharjah</Link>.
                The in-person school, written as a place rather than a timetable, is the{" "}
                <Link href="/forex-training-academy-dubai">forex training academy Dubai</Link> page.
              </p>
              <p>
                The instructor is <Link href="/about">Gopi Chandran</Link>. More than 2,000 students have trained
                through Equity Global and live mentorship. The academy is rated 5.0 on Google from 30+ reviews. Those
                figures are reach and a public rating. They are not a result you should expect from studying after
                work. Read the reviews on the <Link href="/success-stories">reviews page</Link>.
              </p>

              <h2>How to ask for the seat</h2>
              <p>
                Send one message. Name the track, private or group, Dubai or online, and the hours you can keep on
                Gulf Standard Time. Ask for the fee in AED and the next opening. Call{" "}
                <a href={`tel:${SITE.telephoneTel}`}>{SITE.telephoneDisplay}</a>, message on{" "}
                <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
                , or use the <Link href="/contact">contact form</Link>. The academy is open 24/7.
              </p>
              <AcademyLinks lead="The live class, once the hour is agreed, is the" />
            </div>
          </div>
        </section>

        <YouTubeSection
          videos={[VIDEOS.howToStart, VIDEOS.metatrader]}
          englishVideos={[mt5English]}
          title="See the platform you will use after work"
          intro="The English lesson is an Equity Global English walkthrough of opening a broker account and using MetaTrader 5. The Malayalam tab has an introduction to forex and an MT5 tutorial from Equity Global. Watch them before an evening class so the hour is spent on your chart. They are a preview, not the live lesson in Dubai, UAE."
        />

        <section className="tight">
          <div className="container">
            <div className="cta-banner reveal">
              <div>
                <h2>Tell us the hours you can keep.</h2>
                <p>A group seat or a private lesson in Dubai, UAE, and online across the UAE. The fee is quoted in AED.</p>
              </div>
              <div className="cta-row">
                <a href={whatsapp} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
                <Link href="/contact" className="btn btn-outline">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
