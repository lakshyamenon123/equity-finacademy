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

const path = "/blog-group-forex-classes-friends-dubai";
const headline = "Group Forex Classes in Dubai for Friends and Colleagues";
const description =
  "How friends and colleagues in Dubai can study forex together: agree the level, send one enquiry, and keep separate MT5 accounts.";

const mt5English = ENGLISH_VIDEOS.find((video) => video.id === "ssUPlUHnDLo");

export const metadata = pageMetadata({
  title: "Group Forex Classes in Dubai for Friends | Equity Fin Academy",
  description,
  keywords:
    "group forex classes Dubai, forex class with friends Dubai, forex course for colleagues UAE, group forex training Dubai, forex classes Dubai colleagues",
  path,
  type: "article",
});

const postSchema = articleSchema({
  headline,
  description,
  path,
  datePublished: "2026-10-31",
});

export default function GroupForexClassesFriendsPost() {
  return (
    <>
      <JsonLd data={postSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Group Classes for Friends", path },
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
              <span className="current">Group Classes for Friends</span>
            </nav>

            <div className="blog-article">
              <span className="eyebrow">GROUP CLASSES · DUBAI, UAE</span>
              <h1>{headline}</h1>
              <AuthorByline detail="31 Oct 2026 · 8 min read" />

              <p>
                A group forex class in Dubai is easier to keep when someone you already know is in the same room. Colleagues finish work on the same clock. Friends can hold each other to the hour. Equity Fin Academy runs group cohorts on a shared syllabus, in person in Dubai, UAE, and online across the United Arab Emirates. This page is how to enquire together without pretending that three people are one student.
              </p>
              <p>
                It is not the comparison of formats. If you are still deciding between a private hour and a cohort, read <Link href="/blog-private-vs-group-forex-classes-dubai">private versus group forex classes in Dubai</Link> first. Come back when the group is the choice and the question is how your circle joins it.
              </p>

              <h2>Agree four facts before anyone messages</h2>
              <p>
                One person should send the enquiry, with the others named. Mixed messages produce three quotes and no seat. Write these down together first.
              </p>
              <ol className="guide-list">
                <li>
                  <strong>Level.</strong> Basic to Intermediate is for people who still need pairs, candles, and structure in order. Advanced Institutional Strategies assumes you can already point at a swing. If one colleague is new and another already trades, say that. Forcing both onto one track to stay in the same room usually wastes the hour of the person who is in the wrong place. The lists are on the <Link href="/courses">course tracks</Link> page. <Link href="/blog-forex-course-dubai-beginners">What a beginner course covers</Link> is the plain version of the first track.
                </li>
                <li>
                  <strong>Place.</strong> The classroom is in Dubai, UAE. Online is the same instructor on Gulf Standard Time from any emirate. A group that lives in different emirates should pick online, or be honest that some people will drive. Abu Dhabi readers can use the <Link href="/forex-course-abu-dhabi">Abu Dhabi course page</Link>. The remote seat is the <Link href="/online-forex-course-uae">online forex course</Link>.
                </li>
                <li>
                  <strong>Time.</strong> A cohort has a shared time. Name the hours everyone can keep, including an evening after work. There is no printed weekly timetable, because dates move. The academy is open 24/7. <Link href="/blog-forex-classes-working-professionals-dubai">Forex classes for working professionals in Dubai</Link> and <Link href="/weekend-forex-classes-dubai">weekend classes</Link> cover the two constraints people actually have. Session clocks are on <Link href="/blog-forex-market-hours-dubai">forex market hours in Dubai</Link>.
                </li>
                <li>
                  <strong>Format.</strong> Ask whether the next open cohort can take your group, and ask the fee in AED for each person. The academy quotes when you enquire. It does not print a friends rate on this site. What a quote is based on is explained on <Link href="/forex-course-fees-dubai">forex course fees in Dubai</Link>.
                </li>
              </ol>

              <h2>A shared class is still your own chart</h2>
              <p>
                Sitting together does not mean trading together. Each person keeps their own notes, their own risk, and their own MetaTrader 5 login. Copying a colleague’s ticket because you were in the same lesson is how a group loses the point of the class. The lesson is the mark on the chart. The decision to trade is each person’s.
              </p>
              <p>
                Practical sessions at the academy use StarTrader, regulated by the UAE Securities and Commodities Authority. When someone is ready for a live account, they open it themselves. The course fee and the broker balance are separate. A group chat is not a shared wallet.
              </p>
              <p>
                <a href={STARTRADER_LIVE_URL} target="_blank" rel="sponsored noopener noreferrer">
                  StarTrader live account
                </a>{" "}
                is the link the academy gives for that step. The English video below shows an account opening and the MT5 layout, so each person can do it before the first class. The written version is <Link href="/blog-start-forex-trading-uae-mt5">how to start with MT5 in the UAE</Link>. Use a demo until the buttons are familiar. <Link href="/blog-demo-vs-live-mt5-uae">Demo versus live</Link> is the difference.
              </p>

              <h2>What the first classes are actually for</h2>
              <p>
                If the group is new, the early hours are vocabulary: how a pair is quoted, how a candle is read, how a swing describes structure. That is useful even if one friend wanted to start on gold or on a strategy name. Gold is marked with the same tools, which is the subject of <Link href="/blog-gold-xauusd-course-dubai">the XAUUSD class note</Link>. Strategy names such as liquidity come after structure. Read <Link href="/blog-forex-education-uae">forex education in the UAE</Link> if the group cannot agree what “beginner” means.
              </p>
              <p>
                A private lesson is still available if one person wants their own chart reviewed and the others want the cohort. Those are two bookings, not a failed group. Preparation for the private hour is in <Link href="/blog-one-to-one-forex-classes-dubai">how to prepare for a one-to-one class</Link>. The offer itself is <Link href="/private-group-forex-training-dubai">private and group forex training in Dubai</Link>.
              </p>

              <h2>One message, then the reply</h2>
              <p>
                Send a single note from the <Link href="/contact">contact page</Link> or WhatsApp{" "}
                <a href="https://wa.me/971559047030" target="_blank" rel="noopener noreferrer">
                  +971 55 904 7030
                </a>
                . A usable version: “Three colleagues, Basic to Intermediate, weekday evening, two in Dubai and one online from Sharjah. Can we sit the same cohort? Please quote the fee in AED for each person.” Change the number, the track, the cities, and the hour so they are true.
              </p>
              <p>
                The reply should name the track, whether a shared cohort is available for that time, and the fee. It should not ask for a broker password. Read how students talk about the academy on Google via the <Link href="/success-stories">reviews page</Link> if the group wants third-party comments first. The academy is rated 5.0 on Google from 30+ reviews. The in-person school is the <Link href="/forex-training-academy-dubai">forex training academy Dubai</Link> page. Study from another emirate is the <Link href="/forex-training-academy-uae">forex training academy UAE</Link> page. The <Link href="/blog">blog</Link> is the reading list if someone in the group wants a week of notes before you write.
              </p>
              <AcademyLinks lead="Book the live cohort through the" />
              <div className="blog-cta">
                <p>One enquiry for the group. Name the track, the emirate, and the hour you share.</p>
                <Link href="/contact" className="btn btn-primary">
                  Contact the academy
                </Link>
              </div>
            </div>
          </div>
        </section>

        <YouTubeSection
          videos={[VIDEOS.metatrader]}
          englishVideos={mt5English ? [mt5English] : []}
          title="Each person should open MT5 before the first class"
          intro="The English lesson, from Equity Global English, shows how to open a broker account and use MetaTrader 5. Friends and colleagues each do this on their own login. It is not the group class. The Malayalam tab is the Equity Global MT5 tutorial. The live cohort is in Dubai, UAE, or online across the United Arab Emirates."
        />
      </main>

      <Footer />
    </>
  );
}
