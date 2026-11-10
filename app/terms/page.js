import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import Link from "next/link";
import { pageMetadata } from "../lib/seo";
import { breadcrumbSchema, webPageSchema } from "../lib/schema";
import { SITE } from "../lib/site";
import { COURSE_WHATSAPP_TEXT, whatsappHref } from "../lib/whatsapp";

const title = "Terms of Use for Equity Fin Academy";
const description =
  "Terms for the Equity Fin Academy website and forex classes in Dubai, UAE. Lessons are education. Fees are quoted in AED when you enquire. The broker account is separate.";

export const metadata = pageMetadata({
  title: "Terms of Use | Equity Fin Academy, Dubai",
  description,
  path: "/terms",
});

const whatsapp = whatsappHref(COURSE_WHATSAPP_TEXT);

export default function TermsPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, description, path: "/terms" })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms", path: "/terms" },
        ])}
      />
      <Header />
      <main>
        <section className="tight bg-glow" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span className="current">Terms</span>
            </nav>
            <span className="eyebrow">TERMS</span>
            <h1 className="hero-display" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", maxWidth: "16ch" }}>
              Using this site and booking a class.
            </h1>
            <p className="hero-sub" style={{ marginTop: 18, maxWidth: "66ch" }}>
              These terms cover the Equity Fin Academy website and an enquiry about a class in Dubai, UAE, or online across the UAE. They are written in plain language. They are not a substitute for the fee quote you receive when you ask.
            </p>
          </div>
        </section>
        <section>
          <div className="container prose-block" style={{ maxWidth: 760 }}>
            <h2>What the site is</h2>
            <p>
              Equity Fin Academy teaches forex in person in Dubai, UAE, and online across the UAE. The pages describe the instructor, the two course tracks, private one-to-one lessons, group classes, and how to enquire. They are reading material and a way to ask for a seat. They are not an offer to manage your money, and they are not a personal recommendation to buy or sell a currency.
            </p>
            <p>
              The instructor is <Link href="/gopi-chandran">Gopi Chandran</Link>. The topic order is on the <Link href="/courses">courses page</Link>. Class notes are on the <Link href="/blog">blog</Link>. A message goes through the <Link href="/contact">contact page</Link>, WhatsApp, or the phone.
            </p>

            <h2>Lessons are education</h2>
            <p>
              A class teaches how to read a chart, how a MetaTrader 5 ticket is filled in, and how a position is sized. Forex prices move, and a trade can lose money. Nothing on this site, in a lesson, or in a reply is a promise of profit, a target return, or a result you should expect because other students studied here.
            </p>
            <p>
              The academy is rated 5.0 on Google from 30+ reviews. More than 2,000 students have trained through Equity Global and live classes. The Equity Global channels carry 200+ YouTube reviews and comments. Those figures describe reach and a public rating. They are not a forecast for your account. Read the listing from the <Link href="/success-stories">reviews page</Link>. This site does not reprint those reviews as testimonials.
            </p>

            <h2>Fees</h2>
            <p>
              Course fees are quoted when you enquire. A dirham figure is not published on the site, because a printed number goes stale. Nothing on a page is a price, a discount, or a payment plan. The quote you receive names what that fee covers for the track and the format you asked about.
            </p>
            <p>
              Ask for the fee in AED in the same message as the track, the format, and whether you will be in Dubai or online. What changes a quote, still without a printed price, is explained on the <Link href="/forex-course-fees-dubai">fees page</Link> and on <Link href="/pricing">pricing</Link>.
            </p>

            <h2>Private lessons and group classes</h2>
            <p>
              Private one-to-one lessons and group classes include live trading sessions as described on the course pages. A private hour is spent on the chart you bring. A group hour follows the shared syllabus so the cohort sees the same topic. You can ask for one format, or for both. The comparison is on <Link href="/blog-private-vs-group-forex-classes-dubai">private versus group classes</Link>, and a month that uses both is described in <Link href="/blog-private-and-group-forex-classes-dubai">how to use a private hour and a group class together</Link>.
            </p>
            <p>
              There is no published weekly timetable. The academy is open 24/7, including Saturday and Sunday. The time you are offered is the one that fits the hours you name, on Gulf Standard Time. A missed hour is rearranged by message. It is not replaced by a recording sold as the class.
            </p>
            <p>
              Lifetime WhatsApp access to the instructor, after the course, is part of the Advanced Institutional Strategies track. It is not added to the Basic to Intermediate seat, and it is not a substitute for a booked lesson.
            </p>

            <h2>The broker account</h2>
            <p>
              Practical sessions use StarTrader on MetaTrader 5. StarTrader is regulated by the UAE Securities and Commodities Authority. The link on this site is the academy&apos;s affiliate link. You open the account yourself. The academy does not open it for you, does not hold the funds, and does not ask for the broker password.
            </p>
            <p>
              The course fee and the broker balance are separate. A demo account is for practice. Funding a live account is your decision, with money you can afford to lose. The academy does not set your deposit.
            </p>

            <h2>Enquiries</h2>
            <p>
              If you send your name and UAE mobile in the chat or the enquiry form, the academy uses them to contact you about courses. What is stored, and how to ask for deletion, is on the <Link href="/privacy">privacy page</Link>. Please send details that are yours. Please do not send someone else&apos;s number, a broker password, or a copy of an identity document through the public form.
            </p>
            <p>
              A useful enquiry names your emirate, a group class or a private lesson, the track, and the hours you can keep. A message that says only &quot;price&quot; will get a question back before a quote. That is so the fee matches the seat, not so the form can collect extra personal data.
            </p>

            <h2>The pages</h2>
            <p>
              Course descriptions, class notes, and videos are published so you can read them before you pay. You may share a link. Please do not copy a syllabus or an article and present it as another school&apos;s course. Video lessons play from YouTube. The recording remains on the Equity Global channel or the Equity Global English channel.
            </p>
            <p>
              The site is updated as the tracks and the notes change. A page you read last month may have a clearer sentence today. The fee is still the one quoted to you, not a number you remember from an old screenshot, because the site does not print the number.
            </p>

            <h2>Questions</h2>
            <p>
              Questions about these terms: WhatsApp{" "}
              <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                {SITE.telephoneDisplay}
              </a>{" "}
              or call <a href={`tel:${SITE.telephoneTel}`}>{SITE.telephoneDisplay}</a>. The academy is in Dubai, UAE, and is open 24/7. If a class booking needs a change, start with that message so the time and the fee can be restated before you travel.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
