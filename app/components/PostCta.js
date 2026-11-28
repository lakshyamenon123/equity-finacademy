import Link from "next/link";
import { whatsappHref } from "../lib/whatsapp";

export default function PostCta({ path = "/blog", placement = "end" }) {
  const href = whatsappHref(
    `Hi, I was reading ${path} on Equity Fin Academy and would like to book a free demo class.`
  );
  const mid = placement === "mid";
  return (
    <aside className={mid ? "post-cta post-cta-mid" : "post-cta"} aria-label="Book a free demo class">
      <p className="post-cta-kicker">Free demo class</p>
      <h2>{mid ? "See how a private class is taught" : "Book a free demo class"}</h2>
      <p>
        Private one-to-one or a small group, in Dubai or online. Courses from AED 1,500. Book a free demo class, or chat
        on WhatsApp.
      </p>
      <div className="cta-row">
        <Link href="/free-demo" className="btn btn-primary">
          Book a free demo class
        </Link>
        <a className="btn btn-outline" href={href} target="_blank" rel="noopener noreferrer">
          Chat on WhatsApp
        </a>
      </div>
    </aside>
  );
}
