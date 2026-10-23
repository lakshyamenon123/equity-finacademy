import OpenChatLink from "./OpenChatLink";

const whatsapp = "https://wa.me/971567188995";

export default function MobileCta() {
  return (
    <div className="mobile-cta" role="region" aria-label="Contact the academy">
      <a href={whatsapp} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
        WhatsApp
      </a>
      <a href="tel:+971567188995" className="btn btn-outline">
        Call
      </a>
      <OpenChatLink className="btn btn-outline">Enquire</OpenChatLink>
    </div>
  );
}
