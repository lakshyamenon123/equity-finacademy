"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import OpenChatLink from "./OpenChatLink";

function current(active, key) {
  return active === key ? "page" : undefined;
}

export default function Header({ active }) {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  return (
    <header className={`site-header${navOpen ? " nav-open" : ""}`}>
      <div className="container nav">
        <Link href="/" className="brand">
          <strong>EQUITY</strong> FIN ACADEMY
        </Link>

        <nav className="nav-links" aria-label="Primary">
          <Link href="/" aria-current={current(active, "home")}>
            Home
          </Link>
          <div className="has-dropdown">
            <Link href="/about" aria-current={current(active, "about")}>
              About{" "}
              <svg className="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </Link>
            <div className="dropdown-menu">
              <Link href="/about" aria-current={current(active, "about")}>
                About Us
              </Link>
              <Link href="/why-choose-us" aria-current={current(active, "why-choose-us")}>
                Why Choose Us
              </Link>
            </div>
          </div>
          <div className="has-dropdown">
            <Link href="/courses" aria-current={current(active, "courses")}>
              Courses{" "}
              <svg className="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </Link>
            <div className="dropdown-menu">
              <Link href="/courses" aria-current={current(active, "courses")}>
                Forex Courses
              </Link>
              <Link href="/pricing" aria-current={current(active, "pricing")}>
                Pricing
              </Link>
              <Link href="/private-group-forex-training-dubai" aria-current={current(active, "private-group")}>
                Private vs Group Classes
              </Link>
              <Link href="/best-forex-course-dubai" aria-current={current(active, "best-dubai")}>
                Best Forex Course in Dubai
              </Link>
              <Link href="/forex-course-abu-dhabi" aria-current={current(active, "abu-dhabi")}>
                Forex Course in Abu Dhabi
              </Link>
              <Link href="/forex-course-sharjah" aria-current={current(active, "sharjah")}>
                Forex Course in Sharjah
              </Link>
              <Link href="/online-forex-course-uae" aria-current={current(active, "online-uae")}>
                Online Forex Course UAE
              </Link>
            </div>
          </div>
          <Link href="/forex-academy-in-dubai" aria-current={current(active, "forex-dubai")}>
            Forex in Dubai
          </Link>
          <Link href="/blog" aria-current={current(active, "blog")}>
            Blog
          </Link>
          <Link href="/success-stories" aria-current={current(active, "reviews")}>
            Reviews
          </Link>
          <Link href="/faq" aria-current={current(active, "faq")}>
            FAQ
          </Link>
          <Link href="/contact" aria-current={current(active, "contact")}>
            Contact
          </Link>
        </nav>

        <div className="nav-actions">
          <a href="tel:+971559047030" className="btn btn-outline">
            Call
          </a>
          <OpenChatLink className="btn btn-primary">Book a Seat</OpenChatLink>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={navOpen}
            onClick={() => setNavOpen((open) => !open)}
          >
            <svg className="icon-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
            <svg className="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          </button>
        </div>

        <nav className="nav-mobile" aria-label="Mobile" onClick={() => setNavOpen(false)}>
          <Link href="/" aria-current={current(active, "home")}>
            Home
          </Link>
          <div className="nav-mobile-label">About</div>
          <Link href="/about" aria-current={current(active, "about")}>
            About Us
          </Link>
          <Link href="/why-choose-us" aria-current={current(active, "why-choose-us")}>
            Why Choose Us
          </Link>
          <div className="nav-mobile-label">Courses</div>
          <Link href="/courses" aria-current={current(active, "courses")}>
            Forex Courses
          </Link>
          <Link href="/pricing" aria-current={current(active, "pricing")}>
            Pricing
          </Link>
          <Link href="/private-group-forex-training-dubai" aria-current={current(active, "private-group")}>
            Private vs Group Classes
          </Link>
          <Link href="/best-forex-course-dubai" aria-current={current(active, "best-dubai")}>
            Best Forex Course in Dubai
          </Link>
          <Link href="/forex-course-abu-dhabi" aria-current={current(active, "abu-dhabi")}>
            Forex Course in Abu Dhabi
          </Link>
          <Link href="/forex-course-sharjah" aria-current={current(active, "sharjah")}>
            Forex Course in Sharjah
          </Link>
          <Link href="/online-forex-course-uae" aria-current={current(active, "online-uae")}>
            Online Forex Course UAE
          </Link>
          <Link href="/forex-academy-in-dubai" aria-current={current(active, "forex-dubai")}>
            Forex in Dubai
          </Link>
          <div className="nav-mobile-label">More</div>
          <Link href="/blog" aria-current={current(active, "blog")}>
            Blog
          </Link>
          <Link href="/success-stories" aria-current={current(active, "reviews")}>
            Reviews
          </Link>
          <Link href="/faq" aria-current={current(active, "faq")}>
            FAQ
          </Link>
          <Link href="/contact" aria-current={current(active, "contact")}>
            Contact
          </Link>
          <div className="cta-row">
            <a href="tel:+971559047030" className="btn btn-outline">
              Call +971 55 904 7030
            </a>
            <OpenChatLink className="btn btn-primary">Book a Seat</OpenChatLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
