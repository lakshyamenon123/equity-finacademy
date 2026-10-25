import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import RelatedTraining from "../components/RelatedTraining";
import YouTubeSection from "../components/YouTubeSection";
import Link from "next/link";
import OpenChatLink from "../components/OpenChatLink";
import { pageMetadata } from "../lib/seo";
import { breadcrumbSchema, faqPageSchema } from "../lib/schema";
import { SITE } from "../lib/site";
import { VIDEOS } from "../lib/videos";
import { STARTRADER_LIVE_URL, whatsappHref } from "../lib/whatsapp";

const path = "/forex-course-fees-dubai";
const whatsapp = whatsappHref("Hi, I'd like the current forex course fee in Dubai");

export const metadata = pageMetadata({
  title: "Forex Course Fees in Dubai (2026) | Equity Fin Academy",
  description:
    "Forex course fees in Dubai for 2026: what changes a quote for group classes and private lessons. No price is published. WhatsApp +971 55 904 7030 for the current fee.",
  keywords:
    "forex course fees Dubai, forex course fees in Dubai 2026, forex trading course cost Dubai, forex class price Dubai, private forex lesson fee Dubai, Equity Fin Academy fees",
  path,
});

const pageFaq = [
  {
    q: "What are the forex course fees in Dubai for 2026?",
    text: "Equity Fin Academy does not publish a dirham figure. Fees change by cohort and by enrolment timing, and a number printed on a page goes stale. WhatsApp +971 55 904 7030, or use the chat, and the current fee is quoted in the reply. The academy is open 24/7.",
  },
  {
    q: "Why is there no price on the website?",
    text: "The pricing page says the same thing: fees vary by cohort, so the academy quotes the current number when you enquire rather than leaving an outdated figure on the site. This page explains what the quote depends on. It does not add a price the rest of the site has refused to print.",
  },
  {
    q: "Is the advanced track a different fee from the beginner track?",
    text: "Yes. Advanced Institutional Strategies covers more of the curriculum and includes lifetime WhatsApp support after the course. That difference is reflected in the fee. Basic to Intermediate does not include that lifetime line. Ask for both numbers if you are choosing between them.",
  },
  {
    q: "Does the fee include money for a broker account?",
    text: "No. The course fee covers instruction and practical sessions. Funding a StarTrader account is separate. The academy does not manage those funds. Practical sessions use that broker, and the link on this site is the academy's affiliate link.",
  },
  {
    q: "Do you publish a payment plan?",
    text: "No plan is printed here. Options can vary by cohort. Ask in the same message as the fee, and the academy will say what is available for the cohort you are joining. Nothing on this page is a discount.",
  },
];

export default function ForexCourseFeesDubaiPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Forex Course Fees in Dubai (2026)", path },
        ])}
      />
      <JsonLd data={faqPageSchema(pageFaq)} />
      <Header active="fees-dubai" />
      <main>
        <section className="tight bg-glow" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span className="current">Forex Course Fees in Dubai (2026)</span>
            </nav>
            <span className="eyebrow">DUBAI · 2026 · QUOTED ON ENQUIRY</span>
            <h1 className="hero-display" style={{ fontSize: "clamp(1.8rem,5vw,3.1rem)", maxWidth: "18ch" }}>
              Forex Course Fees in Dubai (2026)
            </h1>
            <p className="hero-sub" style={{ marginTop: 18, maxWidth: "68ch" }}>
              Forex course fees in Dubai are quoted when you ask, not printed as a number that will be wrong by the next cohort. This page is the 2026 explanation of what the quote depends on, what each track includes, and how to get the current figure on WhatsApp. It does not invent a price.
            </p>
            <div className="cta-row" style={{ marginTop: 22 }}>
              <a href={whatsapp} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                WhatsApp +971 55 904 7030
              </a>
              <a href="tel:+971559047030" className="btn btn-outline">
                Call for the current fee
              </a>
              <Link href="/pricing" className="btn btn-outline">
                What each track includes
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="container prose-block">
            <h2>Why this page will not show a dirham figure</h2>
            <p>
              A forex course fee in Dubai is one of the first things a serious student asks, and one of the easiest things for a website to get wrong. Cohorts do not all cost the same. Enrolment timing changes the quote. A number left on a page in January is a poor guide in October. Equity Fin Academy therefore does not publish a price on{" "}
              <Link href="/pricing">the pricing page</Link>, on the course pages, or here. You message, and the current fee comes back in writing.
            </p>
            <p>
              That is a choice about accuracy, not a trick. You should still know what you are buying before you ask for the number. The rest of this page is that list: two tracks, two formats, what sits inside the fee, and what never does. If a site will not say those things and also will not quote a fee when you ask, walk away. If it prints a bargain and hides the real figure behind a deposit into a broker, use the checklist on{" "}
              <Link href="/best-forex-course-dubai">how to judge a Dubai course</Link> before you pay anyone, including us.
            </p>
            <p>
              The academy is in Dubai, UAE, and is open 24/7. WhatsApp is {SITE.telephoneDisplay}. The same number is the phone line. More than 2,000 students have been trained through Equity Global and live mentorship. The academy is rated 5.0 on Google from 30+ reviews, and the channels carry 200+ YouTube reviews and comments. Those facts are about the school. They are not a fee, and they are not a promise about your trades.
            </p>

            <h2>What the Basic to Intermediate fee is paying for</h2>
            <p>
              The first track is the beginner and intermediate class. It is the right seat if you cannot yet read a candle with confidence. The published topics are the basics of forex, candlestick patterns, the HA pattern strategy, market structure, orders placed by smart money, imbalance in the market, indicators, and the G.C. strategy. The full line is on <Link href="/courses">Courses</Link>, and the classroom sequence is described without a price in{" "}
              <Link href="/blog-forex-course-dubai-beginners">what a beginner forex course in Dubai covers</Link>.
            </p>
            <p>
              The fee for this track covers live instruction and practical sessions. In Dubai that instruction is in person. Across the rest of the UAE, and for Dubai students who stay at their desk, the same track is taught online. Group classes and private one-to-one lessons both include live trading sessions. Lifetime WhatsApp after the course is not part of this track. If someone offers you that line on the beginner fee, they are describing a different product from the one published here.
            </p>
            <p>
              Practical sessions run on StarTrader, an SCA-regulated broker, on MetaTrader 5. You open the account yourself through the academy&apos;s affiliate link:{" "}
              <a href={STARTRADER_LIVE_URL} target="_blank" rel="sponsored noopener noreferrer">
                StarTrader live account
              </a>
              . Funding it is not inside the course fee. The academy does not manage the balance. When you compare forex course fees in Dubai, separate the school invoice from the broker deposit, or you will compare two different bills as if they were one.
            </p>

            <h2>What changes on the advanced fee</h2>
            <p>
              Advanced Institutional Strategies is the second track. It is for traders who already understand the first track&apos;s material. The published topics add fundamental analysis, tools used by institutions, market profile, volume with smart money concepts, Fibonacci retracement, risk and psychology, and bot-trading concepts. Lifetime support via WhatsApp, after the course, is part of this track only.
            </p>
            <p>
              The pricing page states the consequence plainly: the advanced track covers substantially more curriculum and includes lifetime WhatsApp support, and that difference is reflected in its fee. There are therefore two quotes, not one. Ask for the one that matches your chart time. If you are unsure which track you belong on, say so. The academy would rather place you correctly than sell you the longer fee on the first message.
            </p>
            <p>
              Smart money concepts and the ICT-style reading of liquidity and imbalance sit inside these tracks, not on a separate price list. The plain-language article is{" "}
              <Link href="/blog-smart-money-concepts">smart money concepts explained</Link>. The class page is the{" "}
              <Link href="/smc-ict-trading-course-dubai">SMC and ICT trading course in Dubai</Link>. Asking for &quot;the SMC fee&quot; without saying whether you are a beginner or already reading structure will get you a question back, because the two tracks are not the same quote.
            </p>

            <h2>Private lessons, group cohorts, and the weekend</h2>
            <p>
              Format is the next thing that changes a quote. A group class is a shared syllabus with other students in Dubai and with students joining online from the rest of the UAE. A private one-to-one lesson is your chart and your questions for that hour. Both include live trading sessions and training. The private fee depends on the length and the track. It is quoted when you enquire. This page does not invent an hourly rate, and it does not describe a payment plan as if one were fixed.
            </p>
            <p>
              The two rooms are compared, without prices, on{" "}
              <Link href="/private-group-forex-training-dubai">private versus group classes</Link>. Mentorship is a different word people use for the coaching relationship, including the lifetime WhatsApp on the advanced track. If that is what you want priced, read{" "}
              <Link href="/forex-mentorship-dubai">forex mentorship in Dubai</Link> and use that word in the message so the quote matches the thing you mean.
            </p>
            <p>
              There is no published weekly timetable, so a weekend seat is not a different printed tariff. The academy is open 24/7, which includes Saturday and Sunday. When you enquire, name the times you can attend, including a weekend, and ask whether the next opening is a private hour or a group seat. How weekend study works, including online across the UAE, is on{" "}
              <Link href="/weekend-forex-classes-dubai">weekend forex classes in Dubai</Link>. Do not assume a weekend request changes the fee. Ask, and the reply will say.
            </p>

            <h2>What else people fold into the fee, and should not</h2>
            <p>
              Broker funding is the common mix-up. The course fee is instruction. The broker balance is yours, at StarTrader, and it is not a tuition instalment. A stock, an index, or gold on the same MetaTrader 5 platform does not create a second academy invoice by itself. If those symbols are what you want marked, say so. The way that class is organised is the{" "}
              <Link href="/stock-market-course-dubai">stock market course in Dubai</Link>. The quote still comes from the track and the format, not from a secret equities menu.
            </p>
            <p>
              Payment arrangements are the other mix-up. The academy does not print a plan, a discount, or a deposit schedule. Options can vary by cohort. Ask in the same conversation as the fee. If the answer is that a plan is not available for the dates you want, that is the answer. It is better than a number this page would have had to invent.
            </p>
            <p>
              Online and in-person study use the same instructor and the same two tracks. The fee is quoted when you say which seat you want. Abu Dhabi and Sharjah students are not on a different syllabus. Their pages are{" "}
              <Link href="/forex-course-abu-dhabi">Abu Dhabi</Link> and <Link href="/forex-course-sharjah">Sharjah</Link>. The wider offer is the{" "}
              <Link href="/online-forex-course-uae">online forex course</Link> and the{" "}
              <Link href="/forex-training-academy-uae">UAE training page</Link>.
            </p>

            <h2>How to ask for the 2026 quote</h2>
            <p>
              Send four facts and you will get a usable number instead of a round of questions. Say private or group. Say beginner or advanced, or say that you do not know. Say Dubai in person or online, and name the emirate if you are outside Dubai. Say whether a weekend or a weekday is the hour you can protect. WhatsApp {SITE.telephoneDisplay}, call the same number, or use the chat on this site. The academy is open 24/7.
            </p>
            <p>
              Shorter answers to the questions people ask before they enquire are on the <Link href="/faq">FAQ</Link>. The institute view of the same school, including who teaches, is the{" "}
              <Link href="/forex-training-academy-dubai">forex training academy in Dubai</Link>. Read the included-items list on <Link href="/pricing">pricing</Link> if you want the two tracks side by side before you message. Then ask for the figure. A quote you can read is worth more than a price this page would have had to guess.
            </p>
            <div className="cta-row">
              <a href={whatsapp} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                WhatsApp for the current fee
              </a>
              <OpenChatLink className="btn btn-outline">Open the chat</OpenChatLink>
              <a href="tel:+971559047030" className="btn btn-outline">
                Call {SITE.telephoneDisplay}
              </a>
            </div>
          </div>
        </section>

        <YouTubeSection
          videos={[VIDEOS.howToStart, VIDEOS.whatIsForex]}
          title="Hear the teaching before you compare fees"
          intro="English lessons are listed first. The Malayalam tab has introductory recordings from Equity Global. Use them to judge the explanations, then ask for the current fee."
          id="fees-videos"
        />

        <section className="tight soft">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">QUESTIONS</span>
              <h2>Forex course fees in Dubai — common questions</h2>
            </div>
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
          </div>
        </section>

        <section className="tight">
          <div className="container">
            <RelatedTraining current={path} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
