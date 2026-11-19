import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import RelatedTraining from "../components/RelatedTraining";
import Link from "next/link";
import OpenChatLink from "../components/OpenChatLink";
import { pageMetadata } from "../lib/seo";
import { breadcrumbSchema, faqPageSchema, webPageSchema } from "../lib/schema";
import { SITE } from "../lib/site";
import { EQUITY_GLOBAL, EQUITY_GLOBAL_ENGLISH } from "../lib/videos";
import { STARTRADER_LIVE_URL, whatsappHref } from "../lib/whatsapp";

const path = "/why-choose-us";

const title = "Six Checks Before You Enrol at Equity Fin Academy";
const description =
  "Six checks before you enrol at Equity Fin Academy in Dubai, and how they apply to a private hour: teacher, syllabus, room, broker, Google listing, and an AED quote.";

export const metadata = pageMetadata({
  title: "Six Checks Before a Dubai Forex Class | Equity Fin Academy",
  description,
  keywords:
    "why choose equity fin academy, equity fin academy enrolment checklist Dubai, forex course checklist UAE, Gopi Chandran forex course Dubai",
  path,
});

const whyFaq = [
  {
    q: "Is this page the same as About?",
    text: "About is Gopi Chandran’s profile: the MBA, the Equity Global channels, and the fact that he teaches the lesson. This page is the six checks you can open before you pay, and a message you can send. The syllabuses themselves stay on the courses page.",
  },
  {
    q: "Does the checklist replace the course page?",
    text: "The checklist tells you which track to ask about. The courses page is where the topic order is written out. Pasting that list here made the two URLs look like one document, so this page links there instead.",
  },
  {
    q: "What should the first message contain?",
    text: "Track, format, place, and the hours you can keep on Gulf Standard Time. Ask for the fee in AED. An example is on this page. Change every line so it is true for you, then send it from the contact page or WhatsApp +971 55 904 7030.",
  },
  {
    q: "How long does the checklist take?",
    text: "About twenty minutes: the About profile, both tracks on the courses page, the private-versus-group note, whether MetaTrader 5 is installed, and the Google listing from the reviews page. Then ask for the fee in AED. The walkthrough on this page is that order. It does not replace the courses page.",
  },
];

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
      <JsonLd data={faqPageSchema(whyFaq)} />
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
            <h1 className="hero-display" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", maxWidth: "18ch" }}>
              Six checks before you enrol at Equity Fin Academy
            </h1>
            <p className="hero-sub" style={{ marginTop: 18, maxWidth: "66ch" }}>
              This page is a worksheet, not a welcome. The homepage introduces the academy. The{" "}
              <Link href="/about">About page</Link> is Gopi Chandran&apos;s profile.{" "}
              <Link href="/blog-choose-forex-mentor-dubai">How to choose a forex mentor in Dubai</Link> is about the teacher.{" "}
              <Link href="/blog-choose-forex-academy-uae">How to choose a forex academy in the UAE</Link> is a list you can use for any school. Stay here for the six facts this academy publishes before you pay, and for the pass-or-pause table under the cards.
            </p>
            <p className="hero-sub" style={{ marginTop: 14, maxWidth: "66ch" }}>
              Other pages do other jobs. The topic order is <Link href="/courses">forex trading courses in Dubai</Link>. The notes are the <Link href="/blog">blog</Link>, including <Link href="/blog-mt5-order-ticket-dubai">the MT5 order ticket</Link>, <Link href="/blog-start-forex-trading-uae-mt5">how to start with MT5</Link>, <Link href="/blog-private-vs-group-forex-classes-dubai">private versus group</Link>, <Link href="/blog-smart-money-concepts">smart money concepts</Link>, and <Link href="/blog-evening-group-forex-classes-dubai">evening group classes</Link>. The booking rules are on the <Link href="/terms">terms page</Link>. Abu Dhabi is the <Link href="/forex-course-abu-dhabi">Abu Dhabi course page</Link>. The Google listing is the <Link href="/success-stories">reviews page</Link>. The message is <Link href="/contact">contact</Link>. How the form uses a name and a mobile number is the <Link href="/privacy">privacy page</Link>.
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

        <section className="tight">
          <div className="container prose-block">
            <h2>Pass, or pause, on each check</h2>
            <p>
              Use the table when a card above is still abstract. Pause means you do not have the fact yet. Continue means you can point at the page that holds it. The courses page keeps the topic lists. The contact page keeps the form. The table stays on this worksheet.
            </p>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Check</th>
                    <th>Pause if</th>
                    <th>Continue if</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Teacher</td>
                    <td>The page never names who teaches the hour.</td>
                    <td>You have opened Gopi Chandran&apos;s profile.</td>
                  </tr>
                  <tr>
                    <td>Syllabus</td>
                    <td>The topic order is not written on the site.</td>
                    <td>You have read both tracks on the courses page.</td>
                  </tr>
                  <tr>
                    <td>Room</td>
                    <td>You have not chosen a group class or a private lesson.</td>
                    <td>You know which hour you are asking to buy.</td>
                  </tr>
                  <tr>
                    <td>Broker</td>
                    <td>Someone asks for your broker password.</td>
                    <td>You will open the account yourself.</td>
                  </tr>
                  <tr>
                    <td>Reviews</td>
                    <td>You have not opened a review that the school does not host.</td>
                    <td>You opened the Google listing from the reviews page.</td>
                  </tr>
                  <tr>
                    <td>Fee</td>
                    <td>A dirham number is printed with no date.</td>
                    <td>You will ask for a current quote in AED.</td>
                  </tr>
                </tbody>
              </table>
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

            <h2>An example message, for shape rather than for copying</h2>
            <p>
              This is a sample so you can see how specific the first message needs to be. It is an illustration. Change the track, the city, and the hour so they are true.
            </p>
            <ul className="guide-list">
              <li>Teacher: I have read the About page for Gopi Chandran.</li>
              <li>Track: Basic to Intermediate. I cannot yet mark a swing high on my own chart.</li>
              <li>Format: group class.</li>
              <li>Place: online from Abu Dhabi. I will not drive on a weekday evening.</li>
              <li>Broker: I will open my own account for practical sessions. Please keep the course fee separate from that balance.</li>
              <li>Reviews: I will read the Google listing from the reviews page before I pay.</li>
              <li>Ask: please quote the fee in AED and the next time after 7pm Gulf Standard Time.</li>
            </ul>
            <p>
              Someone in Dubai who already marks swings would rewrite the track as Advanced Institutional Strategies, the format as a private lesson, and the place as the classroom. The <Link href="/forex-course-abu-dhabi">Abu Dhabi course page</Link> is where the drive-or-online choice is explained at length. This sample stays short on purpose. Send the rewritten lines from <Link href="/contact">contact</Link>.
            </p>

            <h2>Questions this checklist is here to answer</h2>
            <div className="faq-list">
              {whyFaq.map((item) => (
                <details key={item.q}>
                  <summary>
                    {item.q}
                    <span className="plus">+</span>
                  </summary>
                  <p>{item.text}</p>
                </details>
              ))}
            </div>

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

            <h2>Read the longer page, then come back to the six lines</h2>
            <p>
              This checklist stays short on purpose. The pages below are where each line is explained. Fill the line here, and open the longer page when a line is still vague.
            </p>
            <ul className="guide-list">
              <li>
                Syllabus: the <Link href="/courses">forex course in Dubai</Link> lists both tracks in teaching order.
              </li>
              <li>
                Abu Dhabi and the drive: the <Link href="/forex-course-abu-dhabi">Abu Dhabi course page</Link>.
              </li>
              <li>
                A shared hour: <Link href="/blog-prepare-group-forex-class-dubai">how to prepare for a group class</Link>. The definitions, including <Link href="/blog-smart-money-concepts">smart money concepts</Link>, are on the <Link href="/blog">blog</Link>.
              </li>
              <li>
                The cost of a trade, separate from the course fee: <Link href="/blog-forex-spreads-swaps-pip-value-uae">spreads, swaps, and pip value</Link>.
              </li>
              <li>
                Reviews: the <Link href="/success-stories">Google reviews page</Link>. The message itself goes to <Link href="/contact">contact</Link>.
              </li>
            </ul>

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
              want a checklist they could apply to any school should use the{" "}
              <Link href="/blog-choose-forex-academy-uae">UAE academy article</Link> and then come back here for this
              academy&apos;s answers.
            </p>
          </div>
        </section>

        <section className="tight">
          <div className="container prose-block">
            <h2>If you are an owner, or you already hold capital</h2>
            <p>
              The six checks do not change. Two notes answer a narrower question than which course to buy.{" "}
              <Link href="/blog-executive-forex-coaching-dubai">Executive forex coaching in Dubai for business owners</Link> is about fitting a private hour around a company week.{" "}
              <Link href="/blog-forex-portfolio-diversification-uae">Forex beside a portfolio</Link> is for investors who already hold capital and want to know what a currency market is, and what it is not, before they book.
            </p>
            <p>
              If the platform is new, read these before the first ticket.{" "}
              <Link href="/blog-start-forex-trading-uae-mt5">How to start with MT5</Link>,{" "}
              <Link href="/blog-mt5-order-ticket-dubai">the order ticket</Link>, and{" "}
              <Link href="/blog-private-vs-group-forex-classes-dubai">private versus group</Link>. The booking rules are on the{" "}
              <Link href="/terms">terms page</Link>.
            </p>
          </div>
        </section>

        <section className="tight">
          <div className="container prose-block">
            <h2>Twenty minutes, in this order</h2>
            <p>
              Work down the list and write one line under each step. Stop when a line is still blank. That blank is the thing to ask, not a reason to enrol.
            </p>
            <ol className="guide-list">
              <li>
                Teacher. Open <Link href="/about">About</Link> and write Gopi Chandran&apos;s name in your own note. If you cannot, you have not checked who teaches.
              </li>
              <li>
                Track. Open <Link href="/courses">the course tracks</Link>. Write Basic to Intermediate if you cannot yet mark a swing. Write Advanced Institutional Strategies if you can. Do not copy the topic list onto this page. The list already has a URL.
              </li>
              <li>
                Room. Read <Link href="/blog-private-vs-group-forex-classes-dubai">private versus group</Link> and write one of those two words. A private hour stays on your chart. A group hour follows the shared list.
              </li>
              <li>
                Platform. If MetaTrader 5 is not installed, the steps are <Link href="/blog-start-forex-trading-uae-mt5">how to start with MT5</Link>. The window a live hour will point at is <Link href="/blog-mt5-order-ticket-dubai">the order ticket</Link>. You do not need a funded account for this line. You need to know whether the platform is on the machine.
              </li>
              <li>
                Reviews and fee. Open the Google listing from <Link href="/success-stories">reviews</Link>. Then ask for the fee in AED. A number printed here would go stale. What a booking covers is on the <Link href="/terms">terms page</Link>.
              </li>
            </ol>
            <p>
              A professional in DIFC who can study after 8pm, or online from Abu Dhabi on Saturday morning, uses the same five lines. The hour is what changes. <Link href="/blog-private-forex-mentorship-abu-dhabi">Private forex mentorship in Abu Dhabi</Link> is that week written out. <Link href="/blog-forex-training-doctors-engineers-bankers-uae">Forex training for doctors, engineers and bankers</Link> is the version for a rota. <Link href="/blog-executive-forex-coaching-dubai">Executive forex coaching</Link> is the version for a company diary. This checklist does not become a different product because the diary is full.
            </p>
            <h2>What a complete first message looks like after the checks</h2>
            <p>
              When the five lines are filled, the message is short. &quot;Advanced track, private lesson, online from Abu Dhabi after 8pm Gulf Standard Time. MetaTrader 5 is installed. I have read the Google listing. Please quote the fee in AED.&quot; Swap the track, the city, and the hour so they are true. Send it from <Link href="/contact">contact</Link>, from the chat on this site, or on WhatsApp +971 55 904 7030. If you want to see the teaching before you choose a track, ask for a free demo class or a one-to-one meeting with Gopi in the same message.
            </p>
          </div>
        </section>

        <section className="tight">
          <div className="container prose-block">
            <h2>Apply the six checks to a private hour</h2>
            <p>
              The cards above are the short form. If you already know you want one-to-one mentorship, write the answers in your own note before you pay. A private hour does not retire the checks. It makes each one more specific. There is no third room hiding behind a different name.
            </p>
            <ol className="guide-list">
              <li>Teacher. The person in the hour is Gopi Chandran. If the page you are trusting never names him, you are looking at a different offer. The profile is on About.</li>
              <li>Track. A private seat still starts where you are. If you cannot mark a swing, the hour is Basic to Intermediate. If you can, and you want the later topics, say Advanced Institutional Strategies. The lists stay on the courses page.</li>
              <li>Room. Write private, group, or both. Both is allowed in the same month. It is still two bookings, not a blended product with its own price.</li>
              <li>Place. Classroom in Dubai, UAE, or online on Gulf Standard Time. If you work in DIFC or live in Dubai Marina, name that so the time fits the drive. Directions come after the time is agreed.</li>
              <li>Money. The course fee and the broker balance are separate. You open the account. A private hour does not include someone to run a company account or to choose the dirhams you can lose.</li>
              <li>Proof and price. Open the Google listing from the reviews page. Then ask for the fee in AED. A number printed here would go stale.</li>
            </ol>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Bring to the message</th>
                    <th>Leave out</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Track, private or group, Dubai or online, two times you can keep, and one time you cannot.</td>
                    <td>A broker password, or a request for the academy to move company funds.</td>
                  </tr>
                  <tr>
                    <td>Whether MetaTrader 5 is installed, and one sentence about the chart.</td>
                    <td>A result you want the reply to promise. The reply names a time and a fee.</td>
                  </tr>
                  <tr>
                    <td>That the trading amount, if you have named one, is separate from operating cash.</td>
                    <td>Turnover, a shareholder list, or screenshots of a bank account.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Two longer notes sit next to this worksheet.{" "}
              <Link href="/blog-forex-trading-business-owners-uae">Forex education for business owners in the UAE</Link> is how a founder separates company cash from a trading balance and keeps a short week.{" "}
              <Link href="/blog-vip-forex-mentorship-downtown-dubai-marina">Private mentorship for Downtown Dubai, DIFC and the Marina</Link> is the same private hour when the week is spent in those districts, Business Bay, or on Palm Jumeirah. The booking mechanics for a company calendar stay in{" "}
              <Link href="/blog-executive-forex-coaching-dubai">executive forex coaching</Link>. Fill the six lines here, then send them from <Link href="/contact">contact</Link>.
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
