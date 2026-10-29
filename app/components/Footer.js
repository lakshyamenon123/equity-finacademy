import Link from "next/link";
import OpenChatLink from "./OpenChatLink";
import { EQUITY_GLOBAL, EQUITY_GLOBAL_ENGLISH } from "../lib/videos";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cta">
          <div>
            <p className="footer-cta-kicker">Dubai, UAE · Open 24/7</p>
            <p className="footer-cta-title">Talk to the academy about a group cohort or a private lesson.</p>
          </div>
          <div className="cta-row">
            <a href="https://wa.me/971559047030" className="btn btn-light" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a href="tel:+971559047030" className="btn btn-ghost">
              +971 55 904 7030
            </a>
            <OpenChatLink className="btn btn-ghost">Enquire</OpenChatLink>
          </div>
        </div>

        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="brand">
              <strong>EQUITY</strong> FIN ACADEMY
            </Link>
            <p>Forex training in Dubai, UAE, and online across the UAE. Group classes, private one-to-one lessons, and live trading sessions.</p>
            <div className="social-row" style={{ marginTop: 16 }}>
              <a
                href="https://www.instagram.com/equity_global/"
                aria-label="Equity Global on Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="4" y="4" width="16" height="16" rx="4" />
                  <circle cx="12" cy="12" r="3.4" />
                  <circle cx="16.6" cy="7.4" r="0.6" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href={EQUITY_GLOBAL_ENGLISH.url}
                aria-label="Equity Global English on YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="6" width="18" height="12" rx="3" />
                  <path d="M10.5 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href={EQUITY_GLOBAL.url}
                aria-label="Equity Global on YouTube, Malayalam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="6" width="18" height="12" rx="3" />
                  <path d="M10.5 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
            <p className="footer-yt">
              <a href={EQUITY_GLOBAL_ENGLISH.url} target="_blank" rel="noopener noreferrer">
                YouTube · English
              </a>
              <a href={EQUITY_GLOBAL.url} target="_blank" rel="noopener noreferrer">
                YouTube · Malayalam
              </a>
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h3>Explore</h3>
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/why-choose-us">Why Choose Us</Link>
              <Link href="/courses">Forex Courses</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/forex-academy-in-dubai">Forex in Dubai</Link>
              <Link href="/forex-training-academy-dubai">Forex training academy Dubai</Link>
              <Link href="/forex-training-academy-uae">Forex training academy UAE</Link>
              <Link href="/private-group-forex-training-dubai">Private vs Group Classes</Link>
              <Link href="/best-forex-course-dubai">Best Forex Course in Dubai</Link>
              <Link href="/forex-course-abu-dhabi">Forex Course in Abu Dhabi</Link>
              <Link href="/forex-course-sharjah">Forex Course in Sharjah</Link>
              <Link href="/online-forex-course-uae">Online Forex Course UAE</Link>
              <Link href="/stock-market-course-dubai">Stock Market Course Dubai</Link>
              <Link href="/forex-course-fees-dubai">Forex Course Fees Dubai</Link>
              <Link href="/forex-mentorship-dubai">Forex Mentorship Dubai</Link>
              <Link href="/smc-ict-trading-course-dubai">SMC and ICT Course</Link>
              <Link href="/weekend-forex-classes-dubai">Weekend Forex Classes</Link>
            </div>
            <div className="footer-col">
              <h3>Learn</h3>
              <Link href="/blog">Blog</Link>
              <Link href="/blog-forex-classes-near-me-dubai">Forex Classes Near Me in Dubai</Link>
              <Link href="/blog-forex-education-uae">Forex Education in the UAE</Link>
              <Link href="/blog-personal-forex-coaching-uae">Personal Coaching Plan</Link>
              <Link href="/blog-forex-trading-plan-uae">Trading Plan and Journal</Link>
              <Link href="/blog-forex-classes-working-professionals-dubai">Classes for Professionals</Link>
              <Link href="/blog-demo-vs-live-mt5-uae">Demo vs Live on MT5</Link>
              <Link href="/blog-smart-money-concepts">Smart Money Concepts</Link>
              <Link href="/blog-forex-trading-courses-dubai">Forex Course Syllabus</Link>
              <Link href="/blog-one-to-one-forex-classes-dubai">One-to-One Class Prep</Link>
              <Link href="/blog-private-vs-group-forex-classes-dubai">Private vs Group Classes</Link>
              <Link href="/blog-start-forex-trading-uae-mt5">Start Forex with MT5</Link>
              <Link href="/blog-choose-forex-academy-uae">Choose a Forex Academy</Link>
              <Link href="/blog-forex-course-dubai-beginners">Beginner Course Guide</Link>
              <Link href="/blog-forex-market-hours-dubai">Forex Market Hours in Dubai</Link>
              <Link href="/blog-support-and-resistance-forex">Support and Resistance</Link>
              <Link href="/faq">FAQ</Link>
            </div>
            <div className="footer-col">
              <h3>Company</h3>
              <Link href="/success-stories">Reviews</Link>
              <Link href="/contact">Contact Us</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>
            <div className="footer-col">
              <h3>Get in Touch</h3>
              <span>Dubai, UAE</span>
              <a href="tel:+971559047030">+971 55 904 7030</a>
            </div>
          </div>
        </div>

        <div className="copyright">© {new Date().getFullYear()} Equity Fin Academy, Dubai, UAE. All rights reserved.</div>
      </div>
    </footer>
  );
}
