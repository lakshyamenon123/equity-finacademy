import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import DubaiMap from "../components/DubaiMap";
import ShortLeadForm from "../components/ShortLeadForm";
import RelatedTraining from "../components/RelatedTraining";
import Link from "next/link";
import { pageMetadata } from "../lib/seo";
import { breadcrumbSchema, faqPageSchema, webPageSchema } from "../lib/schema";
import { absoluteUrl, SITE } from "../lib/site";
import { whatsappHref } from "../lib/whatsapp";
import { INTEREST_FEES } from "../lib/leadOffers";

const contactTitle = "Contact Equity Fin Academy in Dubai";
const contactDescription =
  "Contact Equity Fin Academy in Dubai, UAE. Leave your name and WhatsApp number for fees in AED, a private one-to-one or group class, or a free demo class. Replies the same day.";

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
          <div className="container offer-grid">
            <div>
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span className="sep">/</span>
                <span className="current">Contact Us</span>
              </nav>
              <span className="eyebrow">CONTACT</span>
              <h1 className="hero-display" style={{ fontSize: "clamp(1.8rem,5vw,2.8rem)", maxWidth: "18ch" }}>
                Contact Equity Fin Academy in Dubai.
              </h1>
              <p style={{ maxWidth: "56ch", marginTop: 18 }}>
                Leave your name and WhatsApp number for fees in AED or a seat. The academy replies on WhatsApp, usually the same
                day. Classes run in person in Dubai, UAE, and online across the UAE.
              </p>
              <div className="cta-row">
                <Link href="/free-demo" className="btn btn-primary">
                  Book a free demo class
                </Link>
                <a href={whatsappHref("Hi, I would like to enquire about forex classes in Dubai")} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                  WhatsApp +971 55 904 7030
                </a>
              </div>
            </div>
            <div className="info-card offer-card contact-quick" id="enquiry">
              <h2 style={{ fontSize: "1.3rem", marginTop: 0 }}>Ask for fees or a seat</h2>
              <ShortLeadForm
                id="contact-lead-form"
                interest={INTEREST_FEES}
                options={["Private one-to-one", "Small group", "Online", "Not sure yet"]}
                submitLabel="Send"
                successText="Thank you. The academy will reply on WhatsApp, usually the same day."
                whatsappIntro="Hello Equity Fin Academy, I would like the fees for forex training."
              />
            </div>
          </div>
        </section>

        <section className="tight">
          <div className="container contact-grid">
            <div className="info-card reveal">
              <h3>Get in touch</h3>
              <div className="info-row">
                <span className="tag">LOCATION</span>
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
                <span className="tag">PRICING</span>
                <span className="val">
                  See <Link href="/pricing">what&apos;s included</Link> in each track. Fees are quoted in AED on WhatsApp.
                </span>
              </div>
              <div className="info-row">
                <span className="tag">REVIEWS</span>
                <span className="val">
                  <a href="https://www.google.com/maps/search/?api=1&query=Equity+Fin+Academy+Dubai" target="_blank" rel="noopener">
                    Read reviews on Google
                  </a>{" "}
                  or the <Link href="/success-stories">reviews page</Link>.
                </span>
              </div>
              <a href="tel:+971559047030" className="btn btn-outline btn-block">
                Call to Enquire
              </a>
            </div>

            <DubaiMap />
          </div>
        </section>

        <section className="tight soft">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">BEFORE YOU WRITE</span>
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
              Useful before a first class: <Link href="/courses">the course tracks</Link>,{" "}
              <Link href="/private-group-forex-training-dubai">private versus group</Link>,{" "}
              <Link href="/free-trading-plan">the free one-page trading plan</Link>,{" "}
              <Link href="/executive-market-briefing">the monthly Executive Market Briefing</Link>,{" "}
              <Link href="/forex-course-abu-dhabi">Abu Dhabi</Link> and <Link href="/forex-course-sharjah">Sharjah</Link> course
              pages, and <Link href="/why-choose-us">the enrolment checklist</Link>. What a booking covers is on the{" "}
              <Link href="/terms">terms page</Link>, and what the form stores is on the <Link href="/privacy">privacy page</Link>.
            </p>
            <p>
              <Link href="/faq" className="btn btn-outline">
                See All 30+ FAQs
              </Link>
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
