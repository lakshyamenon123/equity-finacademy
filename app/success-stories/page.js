import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import JsonLd from "../components/JsonLd";
import { pageMetadata } from "../lib/seo";
import RelatedTraining from "../components/RelatedTraining";
import { breadcrumbSchema, faqPageSchema, webPageSchema } from "../lib/schema";

const reviewsTitle = "How to Read Equity Fin Academy’s Google Reviews in Dubai";
const reviewsDescription =
  "How to use Equity Fin Academy’s 5.0 Google listing in Dubai before you enrol. This page does not publish written testimonials.";

export const metadata = pageMetadata({
  title: `${reviewsTitle} | Equity Fin Academy`,
  description: reviewsDescription,
  keywords:
    "Equity Fin Academy reviews, forex academy reviews Dubai, forex course reviews UAE, forex training Dubai Google reviews, United Arab Emirates",
  path: "/success-stories",
});

const reviewFaq = [
  {
    q: "Where can I read reviews of Equity Fin Academy?",
    text: "On Google. Equity Fin Academy is rated 5.0 from 30+ reviews. The academy does not reprint those reviews on this page, because a quote copied onto a school website is no longer the review Google holds.",
  },
  {
    q: "Does 5.0 from 30+ reviews mean every student profits?",
    text: "The figure is a public Google rating and a lower bound on the number of reviews. It is not a count of trading results, and the academy does not promise a return.",
  },
  {
    q: "Can I share a story here?",
    text: "Yes, if you studied at the academy and you want the story published in your name. Use the contact page. The academy will not write the quote for you, and it will not publish a line that promises profits.",
  },
];

