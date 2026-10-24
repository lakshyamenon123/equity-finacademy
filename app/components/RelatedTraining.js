import Link from "next/link";

const LINKS = [
  { href: "/forex-training-academy-dubai", label: "Forex training academy Dubai" },
  { href: "/forex-training-academy-uae", label: "Forex training academy UAE" },
  { href: "/forex-academy-in-dubai", label: "Forex academy in Dubai" },
  { href: "/best-forex-course-dubai", label: "Best forex course in Dubai" },
  { href: "/forex-course-abu-dhabi", label: "Forex course in Abu Dhabi" },
  { href: "/forex-course-sharjah", label: "Forex course in Sharjah" },
  { href: "/online-forex-course-uae", label: "Online forex course in the UAE" },
  { href: "/courses", label: "Course tracks" },
  { href: "/private-group-forex-training-dubai", label: "Private vs group classes" },
  { href: "/blog-choose-forex-academy-uae", label: "How to choose an academy" },
  { href: "/blog-forex-course-dubai-beginners", label: "Beginners: what to expect" },
  { href: "/blog-private-vs-group-forex-classes-dubai", label: "Which class format fits" },
  { href: "/blog-start-forex-trading-uae-mt5", label: "Start forex with MT5" },
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
