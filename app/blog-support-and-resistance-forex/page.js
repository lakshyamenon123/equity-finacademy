import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import YouTubeSection from "../components/YouTubeSection";
import AcademyLinks from "../components/AcademyLinks";
import Link from "next/link";
import { pageMetadata } from "../lib/seo";
import { articleSchema, breadcrumbSchema } from "../lib/schema";
import { ENGLISH_VIDEOS, VIDEOS } from "../lib/videos";
import { STARTRADER_LIVE_URL } from "../lib/whatsapp";

const path = "/blog-support-and-resistance-forex";
const headline = "Support and Resistance in Forex: A Beginner's Guide";
const description =
  "How support and resistance form on a forex chart, how they differ from one candle, and where they sit in a Dubai course.";

const mt5English = ENGLISH_VIDEOS.find((video) => video.id === "ssUPlUHnDLo");

export const metadata = pageMetadata({
  title: "Support and Resistance for Forex Beginners | Equity Fin Academy",
  description,
  keywords:
    "support and resistance forex, support and resistance for beginners, forex course Dubai, private forex training Dubai, one to one forex classes, group forex classes Dubai",
  path,
  type: "article",
});

const postSchema = articleSchema({
  headline,
  description,
  path,
  datePublished: "2026-10-25",
  type: "BlogPosting",
});

