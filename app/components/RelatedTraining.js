import Link from "next/link";

const LINKS = [
  { href: "/blog-forex-chart-timeframes-dubai", label: "Chart timeframes for a Dubai class" },
  { href: "/blog-mt5-order-ticket-dubai", label: "The MT5 order ticket" },
  { href: "/blog-live-forex-trading-session-dubai", label: "Live forex session in Dubai" },
  { href: "/blog-forex-classes-ajman-ras-al-khaimah", label: "Forex classes in the northern emirates" },
  { href: "/blog-how-to-start-forex-trading-dubai", label: "How to start forex trading in Dubai" },
  { href: "/blog-stock-market-course-dubai-first-weeks", label: "Stock market course: first weeks" },
  { href: "/forex-training-academy-dubai", label: "Forex training academy Dubai" },
  { href: "/forex-training-academy-uae", label: "Forex training academy UAE" },
  { href: "/forex-academy-in-dubai", label: "Forex academy in Dubai" },
  { href: "/best-forex-course-dubai", label: "Best forex course in Dubai" },
  { href: "/stock-market-course-dubai", label: "Stock market course in Dubai" },
  { href: "/forex-course-fees-dubai", label: "Forex course fees in Dubai" },
  { href: "/forex-mentorship-dubai", label: "Forex mentorship in Dubai" },
  { href: "/smc-ict-trading-course-dubai", label: "SMC and ICT course in Dubai" },
  { href: "/weekend-forex-classes-dubai", label: "Weekend forex classes in Dubai" },
  { href: "/forex-course-abu-dhabi", label: "Forex course in Abu Dhabi" },
  { href: "/forex-course-sharjah", label: "Forex course in Sharjah" },
  { href: "/online-forex-course-uae", label: "Online forex course in the UAE" },
  { href: "/courses", label: "Course tracks" },
  { href: "/private-group-forex-training-dubai", label: "Private vs group classes" },
  { href: "/blog", label: "Forex class notes" },
  { href: "/blog-investing-classes-near-me-dubai", label: "Investing classes near me in Dubai" },
  { href: "/blog-forex-leverage-margin-mt5-uae", label: "Leverage and margin on MT5" },
  { href: "/blog-forex-spreads-swaps-pip-value-uae", label: "Spreads, swaps, and pip value" },
  { href: "/blog-prepare-group-forex-class-dubai", label: "Prepare for a group class" },
  { href: "/blog-gold-xauusd-course-dubai", label: "Gold (XAUUSD) course in Dubai" },
  { href: "/blog-group-forex-classes-friends-dubai", label: "Group classes for friends" },
  { href: "/why-choose-us", label: "Enrolment checklist" },
  { href: "/blog-currency-pairs-uae", label: "Currency pairs for UAE learners" },
  { href: "/blog-forex-economic-calendar-dubai", label: "Economic calendar in Dubai" },
  { href: "/blog-forex-trading-courses-dubai", label: "How to read a course syllabus" },
  { href: "/blog-one-to-one-forex-classes-dubai", label: "Prepare for a one-to-one class" },
  { href: "/blog-choose-forex-academy-uae", label: "How to choose an academy" },
  { href: "/blog-forex-course-dubai-beginners", label: "Beginners: what to expect" },
  { href: "/blog-private-vs-group-forex-classes-dubai", label: "Which class format fits" },
  { href: "/blog-start-forex-trading-uae-mt5", label: "Start forex with MT5" },
  { href: "/blog-forex-market-hours-dubai", label: "Forex market hours in Dubai" },
  { href: "/blog-forex-classes-working-professionals-dubai", label: "Classes for working professionals" },
  { href: "/blog-demo-vs-live-mt5-uae", label: "Demo vs live on MT5" },
  { href: "/blog-smart-money-concepts", label: "Smart money concepts" },
  { href: "/blog-forex-classes-near-me-dubai", label: "Forex classes near me in Dubai" },
  { href: "/blog-forex-education-uae", label: "Forex education in the UAE" },
  { href: "/blog-personal-forex-coaching-uae", label: "Personal coaching plan" },
  { href: "/blog-forex-trading-plan-uae", label: "Trading plan and journal" },
  { href: "/success-stories", label: "Student reviews" },
  { href: "/contact", label: "Contact the academy" },
  { href: "/blog-support-and-resistance-forex", label: "Support and resistance" },
];

export default function RelatedTraining({ current }) {
  return (
    <div className="topics-row reveal">
      {LINKS.filter((link) => link.href !== current).map((link) => (
        <Link key={link.href} href={link.href} className="topic-chip">
          {link.label}
        </Link>
      ))}
    </div>
  );
}
