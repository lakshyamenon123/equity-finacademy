import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import LeadForm from "../components/LeadForm";
import RelatedTraining from "../components/RelatedTraining";
import Link from "next/link";
import { pageMetadata } from "../lib/seo";
import { breadcrumbSchema, faqPageSchema, webPageSchema } from "../lib/schema";
import { absoluteUrl, SITE } from "../lib/site";
import { whatsappHref } from "../lib/whatsapp";

const contactTitle = "Book a Forex Class in Dubai, United Arab Emirates";
const contactDescription =
  "Contact Equity Fin Academy in Dubai, UAE. WhatsApp +971 55 904 7030. Say your emirate, group or private, and whether you will study in Dubai or online.";

export const metadata = pageMetadata({
  title: `${contactTitle} | Equity Fin Academy`,
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
            <h1 className="hero-display" style={{ fontSize: "clamp(1.8rem,5vw,2.8rem)", maxWidth: "20ch" }}>
              Book a forex class in Dubai, United Arab Emirates.
            </h1>
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

            <div className="map-frame reveal">
              <iframe
                src="https://www.google.com/maps?q=Equity+Fin+Academy+Dubai+UAE&output=embed"
                title="Map showing Dubai, UAE"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
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
              Equity Fin Academy teaches in person in Dubai, UAE, and online across the United Arab Emirates. The classroom is not listed with a street, a building, or a floor. The map on this page is Dubai. Online students in Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain use the same Gulf Standard Time as Dubai. Say which of those you mean in the first message.
            </p>
            <ul className="guide-list">
              <li>Dubai, in the room: “Basic to Intermediate, group class, in Dubai, after 7pm Gulf Standard Time. Please quote the fee in AED.”</li>
              <li>Abu Dhabi, online: “I live in Abu Dhabi and want the same course online. Beginner. Please quote the fee in AED.” The longer note on that choice is the <Link href="/forex-course-abu-dhabi">Abu Dhabi course page</Link>.</li>
              <li>Colleagues together: “Three of us want the group cohort. Mixed experience. Weekday evening, Dubai or online. Please say whether one cohort can take us, and quote the fee in AED.” Read <Link href="/blog-group-forex-classes-friends-dubai">group classes for friends and colleagues</Link> before you send that.</li>
            </ul>
            <p>
              The topic lists you are choosing between are on <Link href="/courses">the course tracks</Link>. If the word in your message is an order block or a liquidity sweep, read <Link href="/blog-smart-money-concepts">smart money concepts</Link> first so you name the advanced track on purpose. Study notes are indexed on the <Link href="/blog">blog</Link>. The public Google listing is explained on the <Link href="/success-stories">reviews page</Link>. If the symbol you want marked is gold, say XAUUSD. That chart is described in <Link href="/blog-gold-xauusd-course-dubai">the gold class note</Link>.
            </p>

            <h2>What to put in the first message</h2>
            <p>
              A useful enquiry is short. Name the track, Basic to Intermediate or Advanced Institutional Strategies. Name the format, a group class or a private one-to-one lesson. Name the place, the room in Dubai or online. If you work days, say the hours you can keep. Fees are quoted in AED in the reply. They are not printed on the <Link href="/courses">courses page</Link> or the <Link href="/forex-course-fees-dubai">fees page</Link>.
            </p>
            <p>
              The academy is a forex training academy in Dubai and online across the UAE. It is open 24/7 and rated 5.0 on Google from 30+ reviews. More than 2,000 students have trained through Equity Global and live classes. Read those reviews on the <Link href="/success-stories">reviews page</Link>, not as quotes pasted here. If you want the syllabus before you write, start with the <Link href="/blog">blog</Link>, <Link href="/blog-currency-pairs-uae">how a currency pair is quoted</Link>, <Link href="/blog-forex-education-uae">forex education in the UAE</Link>, <Link href="/blog-forex-classes-near-me-dubai">forex classes near me in Dubai</Link>, and the <Link href="/blog-smart-money-concepts">smart money concepts article</Link>. If your question is a news release rather than a chart, read <Link href="/blog-forex-economic-calendar-dubai">the economic calendar in Dubai time</Link> first, then say which release you mean.
            </p>
            <p>
              Abu Dhabi residents use the same Gulf Standard Time as Dubai. The <Link href="/forex-course-abu-dhabi">Abu Dhabi course page</Link> explains the drive and the online seat. Sharjah is on the <Link href="/forex-course-sharjah">Sharjah page</Link>. Weekend hours are described on <Link href="/weekend-forex-classes-dubai">weekend forex classes</Link>. Evening study for people with a day job is in <Link href="/blog-forex-classes-working-professionals-dubai">forex classes for working professionals</Link>.
            </p>
            <p>
              WhatsApp is the fastest path: <a href="https://wa.me/971559047030" target="_blank" rel="noopener noreferrer">wa.me/971559047030</a>. You can also call <a href="tel:+971559047030">{SITE.telephoneDisplay}</a> or use the form above. The chat button on this site opens the same enquiry.
            </p>

            <h2>What the reply contains</h2>
            <p>
              A useful reply names the track, the format, the next time that fits Gulf Standard Time, and the fee in AED. It does not include a trade to copy, and it does not ask for a broker password. If your message says only &quot;price&quot; or only &quot;classes near me&quot;, the academy will ask the missing pieces before it quotes. You can save that round by sending them first.
            </p>
            <p>
              In person means the classroom in Dubai, UAE. The map on this page is Dubai. It does not print a floor or a building name. If you are driving in, ask for directions on WhatsApp after the time is agreed. Online means the same instructor on a screen, from Abu Dhabi, Sharjah, or anywhere else in the UAE. Both are live. Neither is a recording you start when you are free.
            </p>
            <p>
              If you want to arrive with a page already written, read <Link href="/blog-personal-forex-coaching-uae">what a coaching plan looks like</Link> or <Link href="/blog-forex-trading-plan-uae">how to keep a trading plan and journal</Link>. Then send the plan&apos;s first line in the message: the track, the city, and the hour you can keep. The <Link href="/blog">blog index</Link> lists the rest of the articles if you want the syllabus explained before you book.
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
