import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import Link from "next/link";
import Image from "next/image";
import { pageMetadata } from "../lib/seo";
import { breadcrumbSchema, personSchema } from "../lib/schema";

export const metadata = pageMetadata({
  title: "About Us — Gopi Chandran, Founder | Equity Fin Academy Dubai",
  description:
    "Gopi Chandran is the founder of Equity Fin Academy in Dubai, UAE. He built the Equity Global YouTube channel and has trained 2,000+ students.",
  keywords:
    "Gopi Chandran trader Dubai, Equity Global YouTube, forex trading mentor Dubai, forex trading instructor UAE, trading academy founder Dubai, about equity fin academy",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ])}
      />
      <JsonLd data={personSchema()} />
      <Header active="about" />

      <main>
        <section className="tight bg-glow" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span className="current">About Us</span>
            </nav>
            <span className="eyebrow">ABOUT THE FOUNDER</span>
            <h1 className="hero-display" style={{ fontSize: "clamp(1.8rem,5vw,3rem)" }}>
              A forex trading education built on a desk, not a webinar funnel.
            </h1>
          </div>
        </section>

        <section>
          <div className="container founder-grid">
            <div className="founder-card reveal">
              <div className="founder-mark">
                <Image
                  src="/mentor.jpg"
                  alt="Gopi Chandran, Founder & Lead Instructor at Equity Fin Academy"
                  fill
                  sizes="(max-width: 860px) 100vw, 40vw"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
              <span className="role">FOUNDER &amp; LEAD INSTRUCTOR</span>
              <h2>Gopi Chandran</h2>
              <p>Founder of Equity Fin Academy and the Equity Global YouTube channel. More than 2,000 students trained.</p>
            </div>

            <div className="reveal">
              <h2 style={{ fontSize: "1.6rem" }}>A single-market focus, taught in plain language</h2>
              <p style={{ maxWidth: "62ch" }}>
                Equity Fin Academy teaches forex in person in Dubai, UAE, and online across the UAE. Lessons are
                private one-to-one or in a group, with live trading sessions. If you want the short version of why
                students choose the academy, see <Link href="/why-choose-us">Why Choose Us</Link>.
              </p>

              <ul className="credential-list">
                <li>
                  <span className="tag">FOUNDER</span>
                  <span>Gopi Chandran founded Equity Fin Academy and leads the lessons.</span>
                </li>
                <li>
                  <span className="tag">EDUCATION</span>
                  <span>MBA in Finance, providing the theoretical grounding behind the trading framework taught at the academy.</span>
                </li>
                <li>
                  <span className="tag">TEACHING</span>
                  <span>
                    Built the &quot;Equity Global&quot; YouTube channel and live mentorship programme, training more
                    than 2,000 students in forex market structure and risk management.
                  </span>
                </li>
                <li>
                  <span className="tag">FOCUS</span>
                  <span>Forex taught in depth, with the same chart reading applied on MetaTrader 5 to gold, indices, and stocks when that is the symbol in front of you.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="stats-strip">
          <div className="container stats-grid">
            <div className="stat-block reveal">
              <span className="value" data-counter="2000" data-suffix="+">2000+</span>
              <span className="label">Students Trained</span>
            </div>
            <div className="stat-block reveal">
              <span className="value" data-counter="200" data-suffix="+">200+</span>
              <span className="label">YouTube reviews</span>
            </div>
            <div className="stat-block reveal">
              <span className="value" data-counter="2" data-suffix="">2</span>
              <span className="label">Course Tracks</span>
            </div>
            <div className="stat-block reveal">
              <span className="value" data-counter="1" data-suffix="">1</span>
              <span className="label">Classroom, in Dubai</span>
            </div>
          </div>
        </div>

        <section>
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">JOURNEY</span>
              <h2>From formal finance training to full-time forex trading</h2>
            </div>
            <div className="timeline reveal">
              <div className="timeline-item">
                <span className="tag">EDUCATION</span>
                <h3>MBA in Finance</h3>
                <p>Formal grounding in financial theory, before moving into full-time trading.</p>
              </div>
              <div className="timeline-item">
                <span className="tag">TRADING</span>
                <h3>Forex, taught live</h3>
                <p>Private one-to-one lessons, group classes, and live trading sessions, in Dubai and online across the UAE.</p>
              </div>
              <div className="timeline-item">
                <span className="tag">Equity Global</span>
                <h3>Teaching begins</h3>
                <p>Started the &quot;Equity Global&quot; YouTube channel to teach forex market structure to a wider audience.</p>
              </div>
              <div className="timeline-item">
                <span className="tag">Equity Fin Academy</span>
                <h3>Academy founded</h3>
                <p>Live mentorship and two structured course tracks, in Dubai, UAE, and online across the UAE.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="tight soft">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">TEACHING PHILOSOPHY</span>
              <h2>Three principles behind every lesson</h2>
            </div>
            <div className="principle-grid">
              <div className="card reveal">
                <div className="num">01</div>
                <h3>Structure over indicators</h3>
                <p>Market structure is taught before indicators, because indicators describe price and structure explains it.</p>
              </div>
              <div className="card reveal">
                <div className="num">02</div>
                <h3>Risk before reward</h3>
                <p>Position sizing and trading psychology are covered as core curriculum, not an afterthought bolted onto strategy lessons.</p>
              </div>
              <div className="card reveal">
                <div className="num">03</div>
                <h3>Depth over breadth</h3>
                <p>The lesson goes deep on how a chart is read. Forex is the core syllabus. On MetaTrader 5 the same reading is applied to gold, indices, and stocks when that is the symbol in front of you.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="tight">
          <div className="container">
            <blockquote className="pull-quote reveal">
              <p>
                &quot;I didn&apos;t want to teach shortcuts. I wanted to teach the same market-structure thinking
                used on institutional trading desks — just explained clearly enough that anyone serious about forex
                could apply it.&quot;
              </p>
              <cite>— Gopi Chandran, Founder, Equity Fin Academy</cite>
            </blockquote>
          </div>
        </section>

        <section className="tight">
          <div className="container">
            <div className="cta-banner reveal">
              <div>
                <h2>See what the curriculum actually covers.</h2>
                <p>Two tracks, from candlestick fundamentals to the advanced syllabus. Compare them side by side.</p>
              </div>
              <Link href="/courses" className="btn btn-primary">
                View Courses
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
