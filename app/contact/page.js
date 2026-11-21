import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import DubaiMap from "../components/DubaiMap";
import LeadForm from "../components/LeadForm";
import RelatedTraining from "../components/RelatedTraining";
import Link from "next/link";
import { pageMetadata } from "../lib/seo";
import { breadcrumbSchema, faqPageSchema, webPageSchema } from "../lib/schema";
import { absoluteUrl, SITE } from "../lib/site";
import { whatsappHref } from "../lib/whatsapp";

const contactTitle = "Contact Equity Fin Academy in Dubai";
const contactDescription =
  "Contact Equity Fin Academy in Dubai. Send your district or emirate, private or group, the track, and the hours you can keep. Ask for a demo or a fee in AED.";

export const metadata = pageMetadata({
  title: "Contact Equity Fin Academy in Dubai | WhatsApp Enquiry",
  description: contactDescription,
  keywords:
    "contact forex academy Dubai, forex classes Dubai phone, book forex course UAE, forex trading classes Dubai WhatsApp, Equity Fin Academy United Arab Emirates",
  path: "/contact",
});

const contactFaq = [
  {
    q: "Do I need an appointment to visit?",
    text: "The academy is open 24/7. Calling ahead means someone can walk you through the forex course tracks, including private one-to-one lessons, in person in Dubai.",
  },
  {
    q: "How quickly do you respond to enquiries?",
    text: "Call or WhatsApp +971 55 904 7030. Course enquiries are usually answered the same day. Say whether you want a group seat or a private lesson, and whether you will be in Dubai or online.",
  },
  {
    q: "Where is the academy?",
    text: "Equity Fin Academy teaches in person in Dubai, UAE, and online across the UAE. The map on this page shows Dubai, UAE. Ask on WhatsApp if you are coming in person and you need directions.",
  },
  {
    q: "I live in Abu Dhabi or Sharjah. Do I have to visit Dubai?",
    text: "Online classes cover every emirate on Gulf Standard Time, so a visit to Dubai is a choice. Abu Dhabi students can read the Abu Dhabi course page, and Sharjah students the Sharjah page, then enquire with the emirate in the first message.",
  },
];

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${absoluteUrl("/contact")}#contact`,
  url: absoluteUrl("/contact"),
  name: contactTitle,
  description: contactDescription,
  inLanguage: "en-AE",
  mainEntity: {
    "@id": `${SITE.url}/#organization`,
  },
  about: {
    "@type": "EducationalOrganization",
    name: SITE.name,
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ name: contactTitle, description: contactDescription, path: "/contact" })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact Us", path: "/contact" },
        ])}
      />
      <JsonLd data={contactSchema} />
      <JsonLd data={faqPageSchema(contactFaq)} />
      <Header active="contact" />

      <main>
        <section className="tight bg-glow" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span className="current">Contact Us</span>
            </nav>
            <span className="eyebrow">CONTACT</span>
            <h1 className="hero-display" style={{ fontSize: "clamp(1.8rem,5vw,2.8rem)", maxWidth: "18ch" }}>
              Contact Equity Fin Academy before you travel.
            </h1>
            <p style={{ maxWidth: "66ch", marginTop: 18 }}>
              This page is the enquiry desk. It is not the syllabus, and it is not the enrolment worksheet. The topic order stays on <Link href="/courses">forex trading courses in Dubai</Link>. The six checks before you pay stay on <Link href="/why-choose-us">the enrolment checklist</Link>. Write here when you already know the seat you want, or when you want the academy to ask the missing piece. Classes are in person in Dubai, UAE, and online across the UAE on Gulf Standard Time. WhatsApp and the phone are +971 55 904 7030.
            </p>
            <p style={{ maxWidth: "66ch" }}>
              A reply can name a time and a fee in AED when the message has four facts: your emirate, a group class or a private lesson, the track, and the hours you can keep. If the chart should be ready first, read <Link href="/blog-mt5-order-ticket-dubai">the MT5 order ticket</Link> and <Link href="/blog-start-forex-trading-uae-mt5">how to start with MT5</Link>. If you have not chosen the room, read <Link href="/blog-private-vs-group-forex-classes-dubai">private versus group</Link>. What a booking covers is on the <Link href="/terms">terms page</Link>. What the form stores is on the <Link href="/privacy">privacy page</Link>.
            </p>
          </div>
        </section>

        <section className="tight">
          <div className="container">
            <div className="reviews-panel reveal">
              <span className="eyebrow">STUDENT FEEDBACK</span>
              <h2>Read what students actually say — on Google.</h2>
              <p>
                We&apos;d rather point you to our real, unfiltered Google reviews than write testimonials for you.
                Ratings and reviews shown there are collected and moderated by Google, not by us. See more on our{" "}
                <Link href="/success-stories">Reviews page</Link>.
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Equity+Fin+Academy+Al+Qusais+Dubai"
                target="_blank"
                rel="noopener"
                className="btn btn-outline"
              >
                Read Reviews on Google Maps ↗
              </a>
            </div>
          </div>
        </section>

        <section id="enquiry">
          <div className="container contact-grid">
            <div className="info-card reveal">
              <h3>Get in touch</h3>

              <div className="info-row">
                <span className="tag">ADDRESS</span>
                <span className="val">Dubai, UAE</span>
              </div>
              <div className="info-row">
                <span className="tag">PHONE</span>
                <span className="val">
                  <a href="tel:+971559047030">+971 55 904 7030</a>
                </span>
              </div>
              <div className="info-row">
                <span className="tag">WHATSAPP</span>
                <span className="val">
                  <a href={whatsappHref("Hi, I would like to enquire about forex classes in Dubai")} target="_blank" rel="noopener noreferrer">
                    {SITE.telephoneDisplay}
                  </a>
                </span>
              </div>
              <div className="info-row">
                <span className="tag">ENQUIRE</span>
                <span className="val">Call or WhatsApp us directly — we respond to course enquiries same day.</span>
              </div>
              <div className="info-row">
                <span className="tag">PRICING</span>
                <span className="val">
                  See <Link href="/pricing">what&apos;s included</Link> in each track, then call for current fees.
                </span>
              </div>

              <a href="tel:+971559047030" className="btn btn-primary btn-block">
                Call to Enquire
              </a>
              <LeadForm id="contact-lead-form" />
            </div>

            <DubaiMap />
          </div>
        </section>

        <section className="tight soft">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">BEFORE YOU VISIT</span>
              <h2>Frequently asked questions</h2>
            </div>
            <div className="faq-list reveal">
              {contactFaq.map((item) => (
                <details key={item.q}>
                  <summary>
                    {item.q}
                    <span className="plus">+</span>
                  </summary>
                  <p>{item.text}</p>
                </details>
              ))}
            </div>
            <p style={{ marginTop: 24 }}>
              <Link href="/faq" className="btn btn-outline">
                See All 30+ FAQs
              </Link>
            </p>
          </div>
        </section>

        <section>
          <div className="container prose-block">
            <h2>Messages that get a useful reply, by emirate</h2>
            <p>
              Equity Fin Academy teaches in person in Dubai, UAE, and online across the United Arab Emirates. The public location is Dubai, UAE. Online students in Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain use the same Gulf Standard Time as Dubai. Say which of those you mean in the first message. Students outside Dubai can read <Link href="/blog-forex-classes-ajman-ras-al-khaimah">forex classes in Ajman and the northern emirates</Link> before they write.
            </p>
            <ul className="guide-list">
              <li>Dubai, in the room: “Basic to Intermediate, group class, in Dubai, after 7pm Gulf Standard Time. Please quote the fee in AED.”</li>
              <li>Abu Dhabi, online: “I live in Abu Dhabi and want the same course online. Beginner. Please quote the fee in AED.” The longer note on that choice is the <Link href="/forex-course-abu-dhabi">Abu Dhabi course page</Link>.</li>
              <li>Colleagues together: “Three of us want the group cohort. Mixed experience. Weekday evening, Dubai or online. Please say whether one cohort can take us, and quote the fee in AED.” Read <Link href="/blog-group-forex-classes-friends-dubai">group classes for friends and colleagues</Link> before you send that.</li>
            </ul>
            <p>
              The topic lists you are choosing between are on <Link href="/courses">the course tracks</Link>. If the word in your message is an order block or a liquidity sweep, read <Link href="/blog-smart-money-concepts">smart money concepts</Link> first so you name the advanced track on purpose. Study notes are indexed on the <Link href="/blog">blog</Link>. The public Google listing is explained on the <Link href="/success-stories">reviews page</Link>. If the symbol you want marked is gold, say XAUUSD. That chart is described in <Link href="/blog-gold-xauusd-course-dubai">the gold class note</Link>.
            </p>

            <h2>Four facts that make the reply specific</h2>
            <p>
              The form, the phone call, and WhatsApp all land in the same place. Send these four facts and the answer can name a time and a fee in AED.
            </p>
            <ul className="guide-list">
              <li>Emirate, and whether you will be in the Dubai classroom or online. Abu Dhabi readers can check the <Link href="/forex-course-abu-dhabi">drive-or-online note</Link> first.</li>
              <li>Group cohort or private lesson. The shared-hour homework is <Link href="/blog-prepare-group-forex-class-dubai">how to prepare for a group class</Link>.</li>
              <li>Track: Basic to Intermediate, or Advanced. The lists are on <Link href="/courses">the forex course page</Link>. If the word you want taught is an order block, read <Link href="/blog-smart-money-concepts">smart money concepts</Link> before you name the advanced track.</li>
              <li>The hours you can keep on Gulf Standard Time, and whether MetaTrader 5 is already installed.</li>
            </ul>
            <p>
              Fees stay off this page because a printed number goes stale. What changes a quote is on the <Link href="/forex-course-fees-dubai">fees page</Link>. The cost of a trade, which is separate from the course fee, is in <Link href="/blog-forex-spreads-swaps-pip-value-uae">spreads, swaps, and pip value</Link>. Read Google comments from the <Link href="/success-stories">reviews page</Link> if you want third-party notes before you write. The study index is the <Link href="/blog">blog</Link>.
            </p>

            <h2>What happens after you send the message</h2>
            <p>
              The form, the phone call, and WhatsApp land in the same place. A complete message gets a specific reply. The academy is open 24/7 and rated 5.0 on Google from 30+ reviews. More than 2,000 students have trained through Equity Global and live classes.
            </p>
            <ol className="guide-list">
              <li>You send the emirate, Dubai or online, group or private, the track, and the hours you can keep on Gulf Standard Time.</li>
              <li>The reply names the next time that fits and the fee in AED. A number printed on this page would go stale, so the quote stays in the reply. What changes a quote is on the <Link href="/forex-course-fees-dubai">fees page</Link>.</li>
              <li>If you will come in person, directions follow after the time is agreed. The public line is Dubai, UAE. The map on this page is that city.</li>
              <li>Bring one chart question to the hour. Group homework is <Link href="/blog-prepare-group-forex-class-dubai">how to prepare for a group class</Link>. The topic lists are on <Link href="/courses">the course tracks</Link>.</li>
            </ol>
            <p>
              If the search that brought you here was investing classes nearby, say whether you meant forex, stocks, or gold. That sort is <Link href="/blog-investing-classes-near-me-dubai">investing classes near me in Dubai</Link>. A forex visit checklist is <Link href="/blog-forex-classes-near-me-dubai">forex classes near me</Link>. Definitions such as <Link href="/blog-smart-money-concepts">smart money concepts</Link> live on the <Link href="/blog">blog</Link>. Read the Google listing from the <Link href="/success-stories">reviews page</Link> before you write if you want third-party comments first.
            </p>
            <p>
              Abu Dhabi residents use the same Gulf Standard Time as Dubai. The <Link href="/forex-course-abu-dhabi">Abu Dhabi course page</Link> explains the drive and the online seat. Sharjah is on the <Link href="/forex-course-sharjah">Sharjah page</Link>. Weekend hours are described on <Link href="/weekend-forex-classes-dubai">weekend forex classes</Link>. Evening study for people with a day job is in <Link href="/blog-forex-classes-working-professionals-dubai">forex classes for working professionals</Link>.
            </p>
            <p>
              WhatsApp is the fastest path: <a href="https://wa.me/971559047030" target="_blank" rel="noopener noreferrer">wa.me/971559047030</a>. You can also call <a href="tel:+971559047030">{SITE.telephoneDisplay}</a> or use the form above. The chat button on this site opens the same enquiry.
            </p>

            <h2>Notes to read before the form</h2>
            <p>
              The form is the message. These notes are the reading that makes the message specific. They are linked here so the pages are not left without a route from this one.
            </p>
            <ul className="guide-list">
              <li><Link href="/blog-currency-pairs-uae">Currency pairs</Link> if the symbol name is still unclear.</li>
              <li><Link href="/blog-forex-leverage-margin-mt5-uae">Leverage and margin on MT5</Link> if you want the margin line checked in class.</li>
              <li><Link href="/blog-start-forex-trading-uae-mt5">How to start with MT5</Link> if the platform is not installed yet.</li>
              <li><Link href="/blog-private-vs-group-forex-classes-dubai">Private versus group</Link> if you have not chosen a room, and <Link href="/blog-private-and-group-forex-classes-dubai">how to use both</Link> if you want both in one month.</li>
              <li><Link href="/blog-investing-classes-near-me-dubai">Investing classes near me</Link> and <Link href="/blog-personal-finance-classes-near-me-dubai">personal finance classes near me</Link> if the search that brought you here was a map.</li>
              <li><Link href="/terms">Terms</Link> and the <Link href="/privacy">privacy page</Link> if you want to know what the lesson is, and what the form stores, before you send a number.</li>
            </ul>

            <h2>What the reply contains</h2>
            <p>
              A useful reply names the track, the format, the next time that fits Gulf Standard Time, and the fee in AED. It does not include a trade to copy, and it does not ask for a broker password. If your message says only &quot;price&quot; or only &quot;classes near me&quot;, the academy will ask the missing pieces before it quotes. You can save that round by sending them first.
            </p>
            <p>
              In person means the classroom in Dubai, UAE. The map on this page is Dubai. If you are driving in, ask for directions on WhatsApp after the time is agreed. Online means the same instructor on a screen, from Abu Dhabi, Sharjah, or anywhere else in the UAE. Both are live. What that hour contains is in <Link href="/blog-live-forex-trading-session-dubai">what a live forex session in Dubai includes</Link>. Neither format is a recording you start when you are free.
            </p>
            <p>
              If you want to arrive with a page already written, read <Link href="/blog-personal-forex-coaching-uae">what a coaching plan looks like</Link> or <Link href="/blog-forex-trading-plan-uae">how to keep a trading plan and journal</Link>. Then send the plan&apos;s first line in the message: the track, the city, and the hour you can keep. The <Link href="/blog">blog index</Link> lists the rest of the articles if you want the syllabus explained before you book.
            </p>
          </div>
        </section>

        <section>
          <div className="container prose-block">
            <h2>A free demo class, a meeting, or a seat</h2>
            <p>
              Three requests land in the same inbox, and they are not the same request. A free demo class is a look at how Gopi Chandran teaches. A one-to-one meeting is a conversation about which track and which hour fit your week. A seat is the class itself, group or private, once you already know. Say which of the three you want. The rules of a booking are on the <Link href="/terms">terms page</Link>. Fees are quoted in AED in the reply. A number is not printed here because it goes stale.
            </p>
            <p>
              Before you write, three short notes keep the first hour on your chart rather than on the software. <Link href="/blog-start-forex-trading-uae-mt5">How to start with MT5</Link> is the install. <Link href="/blog-mt5-order-ticket-dubai">The order ticket</Link> is the window. <Link href="/blog-private-vs-group-forex-classes-dubai">Private versus group</Link> is the room. You can send the message without those pages. You will spend the demo on them if you have not read them.
            </p>
            <h2>Three calendars, three first lines</h2>
            <p>
              Use the line that matches the week you actually have. Change the hour so it is true, then send it from the form, the site chat, or WhatsApp +971 55 904 7030.
            </p>
            <ul className="guide-list">
              <li>
                Abu Dhabi, professional week: &quot;Private lesson, online from Abu Dhabi after 8pm, or Saturday in Dubai. Beginner. Please quote a free demo or the fee in AED.&quot; The longer note is <Link href="/blog-private-forex-mentorship-abu-dhabi">private forex mentorship in Abu Dhabi</Link>. The drive-or-online choice is the <Link href="/forex-course-abu-dhabi">Abu Dhabi course page</Link>.
              </li>
              <li>
                Doctor, engineer, or banker: &quot;Private lesson. I am on a rota and can keep Sunday morning or after 9pm on days I am not on call. Online. Please quote the fee in AED.&quot; Read <Link href="/blog-forex-training-doctors-engineers-bankers-uae">forex training for doctors, engineers and bankers</Link> before you send that, so the hour you name is one you can keep.
              </li>
              <li>
                Business owner: &quot;Private lesson around a company week. After 8pm or Saturday morning, Dubai or online. Please quote the fee in AED.&quot; That diary is <Link href="/blog-executive-forex-coaching-dubai">executive forex coaching in Dubai</Link>. Investors who already hold capital, and are asking a different question, should read <Link href="/blog-forex-portfolio-diversification-uae">forex beside a portfolio</Link> first. Family offices and private investors in Abu Dhabi should read <Link href="/blog-forex-training-family-office-abu-dhabi">forex training for family offices and investors in Abu Dhabi</Link>.
              </li>
            </ul>
            <p>
              What the hour contains, once it is booked, is <Link href="/blog-live-forex-trading-session-dubai">a live forex session in Dubai</Link>. The six checks before you pay are on <Link href="/why-choose-us">Why Choose Us</Link>. The topic order is on <Link href="/courses">the course tracks</Link>.
            </p>
          </div>
        </section>

        <section>
          <div className="container prose-block">
            <h2>Writing from Downtown Dubai, DIFC, Business Bay, the Marina, or Palm Jumeirah</h2>
            <p>
              The desk is the same wherever you are in Dubai. There is no separate number for a district, and the public location stays Dubai, UAE. What helps the reply is the district, because the drive is part of the hour you can keep. Ask for directions after a time is agreed. This page does not try to be a map of your office.
            </p>
            <ul className="guide-list">
              <li>DIFC or Business Bay on a weekday: say whether the hour should sit before the first meeting, after the last one, or online between them. A gap between two meetings outside the building is rarely long enough to cross the city and sit down.</li>
              <li>Downtown Dubai: if you are already there for work, an in-person hour can be attached to that day. Say so, and name one backup block if a dinner moves.</li>
              <li>Dubai Marina or Palm Jumeirah: name the evening or the Saturday you can travel once, or ask for the hour online from home. The teaching is the same. The commute is yours. Do not book a time that assumes you can leave DIFC and be seated twenty minutes later.</li>
              <li>Online from any of these places uses Gulf Standard Time. It is live, with the same instructor. It is not a recording you start when the last call ends.</li>
            </ul>
            <p>
              If you leave the track, the room, or the hours out, the reply will ask for them before it quotes a fee in AED. Send them and the answer can name a time. Do not attach a broker password, a company bank screenshot, or a request for the academy to place trades in an account it does not control. A symbol and a question are enough for the first conversation.
            </p>
            <p>
              The longer description of that private hour is{" "}
              <Link href="/blog-vip-forex-mentorship-downtown-dubai-marina">private forex mentorship for Downtown Dubai, DIFC and the Marina</Link>. Home on Palm Jumeirah or in Emirates Hills, or a desk in Business Bay, is <Link href="/blog-forex-classes-palm-emirates-hills-business-bay">forex classes for those neighbourhoods</Link>. Founders who still need to separate company cash from a trading balance should read{" "}
              <Link href="/blog-forex-trading-business-owners-uae">forex education for business owners in the UAE</Link> before they write. The six checks before you pay are on <Link href="/why-choose-us">Why Choose Us</Link>. WhatsApp is +971 55 904 7030.
            </p>
          </div>
        </section>

        <section className="tight">
          <div className="container">
            <RelatedTraining current="/contact" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
