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
import { STARTRADER_LIVE_URL, whatsappHref } from "../lib/whatsapp";

const path = "/blog-personal-forex-coaching-uae";
const headline = "Personal Forex Coaching in the UAE: What a Coaching Plan Looks Like";
const description =
  "What a personal forex coaching plan covers in the UAE: the goal, the chart, the hour, and how it differs from a group syllabus.";

const mt5English = ENGLISH_VIDEOS.find((video) => video.id === "ssUPlUHnDLo");
const whatsapp = whatsappHref("Hi, I would like a personal forex coaching plan in the UAE");

export const metadata = pageMetadata({
  title: "Personal Forex Coaching in the UAE | Equity Fin Academy",
  description,
  keywords:
    "personal forex coaching UAE, forex coaching plan Dubai, private forex coach UAE, one to one forex coaching Dubai, forex education UAE",
  path,
  type: "article",
});

const postSchema = articleSchema({
  headline,
  description,
  path,
  datePublished: "2026-10-28",
  type: "BlogPosting",
});

export default function PersonalForexCoachingPost() {
  return (
    <>
      <JsonLd data={postSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Personal Forex Coaching", path },
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
              <span className="current">Personal Forex Coaching</span>
            </nav>

            <div className="blog-article">
              <span className="eyebrow">COACHING</span>
              <h1>{headline}</h1>
              <AuthorByline detail="28 Oct 2026 · 8 min read" />

              <p>
                A personal coaching plan is a page you can reread. It says what the next few weeks of forex study are for, which chart you will use, and which hour you can keep. It is not a list of trades. Equity Fin Academy teaches in Dubai, UAE, and online across the UAE. This article is the document. The seat itself, a private hour, a group cohort, or WhatsApp after the advanced track, is described on the{" "}
                <Link href="/forex-mentorship-dubai">forex mentorship</Link> page.
              </p>

              <h2>What the page should contain</h2>
              <p>
                Keep it to one screen. If it needs a second page, it is no longer a plan you will open before a session. These are the lines that earn their place.
              </p>
              <ul>
                <li>
                  <strong>Track.</strong> Basic to Intermediate, or Advanced Institutional Strategies. The topic order is on the{" "}
                  <Link href="/courses">courses page</Link>. Do not write &quot;advanced&quot; because it sounds further along.
                </li>
                <li>
                  <strong>Format.</strong> A private coaching hour, or a group class with a private review later. The comparison is in{" "}
                  <Link href="/blog-private-vs-group-forex-classes-dubai">private versus group classes</Link>.
                </li>
                <li>
                  <strong>One symbol.</strong> A pair you already watch, or gold if that is the chart you actually open. A plan that names five markets is five plans.
                </li>
                <li>
                  <strong>The hour, in Gulf Standard Time.</strong> Dubai and the other emirates share UTC+4 all year. Write the time you can protect, not the time you wish the market would print.
                </li>
                <li>
                  <strong>Risk in AED.</strong> The amount you are willing to lose if the idea is wrong. How to choose that amount is in{" "}
                  <Link href="/blog-risk-management">risk per trade in dirhams</Link>. The plan stores the number. It does not invent a new one each evening.
                </li>
                <li>
                  <strong>A review day.</strong> One sitting when you read the journal, not when you hunt for a new setup.
                </li>
                <li>
                  <strong>The month&apos;s aim, in one sentence.</strong> &quot;Mark swing highs and lows on EUR/USD without adding a second method&quot; is an aim. &quot;Be profitable&quot; is not a task you can practise on Thursday.
                </li>
              </ul>

              <h2>A shape for four weeks</h2>
              <p>
                There is no printed timetable on this site. The academy is open 24/7, and the hour is agreed when you enquire. The shape below is a way to use that hour. It is not a promise about a result, and it is not a cohort calendar.
              </p>
              <ul>
                <li>
                  <strong>Week one.</strong> Install MetaTrader 5. Open a demo account. Mark the last two swing highs and the last two swing lows on one symbol. Write the plan.
                </li>
                <li>
                  <strong>Week two.</strong> Take one topic from the syllabus, candles or structure, and journal every demo ticket against the plan. The difference between a demo ticket and a live one is in{" "}
                  <Link href="/blog-demo-vs-live-mt5-uae">demo versus live on MT5</Link>.
                </li>
                <li>
                  <strong>Week three.</strong> Bring the journal to the coaching hour. The instructor should be looking at what you marked, not at a folder of charts you have not labelled.
                </li>
                <li>
                  <strong>Week four.</strong> Decide whether the next month stays on the same sentence or moves to the next topic. If the swing is still unclear, stay. Skipping ahead is how a plan becomes a wish.
                </li>
              </ul>
              <p>
                People who work days should read <Link href="/blog-forex-classes-working-professionals-dubai">forex classes for working professionals in Dubai</Link> before they write an hour they cannot keep. A Saturday review, when the forex market is shut, is still a valid coaching hour. It is described on{" "}
                <Link href="/weekend-forex-classes-dubai">weekend forex classes</Link>.
              </p>

              <h2>How the hour uses the plan</h2>
              <p>
                Start by reading the aim out loud. Then open the chart named on the page. The useful question is specific: &quot;I marked this swing high. Is that the one that matters?&quot; A private lesson that begins with &quot;what should I trade today?&quot; has skipped the plan. What to have on the screen for a single hour is in{" "}
                <Link href="/blog-one-to-one-forex-classes-dubai">how to prepare for a one-to-one class</Link>. This article is the longer page that hour belongs to.
              </p>
              <p>
                A group cohort does not follow your personal page. It follows the shared syllabus. You can still keep a coaching plan beside it, so the review day has something to read. If you want the cohort first and a private hour later, say that. Both formats include live trading sessions, in Dubai and online across the UAE.
              </p>

              <h2>What the plan leaves out</h2>
              <p>
                It does not name a trade for tomorrow morning. It does not ask the academy for your broker password. It does not treat a YouTube comment as a result. The academy is rated 5.0 on Google from 30+ reviews, and more than 2,000 students have trained through Equity Global and live classes. Those figures describe reach and a public rating. They do not belong on your plan as a target.
              </p>
              <p>
                Smart money words can wait until structure is on the page. The plain-language version is{" "}
                <Link href="/blog-smart-money-concepts">smart money concepts</Link>. Putting &quot;order block&quot; in the aim before you can point at a swing makes the month harder, not more advanced.
              </p>

              <h2>Before you fund an account</h2>
              <p>
                To start trading you need MetaTrader 5 and an account with a trusted broker such as{" "}
                <a href={STARTRADER_LIVE_URL} target="_blank" rel="sponsored noopener noreferrer">
                  StarTrader
                </a>
                . Practical sessions at the academy use StarTrader, which is regulated by the UAE Securities and Commodities Authority. The link is the academy&apos;s affiliate link. You open the account yourself. The course fee and the broker balance are separate. If the platform is new, read{" "}
                <Link href="/blog-start-forex-trading-uae-mt5">how to start with MT5 in the UAE</Link> before the first coaching hour.
              </p>
              <p>
                Abu Dhabi students often study online because the drive is the hard part. That choice is on the{" "}
                <Link href="/forex-course-abu-dhabi">Abu Dhabi course page</Link>. The in-person school is the{" "}
                <Link href="/forex-training-academy-dubai">forex training academy Dubai</Link> page. The instructor is{" "}
                <Link href="/about">Gopi Chandran</Link>.
              </p>

              <h2>How to ask for coaching</h2>
              <p>
                Send the plan&apos;s first lines, not a paragraph about your ambitions. A complete message looks like this: &quot;Basic to Intermediate, private lesson, online from Abu Dhabi, after 7pm Gulf Standard Time. The aim this month is swing highs and lows on EUR/USD. Please quote the fee in AED.&quot; Swap the track, the emirate, and the symbol for your own.
              </p>
              <p>
                Call <a href={`tel:${SITE.telephoneTel}`}>{SITE.telephoneDisplay}</a>, message on{" "}
                <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
                , or use the <Link href="/contact">contact form</Link>. The academy is open 24/7. Fees are quoted when you ask. They are not printed here. Google reviews are linked from the <Link href="/success-stories">reviews page</Link>.
              </p>
              <AcademyLinks lead="The live coaching seat, once the hour is agreed, is taught through the" />
            </div>
          </div>
        </section>

        <YouTubeSection
          videos={[VIDEOS.metatrader, VIDEOS.howToStart]}
          englishVideos={[mt5English]}
          title="Set up MT5 before the first coaching hour"
          intro="The English lesson, from Equity Global English, shows how to open a broker account and use MetaTrader 5. Have that done before a coaching hour so the time is spent on your plan. The Malayalam tab has an MT5 tutorial and a beginner introduction from Equity Global. The recordings are a preview, not the coaching session in Dubai, UAE."
        />

        <section className="tight">
          <div className="container">
            <div className="cta-banner reveal">
              <div>
                <h2>Bring the plan, then ask for the hour.</h2>
                <p>A private lesson or a group seat in Dubai, UAE, and online across the UAE. The fee is quoted in AED.</p>
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
