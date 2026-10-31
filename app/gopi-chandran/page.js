import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqList from "../components/FaqList";
import JsonLd from "../components/JsonLd";
import Link from "next/link";
import Image from "next/image";
import OpenChatLink from "../components/OpenChatLink";
import { mentorFaq } from "../lib/mentorFaq";
import { pageMetadata } from "../lib/seo";
import { breadcrumbSchema, faqPageSchema, mentorProfileSchema, personSchema } from "../lib/schema";
import { SITE } from "../lib/site";
import { EQUITY_GLOBAL, EQUITY_GLOBAL_ENGLISH } from "../lib/videos";

const path = "/gopi-chandran";
const title = "Gopi Chandran, Forex Mentor in Dubai";
const description =
  "Gopi Chandran (Gopichandran) is the founder and lead forex mentor of Equity Fin Academy in Dubai. Private lessons, live trading, group classes, and MetaTrader 5. Open 24/7.";

export const metadata = pageMetadata({
  title: `${title} | Equity Fin Academy`,
  description,
  keywords:
    "Gopi Chandran, Gopichandran, forex mentor Dubai, best forex mentor Dubai, forex trainer Dubai, Equity Fin Academy founder, forex mentor UAE",
  path,
});

export default function GopiChandranPage() {
  return (
    <>
      <JsonLd data={personSchema()} />
      <JsonLd data={mentorProfileSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Gopi Chandran", path },
        ])}
      />
      <JsonLd data={faqPageSchema(mentorFaq)} />
      <Header active="gopi" />

      <main>
        <section className="tight bg-glow" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span className="current">Gopi Chandran</span>
            </nav>
            <span className="eyebrow">FOREX MENTOR · DUBAI · OPEN 24/7</span>
            <h1 className="hero-display" style={{ fontSize: "clamp(1.8rem,5vw,3.1rem)", maxWidth: "18ch" }}>
              Gopi Chandran, Forex Mentor in Dubai
            </h1>
            <p className="hero-sub" style={{ marginTop: 18, maxWidth: "68ch" }}>
              Gopi Chandran, also written Gopichandran, is the founder and lead forex mentor of Equity Fin Academy
              in Dubai. Equity Fin Academy, forex training academy in Dubai, led by mentor Gopi Chandran, teaches
              one-to-one private lessons, live trading and training, and group classes on MetaTrader 5 for Dubai, Abu
              Dhabi, Sharjah, and the UAE.
            </p>
            <div className="cta-row" style={{ marginTop: 22 }}>
              <OpenChatLink className="btn btn-primary" intent="demo">
                Free demo class
              </OpenChatLink>
              <a href="https://wa.me/971559047030" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                WhatsApp +971 55 904 7030
              </a>
              <a href="tel:+971559047030" className="btn btn-outline">
                Call
              </a>
              <OpenChatLink className="btn btn-outline">Enquire</OpenChatLink>
            </div>
          </div>
        </section>

        <section>
          <div className="container founder-grid">
            <div className="founder-card reveal">
              <div className="founder-mark">
                <Image
                  src="/mentor.jpg"
                  alt="Gopi Chandran, founder and lead forex mentor of Equity Fin Academy in Dubai"
                  fill
                  sizes="(max-width: 860px) 100vw, 40vw"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
              <span className="role">FOUNDER &amp; LEAD FOREX MENTOR</span>
              <h2>Gopi Chandran</h2>
              <p>Also written Gopichandran. Founder of Equity Fin Academy and the Equity Global channels.</p>
            </div>

            <div className="reveal">
              <h2 style={{ fontSize: "1.6rem" }}>The mentor who leads the academy</h2>
              <p style={{ maxWidth: "62ch" }}>
                Gopi Chandran founded Equity Fin Academy and still leads the lessons. Students sit with him for a
                private hour, join a group class, or watch a live trading session, in Dubai or online from another
                emirate. The academy page is <Link href="/about">About Us</Link>. The class formats are on{" "}
                <Link href="/forex-mentorship-dubai">forex mentorship in Dubai</Link>.
              </p>
              <ul className="credential-list">
                <li>
                  <span className="tag">ROLE</span>
                  <span>Founder and lead forex mentor of Equity Fin Academy, the forex training academy in Dubai.</span>
                </li>
                <li>
                  <span className="tag">LESSONS</span>
                  <span>One-to-one private lessons, live trading and training, and group classes.</span>
                </li>
                <li>
                  <span className="tag">PLATFORM</span>
                  <span>Practical chart work is taught on MetaTrader 5, including forex and XAUUSD.</span>
                </li>
                <li>
                  <span className="tag">STUDENTS</span>
                  <span>More than 2,000 students trained through Equity Global and live mentorship.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="tight soft">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">HOW HE TEACHES</span>
              <h2>Private lessons, live trading, and group classes.</h2>
            </div>
            <div className="format-grid">
              <article className="format-card reveal">
                <span className="num">01</span>
                <h3>One-to-one private lessons</h3>
                <p>A booked lesson on your chart and your questions, in Dubai or online across the UAE.</p>
                <Link href="/private-group-forex-training-dubai">Private training →</Link>
              </article>
              <article className="format-card reveal">
                <span className="num">02</span>
                <h3>Live trading and training</h3>
                <p>Live sessions on MetaTrader 5, so the lesson sits on the platform you will use after class.</p>
                <Link href="/courses">Course tracks →</Link>
              </article>
              <article className="format-card reveal">
                <span className="num">03</span>
                <h3>Group classes</h3>
                <p>Basic to Intermediate, or Advanced Institutional Strategies, taught to a shared syllabus.</p>
                <Link href="/courses">View the syllabus →</Link>
              </article>
            </div>
          </div>
        </section>

        <div className="stats-strip">
          <div className="container stats-grid">
            <div className="stat-block reveal">
              <span className="value">5.0</span>
              <span className="label">Google rating, 30+ reviews</span>
            </div>
            <div className="stat-block reveal">
              <span className="value" data-counter="200" data-suffix="+">200+</span>
              <span className="label">YouTube reviews</span>
            </div>
            <div className="stat-block reveal">
              <span className="value">24/7</span>
              <span className="label">Open in Dubai</span>
            </div>
            <div className="stat-block reveal">
              <span className="value" data-counter="2000" data-suffix="+">2000+</span>
              <span className="label">Students trained</span>
            </div>
          </div>
        </div>

        <section>
          <div className="container prose-block">
            <span className="eyebrow">WHERE TO WATCH AND WRITE</span>
            <h2>YouTube, Instagram, and WhatsApp.</h2>
            <p>
              Gopi Chandran publishes free lessons on two YouTube channels. English lessons are on{" "}
              <a href={EQUITY_GLOBAL_ENGLISH.url} target="_blank" rel="noopener noreferrer">
                Equity Global English
              </a>
              . Malayalam lessons are on{" "}
              <a href={EQUITY_GLOBAL.url} target="_blank" rel="noopener noreferrer">
                Equity Global
              </a>
              . Day-to-day updates are on Instagram as{" "}
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">
                equity_global
              </a>
              . The academy is rated 5.0 on Google from 30+ reviews, and the channels carry 200+ YouTube reviews and
              comments.
            </p>
            <p>
              The academy is open 24/7. To book a private lesson or a group seat, WhatsApp{" "}
              <a href="https://wa.me/971559047030" target="_blank" rel="noopener noreferrer">
                +971 55 904 7030
              </a>
              . Classes are in person in Dubai and online for Abu Dhabi, Sharjah, and the rest of the UAE. The{" "}
              <Link href="/contact">contact page</Link> has the map. Fees are quoted when you enquire.
            </p>
          </div>
        </section>

        <section className="tight soft">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">COMMON QUESTIONS</span>
              <h2>Gopi Chandran and Equity Fin Academy</h2>
            </div>
            <FaqList items={mentorFaq} />
          </div>
        </section>

        <section className="tight">
          <div className="container">
            <div className="cta-banner reveal">
              <div>
                <h2>Ask Gopi Chandran about a class.</h2>
                <p>WhatsApp +971 55 904 7030. Say whether you want a private lesson or a group class, and which emirate you are in.</p>
              </div>
              <a href="https://wa.me/971559047030" className="btn btn-light" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
