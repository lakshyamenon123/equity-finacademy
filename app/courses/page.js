import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import YouTubeSection from "../components/YouTubeSection";
import Link from "next/link";
import OpenChatLink from "../components/OpenChatLink";
import { advancedTopics, basicTopics } from "../lib/curriculum";
import { pageMetadata } from "../lib/seo";
import RelatedTraining from "../components/RelatedTraining";
import { breadcrumbSchema, courseSchemas, faqPageSchema, webPageSchema } from "../lib/schema";
import { VIDEOS } from "../lib/videos";
import { STARTRADER_LIVE_URL } from "../lib/whatsapp";

const coursesTitle = "Forex Trading Courses in Dubai";
const coursesDescription =
  "Forex trading courses in Dubai: a group class or a private lesson, in the room or online across the UAE. Two live tracks. Fees quoted in AED.";

export const metadata = pageMetadata({
  title: `${coursesTitle} | Equity Fin Academy`,
  description: coursesDescription,
  keywords:
    "forex trading courses in Dubai, forex course Dubai, forex education UAE, trading classes in Dubai, private forex classes Dubai, group forex classes Dubai",
  path: "/courses",
});

const courseFaq = [
  {
    q: "Which track should I start with?",
    text: "If you're new to trading, start with Basic to Intermediate — it covers forex fundamentals, candlestick patterns and market structure. If you already understand these, Advanced Institutional Strategies goes straight into institutional tools.",
  },
  {
    q: "Does the syllabus cover other markets?",
    text: "Both tracks are forex courses, taught as one market-structure framework. Practical sessions use MetaTrader 5, so the same chart work also covers gold, indices, and stocks the broker lists, alongside forex.",
  },
  {
    q: "What is Lifetime Support via WhatsApp?",
    text: "Students on the Advanced Institutional Strategies track get ongoing access to the instructor via WhatsApp for questions after the course ends.",
  },
  {
    q: "Do you offer private one-to-one lessons?",
    text: "Yes. Private one-to-one forex lessons are available in Dubai, including live trading sessions and training. Group cohorts are available too. Call for the current fee — it is not listed on this page.",
  },
  {
    q: "Is broker access included in the course fee?",
    text: "Practical sessions are run through Star Trader, an SCA-regulated broker. See the pricing page or call for current enrolment and account details.",
  },
];

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 13l4 4L19 7" />
  </svg>
);

