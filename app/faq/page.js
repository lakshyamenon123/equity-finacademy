import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import RichText from "../components/RichText";
import Link from "next/link";
import OpenChatLink from "../components/OpenChatLink";
import { pageMetadata } from "../lib/seo";
import { breadcrumbSchema, faqPageSchema } from "../lib/schema";
import { faqCategories, faqCount, faqItems } from "../lib/faqContent";

export const metadata = pageMetadata({
  title: "Forex Trading FAQ for Dubai & the UAE | Equity Fin Academy",
  description: `Answers to ${faqCount} questions on learning forex in Dubai: how to start, how long it takes, and how the academy's courses work.`,
  keywords:
    "forex trading FAQ, how do I start forex learning, is forex trading hard, how long does it take to learn forex, forex trading for beginners questions, is equity fin academy good for beginners",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <JsonLd data={faqPageSchema(faqItems)} />
      <Header active="faq" />

      <main>
        <section className="tight bg-glow" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span className="current">FAQ</span>
            </nav>
            <span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span>
            <h1 className="hero-display" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", maxWidth: "22ch" }}>
              Forex trading FAQ for Dubai and the UAE.
            </h1>
            <p style={{ maxWidth: "60ch", marginTop: 18 }}>
              {faqCount} straight answers, organised by topic. Can&apos;t find yours? <OpenChatLink className="text-link">Ask us directly</OpenChatLink>.
            </p>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="faq-jumplinks reveal">
              {faqCategories.map((category) => (
                <a key={category.id} href={`#${category.id}`}>
                  {category.title}
                </a>
              ))}
            </div>

            {faqCategories.map((category) => (
              <div className="faq-category" id={category.id} key={category.id}>
                <h2>{category.title}</h2>
                <div className="faq-list reveal">
                  {category.items.map((item) => (
                    <details key={item.q}>
                      <summary>
                        {item.q}
                        <span className="plus">+</span>
                      </summary>
                      <p>
                        <RichText parts={item.parts} />
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="tight soft">
          <div className="container">
            <div className="cta-banner reveal">
              <div>
                <h2>Still have a question?</h2>
                <p>Call, WhatsApp, or send a message — we typically respond the same day.</p>
              </div>
              <OpenChatLink className="btn btn-primary">Contact Us</OpenChatLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
