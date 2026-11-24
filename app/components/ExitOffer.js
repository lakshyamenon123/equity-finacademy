"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { STRATEGY_CALL_WHATSAPP } from "../lib/leadOffers";

const SEEN_KEY = "efa-exit-offer-seen";
const SKIP_PATHS = ["/free-demo", "/free-trading-plan", "/executive-market-briefing", "/contact", "/privacy", "/terms"];
const MOBILE_DELAY_MS = 45_000;

function alreadySeen() {
  try {
    return window.sessionStorage.getItem(SEEN_KEY) === "1";
  } catch {
    return false;
  }
}

function markSeen() {
  try {
    window.sessionStorage.setItem(SEEN_KEY, "1");
  } catch {}
}

// Shown at most once per browser session. Desktop: the pointer leaves
// through the top of the window. Touch screens: a clear scroll back up after
// reading part of the page, or 45 seconds on the page.
export default function ExitOffer() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const closeRef = useRef(null);

  useEffect(() => {
    if (SKIP_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`))) return undefined;
    if (alreadySeen()) return undefined;

    let shown = false;
    const show = () => {
      if (shown || alreadySeen()) return;
      shown = true;
      markSeen();
      setOpen(true);
    };

    const touch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    const cleanups = [];

    if (!touch) {
      const onLeave = (event) => {
        if (!event.relatedTarget && event.clientY <= 0) show();
      };
      document.documentElement.addEventListener("mouseleave", onLeave);
      cleanups.push(() => document.documentElement.removeEventListener("mouseleave", onLeave));
    } else {
      let maxY = window.scrollY;
      const onScroll = () => {
        const y = window.scrollY;
        if (y > maxY) maxY = y;
        const readEnough = maxY > window.innerHeight * 1.2;
        if (readEnough && maxY - y > window.innerHeight * 0.6) show();
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      cleanups.push(() => window.removeEventListener("scroll", onScroll));
      const timer = window.setTimeout(show, MOBILE_DELAY_MS);
      cleanups.push(() => window.clearTimeout(timer));
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
        <span className="eyebrow">BEFORE YOU GO</span>
        <h2 id="exit-offer-title">Free 20-minute strategy call</h2>
        <p>
          Talk through your goals, your week and the right format, private one-to-one or small group, with mentor Gopi
          Chandran. In person in Dubai or online.
        </p>
        <div className="cta-row">
          <Link href="/free-demo" className="btn btn-primary" onClick={() => setOpen(false)}>
            Choose a time
          </Link>
          <a href={STRATEGY_CALL_WHATSAPP} className="btn btn-outline" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
            WhatsApp +971 55 904 7030
          </a>
        </div>
        <button type="button" className="exit-offer-dismiss" onClick={() => setOpen(false)}>
          No thanks
        </button>
      </div>
    </div>
  );
}