export default function CoursesPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ name: coursesTitle, description: coursesDescription, path: "/courses" })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Forex Courses", path: "/courses" },
        ])}
      />
      <JsonLd data={courseSchemas()} />
      <JsonLd data={faqPageSchema(courseFaq)} />
      <Header active="courses" />

      <main>
        <section className="tight page-intro">
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span className="current">Forex Courses</span>
            </nav>
            <span className="eyebrow">CURRICULUM</span>
            <h1 className="hero-display" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", maxWidth: "18ch" }}>
              Forex trading courses in Dubai
            </h1>
            <p style={{ maxWidth: "66ch", marginTop: 18 }}>
              Two live tracks for a group class or a private lesson, in Dubai, UAE, and online across the UAE. Start at the level that matches the chart you can already read. Practical sessions run on a regulated broker. The academy is open 24/7 and rated 5.0 on Google from 30+ reviews. Compare the rooms on{" "}
              <Link href="/private-group-forex-training-dubai">private and group forex training</Link>. Gold, indices, and stocks on the same platform are the{" "}
              <Link href="/stock-market-course-dubai">stock market course</Link>. A map search that mixes those subjects is explained in{" "}
              <Link href="/blog-investing-classes-near-me-dubai">investing classes near me in Dubai</Link>.
            </p>
            <p style={{ maxWidth: "66ch" }}>
              If you searched for forex trading courses in Dubai, or a forex course in Dubai, this page is the topic order. The first month in the city is{" "}
              <Link href="/blog-how-to-start-forex-trading-dubai">how to start forex trading in Dubai</Link>. What the fee includes, still without a printed price, is on{" "}
              <Link href="/pricing">pricing</Link>. The city page is{" "}
              <Link href="/forex-academy-in-dubai">forex courses in Dubai</Link>.
            </p>
            <div className="cta-row">
              <a href="https://wa.me/971559047030" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              <a href="tel:+971559047030" className="btn btn-outline">
                Call +971 55 904 7030
              </a>
              <OpenChatLink className="btn btn-outline">Enquire</OpenChatLink>
            </div>
          </div>
        </section>

        <section className="tight">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">HOW ENROLMENT WORKS</span>
              <h2>Three steps to your first class</h2>
            </div>
            <div className="process-grid">
              <div className="process-step reveal">
                <div className="step-num">01</div>
                <h3>Enquire</h3>
                <p>Call or message us and tell us your current trading experience.</p>
              </div>
              <div className="process-step reveal">
                <div className="step-num">02</div>
                <h3>Pick a track</h3>
                <p>Basic to Intermediate, or Advanced Institutional Strategies.</p>
              </div>
              <div className="process-step reveal">
                <div className="step-num">03</div>
                <h3>Attend live sessions</h3>
                <p>Practical classes on Star Trader, an SCA-regulated broker.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="course-grid">
              <div className="course-card reveal" id="basic-to-intermediate">
                <span className="level">TRACK 01</span>
                <h3>Basic to Intermediate Course</h3>
                <p className="desc">
                  For traders starting from the fundamentals — how to read a chart, understand structure, and
                  recognise where smart money is positioned.
                </p>
                <ul className="course-list">
                  {basicTopics.map((item) => (
                    <li key={item}>
                      <Check />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="cta-row">
                  <OpenChatLink className="btn btn-outline btn-block">Enquire About This Course</OpenChatLink>
                </div>
              </div>

              <div className="course-card featured reveal" id="advanced-institutional">
                <span className="level">TRACK 02</span>
                <h3>Advanced Institutional Strategies</h3>
                <p className="desc">
                  For traders who already understand the basics and want the frameworks used on institutional desks
                  — market profile and risk discipline.
                </p>
                <ul className="course-list">
                  {advancedTopics.map((item) => (
                    <li key={item}>
                      <Check />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="cta-row">
                  <OpenChatLink className="btn btn-primary btn-block">Enquire About This Course</OpenChatLink>
                </div>
              </div>
            </div>
            <p className="text-center" style={{ marginTop: 28 }}>
              <Link href="/pricing" className="btn btn-outline">
                View Pricing &amp; What&apos;s Included
              </Link>
            </p>
          </div>
        </section>

        <section className="tight" id="private-one-to-one">
          <div className="container prose-block">
            <span className="eyebrow">PRIVATE ONE-TO-ONE</span>
            <h2>Private lessons and live trading sessions.</h2>
            <p>
              Alongside the two group tracks, Equity Fin Academy offers private one-to-one forex lessons in Dubai, UAE, and online across the UAE. A private lesson is your chart and your questions with the instructor, and it
              includes live trading sessions and training. Group cohorts include live trading sessions as well. The fee
              for either format is quoted when you enquire — it is not printed here. Lifetime WhatsApp access stays on
              the Advanced track only and is not a booked one-to-one hour.{" "}
              <Link href="/private-group-forex-training-dubai">Private and group forex training</Link> compares the two
              rooms.
            </p>
          </div>
        </section>

        <section className="tight broker-section soft" id="live-trading">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">PRACTICAL SESSIONS</span>
              <h2>Trade through a regulated broker, not a demo gimmick.</h2>
            </div>
            <div className="broker-panel reveal">
              <div className="broker-mark">STAR TRADER</div>
              <div className="broker-copy">
                <span className="badge">SCA-REGULATED</span>
                <h3>Our practical sessions run through Star Trader</h3>
                <p style={{ margin: 0 }}>
                  Star Trader is regulated by the UAE Securities and Commodities Authority (SCA), so the platform
                  mechanics you practise on in class match what you&apos;d use in a live, regulated account.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="tight">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">COURSE FAQS</span>
              <h2>Questions about the curriculum</h2>
            </div>
            <div className="faq-list reveal">
              <details>
                <summary>
                  Which track should I start with?<span className="plus">+</span>
                </summary>
                <p>
                  If you&apos;re new to trading, start with Basic to Intermediate — it covers forex fundamentals,
                  candlestick patterns and market structure. If you already understand these, Advanced Institutional
                  Strategies goes straight into institutional tools.
                </p>
              </details>
              <details>
                <summary>
                  Does the syllabus cover other markets?<span className="plus">+</span>
                </summary>
                <p>
                  Both tracks are forex courses, taught as one market-structure framework. Practical sessions use
                  MetaTrader 5, so the same chart work also covers gold, indices, and stocks the broker lists,
                  alongside forex.
                </p>
              </details>
              <details>
                <summary>
                  What is &quot;Lifetime Support via WhatsApp&quot;?<span className="plus">+</span>
                </summary>
                <p>Students on the Advanced Institutional Strategies track get ongoing access to the instructor via WhatsApp for questions after the course ends.</p>
              </details>
              <details>
                <summary>
                  Do you offer private one-to-one lessons?<span className="plus">+</span>
                </summary>
                <p>
                  Yes. Private one-to-one forex lessons are available in Dubai, including live trading sessions and
                  training. Group cohorts are available too. Call for the current fee — it is not listed on this page.
                </p>
              </details>
              <details>
                <summary>
                  Is broker access included in the course fee?<span className="plus">+</span>
                </summary>
                <p>
                  Practical sessions are run through Star Trader, an SCA-regulated broker. See <Link href="/pricing">Pricing</Link>{" "}
                  or call us for current enrolment and account details.
                </p>
              </details>
            </div>
            <p style={{ marginTop: 24 }}>
              <Link href="/faq" className="btn btn-outline">
                See All 30+ FAQs
              </Link>
            </p>
          </div>
        </section>

        <YouTubeSection videos={[VIDEOS.howToStart, VIDEOS.whatIsForex, VIDEOS.metatrader]} />

        <section>
          <div className="container prose-block">
            <h2>How a Dubai class uses this syllabus</h2>
            <p>
              The lists above are the topics, in teaching order. A class is the same list with someone watching your chart. Group cohorts share one time. A private lesson uses the hour you can keep. Both include live trading sessions, in person in Dubai, UAE, and online across the UAE. The academy is open 24/7. Fees are quoted in AED when you <Link href="/contact">enquire</Link>. They are not printed on this page.
            </p>
            <p>
              Read the concepts before you sit the hour. <Link href="/blog-currency-pairs-uae">Currency pairs</Link> is the quote the first candles sit on. <Link href="/blog-smart-money-concepts">Smart money concepts</Link> explains liquidity, imbalance, and order blocks in plain language. <Link href="/blog-forex-economic-calendar-dubai">The economic calendar in Dubai time</Link> is the diary for scheduled releases, which the advanced track picks up after structure. <Link href="/blog-forex-classes-working-professionals-dubai">Forex classes for working professionals</Link> is for people fitting that hour around a job in Dubai. <Link href="/blog-demo-vs-live-mt5-uae">Demo versus live on MT5</Link> is what to do on the platform between classes. The full article list is the <Link href="/blog">blog</Link>.
            </p>
            <p>
              Abu Dhabi students use the same two tracks. The drive, and the online alternative, are on the <Link href="/forex-course-abu-dhabi">Abu Dhabi course page</Link>. Google reviews stay on Google. The <Link href="/success-stories">reviews page</Link> says how to read them, and it does not invent quotes. The in-person school page is <Link href="/forex-training-academy-dubai">forex training academy Dubai</Link>. Study from another emirate is <Link href="/forex-training-academy-uae">forex training academy UAE</Link>.
            </p>

            <h2>What the basic track is teaching, line by line</h2>
            <p>
              The cards above are the order. This is what each basic line is for, so you can tell whether you already have it. The advanced list assumes these lines are familiar.
            </p>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Line on the track</th>
                    <th>What you should be able to do</th>
                    <th>Read this first</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Basics of forex</td>
                    <td>Explain a pair, a pip, and why the dirham&apos;s dollar peg makes USD pairs familiar.</td>
                    <td><Link href="/blog-currency-pairs-uae">Currency pairs</Link></td>
                  </tr>
                  <tr>
                    <td>Candlestick patterns</td>
                    <td>Say what one candle did: open, high, low, close, and whether the body or the wick matters.</td>
                    <td><Link href="/blog-candlestick-patterns">Candlesticks</Link></td>
                  </tr>
                  <tr>
                    <td>HA pattern strategy</td>
                    <td>Use Heikin Ashi as a smoother view of the same price, after you can read a normal candle.</td>
                    <td><Link href="/blog-forex-course-dubai-beginners">Beginner course guide</Link></td>
                  </tr>
                  <tr>
                    <td>Market structure</td>
                    <td>Point at the last two swing highs and the last two swing lows, and say whether that is a trend or a range.</td>
                    <td><Link href="/blog-market-structure">Market structure</Link></td>
                  </tr>
                  <tr>
                    <td>Orders placed by smart money, and imbalance</td>
                    <td>Mark one swing first. Then look for one sweep or one gap. The vocabulary comes after the swing.</td>
                    <td><Link href="/blog-smart-money-concepts">Smart money concepts</Link></td>
                  </tr>
                  <tr>
                    <td>Indicators, and the G.C. strategy</td>
                    <td>Treat an indicator as a second look at the structure, taught on the chart in class. The public notes do not reprint the method as a formula.</td>
                    <td><Link href="/blog-forex-trading-courses-dubai">How to read a syllabus</Link></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              The cost of acting on any of those marks, the spread and the pip value in dirhams, is <Link href="/blog-forex-spreads-swaps-pip-value-uae">spreads, swaps, and pip value</Link>. The margin the platform holds back is <Link href="/blog-forex-leverage-margin-mt5-uae">leverage and margin on MT5</Link>. How much of the account to risk is <Link href="/blog-risk-management">risk per trade</Link>.
            </p>

            <h2>Who should start on which track</h2>
            <p>
              Basic to Intermediate is the forex education most people in the UAE need first. You can be new to charts. You do not need a broker account on day one. The hour is spent on how pairs are quoted, how a candle is read, and how swing highs and lows describe structure. Smart money ideas appear on this track only after that base, as orders and imbalance, not as a separate product.
            </p>
            <p>
              Advanced Institutional Strategies assumes you can already point at a swing. It adds fundamental analysis, market profile, volume with smart money concepts, Fibonacci, risk and psychology, and bot-trading concepts. Lifetime WhatsApp with the instructor after the course belongs to this track. If the swing is still unclear, booking the advanced track to save time usually means paying to hear the beginner lessons inside an advanced hour.
            </p>
            <p>
              A group class follows that shared list. A private lesson can use the same list on your chart, or review trades you already take. The written version of a private coaching plan is <Link href="/blog-personal-forex-coaching-uae">personal forex coaching in the UAE</Link>. What to write down after a trade is <Link href="/blog-forex-trading-plan-uae">a trading plan and journal</Link>. Neither document replaces the live class. To start on MetaTrader 5 you still need the platform and an account with a trusted broker such as{" "}
              <a href={STARTRADER_LIVE_URL} target="_blank" rel="sponsored noopener noreferrer">
                StarTrader
              </a>
              . Practical sessions at the academy use that broker, which is regulated by the UAE Securities and Commodities Authority. The course fee and the broker balance are separate.
            </p>

            <h2>A class week in Dubai and the United Arab Emirates</h2>
            <p>
              The UAE work week for many private-sector jobs runs Sunday to Thursday. A group cohort uses one shared time on Gulf Standard Time, UTC+4, which does not change in summer. A private lesson can use an hour you can keep. Neither format is a recording. If you live in Dubai, the room is in Dubai, UAE. If you live in another emirate, the same tracks are taught online. Abu Dhabi students should read the <Link href="/forex-course-abu-dhabi">Abu Dhabi course page</Link> before they assume the drive is required.
            </p>
            <p>
              Read one article before the first hour so the class is spent on your chart. The <Link href="/blog">forex blog</Link> is the index. <Link href="/blog-prepare-group-forex-class-dubai">How to prepare for a group class</Link> is the homework for a shared hour. Google reviews stay on Google. The <Link href="/success-stories">reviews page</Link> says how to read the 5.0 listing. To book, use <Link href="/contact">contact</Link> or WhatsApp +971 55 904 7030, and name the track, the format, and Dubai or online. The six lines to fill in before you pay are on <Link href="/why-choose-us">the enrolment checklist</Link>. Abu Dhabi students should use the <Link href="/forex-course-abu-dhabi">Abu Dhabi course page</Link> for the drive or the online seat.
            </p>
          </div>
        </section>

        <section className="tight">
          <div className="container">
            <RelatedTraining current="/courses" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
