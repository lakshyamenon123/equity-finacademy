import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import TradingPlanOffer from "../components/TradingPlanOffer";
import RelatedTraining from "../components/RelatedTraining";
import Link from "next/link";
import { PLAN_SECTIONS } from "../components/TradingPlanSheet";
import { pageMetadata } from "../lib/seo";
import { breadcrumbSchema, webPageSchema } from "../lib/schema";

const path = "/free-trading-plan";
const title = "Free Executive's One-Page Trading Plan";
const description =
  "A free one-page forex trading plan for busy UAE executives and professionals: capital set aside, risk per trade in AED, hours on Dubai time, setup, and a weekly review. Printable, with a WhatsApp follow-up.";

export const metadata = pageMetadata({
  title: "Free One-Page Forex Trading Plan for Executives | Equity Fin Academy",
  description,
  keywords:
    "forex trading plan template, one page trading plan, trading plan for executives UAE, forex trading plan Dubai, free forex resource UAE",
  path,
});

export default function FreeTradingPlanPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, description, path })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Free Trading Plan", path },
        ])}
      />
      <Header active="free-trading-plan" />

      <main>
        <section className="tight bg-glow" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="container offer-grid">
            <div>
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span className="sep">/</span>
                <span className="current">Free Trading Plan</span>
              </nav>
              <span className="eyebrow">FREE RESOURCE</span>
              <h1 className="hero-display" style={{ fontSize: "clamp(1.8rem,5vw,2.8rem)", maxWidth: "20ch" }}>
                The executive&apos;s one-page trading plan.
              </h1>
              <p style={{ maxWidth: "58ch", marginTop: 18 }}>
                One page that keeps trading inside a busy diary: the capital you set aside, what a trade may cost in AED,
                the hours on Dubai time that fit your week, and the review that turns trades into lessons. Written by
                mentor Gopi Chandran for professionals, founders and executives in the UAE.
              </p>
              <p>Enter your name and WhatsApp number and the printable plan opens straight away.</p>
            </div>
            <div className="info-card offer-card">
              <h2 style={{ fontSize: "1.3rem", marginTop: 0 }}>Get the plan</h2>
              <TradingPlanOffer />
            </div>
          </div>
        </section>

        <section className="tight soft">
          <div className="container prose-block">
            <h2>What the page covers</h2>
            <ul className="guide-list">
              {PLAN_SECTIONS.map((section) => (
                <li key={section.title}>
                  <strong>{section.title.replace(/^\d+\.\s*/, "")}</strong>: {section.prompt}
                </li>
              ))}
            </ul>
            <p>
              The longer guide, with a journal layout, is{" "}
              <Link href="/blog-forex-trading-plan-uae">how to write a forex trading plan and journal in the UAE</Link>. The weekly
              review is explained in <Link href="/blog-forex-performance-review-dubai">the weekly performance review</Link>. All
              class notes stay free to read on the <Link href="/blog">blog</Link> and the <Link href="/faq">FAQ</Link>.
            </p>
            <p>
              Want to see the plan used on a live chart? <Link href="/free-demo">Book a free demo class</Link>.
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
