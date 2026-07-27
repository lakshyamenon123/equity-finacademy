import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Student Reviews — Equity Fin Academy Dubai",
  description:
    "Real, unfiltered student reviews of Equity Fin Academy on Google — not curated testimonials. Read what students say and leave your own review.",
  keywords: "Equity Fin Academy reviews, forex academy reviews Dubai, forex course reviews UAE, is Equity Fin Academy legit",
  openGraph: {
    title: "Student Reviews — Equity Fin Academy Dubai",
    description: "Real, unfiltered student reviews on Google — not curated testimonials.",
    type: "website",
  },
  alternates: { canonical: "https://www.equityfinacademy.com/success-stories" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/" },
    { "@type": "ListItem", position: 2, name: "Reviews", item: "/success-stories" },
  ],
};

export default function SuccessStoriesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header active="reviews" />

      <main>
        <section className="tight bg-glow" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span className="current">Reviews</span>
            </nav>
            <span className="eyebrow">STUDENT REVIEWS</span>
            <h1 className="hero-display" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", maxWidth: "22ch" }}>
              What students actually say.
            </h1>
            <p style={{ maxWidth: "60ch", marginTop: 18 }}>
              We&apos;re not going to put invented quotes on this page. Here&apos;s how to see real feedback instead.
            </p>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="reviews-panel reveal">
              <span className="eyebrow">UNFILTERED &amp; REAL</span>
              <h2>Read reviews on Google, not on our website</h2>
              <p>
                Testimonials that a business writes about itself are easy to write and impossible to verify.
                We&apos;d rather send you to Google, where reviews are posted directly by students, moderated by
                Google (not by us), and can&apos;t be edited or removed by Equity Fin Academy.
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Equity+Fin+Academy+Al+Qusais+Dubai"
                target="_blank"
                rel="noopener"
                className="btn btn-primary"
              >
                Read Reviews on Google Maps ↗
              </a>
            </div>
          </div>
        </section>

        <section className="tight soft">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">STUDIED, NOT SOLD</span>
              <h2>Real case studies, coming as students share them</h2>
              <p style={{ maxWidth: "70ch" }}>
                Rather than publish generic success quotes, we&apos;re building this section out with real,
                permissioned stories from students who complete a course and choose to share their experience —
                including the honest parts. If you&apos;re a past or current student who&apos;d like to share your
                story, <Link href="/contact">get in touch</Link>.
              </p>
            </div>
            <div className="grid-4">
              <div className="card reveal">
                <div className="icon-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </div>
                <h3>Verified, not written by us</h3>
                <p>Every quote we eventually publish here will be attributed and permissioned by the student, not written on their behalf.</p>
              </div>
              <div className="card reveal">
                <div className="icon-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </div>
                <h3>No results promises</h3>
                <p>We won&apos;t publish quotes implying guaranteed trading profits — that&apos;s not a real outcome we or anyone can promise.</p>
              </div>
              <div className="card reveal">
                <div className="icon-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </div>
                <h3>Google reviews in the meantime</h3>
                <p>Until then, Google Maps reviews are the most reliable place to see honest, third-party feedback.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="tight">
          <div className="container">
            <div className="cta-banner reveal">
              <div>
                <h2>See the curriculum these students studied.</h2>
                <p>Compare the two course tracks and find the one that fits your experience.</p>
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
