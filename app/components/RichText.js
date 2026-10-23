import Link from "next/link";

export function partsToText(parts) {
  return parts.map((part) => (typeof part === "string" ? part : part.label)).join("");
}

export default function RichText({ parts }) {
  return parts.map((part, index) => {
    if (typeof part === "string") return <span key={index}>{part}</span>;
    return (
      <Link key={index} href={part.href}>
        {part.label}
      </Link>
    );
  });
}
