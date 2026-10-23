import { partsToText } from "../components/RichText";

const link = (href, label) => ({ href, label });

export const faqCategories = [
  {
    id: "getting-started",
    title: "Getting Started With Forex",
    items: [
      {
        q: "How do I start Forex learning?",
        parts: [
          "Start with the vocabulary — currency pairs, pips, lots, leverage — then learn to read candlestick charts, then market structure, then risk management, in that order. Our ",
          link("/blog", "blog"),
          " covers each of these step by step, and the Basic to Intermediate course builds on it with live instruction.",
        ],
      },
      {
        q: "Is it hard to learn Forex trading?",
        parts: [
          "The core concepts — pairs, charts, structure — aren't especially difficult to understand. What's genuinely hard is the discipline: managing risk consistently and staying calm when a trade moves against you. Most beginners underestimate the psychological side and overestimate the technical side.",
        ],
      },
      {
        q: "How long does it take to learn Forex?",
        parts: [
          "Understanding the basics can take a few weeks of focused study. Building consistent, disciplined execution typically takes months of deliberate practice — not days. A structured course compresses the learning curve, but doesn't eliminate the practice time needed.",
        ],
      },
      {
        q: "How do I start trading Forex by myself?",
        parts: [
          "Learn the fundamentals, practice on a demo account, then trade small size on a live account through a regulated broker while keeping a trading journal. Self-teaching is possible but slower and more error-prone than structured instruction.",
        ],
      },
      {
        q: "Should I start learning Forex trading?",
        parts: [
          "If you're genuinely interested in markets, comfortable with real risk of financial loss, and willing to treat it as a skill built over months, it's a reasonable thing to learn. If you're looking for a fast or guaranteed way to make money, that's the wrong starting assumption regardless of who's teaching it.",
        ],
      },
      {
        q: "How do beginners learn Forex trading?",
        parts: [
          "Most successful beginners combine structured education — a course or guide that sequences topics correctly — with hands-on practice and honest review of their own trades in a journal.",
        ],
      },
      {
        q: "What do I need to start learning Forex trading?",
        parts: [
          "Just time and a willingness to learn the vocabulary and charts first. You don't need trading capital to start learning — that only becomes relevant once you move to practice trading on a demo or live account.",
        ],
      },
      {
        q: "Can I learn Forex trading for free?",
        parts: [
          "Yes, to a point. Our free ",
          link("/blog", "blog"),
          " can teach the fundamentals. Structured, live instruction with feedback typically accelerates progress beyond what free content alone can offer.",
        ],
      },
      {
        q: "What is the best way to learn Forex trading?",
        parts: [
          "A sequenced approach: vocabulary, chart reading, market structure, risk management, then strategy — combined with practice and review. The order matters more than the specific resource you use.",
        ],
      },
      {
        q: "Do I need a lot of money to start trading Forex?",
        parts: [
          "No — many regulated brokers allow small account sizes, and learning itself requires no trading capital at all. Whatever capital you eventually trade with should be money you can genuinely afford to lose.",
        ],
      },
    ],
  },
  {
    id: "about-us",
    title: "About Equity Fin Academy",
    items: [
      {
        q: "Is Equity Fin Academy good for beginners?",
        parts: [
          "Yes. The Basic to Intermediate track is built specifically for traders with no prior experience, starting from forex fundamentals before moving into structure and strategy.",
        ],
      },
      {
        q: "Are online Forex trading classes worth it?",
        parts: [
          "A structured course from a credible instructor can meaningfully shorten the learning curve. Quality varies enormously across providers — check the instructor's real background and whether the curriculum is genuinely sequenced, not a random pile of videos.",
        ],
      },
      {
        q: "What makes Equity Fin Academy unique?",
        parts: [
          "An instructor with a background inside institutional trading desks, practical sessions on an SCA-regulated broker, a single-market forex focus taught in depth, and an honest approach with no guaranteed-profit promises. See ",
          link("/why-choose-us", "Why Choose Us"),
          " for the full comparison.",
        ],
      },
      {
        q: "Who teaches at Equity Fin Academy?",
        parts: [
          "Gopi Chandran, founder and lead instructor — MBA in Finance, full-time forex trader since 2016, with a background inside institutional trading desks. Read his full profile on the ",
          link("/about", "About Us"),
          " page.",
        ],
      },
      {
        q: "Where is Equity Fin Academy located?",
        parts: [
          "M Floor, Arzoo Building, Al Qusais, Dubai, United Arab Emirates. See the ",
          link("/contact", "Contact page"),
          " for the map and directions.",
        ],
      },
    ],
  },
  {
    id: "courses",
    title: "Courses & Enrolment",
    items: [
      {
        q: "What forex courses does Equity Fin Academy offer?",
        parts: [
          "Two tracks: Basic to Intermediate (fundamentals, candlesticks, market structure) and Advanced Institutional Strategies (order flow, market profile, SMC, risk psychology). See the full curriculum on the ",
          link("/courses", "Courses"),
          " page.",
        ],
      },
      {
        q: "Which course should I start with?",
        parts: [
          "If you're new to trading, start with Basic to Intermediate. If you already understand fundamentals and structure, Advanced Institutional Strategies goes straight into order flow and institutional tools.",
        ],
      },
      {
        q: "Do I need trading experience to join?",
        parts: [
          "No — the Basic to Intermediate course assumes no prior experience. Advanced Institutional Strategies assumes you already understand forex fundamentals and basic market structure.",
        ],
      },
      {
        q: "What is included in the Advanced Institutional Strategies course?",
        parts: [
          "Fundamental analysis, market structure, order flow analysis, institutional tools, market profile analysis, volume with SMC, Fibonacci retracement, risk and psychology management, bot trading concepts, and lifetime WhatsApp support. Full list on the ",
          link("/courses", "Courses"),
          " page.",
        ],
      },
      {
        q: "Is there ongoing support after the course ends?",
        parts: [
          "Advanced Institutional Strategies students get lifetime access to the instructor via WhatsApp for questions after the course ends.",
        ],
      },
      {
        q: "How much does the course cost?",
        parts: [
          "Fees vary by cohort, so we don't publish a number that could go stale. See what's included in each track on our ",
          link("/pricing", "Pricing"),
          " page, then call or message us for current fees.",
        ],
      },
    ],
  },
  {
    id: "basics",
    title: "Forex Trading Basics",
    items: [
      {
        q: "What is forex trading?",
        parts: [
          "Forex trading is the buying and selling of one currency against another, aiming to profit from changes in their relative value. It's the largest financial market in the world by trading volume.",
        ],
      },
      {
        q: "What is a currency pair?",
        parts: [
          'Two currencies quoted against each other, such as EUR/USD. The first is the "base" currency; the second is the "quote" currency.',
        ],
      },
      {
        q: "What is a pip in Forex trading?",
        parts: [
          "The smallest standard unit of price movement in a currency pair — typically the fourth decimal place for most pairs.",
        ],
      },
      {
        q: "What is leverage in Forex trading?",
        parts: [
          "Borrowed capital that lets a trader control a position larger than their account balance. It magnifies both potential gains and potential losses, so it needs to be used carefully.",
        ],
      },
      {
        q: "What is a candlestick pattern?",
        parts: [
          "A chart formation made up of one or more candlesticks (each showing open, high, low and close price) used to read short-term price action and sentiment. See our ",
          link("/blog-candlestick-patterns", "candlestick guide"),
          " for more.",
        ],
      },
      {
        q: "What is market structure in trading?",
        parts: [
          "The pattern formed by a market's swing highs and lows, used to judge whether price is trending, ranging, or potentially reversing. Read our full explainer on ",
          link("/blog-market-structure", "market structure"),
          ".",
        ],
      },
      {
        q: "What are smart money concepts (SMC)?",
        parts: [
          "A framework for analysing price based on liquidity, imbalance and order placement, aiming to read where larger market participants may be positioned. See our full ",
          link("/blog-smart-money-concepts", "SMC explainer"),
          ".",
        ],
      },
      {
        q: "Can you make a living trading Forex?",
        parts: [
          "Some experienced, disciplined traders do generate meaningful income from forex trading, but it's not typical, and it's not guaranteed for anyone — most traders lose money, especially early on. Treat any claim otherwise with scepticism, including from us.",
        ],
      },
    ],
  },
  {
    id: "risk",
    title: "Risk & Safety",
    items: [
      {
        q: "Is Forex trading risky?",
        parts: [
          "Yes. Forex trading carries a significant risk of loss and is not suitable for every investor. Leverage in particular can magnify losses quickly if risk isn't managed properly.",
        ],
      },
      {
        q: "Do I need a regulated broker to trade Forex?",
        parts: [
          "You should only ever trade through a broker regulated by a recognised financial authority. Regulation doesn't eliminate trading risk, but it provides a baseline of oversight and client protection that unregulated platforms don't offer.",
        ],
      },
      {
        q: "Can I lose more money than I deposit in Forex trading?",
        parts: [
          "Depending on your broker, account type and leverage used, this is possible in some circumstances. Understand your broker's specific policies (such as negative balance protection) before trading live.",
        ],
      },
      {
        q: "Does Equity Fin Academy guarantee profits?",
        parts: [
          "No, and you should be sceptical of anyone who does. We teach process, structure and risk management. Past educational outcomes and student results do not guarantee future performance.",
        ],
      },
      {
        q: "Is Forex trading gambling?",
        parts: [
          "Trading and gambling both involve risking capital on an uncertain outcome, but disciplined trading applies analysis, risk management and a repeatable process — closer to a probability-based skill than pure chance. Trading without any of those, however, can function a lot like gambling.",
        ],
      },
    ],
  },
];

export const faqItems = faqCategories.flatMap((category) =>
  category.items.map((item) => ({
    q: item.q,
    text: partsToText(item.parts),
  })),
);

export const faqCount = faqItems.length;
