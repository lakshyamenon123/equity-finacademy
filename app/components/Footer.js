import Link from "next/link";

export default function Footer({ disclaimer }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="brand">
              <strong>EQUITY</strong> FIN ACADEMY
            </Link>
            <p>Premium forex trading education, based in Al Qusais, Dubai.</p>
            <div className="social-row" style={{ marginTop: 16 }}>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2.5l.5-3H14V9c0-.3.2-.5.5-.5H14z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="4" y="4" width="16" height="16" rx="4" />
                  <circle cx="12" cy="12" r="3.4" />
                  <circle cx="16.6" cy="7.4" r="0.6" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
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
            </div>
            <div className="footer-col">
              <h3>Learn</h3>
              <Link href="/blog">Blog</Link>
              <Link href="/faq">FAQ</Link>
            </div>
            <div className="footer-col">
              <h3>Company</h3>
              <Link href="/success-stories">Reviews</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
            <div className="footer-col">
              <h3>Get in Touch</h3>
              <span>M Floor, Arzoo Building, Al Qusais, Dubai</span>
              <a href="tel:+971567188995">+971 56 718 8995</a>
            </div>
          </div>
        </div>

        <div className="disclaimer">
          <strong>Risk disclaimer:</strong>{" "}
          {disclaimer || (
            <>
              Trading forex carries a significant risk of loss and is not suitable for every investor. Past
              educational outcomes and student results do not guarantee future performance. Always trade through a
              regulated broker and only risk capital you can afford to lose. Equity Fin Academy provides education,
              not personalised financial advice.
            </>
          )}
        </div>
        <div className="copyright">© {new Date().getFullYear()} Equity Fin Academy, Al Qusais, Dubai. All rights reserved.</div>
      </div>
    </footer>
  );
}
