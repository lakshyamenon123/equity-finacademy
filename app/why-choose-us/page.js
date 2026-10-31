import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import RelatedTraining from "../components/RelatedTraining";
import Link from "next/link";
import OpenChatLink from "../components/OpenChatLink";
import { pageMetadata } from "../lib/seo";
import { breadcrumbSchema, webPageSchema } from "../lib/schema";
import { SITE } from "../lib/site";
import { EQUITY_GLOBAL, EQUITY_GLOBAL_ENGLISH } from "../lib/videos";
import { STARTRADER_LIVE_URL, whatsappHref } from "../lib/whatsapp";

const path = "/why-choose-us";

const title = "Enrolment Checklist for Equity Fin Academy in Dubai";
const description =
  "Six checks before you pay Equity Fin Academy in Dubai, UAE: the teacher, where the syllabus lives, the class format, the broker, the reviews, and the AED quote.";

export const metadata = pageMetadata({
  title: `${title} | Why Choose Us`,
  description,
  keywords:
    "why choose equity fin academy, equity fin academy enrolment checklist Dubai, forex course checklist UAE, Gopi Chandran forex course Dubai",
  path,
});

const checks = [
  {
    title: "The teacher is named",
    body: "Gopi Chandran is the founder and the person in the lesson. He holds an MBA in Finance, built the Equity Global channels, and has trained more than 2,000 students. The biography is on the About page. A school that says “our team” and never names the instructor is a different offer.",
  },
  {
    title: "Both syllabuses are public",
    body: "Basic to Intermediate and Advanced Institutional Strategies are written on the courses page, in the order they are taught. This page links there. It does not paste the same list a second time. Lifetime WhatsApp with the instructor after the course is the last item on the advanced track. It is not added to the beginner seat.",
  },
  {
    title: "The room is a choice",
    body: "Private one-to-one or a group cohort. In person in Dubai, or live online from any emirate. The academy is open 24/7, including Saturday and Sunday, so a weekend seat is a normal booking.",
  },
  {
    title: "Practice uses a named broker",
    body: "Practical sessions use StarTrader, regulated by the UAE Securities and Commodities Authority (SCA), on MetaTrader 5. You open the account yourself. The course fee and the broker balance are separate.",
  },
  {
    title: "Reviews are off this page",
    body: "The academy is rated 5.0 on Google from 30+ reviews. The Equity Global channels carry 200+ YouTube reviews and comments. The reviews page points at the Google listing. This page does not paste testimonials.",
  },
  {
    title: "The fee is a quote in AED",
    body: "No dirham figure is printed here. A number left on a page goes stale. Ask by phone, WhatsApp, or the enquiry form. What each track includes, still without a price, is on the pricing and fees pages.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, description, path })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Why Choose Us", path },
        ])}
      />
      <Header active="why-choose-us" />

      <main>
        <section className="tight bg-glow" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span className="current">Why Choose Us</span>
            </nav>
            <span className="eyebrow">ENROLMENT CHECKS</span>
            <h1 className="hero-display" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", maxWidth: "20ch" }}>
              An enrolment checklist for Equity Fin Academy in Dubai
            </h1>
            <p className="hero-sub" style={{ marginTop: 18, maxWidth: "66ch" }}>
              Use this page when you are deciding. The homepage introduces the academy. The{" "}
              <Link href="/about">About page</Link> is Gopi Chandran&apos;s profile. The article on{" "}
              <Link href="/blog-choose-forex-academy-uae">how to choose a forex academy in the UAE</Link> is a general
              list for any school. Here the questions are narrower: what Equity Fin Academy publishes before you pay,
              which syllabus you would start, and how a Dubai seat differs from an online seat.
            </p>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">BEFORE YOU ENQUIRE</span>
              <h2>Six checks you can open yourself</h2>
              <p>Each item is a fact already published on this site, with the page where you can read the longer version.</p>
            </div>
            <div className="grid-4">
              {checks.map((item, index) => (
                <article className="card reveal" key={item.title}>
                  <div className="num">{String(index + 1).padStart(2, "0")}</div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="tight soft">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">WHERE THE SYLLABUS LIVES</span>
              <h2>This page does not copy the course list</h2>
              <p>
                The full topic order is on the <Link href="/courses">forex course tracks</Link> page. Pasting it here
                made two URLs look like the same document. Use the notes below to decide which track to ask about, then
                open that page for the lines themselves.
              </p>
            </div>
            <div className="course-grid">
              <div className="card reveal">
                <h3>Ask for Basic to Intermediate if</h3>
                <p>
                  You cannot yet explain a candle, a currency pair, or a swing high in your own words. The first track
                  in Dubai, and the same track online across the United Arab Emirates, starts there. The written order
                  is on the courses page, not here.
                </p>
              </div>
              <div className="card reveal">
                <h3>Ask for Advanced Institutional Strategies if</h3>
                <p>
                  You can already point at a swing and you want the later topics, including market profile and smart
                  money concepts. WhatsApp with the instructor after the course belongs to this track. It is not added
                  to the beginner seat. Confirm the list on the courses page before you pay.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container prose-block">
            <h2>Three pages, three questions</h2>
            <p>
              <Link href="/about">About</Link> answers who teaches. It is Gopi Chandran&apos;s profile: the MBA, the Equity Global channels, and the fact that he is in the lesson. It is not a syllabus and it is not a fee.
            </p>
            <p>
              This page answers what you can verify before you pay. The six checks and the two topic lists are here so a decision does not depend on a brochure. If you only remember one difference: About is the person, and this page is the paperwork you can open yourself.
            </p>
            <p>
              The <Link href="/forex-training-academy-dubai">forex training academy Dubai</Link> page answers what a school day is: the room in Dubai, the live session, and the online seat across the UAE. It is the offer written as a place. It does not repeat this checklist, and this checklist does not try to be the school-day page. Students outside Dubai should use the <Link href="/forex-training-academy-uae">UAE page</Link> and, if they live in the capital, the <Link href="/forex-course-abu-dhabi">Abu Dhabi course page</Link>, which is about the drive versus studying online.
            </p>
            <p>
              Two articles help before you enquire. <Link href="/blog-personal-forex-coaching-uae">Personal forex coaching in the UAE</Link> shows what a written coaching plan contains. <Link href="/blog-forex-trading-plan-uae">A trading plan and journal</Link> shows what to bring back after you practise. Neither one is a substitute for the checks above.
            </p>

            <h2>Where each check is spelled out</h2>
            <p>
              The instructor profile, including the MBA and the move into full-time forex teaching, stays on{" "}
              <Link href="/about">About Us</Link>. Do not treat the short card above as the biography.
            </p>
            <p>
              Private one-to-one lessons and group cohorts are compared on{" "}
              <Link href="/private-group-forex-training-dubai">private versus group classes</Link>. A Saturday or Sunday
              request is described on <Link href="/weekend-forex-classes-dubai">weekend forex classes in Dubai</Link>.
              The in-person Dubai offer, as a school day rather than a checklist, is the{" "}
              <Link href="/forex-training-academy-dubai">forex training academy Dubai</Link> page. Students in another
              emirate should read the <Link href="/forex-training-academy-uae">UAE training page</Link>, then the notes
              for <Link href="/forex-course-abu-dhabi">Abu Dhabi</Link> or <Link href="/forex-course-sharjah">Sharjah</Link>{" "}
              if that is where they live. Online study from any emirate is the{" "}
              <Link href="/online-forex-course-uae">online forex course</Link>.
            </p>
            <p>
              Practical sessions run on{" "}
              <a href={STARTRADER_LIVE_URL} target="_blank" rel="sponsored noopener noreferrer">
                StarTrader
              </a>
              , an SCA-regulated broker. The link is the academy&apos;s affiliate link. The academy does not open the
              account for you and does not manage the funds. MetaTrader 5 is the platform. The same chart work covers
              gold, indices, and stocks when that is the symbol you bring, which is explained on the{" "}
              <Link href="/stock-market-course-dubai">stock market course in Dubai</Link> page. There is no third
              syllabus under another name.
            </p>
            <p>
              Google reviews are linked from <Link href="/success-stories">Reviews</Link>. YouTube is split by language:{" "}
              <a href={EQUITY_GLOBAL_ENGLISH.url} target="_blank" rel="noopener noreferrer">
                Equity Global English
              </a>{" "}
              and the{" "}
              <a href={EQUITY_GLOBAL.url} target="_blank" rel="noopener noreferrer">
                Equity Global channel
              </a>
              , which is in Malayalam. Watch them to judge whether the explanations are clear. They are a preview, not
              the live course.
            </p>
            <p>
              Fees are quoted when you enquire. <Link href="/pricing">Pricing</Link> lists what a track includes.{" "}
              <Link href="/forex-course-fees-dubai">Forex course fees in Dubai</Link> explains why a dirham figure is not
              printed. Coaching after a syllabus hour, as distinct from the advanced-track WhatsApp line, is{" "}
              <Link href="/forex-mentorship-dubai">forex mentorship in Dubai</Link>. Say which of those you mean in the
              first message.
            </p>

            <h2>Write six lines before you pay</h2>
            <p>
              This is the worksheet for Equity Fin Academy in Dubai, UAE. It is not the general article on{" "}
              <Link href="/blog-choose-forex-academy-uae">how to choose any forex academy in the UAE</Link>, and it is
              not the biography on <Link href="/about">About</Link>. Fill the lines, then send them.
            </p>
            <ol className="guide-list">
              <li>Teacher: Gopi Chandran. Confirm the profile on the About page before you treat a brochure as the biography.</li>
              <li>Track: Basic to Intermediate, or Advanced Institutional Strategies. The topic order is on the courses page.</li>
              <li>Format: a group cohort, or a private one-to-one lesson. Say which.</li>
              <li>Place: the classroom in Dubai, or online. Name your emirate if you will not be in the room.</li>
              <li>Broker: you open your own StarTrader account for practical sessions. The course fee and the account balance are separate.</li>
              <li>Reviews: read the Google listing from the <Link href="/success-stories">reviews page</Link>. Do not expect quotes pasted on this site.</li>
            </ol>
            <p>
              Then ask for the fee in AED and the next time on Gulf Standard Time. Students comparing a drive from the
              capital should read the <Link href="/forex-course-abu-dhabi">Abu Dhabi course page</Link> before they
              fill in the place line. The <Link href="/blog">blog</Link> is for study. The{" "}
              <Link href="/contact">contact page</Link> is where the six lines go. If the advanced topic you want named
              first is liquidity and order blocks, read <Link href="/blog-smart-money-concepts">smart money concepts</Link>{" "}
              so the track you write down matches the vocabulary you meant.
            </p>

            <h2>What to send when you enquire</h2>
            <p>
              Name the track, Basic to Intermediate or Advanced Institutional Strategies. Name the format, private or
              group. Name the place, the Dubai room or online. Then ask for the fee and the next open time. A complete
              first message is concrete: “Basic to Intermediate, private lesson, online from Abu Dhabi, after 7pm Gulf
              Standard Time. Please quote the fee in AED.” Swap the track, the room, and the emirate for your own. The
              reply is the next open time and the quote. The academy does not need a broker password. The academy
              is open 24/7. Call <a href={`tel:${SITE.telephoneTel}`}>{SITE.telephoneDisplay}</a>, message on{" "}
              <a href={whatsappHref("Hi, I would like the enrolment checks for a forex seat")} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              , or use the <Link href="/contact">contact form</Link>. The map for an in-person class is on that contact
              page. This page does not publish a floor or a building name.
            </p>
            <p>
              Beginners who want the first classes described before they write can read{" "}
              <Link href="/blog-forex-course-dubai-beginners">what a beginner forex course in Dubai covers</Link>. People
              comparing a private hour with a cohort can read{" "}
              <Link href="/blog-private-vs-group-forex-classes-dubai">private versus group classes</Link>. People who
              want a checklist they could apply to any school, not only this one, should use the{" "}
              <Link href="/blog-choose-forex-academy-uae">UAE academy article</Link> and then come back here for this
              academy&apos;s answers.
            </p>
          </div>
        </section>

        <section className="tight">
          <div className="container">
            <div className="cta-banner reveal">
              <div>
                <h2>Ask for the seat that matches the checklist.</h2>
                <p>Say the track and the format. The current fee is quoted in AED when you ask.</p>
              </div>
              <div className="cta-row">
                <Link href="/courses" className="btn btn-primary">
                  View the two tracks
                </Link>
                <OpenChatLink className="btn btn-outline">Enquire</OpenChatLink>
              </div>
            </div>
          </div>
        </section>

        <section className="tight soft">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">RELATED PAGES</span>
              <h2>Read the page that matches the question</h2>
            </div>
            <RelatedTraining current={path} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
