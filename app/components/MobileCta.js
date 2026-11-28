"use client";

import { usePathname } from "next/navigation";
import { pageWhatsappHref } from "../lib/whatsapp";

export default function MobileCta() {
  const pathname = usePathname() || "/";
  return (
    <div className="mobile-cta" role="region" aria-label="WhatsApp the academy">
      <a
        href={pageWhatsappHref(pathname)}
        className="btn btn-primary"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp the academy about this page"
      >
        WhatsApp
      </a>
    </div>
  );
}
