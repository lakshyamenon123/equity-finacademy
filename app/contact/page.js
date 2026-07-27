import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Contact Us — Equity Fin Academy, Al Qusais, Dubai",
  description:
    "Visit Equity Fin Academy's forex trading academy at M Floor, Arzoo Building, Al Qusais, Dubai, or call +971 56 718 8995. Read real student reviews on Google Maps, or enquire about our forex trading courses.",
  keywords:
    "forex trading academy Al Qusais, forex course near me Dubai, Equity Fin Academy contact, trading academy phone number Dubai, book forex course Dubai, forex classes Al Qusais Dubai",
  openGraph: {
    title: "Contact Us — Equity Fin Academy, Al Qusais, Dubai",
    description: "Visit us at M Floor, Arzoo Building, Al Qusais, Dubai, or call +971 56 718 8995 to enquire about our forex trading courses.",
    type: "website",
  },
  alternates: { canonical: "https://www.equityfinacademy.com/contact" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/" },
    { "@type": "ListItem", position: 2, name: "Contact Us", item: "/contact" },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
              Visit our forex trading academy in Al Qusais, or send an enquiry.
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
                <span className="val">M Floor, Arzoo Building, Al Qusais, Dubai, United Arab Emirates</span>
              </div>
              <div className="info-row">
                <span className="tag">PHONE</span>
                <span className="val">
                  <a href="tel:+971567188995">+971 56 718 8995</a>
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

              <a href="tel:+971567188995" className="btn btn-primary btn-block">
                Call to Enquire
              </a>
            </div>

            <div className="map-frame reveal">
              <iframe
                src="https://www.google.com/maps?q=M+Floor,+Arzoo+Building,+Al+Qusais,+Dubai,+UAE&output=embed"
                title="Map showing M Floor, Arzoo Building, Al Qusais, Dubai"
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
              <details>
                <summary>
                  Do I need an appointment to visit?<span className="plus">+</span>
                </summary>
                <p>Walk-ins are welcome Sunday to Friday, but calling ahead means someone can walk you through the forex course tracks in person.</p>
              </details>
              <details>
                <summary>
                  How quickly do you respond to enquiries?<span className="plus">+</span>
                </summary>
                <p>
                  Call or WhatsApp <a href="tel:+971567188995">+971 56 718 8995</a> and we typically respond to
                  course enquiries the same day.
                </p>
              </details>
              <details>
                <summary>
                  Where exactly is the academy located?<span className="plus">+</span>
                </summary>
                <p>Equity Fin Academy is at M Floor, Arzoo Building, Al Qusais, Dubai — see the map above for directions.</p>
              </details>
            </div>
            <p style={{ marginTop: 24 }}>
              <Link href="/faq" className="btn btn-outline">
                See All 30+ FAQs
              </Link>
            </p>
          </div>
        </section>

        <section className="tight">
          <div className="container">
            <div className="topics-row reveal">
              <span className="topic-chip">Forex Trading Academy Al Qusais</span>
              <span className="topic-chip">Forex Classes Dubai</span>
              <span className="topic-chip">Learn Forex Near Me</span>
              <span className="topic-chip">Book a Forex Course Dubai</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
