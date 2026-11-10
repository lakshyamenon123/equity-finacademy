import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import Link from "next/link";
import { pageMetadata } from "../lib/seo";
import { breadcrumbSchema, webPageSchema } from "../lib/schema";
import { SITE } from "../lib/site";

const title = "Privacy Policy for Equity Fin Academy";
const description =
  "Privacy policy for Equity Fin Academy in Dubai, UAE: what an enquiry stores, how visit counts work, and how to ask for a name and mobile number to be deleted.";

export const metadata = pageMetadata({
  title: "Privacy Policy | Equity Fin Academy, Dubai",
  description,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, description, path: "/privacy" })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
        ])}
      />
      <Header />
      <main>
        <section className="tight bg-glow" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span className="current">Privacy</span>
            </nav>
            <span className="eyebrow">PRIVACY</span>
            <h1 className="hero-display" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", maxWidth: "18ch" }}>
              How enquiries and visits are handled.
            </h1>
            <p className="hero-sub" style={{ marginTop: 18, maxWidth: "66ch" }}>
              Equity Fin Academy teaches forex in Dubai, UAE, and online across the UAE. This page says what the site stores when you enquire, what a visit count includes, and how to ask for deletion. The rules for using the site are on the <Link href="/terms">terms page</Link>.
            </p>
          </div>
        </section>
        <section>
          <div className="container prose-block" style={{ maxWidth: 760 }}>
            <h2>Who this applies to</h2>
            <p>
              This policy covers the public website at equityfinacademy.com, the enquiry form, and the site chat. It covers a visitor in Dubai and a visitor writing from another emirate. It does not cover a broker account you open yourself, or a WhatsApp chat after you leave the site. Those services have their own policies.
            </p>
            <p>
              The academy can be reached on WhatsApp or by phone at <a href={`tel:${SITE.telephoneTel}`}>{SITE.telephoneDisplay}</a>, and through the <Link href="/contact">contact page</Link>. The public location is Dubai, UAE. Lessons are described on the <Link href="/courses">courses page</Link>.
            </p>

            <h2>What an enquiry stores</h2>
            <p>
              If you send the enquiry form or the site chat, the record can include your name, your UAE mobile number, the interest you picked, the message you wrote, the page path you were on, and the time in Dubai. The page path is stored without a query string. A short note of what you asked is kept so the reply can name a track, a format, and a time.
            </p>
            <p>
              The form asks for a UAE mobile written as +971 followed by 9 digits, or a number starting with 05. A message that fails that check is not stored as an enquiry. If durable storage is not configured on the server, the form does not keep the enquiry and it points you to WhatsApp instead.
            </p>
            <p>
              The site uses your number to contact you about courses. These details are not sold. They are not used to build an advertising audience on this website.
            </p>

            <h2>What a visit count includes</h2>
            <p>
              Vercel Web Analytics counts visits, including which country the visit came from. That count does not use a cookie or a consent banner, and it does not include your name or phone number. It is a traffic count, not an enquiry.
            </p>
            <p>
              The enquiry form also checks how often the same connection submits, so a burst of repeats can be slowed. That check is a short-lived limit. It is not the enquiry record, and it is not a profile of you.
            </p>

            <h2>Video and maps</h2>
            <p>
              Lesson previews from the Equity Global English channel and the Equity Global channel sit behind a play button. The thumbnail is loaded from YouTube&apos;s image host. The player, on youtube-nocookie.com, loads after you press play. Until then the page does not embed the player. YouTube&apos;s own policy applies once the player is open.
            </p>
            <p>
              The contact page shows a map of Dubai, UAE. Opening Google Maps, or the Google listing, leaves this site. Google&apos;s policy applies there. The academy does not copy those reviews onto this website.
            </p>

            <h2>The broker link</h2>
            <p>
              The chat and some course pages can suggest opening a live account with StarTrader. That link is the academy&apos;s affiliate link. If you follow it, you are on the broker&apos;s site, and the account is with the broker. The academy does not manage your funds, and it does not receive your broker password. The course fee and the broker balance are separate.
            </p>

            <h2>How long an enquiry is kept</h2>
            <p>
              An enquiry is kept so the academy can reply, quote a fee in AED, and remember the track and the time you asked for. There is no separate marketing list built from the form. When the conversation is finished, you can ask for the record to be deleted.
            </p>
            <p>
              To ask for deletion, WhatsApp or call <a href={`tel:${SITE.telephoneTel}`}>{SITE.telephoneDisplay}</a>, or write from the <Link href="/contact">contact page</Link>. Name the mobile number you sent so the right record can be found. A request about a WhatsApp thread is handled in WhatsApp, because that copy sits with WhatsApp rather than on this website.
            </p>

            <h2>Children</h2>
            <p>
              The courses are for adults who want to study forex. The enquiry form is not aimed at children. If a child&apos;s number was sent by mistake, ask for the record to be deleted using the phone number above.
            </p>

            <h2>Changes to this page</h2>
            <p>
              If the form starts collecting a new field, this page will say so. The current version describes the name, the UAE mobile, the interest, the message, the page path, and the Dubai time. Questions about these points go to the same phone number. The <Link href="/terms">terms</Link> explain what the lessons are, and what they are not.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
