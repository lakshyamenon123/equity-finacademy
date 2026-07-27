import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "About Us — Gopi Chandran, Founder | Equity Fin Academy Dubai",
  description:
    "Gopi Chandran, founder of Equity Fin Academy: MBA in Finance, full-time forex trader since 2016. Built the Equity Global YouTube channel and trained 2,000+ students in Dubai.",
  keywords:
    "Gopi Chandran trader Dubai, Equity Global YouTube, forex trading mentor Dubai, forex trading instructor UAE, trading academy founder Dubai, market structure mentor, forex trader since 2016, about equity fin academy",
  openGraph: {
    title: "About Us — Gopi Chandran, Founder | Equity Fin Academy Dubai",
    description: "MBA in Finance, full-time forex trader since 2016 — now training traders in Dubai through Equity Fin Academy.",
    type: "website",
  },
  alternates: { canonical: "https://www.equityfinacademy.com/about" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/" },
    { "@type": "ListItem", position: 2, name: "About Us", item: "/about" },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
              <div className="founder-mark">GC</div>
              <span className="role">FOUNDER &amp; LEAD INSTRUCTOR</span>
              <h2>Gopi Chandran</h2>
              <p>MBA in Finance. Full-time forex trader since 2016, trading major and minor currency pairs across live market structure.</p>
            </div>

            <div className="reveal">
              <h2 style={{ fontSize: "1.6rem" }}>A single-market focus, taught in plain language</h2>
              <p style={{ maxWidth: "62ch" }}>
                Equity Fin Academy exists because Gopi wanted to teach forex the way it&apos;s actually traded on a
                desk — order flow, liquidity and risk as one connected structure — rather than a shallow,
                multi-market curriculum stretched thin across everything at once. If you want the short version of
                why that matters, see <Link href="/why-choose-us">Why Choose Us</Link>.
              </p>

              <ul className="credential-list">
                <li>
                  <span className="tag">2016 —</span>
                  <span>Began trading forex full-time, after formal training in finance.</span>
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
                  <span>One market, taught in depth — forex structure, order flow and risk management as a single connected discipline.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="stats-strip">
          <div className="container stats-grid">
            <div className="stat-block reveal">
              <span className="value" data-counter="2000" data-suffix="+">0+</span>
              <span className="label">Students Trained</span>
            </div>
            <div className="stat-block reveal">
              <span className="value" data-counter="10" data-suffix="+">0+</span>
              <span className="label">Years Full-Time Trading</span>
            </div>
            <div className="stat-block reveal">
              <span className="value" data-counter="2" data-suffix="">0</span>
              <span className="label">Course Tracks</span>
            </div>
            <div className="stat-block reveal">
              <span className="value" data-counter="1" data-suffix="">0</span>
              <span className="label">Market. Fully Mastered.</span>
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
                <span className="tag">2016 — Onward</span>
                <h3>Full-time forex trader</h3>
                <p>Began trading forex full-time, developing a market-structure approach built around order flow and risk.</p>
              </div>
              <div className="timeline-item">
                <span className="tag">Equity Global</span>
                <h3>Teaching begins</h3>
                <p>Started the &quot;Equity Global&quot; YouTube channel to teach forex market structure to a wider audience.</p>
              </div>
              <div className="timeline-item">
                <span className="tag">Equity Fin Academy</span>
                <h3>Academy founded</h3>
                <p>Formalised live mentorship and structured course tracks in Al Qusais, Dubai.</p>
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
                <p>Market structure, order flow and liquidity are taught before any indicator — because indicators describe price, structure explains it.</p>
              </div>
              <div className="card reveal">
                <div className="num">02</div>
                <h3>Risk before reward</h3>
                <p>Position sizing and trading psychology are covered as core curriculum, not an afterthought bolted onto strategy lessons.</p>
              </div>
              <div className="card reveal">
                <div className="num">03</div>
                <h3>Depth over breadth</h3>
                <p>One market, mastered properly, beats a shallow overview of many. Every lesson goes deeper into forex, not wider into other assets.</p>
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
                <p>Two tracks, from candlestick fundamentals to institutional order flow — compare them side by side.</p>
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
