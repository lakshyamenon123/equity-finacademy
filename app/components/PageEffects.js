"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function animateCounter(el, reducedMotion) {
  const target = parseInt(el.getAttribute("data-counter"), 10) || 0;
  const suffix = el.getAttribute("data-suffix") || "";
  if (reducedMotion) {
    el.textContent = target + suffix;
    return;
  }
  const duration = 1100;
  const start = Date.now();
  const timer = setInterval(() => {
    const progress = Math.min((Date.now() - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target) + suffix;
    if (progress >= 1) clearInterval(timer);
  }, 30);
}

export default function PageEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealEls = document.querySelectorAll(".reveal");
    const counters = document.querySelectorAll("[data-counter]");

    revealEls.forEach((el, i) => {
      el.style.setProperty("--reveal-delay", Math.min(i % 4, 3) * 0.09 + "s");
    });

    if (reducedMotion) {
      revealEls.forEach((el) => el.classList.add("reveal-visible"));
      counters.forEach((el) => animateCounter(el, true));
      return;
    }

    if (!revealEls.length && !counters.length) return;

    let pending = false;
    const check = () => {
      pending = false;
      const vh = window.innerHeight;
      const toReveal = [];
      revealEls.forEach((el) => {
        if (!el.classList.contains("reveal-visible") && el.getBoundingClientRect().top < vh - 40) {
          toReveal.push(el);
        }
      });
      const toCount = [];
      counters.forEach((el) => {
        if (!el.dataset.counted && el.getBoundingClientRect().top < vh - 40) {
          toCount.push(el);
        }
      });
      toReveal.forEach((el) => el.classList.add("reveal-visible"));
      toCount.forEach((el) => {
        el.dataset.counted = "1";
        animateCounter(el, false);
      });
    };

    const onScroll = () => {
      if (pending) return;
      pending = true;
      setTimeout(check, 50);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    check();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  return null;
}
