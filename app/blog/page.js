import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import Link from "next/link";
import { pageMetadata } from "../lib/seo";
import { absoluteListItem, breadcrumbSchema, faqPageSchema, webPageSchema } from "../lib/schema";
import { absoluteUrl } from "../lib/site";

const blogTitle = "Forex Education Notes for Dubai and the UAE";
const blogDescription =
  "Forex education notes from Equity Fin Academy in Dubai: a reading order for the course, then how to book a group class or a private lesson across the UAE.";

export const metadata = pageMetadata({
  title: `${blogTitle} | Equity Fin Academy`,
  description: blogDescription,
  keywords:
    "forex blog Dubai, forex class notes UAE, forex trading articles Dubai, forex education United Arab Emirates, forex course Dubai",
  path: "/blog",
});

const posts = [
  {
    href: "/blog-live-forex-trading-session-dubai",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M10 9.5v5l5-2.5-5-2.5z" />
      </>
    ),
    cat: "Live Sessions",
    title: "What a Live Forex Trading Session in Dubai Includes",
    desc: "One chart, a mark you made earlier, a practice order, and the note you keep for the next class.",
    time: "8 min read",
  },
  {
    href: "/blog-forex-classes-ajman-ras-al-khaimah",
    icon: (
      <>
        <path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.2" />
      </>
    ),
    cat: "Northern Emirates",
    title: "Forex Classes in Ajman and the Northern Emirates",
    desc: "Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain: online on Gulf Standard Time, or a visit to Dubai.",
    time: "9 min read",
  },
  {
    href: "/blog-how-to-start-forex-trading-dubai",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2" />
      </>
    ),
    cat: "Getting Started",
    title: "How to Start Forex Trading in Dubai",
    desc: "A first-month plan: what to study, when to book a group class or a private lesson, and what to send.",
    time: "8 min read",
  },
  {
    href: "/blog-stock-market-course-dubai-first-weeks",
    icon: (
      <>
        <path d="M4 18V6M4 18h16" />
        <path d="M8 18V12M12 18V8M16 18v-6" />
      </>
    ),
    cat: "Stocks",
    title: "What the First Weeks of a Stock Market Course in Dubai Should Cover",
    desc: "A share, an index, and gold are different charts. Here is the first-week drill before you enquire.",
    time: "8 min read",
  },
  {
    href: "/blog-investing-classes-near-me-dubai",
    icon: (
      <>
        <path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.2" />
      </>
    ),
    cat: "Investing Classes",
    title: "Investing Classes Near Me in Dubai: How to Sort the Map",
    desc: "What a near-me search mixes together, and how to tell a forex class from a stock class before you travel.",
    time: "8 min read",
  },
  {
    href: "/blog-forex-leverage-margin-mt5-uae",
    icon: (
      <>
        <path d="M4 18V6M4 18h16" />
        <path d="M8 18V11M12 18V8M16 18v-4" />
      </>
    ),
    cat: "MT5",
    title: "Forex Leverage and Margin on MT5 for Traders in the UAE",
    desc: "How to read the margin line in MetaTrader 5, and what a leverage setting changes before a class in Dubai.",
    time: "8 min read",
  },
  {
    href: "/blog-forex-spreads-swaps-pip-value-uae",
    icon: (
      <>
        <path d="M4 8h16M4 12h10M4 16h13" />
        <path d="M16 14l3 2-3 2" />
      </>
    ),
    cat: "Trade Costs",
    title: "Forex Spreads, Swaps, and Pip Value for Traders in the UAE",
    desc: "How to read the spread on MT5, what a pip is worth in dirhams, and where the overnight swap is listed.",
    time: "9 min read",
  },
  {
    href: "/blog-prepare-group-forex-class-dubai",
    icon: (
      <>
        <circle cx="8" cy="9" r="2" />
        <circle cx="16" cy="9" r="2" />
        <path d="M4 18c.7-2.4 2.2-3.5 4-3.5s3.3 1.1 4 3.5" />
        <path d="M12 18c.7-2.4 2.2-3.5 4-3.5s3.3 1.1 4 3.5" />
      </>
    ),
    cat: "Group Classes",
    title: "How to Prepare for a Group Forex Class in Dubai",
    desc: "The topic, the question, and the chart to have ready so a shared hour stays on the cohort.",
    time: "8 min read",
  },
  {
    href: "/blog-gold-xauusd-course-dubai",
    icon: (
      <>
        <circle cx="12" cy="12" r="7" />
        <path d="M12 8v8M9.5 10.5h4a1.8 1.8 0 010 3.6H10" />
      </>
    ),
    cat: "Gold",
    title: "Gold (XAUUSD) Trading Course in Dubai: What the Class Teaches",
    desc: "How a Dubai forex class marks XAUUSD, and why gold is not a separate syllabus from the two tracks.",
    time: "9 min read",
  },
  {
    href: "/blog-group-forex-classes-friends-dubai",
    icon: (
      <>
        <circle cx="8" cy="9" r="2" />
        <circle cx="16" cy="9" r="2" />
        <path d="M4.5 18c.6-2.2 2-3.2 3.5-3.2s2.9 1 3.5 3.2" />
        <path d="M12.5 18c.6-2.2 2-3.2 3.5-3.2s2.9 1 3.5 3.2" />
      </>
    ),
    cat: "Group Classes",
    title: "Group Forex Classes in Dubai for Friends and Colleagues",
    desc: "What to agree before colleagues enquire together, and how a shared cohort differs from a private hour.",
    time: "8 min read",
  },
  {
    href: "/blog-currency-pairs-uae",
    icon: (
      <>
        <path d="M7 8h10M7 16h10" />
        <path d="M14 5l3 3-3 3M10 13l-3 3 3 3" />
      </>
    ),
    cat: "Forex Basics",
    title: "Currency Pairs for Forex Learners in Dubai and the UAE",
    desc: "How a quote is built, which majors to open first, and why the dirham's dollar peg makes USD pairs familiar.",
    time: "8 min read",
  },
  {
    href: "/blog-forex-economic-calendar-dubai",
    icon: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M8 3v4M16 3v4M4 10h16" />
      </>
    ),
    cat: "Market Calendar",
    title: "How to Read a Forex Economic Calendar in Dubai",
    desc: "How to turn a data release into Gulf Standard Time, and what a Dubai class expects you to notice.",
    time: "8 min read",
  },
  {
    href: "/blog-forex-classes-near-me-dubai",
    icon: (
      <>
        <path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.2" />
      </>
    ),
    cat: "Trading Classes",
    title: "Forex Classes Near Me in Dubai: What to Check Before You Visit",
    desc: "What a map search can decide, and the questions to ask before you book a group class or a private lesson.",
    time: "8 min read",
  },
  {
    href: "/blog-forex-education-uae",
    icon: (
      <>
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </>
    ),
    cat: "Forex Education",
    title: "Forex Education in the UAE: What to Study Before You Book a Class",
    desc: "The study order that makes a trading class in Dubai useful, and when it is time to enrol.",
    time: "8 min read",
  },
  {
    href: "/blog-personal-forex-coaching-uae",
    icon: (
      <>
        <circle cx="12" cy="8" r="3" />
        <path d="M6 19c.8-2.6 2.8-4 6-4s5.2 1.4 6 4" />
      </>
    ),
    cat: "Coaching",
    title: "Personal Forex Coaching in the UAE: What a Coaching Plan Looks Like",
    desc: "The one-page plan a private coaching hour is built around, and how it differs from a group syllabus.",
    time: "8 min read",
  },
  {
    href: "/blog-forex-trading-plan-uae",
    icon: (
      <>
        <path d="M6 3h9l3 3v15H6z" />
        <path d="M9 11h6M9 15h4" />
      </>
    ),
    cat: "Trading Plan",
    title: "How to Write a Forex Trading Plan and Journal in the UAE",
    desc: "Rules to write before the session, and the notes to write after, on Gulf Standard Time.",
    time: "8 min read",
  },
  {
    href: "/blog-forex-classes-working-professionals-dubai",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2" />
      </>
    ),
    cat: "Working Professionals",
    title: "Forex Classes for Working Professionals in Dubai",
    desc: "How to fit an evening or flexible class around a job in Dubai, on Gulf Standard Time.",
    time: "8 min read",
  },
  {
    href: "/blog-demo-vs-live-mt5-uae",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M8 12h8M12 9v6" />
      </>
    ),
    cat: "Practice",
    title: "Demo vs Live: Practising on MT5 before You Trade in the UAE",
    desc: "What a MetaTrader 5 demo account teaches, what it hides, and when a live account is the next step.",
    time: "8 min read",
  },
  {
    href: "/blog-forex-trading-courses-dubai",
    icon: (
      <>
        <path d="M6 3h9l3 3v15H6z" />
        <path d="M15 3v3h3M8 11h8M8 15h6" />
      </>
    ),
    cat: "Courses",
    title: "How to Read a Forex Trading Course Syllabus in Dubai",
    desc: "Topic order, live sessions, and what a fee quote should include before you enrol.",
    time: "8 min read",
  },
  {
    href: "/blog-one-to-one-forex-classes-dubai",
    icon: (
      <>
        <circle cx="12" cy="8" r="3" />
        <path d="M6 19c.8-2.6 2.8-4 6-4s5.2 1.4 6 4" />
      </>
    ),
    cat: "Private Lessons",
    title: "How to Prepare for One-to-One Forex Classes in Dubai",
    desc: "The chart, the question, and the platform to have ready before a private hour.",
    time: "7 min read",
  },
  {
    href: "/blog-forex-market-hours-dubai",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2" />
      </>
    ),
    cat: "Market Hours",
    title: "Forex Market Hours in Dubai: London and New York in UAE Time",
    desc: "Gulf Standard Time for the London and New York sessions, and why the clock shifts twice a year.",
    time: "7 min read",
  },
  {
    href: "/blog-support-and-resistance-forex",
    icon: (
      <>
        <path d="M4 7h16M4 17h16" />
        <path d="M7 17V10m5 7V7m5 10v-5" />
      </>
    ),
    cat: "Chart Reading",
    title: "Support and Resistance in Forex: A Beginner's Guide for Dubai",
    desc: "How to mark the areas where price has stalled, and how a Dubai class uses them.",
    time: "8 min read",
  },
  {
    href: "/blog-private-vs-group-forex-classes-dubai",
    icon: (
      <>
        <circle cx="8" cy="8" r="2" />
        <circle cx="16" cy="8" r="2" />
        <path d="M4.5 18c.6-2.4 2.1-3.5 3.5-3.5S11 15.6 11.5 18" />
        <path d="M12.5 18c.6-2.4 2.1-3.5 3.5-3.5s3 1.1 3.5 3.5" />
      </>
    ),
    cat: "Class Format",
    title: "Private vs Group Forex Classes in Dubai",
    desc: "Who a one-to-one lesson suits, and who should start in the group cohort.",
    time: "6 min read",
  },
  {
    href: "/blog-start-forex-trading-uae-mt5",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M7 15l3-4 2.5 2.5L16 9" />
      </>
    ),
    cat: "Getting Started",
    title: "How to Start Forex Trading in the UAE with MT5",
    desc: "What to learn first, then how to install MetaTrader 5 and open an account.",
    time: "6 min read",
  },
  {
    href: "/blog-choose-forex-academy-uae",
    icon: <path d="M12 3l2.2 4.6L19 8.2l-3.5 3.4.8 4.9L12 14.8 7.7 16.5l.8-4.9L5 8.2l4.8-.6L12 3z" />,
    cat: "Choosing a School",
    title: "How to Choose a Forex Training Academy in the UAE",
    desc: "The checks that matter before you pay any forex academy, including this one.",
    time: "8 min read",
  },
  {
    href: "/blog-forex-course-dubai-beginners",
    icon: <path d="M4 19V5m0 14h16M8 15V9m4 6V7m4 8v-4" />,
    cat: "Beginners",
    title: "Forex Course in Dubai for Beginners: What to Expect",
    desc: "The Basic to Intermediate group class in Dubai, topic by topic.",
    time: "8 min read",
  },
  {
    href: "/blog-candlestick-patterns",
    icon: <path d="M6 4v4M6 8h0v8M6 16v4M12 2v3M12 5h0v11M12 16v6M18 6v2M18 8h0v9M18 17v3" />,
    cat: "Chart Reading",
    title: "How to Read Candlestick Patterns: A Beginner's Guide for Dubai",
    desc: "What each candle tells you, and the patterns worth actually learning first.",
    time: "8 min read",
  },
  {
    href: "/blog-market-structure",
    icon: <path d="M3 17l5-6 4 3 8-10" />,
    cat: "Market Structure",
    title: "What Is Market Structure in Forex? A Guide for UAE Traders",
    desc: "Swing highs, swing lows, and how to tell a trend from a range.",
    time: "7 min read",
  },
  {
    href: "/blog-risk-management",
    icon: <path d="M12 2l8 4v6c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-4z" />,
    cat: "Risk Management",
    title: "Forex Risk Management in the UAE: How Much to Risk Per Trade",
    desc: "Position sizing in AED, stop-losses, and why this matters more than entries.",
    time: "6 min read",
  },
  {
    href: "/blog-common-mistakes",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v5M12 16h.01" />
      </>
    ),
    cat: "Beginner Mistakes",
    title: "7 Common Mistakes Beginner Forex Traders Make in the UAE",
    desc: "The patterns that quietly drain new trading accounts.",
    time: "7 min read",
  },
  {
    href: "/blog-smart-money-concepts",
    icon: (
      <>
        <path d="M4 18l5-6 4 3 7-9" />
        <path d="M20 6h-4v4" />
      </>
    ),
    cat: "Strategy",
    title: "Smart Money Concepts (SMC) Explained for Beginners in Dubai",
    desc: "Liquidity, imbalance and order blocks, in plain language.",
    time: "9 min read",
  },
];

const blogListingSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${absoluteUrl("/blog")}#blog`,
  url: absoluteUrl("/blog"),
  name: "Forex articles for Dubai and the UAE",
  description:
    "Forex articles from Equity Fin Academy in Dubai: class formats, MetaTrader 5 practice, session times, and chart reading.",
  inLanguage: "en-AE",
  publisher: { "@id": "https://www.equityfinacademy.com/#organization" },
};

const blogFaq = [
  {
    q: "Where should a beginner in Dubai start on this blog?",
    text: "Start with how a currency pair is quoted, then candlesticks, then market structure. The card list on this page is in that spirit: costs and class prep first, chart reading further down. The live version of the same order is the Basic to Intermediate track on the courses page.",
  },
  {
    q: "Are these articles the forex course?",
    text: "These are class notes you can read before you enrol. The course is a live group class or a private lesson in Dubai, UAE, or online across the UAE. The topic lists are on the courses page. Fees are quoted in AED when you enquire.",
  },
  {
    q: "I searched for investing classes near me. Which note is that?",
    text: "Use Investing Classes Near Me in Dubai. It sorts a map result into forex, stocks, and gold. The forex visit checklist is a separate article, Forex Classes Near Me in Dubai.",
  },
];

const blogListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Forex articles for Dubai and the UAE",
  numberOfItems: posts.length,
  itemListElement: posts.map((post, index) => absoluteListItem(index + 1, post.title, post.href)),
};

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ name: blogTitle, description: blogDescription, path: "/blog" })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <JsonLd data={blogListingSchema} />
      <JsonLd data={blogListSchema} />
      <JsonLd data={faqPageSchema(blogFaq)} />
      <Header active="blog" />

      <main>
        <section className="tight bg-glow" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span className="current">Blog</span>
            </nav>
            <span className="eyebrow">FOREX EDUCATION BLOG</span>
            <h1 className="hero-display" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", maxWidth: "20ch" }}>
              Forex education notes for Dubai and the UAE.
            </h1>
            <p style={{ maxWidth: "66ch", marginTop: 18 }}>
              Read the note that matches the question you have, then book the live class if you want the chart corrected. The two tracks are on <Link href="/courses">forex courses</Link>. The school pages are the{" "}
              <Link href="/forex-training-academy-dubai">forex training academy Dubai</Link> and the{" "}
              <Link href="/forex-training-academy-uae">forex training academy UAE</Link>.
            </p>
          </div>
        </section>

        <section>
          <div className="container prose-block">
            <h2>A reading order, then the page that books the seat</h2>
            <p>
              New to charts, and already in Dubai: <Link href="/blog-how-to-start-forex-trading-dubai">how to start forex trading in Dubai</Link> is the first month. The install steps stay in <Link href="/blog-start-forex-trading-uae-mt5">how to start with MT5</Link>. A stock or an index, rather than a currency pair, starts with <Link href="/blog-stock-market-course-dubai-first-weeks">the first weeks of a stock market course in Dubai</Link>. Then <Link href="/blog-currency-pairs-uae">how a pair is quoted</Link>, then <Link href="/blog-candlestick-patterns">candlesticks</Link>, then <Link href="/blog-market-structure">market structure</Link>. About to fund an account: <Link href="/blog-demo-vs-live-mt5-uae">demo versus live on MT5</Link>, then <Link href="/blog-forex-leverage-margin-mt5-uae">leverage and margin</Link>, then <Link href="/blog-forex-spreads-swaps-pip-value-uae">what a pip is worth</Link>. The advanced vocabulary, after you can point at a swing, is <Link href="/blog-smart-money-concepts">smart money concepts</Link>.
            </p>
            <p>
              A map search has two notes. <Link href="/blog-investing-classes-near-me-dubai">Investing classes near me in Dubai</Link> sorts forex, stocks, and gold. <Link href="/blog-forex-classes-near-me-dubai">Forex classes near me in Dubai</Link> is the visit checklist once you already know you want forex. Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain are in <Link href="/blog-forex-classes-ajman-ras-al-khaimah">forex classes in the northern emirates</Link>. What the booked hour contains is <Link href="/blog-live-forex-trading-session-dubai">a live forex session in Dubai</Link>. What to study before either booking is <Link href="/blog-forex-education-uae">forex education in the UAE</Link>. A day job changes the hour, which is <Link href="/blog-forex-classes-working-professionals-dubai">classes for working professionals</Link>.
            </p>
            <p>
              These pages are the seat, once the reading has done its job. The classroom is in Dubai, UAE. Online classes use Gulf Standard Time in every emirate.
            </p>
            <ul className="guide-list">
              <li>
                <Link href="/courses">Forex course tracks</Link> lists Basic to Intermediate and Advanced Institutional Strategies in teaching order.
              </li>
              <li>
                <Link href="/forex-course-abu-dhabi">Forex course for Abu Dhabi</Link> is the drive-or-online choice for people in the capital. The classroom stays in Dubai.
              </li>
              <li>
                <Link href="/why-choose-us">The enrolment checklist</Link> is six lines: the teacher, the track, the room, the broker, the reviews, and the AED quote.
              </li>
              <li>
                <Link href="/success-stories">Google reviews</Link> explains how to read the 5.0 listing. Quotes stay on Google.
              </li>
              <li>
                <Link href="/contact">Contact</Link> is where you send the track, the format, and your emirate. WhatsApp is +971 55 904 7030.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">LATEST ARTICLES</span>
              <h2>Start with whichever topic fits where you are</h2>
            </div>
            <div className="blog-grid">
              {posts.map((post) => (
                <a href={post.href} className="blog-card reveal" key={post.href}>
                  <div className="blog-card-thumb">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      {post.icon}
                    </svg>
                  </div>
                  <div className="blog-card-body">
                    <span className="cat">{post.cat}</span>
                    <h3>{post.title}</h3>
                    <p>{post.desc}</p>
                    <span className="meta">By Gopi Chandran, Forex Mentor, Dubai · {post.time}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="tight">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">BEFORE YOU PICK A CARD</span>
              <h2>Questions about these notes</h2>
            </div>
            <div className="faq-list reveal">
              {blogFaq.map((item) => (
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
            <div className="cta-banner reveal">
              <div>
                <h2>Want this taught live, with your chart on the screen?</h2>
                <p>The Dubai courses, and the same classes online across the UAE, cover these topics with practical sessions on an SCA-regulated broker. Fees are quoted in AED.</p>
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
