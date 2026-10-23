import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cta">
          <div>
            <p className="footer-cta-kicker">Al Qusais, Dubai · Open 24/7</p>
            <p className="footer-cta-title">Talk to the academy about a group cohort or a private lesson.</p>
          </div>
          <div className="cta-row">
            <a href="https://wa.me/971567188995" className="btn btn-light" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a href="tel:+971567188995" className="btn btn-ghost">
              +971 56 718 8995
            </a>
            <Link href="/contact" className="btn btn-ghost">
              Enquire
            </Link>
          </div>
        </div>

        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="brand">
              <strong>EQUITY</strong> FIN ACADEMY
            </Link>
            <p>Forex training in Al Qusais, Dubai. Live group classes, private one-to-one lessons, and live trading sessions.</p>
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
                href="https://www.youtube.com/channel/UCTjkKXSStHPPA64qCCSPTOg"
                aria-label="Equity Global on YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="6" width="18" height="12" rx="3" />
                  <path d="M10.5 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
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
              <Link href="/private-group-forex-training-dubai">Private vs Group Classes</Link>
              <Link href="/best-forex-course-dubai">Best Forex Course in Dubai</Link>
              <Link href="/forex-course-abu-dhabi">Forex Course in Abu Dhabi</Link>
              <Link href="/forex-course-sharjah">Forex Course in Sharjah</Link>
              <Link href="/online-forex-course-uae">Online Forex Course UAE</Link>
            </div>
            <div className="footer-col">
              <h3>Learn</h3>
              <Link href="/blog">Blog</Link>
              <Link href="/blog-choose-forex-academy-uae">Choose a Forex Academy</Link>
              <Link href="/blog-forex-course-dubai-beginners">Beginner Course Guide</Link>
              <Link href="/faq">FAQ</Link>
            </div>
            <div className="footer-col">
              <h3>Company</h3>
              <Link href="/success-stories">Reviews</Link>
              <Link href="/contact">Contact Us</Link>
              <Link href="/privacy">Privacy</Link>
            </div>
            <div className="footer-col">
              <h3>Get in Touch</h3>
              <span>M Floor, Arzoo Building, Al Qusais, Dubai</span>
              <a href="tel:+971567188995">+971 56 718 8995</a>
            </div>
          </div>
        </div>

        <div className="copyright">© {new Date().getFullYear()} Equity Fin Academy, Al Qusais, Dubai. All rights reserved.</div>
      </div>
    </footer>
  );
}
