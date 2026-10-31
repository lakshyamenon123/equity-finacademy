import Link from "next/link";

export default function AuthorByline({ detail }) {
  return (
    <div className="meta">
      By{" "}
      <Link href="/gopi-chandran" rel="author">
        Gopi Chandran, Forex Mentor, Dubai
      </Link>
      {detail ? ` · ${detail}` : ""}
    </div>
  );
}
