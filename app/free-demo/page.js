import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import FreeDemoBooking from "../components/FreeDemoBooking";
import RelatedTraining from "../components/RelatedTraining";
import Link from "next/link";
import { pageMetadata } from "../lib/seo";
import { breadcrumbSchema, faqPageSchema, webPageSchema } from "../lib/schema";
import { whatsappHref } from "../lib/whatsapp";

const path = "/free-demo";
const title = "Book a Free Demo Forex Class in Dubai";
const description =
  "Book a free demo forex class with mentor Gopi Chandran in Dubai or online. Pick a weekday evening or Saturday slot, private one-to-one or small group, and confirm on WhatsApp.";

export const metadata = pageMetadata({
  title: "Free Demo Forex Class in Dubai | Book a Slot | Equity Fin Academy",
  description,
  keywords:
    "free demo forex class Dubai, free forex class UAE, private forex lesson Dubai, forex training Dubai demo, forex course Dubai trial class",
  path,
});

const faq = [
  {
    q: "What happens in the free demo class?",
    text: "You see how Gopi Chandran teaches: one live chart, how a level is marked, and how a trade idea is planned before an order is placed. You can ask about the private one-to-one and small-group formats and the fee in AED.",
  },
  {
    q: "Is the demo in person or online?",
    text: "Either. Demos run in person in Dubai, UAE, or online on Gulf Standard Time. Say which you prefer in the WhatsApp message.",
  },
  {
    q: "What if none of the slots suit my week?",
    text: "Pick the closest slot and write the hour you can keep in the WhatsApp message, or message +971 55 904 7030 directly. Private demos can be arranged around a working week.",
  },
  {
    q: "Do I need a trading account first?",
    text: "No. A laptop or phone with MetaTrader 5 installed helps, but the demo works without an account.",
  },
];

export default function FreeDemoPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, description, path })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Free Demo Class", path },
        ])}
      />
      <JsonLd data={faqPageSchema(faq)} />
      <Header active="free-demo" />

      <main>
        <section className="tight bg-glow" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="container offer-grid">
            <div>
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span className="sep">/</span>
                <span className="current">Free Demo Class</span>
              </nav>
              <span className="eyebrow">FREE DEMO CLASS</span>
              <h1 className="hero-display" style={{ fontSize: "clamp(1.8rem,5vw,2.8rem)", maxWidth: "20ch" }}>
                Book a free demo forex class in Dubai.
              </h1>
              <p style={{ maxWidth: "58ch", marginTop: 18 }}>
                Choose a weekly slot, private one-to-one or small group, and confirm it on WhatsApp. The demo is a live
                look at how Gopi Chandran teaches, in person in Dubai, UAE, or online across the UAE.
              </p>
              <ul className="guide-list">
                <li>Weekday evenings, Monday to Thursday, and Saturday, all on Dubai time.</li>
                <li>Private one-to-one for executives and professionals, or a small group.</li>
                <li>One live chart and your questions about the tracks and fees in AED.</li>
              </ul>
              <p>
                Prefer to message first?{" "}
                <a href={whatsappHref("Hi Gopi, I would like a free demo class.")} target="_blank" rel="noopener noreferrer">
                  WhatsApp +971 55 904 7030
                </a>
                .
              </p>
            </div>
            <div className="info-card offer-card">
              <h2 style={{ fontSize: "1.3rem", marginTop: 0 }}>Pick your slot</h2>
              <FreeDemoBooking />
            </div>
          </div>
        </section>

        <section className="tight soft">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">QUESTIONS</span>
              <h2>Before you book</h2>
            </div>
            <div className="faq-list">
              {faq.map((item) => (
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
              Compare the formats on <Link href="/private-group-forex-training-dubai">private versus group classes</Link>, read the
              tracks on <Link href="/courses">forex courses in Dubai</Link>, or take the free{" "}
              <Link href="/free-trading-plan">executive&apos;s one-page trading plan</Link> first.
            </p>
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
