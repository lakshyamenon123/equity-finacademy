"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PageEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealEls = document.querySelectorAll(".reveal");

    if (reducedMotion || !revealEls.length) {
      revealEls.forEach((el) => el.classList.add("reveal-visible"));
      return;
    }

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
      toReveal.forEach((el) => el.classList.add("reveal-visible"));
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