export default function SupportResistancePost() {
  return (
    <>
      <JsonLd data={postSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Support and Resistance", path },
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
              <span className="current">Support and Resistance</span>
            </nav>

            <div className="blog-article">
              <span className="eyebrow">CHART READING</span>
              <h1>Support and Resistance in Forex: A Beginner&apos;s Guide</h1>
              <div className="meta">By Gopi Chandran · Equity Fin Academy · 25 Oct 2026 · 8 min read</div>

              <p>
                Support and resistance are the areas on a forex chart where a move has stalled before. Support is
                where a fall has paused and turned up. Resistance is where a rise has paused and turned down. A
                candlestick can show the reaction. It does not, on its own, tell you the location. This is the plain
                version, for someone about to take a forex course in Dubai or study online from elsewhere in the UAE.
              </p>

              <h2>Draw an area, not a perfect line</h2>
              <p>
                Price rarely turns on the identical number at every visit. Mark a band across the wicks where the
                turns cluster. If several turns sit close together, that band is the level. A line that touches once
                is a sketch, and you should expect to adjust it once more of the chart is on screen. A level you have
                to redraw after every candle is not ready to use.
              </p>

              <h2>Swing points are where the areas start</h2>
              <p>
                A swing high is a natural place to look for resistance later, because sellers have already turned
                price there. A swing low is a natural place to look for support. If those two words are still fuzzy,
                read <Link href="/blog-market-structure">what market structure is</Link> before you fill the chart
                with lines. The swings are the map. Support and resistance are labels for places on that map.
              </p>
              <p>
                After price closes through a resistance area and then holds above it, traders often watch that same
                area as support on the next visit. The reverse is true after broken support. One wick through the band
                is not a change of role. Wait for a close beyond the area, then for price to come back, before you
                treat the role as different.
              </p>

              <h2>What the candle is for</h2>
              <p>
                A hammer, a rejection wick, or an engulfing candle is more useful at a level than the same shape in
                the middle of a drift. The candle is how price reacted. The level is where you were looking. The{" "}
                <Link href="/blog-candlestick-patterns">candlestick guide</Link> covers the shapes. Use it beside this
                page. A tidy candle with no location is just a tidy candle.
              </p>

              <h2>How this shows up in a Dubai class</h2>
              <p>
                The Basic to Intermediate track teaches candlesticks, then market structure. Support and resistance
                are the names for the areas those swings leave behind. You meet them while learning structure, not as
                a price list sent out before the lesson.{" "}
                <Link href="/blog-forex-course-dubai-beginners">What a beginner forex course in Dubai includes</Link>{" "}
                walks the track in order.
              </p>
              <p>
                In a group class the chart is shared, so the area under discussion is one the cohort can see. In
                private forex training the hour can stay on your pair, including the zone you keep moving because you
                want it to be true. One-to-one forex classes and group forex classes in Dubai cover the same idea at
                a different pace. Personal forex coaching in the UAE is that booked hour, in Dubai or online, not a
                set of levels delivered to your phone. Read{" "}
                <Link href="/blog-private-vs-group-forex-classes-dubai">private versus group classes</Link> if you are
                choosing the room, and the <Link href="/courses">courses page</Link> for the topic order. The booking
                page is <Link href="/private-group-forex-training-dubai">private and group training</Link>.
              </p>

              <h2>A level can fail</h2>
              <p>
                Support that holds forever would not leave room for a downtrend. The plan has to include the failure.
                Place the stop beyond the area, with room for the wick, rather than in the middle of the band where
                ordinary noise will touch it. How large the position should be is covered in{" "}
                <Link href="/blog-risk-management">how much to risk per trade</Link>. The level does not answer that
                by looking obvious.{" "}
                <Link href="/blog-common-mistakes">Seven common mistakes</Link> starts with risking too much on a
                single trade, including sizing from conviction rather than from a calculation.
              </p>
              <p>
                Obvious swing areas are also where{" "}
                <Link href="/blog-smart-money-concepts">smart money concepts</Link> begin, once structure is already
                visible. You can mark a high and a low before that layer.
              </p>

              <h2>Mark them before the busy hours</h2>
              <p>
                Areas drawn in a quiet part of the day are often tested when London and New York are both open. The
                UAE times for that overlap move twice a year. The tables are in{" "}
                <Link href="/blog-forex-market-hours-dubai">forex market hours in Dubai</Link>. Mark the zone first,
                then watch the session. Leave the line where you drew it, including when the move makes the earlier
                mark look clumsy.
              </p>
              <p>
                To practice the marking, open a chart on MetaTrader 5. The English recording below is a walkthrough of
                the platform and of opening a broker account. It does not teach support and resistance on its own. Use
                it to get a chart on screen, then mark the areas from this article. Practical sessions at the academy
                use{" "}
                <a href={STARTRADER_LIVE_URL} target="_blank" rel="sponsored noopener noreferrer">
                  StarTrader
                </a>
                , an SCA-regulated broker. The account is separate from the course fee. The written install steps are
                in <Link href="/blog-start-forex-trading-uae-mt5">how to start on MT5</Link>.
              </p>
              <p>
                The instructor is <Link href="/about">Gopi Chandran</Link>. Equity Fin Academy is rated 5.0 on Google
                from 30+ reviews. More than 2,000 students have been trained through Equity Global and live
                mentorship. The Equity Global channel has 200+ YouTube reviews and comments. Open the reviews on
                Google rather than treating this paragraph as one of them.
              </p>
              <p>
                Ask about the next group cohort or a private lesson on the <Link href="/contact">contact page</Link>,
                or call <a href="tel:+971559047030">+971 55 904 7030</a>.
              </p>
              <AcademyLinks lead="The live lessons are the" />
            </div>
          </div>
        </section>

        <YouTubeSection
          videos={[VIDEOS.metatrader]}
          englishVideos={[mt5English]}
          title="Open a chart, then mark the areas yourself"
          intro="The English lesson is a MetaTrader 5 walkthrough from Equity Global English. It gets a chart on screen. It does not teach support and resistance on its own. The Malayalam tab has the Equity Global MT5 tutorial. Both are preparation, not the class in Dubai, UAE."
        />

        <section className="tight">
          <div className="container">
            <div className="cta-banner reveal">
              <div>
                <h2>Want these levels marked on a live chart?</h2>
                <p>Group classes and private one-to-one lessons in Dubai, UAE, with live trading sessions.</p>
              </div>
              <Link href="/courses" className="btn btn-primary">
                View Courses
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
