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
import { STARTRADER_LIVE_URL } from "../lib/whatsapp";

const path = "/blog-private-and-group-forex-classes-dubai";
const headline = "Private One-to-One and Group Forex Classes in Dubai: How to Use Both";
const description =
  "How a private one-to-one forex class and a group class in Dubai can sit in the same month: what each hour is for, and the message that books both.";

const mt5English = ENGLISH_VIDEOS.find((video) => video.id === "ssUPlUHnDLo");

export const metadata = pageMetadata({
  title: "Private and Group Forex Classes in Dubai | Equity Fin Academy",
  description,
  keywords:
    "private one to one forex classes Dubai, group forex classes Dubai, forex course Dubai, forex training academy Dubai, private forex lesson and group class",
  path,
  type: "article",
});

const postSchema = articleSchema({
  headline,
  description,
  path,
  datePublished: "2026-11-10",
});

export default function PrivateAndGroupForexClassesPost() {
  return (
    <>
      <JsonLd data={postSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Private and Group Classes Together", path },
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
              <span className="current">Private and Group Classes Together</span>
            </nav>

            <div className="blog-article">
              <span className="eyebrow">PRIVATE AND GROUP</span>
              <h1>Private One-to-One and Group Forex Classes in Dubai: How to Use Both</h1>
              <AuthorByline detail="10 Nov 2026 · 9 min read" />

              <p>
                Most people treat a private one-to-one forex class and a group class as a fork. Pick one, ignore the other. At Equity Fin Academy the two formats share a teacher and a platform, and they do different jobs. You can book both in the same month. This note is the split of work, so the private hour is not a second copy of the group, and the group is not a place you sit quietly hoping your chart comes up.
              </p>
              <p>
                The page that helps you choose one format is <Link href="/blog-private-vs-group-forex-classes-dubai">private versus group forex classes in Dubai</Link>. The offer itself is <Link href="/private-group-forex-training-dubai">private and group training</Link>. Stay here if you already suspect you want the shared syllabus and one hour on your own chart.
              </p>

              <h2>What stays in the group</h2>
              <p>
                A group forex class in Dubai follows a written sequence. Basic to Intermediate starts with the quote, the candle, and market structure. Advanced Institutional Strategies assumes that base and moves on. The value of the room is the order, plus the question another student asks that you would have skipped. You hear the answer anyway.
              </p>
              <p>
                The group uses one shared symbol so everyone is looking at the same price. Bring a question about that symbol, not a tour of four pairs. How to arrive ready is <Link href="/blog-prepare-group-forex-class-dubai">how to prepare for a group forex class</Link>. An evening seat after work, on Gulf Standard Time, is <Link href="/blog-evening-group-forex-classes-dubai">evening group classes</Link>. If the other people are colleagues you already know, the practical steps are in <Link href="/blog-group-forex-classes-friends-dubai">group classes for friends and colleagues</Link>.
              </p>
              <p>
                The topic lists, in teaching order, are on the <Link href="/courses">forex trading courses</Link> page. Read them before you ask the group to jump ahead. The cohort cannot rewind a week because one person missed the quote.
              </p>

              <h2>What stays in the private hour</h2>
              <p>
                A private one-to-one lesson is your chart, your pair, and the question you will not ask in front of a room. The instructor is <Link href="/gopi-chandran">Gopi Chandran</Link>. You bring one screenshot or one open MetaTrader 5 chart, a sentence about what you think the swing is, and the level you could not mark in the group. The hour is spent there.
              </p>
              <p>
                The first sitting has its own checklist: <Link href="/blog-first-private-forex-lesson-dubai">what to bring and ask in a first private lesson</Link>. The prep before that, if the platform is the worry, is <Link href="/blog-one-to-one-forex-classes-dubai">how to prepare for a one-to-one class</Link>. A longer coaching plan, across several weeks, is <Link href="/blog-personal-forex-coaching-uae">personal forex coaching in the UAE</Link>. This page is narrower. It is about pairing one private hour with the group you are already in.
              </p>
              <p>
                The private hour is not a replay of a group class you missed. If you missed the cohort, say so and ask for the next group time. Using a private booking to hear the whole beginner list, alone, at private pace, is a different request. Say that plainly if it is what you want. Do not expect the instructor to guess it from the word &quot;both&quot;.
              </p>

              <h2>A month that uses both, on Gulf Standard Time</h2>
              <p>
                There is no printed weekly timetable. Dates move, and the academy is open 24/7. A workable month still has a shape you can write down before you enquire.
              </p>
              <ol>
                <li>Week one: the group hour on the next topic in the track. Take one note of the level the cohort marked, and the symbol.</li>
                <li>Between classes: open that symbol on MetaTrader 5. Write one sentence: what you think happens if price returns to the level. The quote, if it is still fuzzy, is <Link href="/blog-currency-pairs-uae">currency pairs</Link>. The margin line, if the size is the worry, is <Link href="/blog-forex-leverage-margin-mt5-uae">leverage and margin</Link>.</li>
                <li>The private hour: bring that sentence and that chart. Ask the instructor to correct the level, not to reteach the whole group evening.</li>
                <li>The next group: you are back on the shared symbol, with a cleaner mark, ready for the following topic.</li>
              </ol>
              <p>
                One private hour in a month is enough when the group is doing its job. A private hour every week, plus the group, is a larger booking. Ask for both fees in AED. They are quoted separately because the rooms are not the same length of attention. Nothing on this page is a price.
              </p>
              <p>
                People fitting this around a job should read <Link href="/blog-forex-classes-working-professionals-dubai">forex classes for working professionals</Link> before they name an hour they cannot keep. A weekend seat is described on <Link href="/weekend-forex-classes-dubai">weekend forex classes</Link>. Online from another emirate uses the same clock. Abu Dhabi students can read the <Link href="/forex-course-abu-dhabi">Abu Dhabi course page</Link> before they assume the drive is required.
              </p>

              <h2>What each hour is allowed to finish</h2>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>You want this done</th>
                      <th>Use this hour</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Learn the next topic in order, with other people&apos;s questions in the room</td>
                      <td>Group class</td>
                    </tr>
                    <tr>
                      <td>Correct one level on the pair you actually trade</td>
                      <td>Private one-to-one</td>
                    </tr>
                    <tr>
                      <td>See what a live session contains once the hour is booked</td>
                      <td>
                        <Link href="/blog-live-forex-trading-session-dubai">A live forex session in Dubai</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>Install the platform before either hour</td>
                      <td>
                        <Link href="/blog-start-forex-trading-uae-mt5">Start with MT5</Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Lifetime WhatsApp with the instructor, after the course, belongs to Advanced Institutional Strategies. It is not added because you booked a private hour, and it is not a way to skip the group. Questions between classes still belong in the next booked hour unless you are on that advanced track.
              </p>

              <h2>The message that books both</h2>
              <p>
                Send one message, not two vague ones. A concrete version: &quot;Basic to Intermediate. I want the group class in Dubai on a weekday evening, Gulf Standard Time, and one private hour the following week on EURUSD. Please quote both fees in AED.&quot; Change the track, the city, and the pair so the line is true.
              </p>
              <p>
                Practical sessions use{" "}
                <a href={STARTRADER_LIVE_URL} target="_blank" rel="sponsored noopener noreferrer">
                  StarTrader
                </a>
                , regulated by the UAE Securities and Commodities Authority, on MetaTrader 5. The link is the academy&apos;s affiliate link. You open the account yourself. The course fee and the broker balance are separate. Have the platform installed before the first hour so neither room is spent on the download. The English lesson below is that walkthrough.
              </p>
              <p>
                The academy is rated 5.0 on Google from 30+ reviews. More than 2,000 students have trained through Equity Global and live classes. Read the listing from the <Link href="/success-stories">reviews page</Link>. The six checks before you pay are on <Link href="/why-choose-us">the enrolment checklist</Link>.
              </p>
              <p>
                Send the message from the <Link href="/contact">contact page</Link> or WhatsApp +971 55 904 7030. The wider notes are on the <Link href="/blog">blog</Link>.
              </p>
              <AcademyLinks lead="The school pages for either format are the" />
              <div className="blog-cta">
                <p>Name the group hour and the private hour. The fees are quoted in AED.</p>
                <Link href="/contact" className="btn btn-primary">
                  Contact the academy
                </Link>
              </div>
            </div>
          </div>
        </section>

        <YouTubeSection
          videos={[VIDEOS.howToStart]}
          englishVideos={mt5English ? [mt5English] : []}
          title="See MetaTrader 5 before the first of the two hours"
          intro="The English lesson, from Equity Global English, walks through opening a broker account and using MetaTrader 5. The Malayalam tab is an Equity Global introduction to how to start. Watch either so the group class and the private hour can stay on the chart, rather than on the download."
        />
      </main>

      <Footer />
    </>
  );
}
