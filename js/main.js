(function () {
  "use strict";

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- mobile nav ---------- */
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  if (header && toggle) {
    toggle.addEventListener("click", function () {
      var isOpen = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    header.querySelectorAll(".nav-mobile a").forEach(function (link) {
      link.addEventListener("click", function () {
        header.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- reveal-on-scroll + counters ----------
     A plain scroll/resize check (rAF-throttled) rather than
     IntersectionObserver: a large single scroll jump (Page Down,
     scrollbar drag, "End" key) can carry an element from below the
     viewport to above it between two IO callbacks, permanently
     skipping the reveal. Checking bounding rects on every scroll
     frame guarantees nothing gets stuck hidden. */
  var revealEls = document.querySelectorAll(".reveal");
  var counters = document.querySelectorAll("[data-counter]");

  revealEls.forEach(function (el, i) {
    el.style.setProperty("--reveal-delay", Math.min(i % 4, 3) * 0.09 + "s");
  });

  function animateCounter(el) {
    var target = parseInt(el.getAttribute("data-counter"), 10) || 0;
    var suffix = el.getAttribute("data-suffix") || "";
    if (reducedMotion) {
      el.textContent = target + suffix;
      return;
    }
    // setInterval/Date.now rather than requestAnimationFrame: rAF can be
    // throttled or paused (backgrounded tab, power-saving mode, some
    // embedded contexts), which would leave the counter stuck at 0.
    var duration = 1100;
    var start = Date.now();
    var timer = setInterval(function () {
      var progress = Math.min((Date.now() - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress >= 1) clearInterval(timer);
    }, 30);
  }

  if (reducedMotion) {
    revealEls.forEach(function (el) { el.classList.add("reveal-visible"); });
    counters.forEach(animateCounter);
  } else if (revealEls.length || counters.length) {
    var pending = false;
    var check = function () {
      pending = false;
      var vh = window.innerHeight;
      // Read all geometry first, then write all class/text changes after —
      // interleaving reads and writes per-element forces a synchronous
      // layout recalculation on every iteration (layout thrashing).
      var toReveal = [];
      revealEls.forEach(function (el) {
        if (!el.classList.contains("reveal-visible") && el.getBoundingClientRect().top < vh - 40) {
          toReveal.push(el);
        }
      });
      var toCount = [];
      counters.forEach(function (el) {
        if (!el.dataset.counted && el.getBoundingClientRect().top < vh - 40) {
          toCount.push(el);
        }
      });
      toReveal.forEach(function (el) { el.classList.add("reveal-visible"); });
      toCount.forEach(function (el) {
        el.dataset.counted = "1";
        animateCounter(el);
      });
    };
    var onScroll = function () {
      if (pending) return;
      pending = true;
      setTimeout(check, 50);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    check();
  }

  /* ---------- footer year ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
