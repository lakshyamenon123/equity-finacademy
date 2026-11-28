"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { demoPromptSeen, markDemoPromptSeen } from "../lib/demoPrompt";
import { pageWhatsappHref } from "../lib/whatsapp";

const SKIP_PATHS = ["/free-demo", "/privacy", "/terms", "/free-trading-plan/print"];
const FORM_PAGES = ["/", "/courses", "/forex-academy-in-dubai"];

// Once per visitor, after a real scroll or a desktop exit toward the top of
// the window. Easy to close. It does not cover the free-demo form itself.
export default function ExitOffer() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const closeRef = useRef(null);

  useEffect(() => {
    setOpen(false);
    if (SKIP_PATHS.some((p) => pathname === p || (p !== "/" && pathname.startsWith(`${p}/`)))) return undefined;
    if (demoPromptSeen()) return undefined;

    let shown = false;
    const show = () => {
      if (shown || demoPromptSeen()) return;
      shown = true;
      markDemoPromptSeen();
      setOpen(true);
    };

    const touch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    const cleanups = [];
    let armed = false;

    const onScroll = () => {
      const y = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const deep = height > 0 && y > Math.max(640, height * 0.45);
      if (deep) show();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(() => window.removeEventListener("scroll", onScroll));

    if (!touch) {
      const arm = () => {
        armed = true;
      };
      const onLeave = (event) => {
        if (!armed) return;
        // On pages that already show the form, wait until the visitor has moved past it.
        if (FORM_PAGES.includes(pathname) && window.scrollY < 480) return;
        if (!event.relatedTarget && event.clientY <= 8) show();
      };
      document.documentElement.addEventListener("mouseenter", arm);
      document.documentElement.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        document.documentElement.removeEventListener("mouseenter", arm);
        document.documentElement.removeEventListener("mouseleave", onLeave);
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    closeRef.current?.focus();
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div className="exit-offer-backdrop" onClick={() => setOpen(false)}>
      <div
        className="exit-offer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-offer-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button ref={closeRef} type="button" className="exit-offer-close" aria-label="Close" onClick={() => setOpen(false)}>
          ×
        </button>
        <span className="eyebrow">FREE DEMO CLASS</span>
        <h2 id="exit-offer-title">A private hour, if you would like one</h2>
        <p>
          Book a free demo class with mentor Gopi Chandran. Private one-to-one or a small group, in Dubai or online.
          Courses from AED 1,500.
        </p>
        <div className="cta-row">
          <Link href="/free-demo" className="btn btn-primary" onClick={() => setOpen(false)}>
            Book a free demo class
          </Link>
          <a
            href={pageWhatsappHref(pathname)}
            className="btn btn-outline"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Chat on WhatsApp
          </a>
        </div>
        <button type="button" className="exit-offer-dismiss" onClick={() => setOpen(false)}>
          No thanks
        </button>
      </div>
    </div>
  );
}
