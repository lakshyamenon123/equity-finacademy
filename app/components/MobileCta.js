import OpenChatLink from "./OpenChatLink";

const whatsapp = "https://wa.me/971559047030";

export default function MobileCta() {
  return (
    <div className="mobile-cta" role="region" aria-label="Contact the academy">
      <a href={whatsapp} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
        WhatsApp
      </a>
      <a href="tel:+971559047030" className="btn btn-outline">
        Call
      </a>
      <OpenChatLink className="btn btn-outline">Enquire</OpenChatLink>
    </div>
  );
}