export default function SuccessStoriesPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ name: reviewsTitle, description: reviewsDescription, path: "/success-stories" })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/success-stories" },
        ])}
      />
      <JsonLd data={faqPageSchema(reviewFaq)} />
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
              How to read our Google reviews in Dubai, UAE.
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
                Google (not by us), and can&apos;t be edited or removed by Equity Fin Academy. Equity Fin Academy is
                rated 5.0 on Google from 30+ reviews. The Equity Global channel has 200+ YouTube reviews and comments.
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

        <section>
          <div className="container prose-block">
            <h2>How to read the Google listing</h2>
            <p>
              Equity Fin Academy is rated 5.0 on Google from 30+ reviews. Thirty is a lower bound, not a final total, so this page does not print a review count as if it were exact. The Equity Global channels carry 200+ YouTube reviews and comments. That figure is comments and reviews on YouTube. It is not a star rating, and it is not a trading result.
            </p>
            <p>
              A useful review names what the person studied: a group cohort or a private lesson, in Dubai or online. It does not need to claim a profit. If a review promises that every student makes money, treat that line with the same caution you would give any trading advert. The academy will not add that kind of sentence here.
            </p>
            <p>
              The instructor those students are writing about is <Link href="/about">Gopi Chandran</Link>. The two tracks they sat are on the <Link href="/courses">courses page</Link>. Students coming from Abu Dhabi can read the <Link href="/forex-course-abu-dhabi">Abu Dhabi course note</Link> before they compare the Google comments with the trip. The written lessons, which are separate from reviews, start on the <Link href="/blog">blog</Link>, including <Link href="/blog-currency-pairs-uae">currency pairs</Link>, <Link href="/blog-forex-economic-calendar-dubai">the economic calendar in Dubai</Link>, <Link href="/blog-forex-education-uae">forex education in the UAE</Link>, <Link href="/blog-forex-classes-near-me-dubai">forex classes near me in Dubai</Link>, and <Link href="/blog-smart-money-concepts">smart money concepts</Link>. The in-person offer those reviews describe is the <Link href="/forex-training-academy-dubai">forex training academy Dubai</Link> page. Study from another emirate is the <Link href="/forex-training-academy-uae">forex training academy UAE</Link> page.
            </p>

            <h2>What a published story on this site would include</h2>
            <p>
              This page stays empty of quotes until a student asks for one to be published. A story that belongs here has the student&apos;s name, permission to use it, and a description of the class they actually attended. It can mention a group seat or a private hour, Dubai or online. It should not invent a balance, a win rate, or a timeline to consistency.
            </p>
            <p>
              If that is you, <Link href="/contact">write via the contact page</Link> or WhatsApp <a href="https://wa.me/971559047030" target="_blank" rel="noopener noreferrer">+971 55 904 7030</a>. Say which track you took. The academy will not draft the paragraph and send it back for you to approve as if you wrote it.
            </p>
            <p>
              People comparing schools can also use <Link href="/why-choose-us">the enrolment checks</Link> and <Link href="/blog-choose-forex-academy-uae">how to choose a forex academy in the UAE</Link>. Those pages describe the class. This page is the route to third-party feedback.
            </p>

            <h2>Use the listing from anywhere in the United Arab Emirates</h2>
            <p>
              Equity Fin Academy teaches in Dubai, UAE, and online on Gulf Standard Time for students in every emirate. The Google listing is one public page for that academy. It is not a set of reviews sorted by city, and this website will not invent a split that Google does not show.
            </p>
            <p>
              Open the map link above and read several reviews, not the star on its own. A useful review names a format, a group class or a private lesson, and whether the person was in Dubai or online. A review that could describe any school in the world is harder to use. A review that promises profits is a reason to slow down. Thirty-plus is a lower bound on the count. It is not an exact total, and it is not a trading result.
            </p>
            <p>
              After the listing, read the class you would actually book. The two tracks are on <Link href="/courses">forex course tracks</Link>. Abu Dhabi readers should use the <Link href="/forex-course-abu-dhabi">Abu Dhabi course page</Link> for the drive or the online seat, which is not a review. Definitions such as <Link href="/blog-smart-money-concepts">smart money concepts</Link> live on the <Link href="/blog">blog</Link>. When you are ready to ask for a seat, use <Link href="/contact">contact</Link> and say your emirate. WhatsApp is +971 55 904 7030.
            </p>

            <h2>Five things worth noticing in a review</h2>
            <p>
              A star on its own is a thin fact. These are the checks that make the Google listing useful when you are comparing forex training in Dubai.
            </p>
            <ul className="guide-list">
              <li>The review names a format: a group cohort, a private lesson, or an online seat. A line that could describe any school is harder to use.</li>
              <li>It names what was studied, such as structure or a beginner track, rather than a profit figure.</li>
              <li>It is written in the reviewer&apos;s words. This website does not supply the sentence.</li>
              <li>A review that promises every student makes money is a reason to slow down, not a reason to enrol faster.</li>
              <li>Thirty-plus is a lower bound on the count. The page you are reading will not turn that into an exact total.</li>
            </ul>
            <p>
              YouTube is a separate pile. The Equity Global channels carry 200+ reviews and comments. That is not a star rating, and it is not the Google listing. Watch a lesson if you want to hear how a topic is explained. Read Google if you want comments from people who dealt with the academy.
            </p>
            <p>
              After the listing, the class itself is on <Link href="/courses">forex trading courses</Link>. If you want something written before you enquire, use <Link href="/blog-forex-trading-plan-uae">a trading plan and journal</Link> or <Link href="/blog-personal-forex-coaching-uae">a coaching plan</Link>. Then <Link href="/contact">contact the academy</Link> with the track and the city. Abu Dhabi readers should use the <Link href="/forex-course-abu-dhabi">Abu Dhabi course page</Link> for the drive-or-online choice, which is not a review.
            </p>
          </div>
        </section>

        <section className="tight">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">QUESTIONS</span>
              <h2>About reviews and stories</h2>
            </div>
            <div className="faq-list">
              {reviewFaq.map((item) => (
                <details key={item.q}>
                  <summary>
                    {item.q}
                    <span className="plus">+</span>
                  </summary>
                  <p>{item.text}</p>
                </details>
              ))}
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
            <RelatedTraining current="/success-stories" />
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
