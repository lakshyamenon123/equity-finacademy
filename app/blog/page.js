import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import Link from "next/link";
import { pageMetadata } from "../lib/seo";
import { breadcrumbSchema } from "../lib/schema";
import { absoluteUrl } from "../lib/site";

export const metadata = pageMetadata({
  title: "Forex Education Articles for the UAE | Equity Fin Academy",
  description:
    "Forex education for Dubai and the UAE: trading classes, coaching plans, a trading journal, MT5 practice, and how a course is taught.",
  keywords:
    "forex education UAE, forex trading blog Dubai, forex trading classes Dubai, forex coaching plan UAE, trading journal forex",
  path: "/blog",
});

const posts = [
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

const blogListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Forex articles for Dubai and the UAE",
  numberOfItems: posts.length,
  itemListElement: posts.map((post, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: post.title,
    url: absoluteUrl(post.href),
  })),
};

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <JsonLd data={blogListingSchema} />
      <JsonLd data={blogListSchema} />
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
              Forex articles for Dubai and the UAE.
            </h1>
            <p style={{ maxWidth: "66ch", marginTop: 18 }}>
              Plain-language explanations of the concepts that matter, from session times in the UAE to the areas where price has stalled. The live classes are the{" "}
              <Link href="/forex-training-academy-dubai">forex training academy Dubai</Link> page and the{" "}
              <Link href="/forex-training-academy-uae">forex training academy UAE</Link> page. The two tracks those pages point at are on <Link href="/courses">Courses</Link>.
            </p>
          </div>
        </section>

        <section>
          <div className="container prose-block">
            <h2>Start with the question you actually have</h2>
            <p>
              If you have a day job in Dubai, read <Link href="/blog-forex-classes-working-professionals-dubai">forex classes for working professionals</Link> before you assume the class has to be at noon. If the chart still looks like a code, start with <Link href="/blog-currency-pairs-uae">how currency pairs are quoted</Link>, then <Link href="/blog-candlestick-patterns">candlesticks</Link>. If you are about to fund a broker account, read <Link href="/blog-demo-vs-live-mt5-uae">demo versus live on MT5</Link> first, then <Link href="/blog-start-forex-trading-uae-mt5">how to start with MT5</Link>. The chart lessons sit underneath both: <Link href="/blog-market-structure">market structure</Link> and <Link href="/blog-smart-money-concepts">smart money concepts</Link>. A data release is a separate clock from the session: <Link href="/blog-forex-economic-calendar-dubai">how to read the economic calendar in Dubai</Link>.
            </p>
            <p>
              If a map search is how you arrived, start with <Link href="/blog-forex-classes-near-me-dubai">forex classes near me in Dubai</Link>. If you are not sure what to study first, start with <Link href="/blog-forex-education-uae">forex education in the UAE</Link>. If you want a private hour with a written aim, start with <Link href="/blog-personal-forex-coaching-uae">what a coaching plan looks like</Link>. If you want something to fill in after each trade, start with <Link href="/blog-forex-trading-plan-uae">a trading plan and journal</Link>. The live versions of those ideas are the <Link href="/courses">two course tracks</Link> and <Link href="/forex-mentorship-dubai">forex mentorship in Dubai</Link>.
            </p>
            <p>
              People comparing a classroom in Dubai with a screen at home should use the <Link href="/forex-course-abu-dhabi">Abu Dhabi course page</Link> if that is the emirate, or <Link href="/online-forex-course-uae">online study across the UAE</Link>. Reviews stay on Google. The <Link href="/success-stories">reviews page</Link> explains why this site does not paste testimonials. To ask about a seat, use <Link href="/contact">contact</Link> or WhatsApp +971 55 904 7030. Say group or private, and Dubai or online.
            </p>
            <h2>Pick a path, then one article</h2>
            <p>
              New to charts: <Link href="/blog-forex-course-dubai-beginners">what a beginner course covers</Link>, then <Link href="/blog-candlestick-patterns">candlesticks</Link>. You already take trades and want them reviewed: the coaching plan, then <Link href="/blog-one-to-one-forex-classes-dubai">how to prepare for a one-to-one class</Link>. You are choosing between a room and a cohort: <Link href="/blog-private-vs-group-forex-classes-dubai">private versus group</Link>. You want the vocabulary of liquidity and order blocks: <Link href="/blog-smart-money-concepts">smart money concepts</Link>, which is an explanation, not the enrolment page.
            </p>
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
                    <span className="meta">{post.time}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="tight soft">
          <div className="container">
            <div className="cta-banner reveal">
              <div>
                <h2>Want this taught live, not just read?</h2>
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
