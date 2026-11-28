import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import YouTubeSection from "../components/YouTubeSection";
import AcademyLinks from "../components/AcademyLinks";
import FaqList from "../components/FaqList";
import Link from "next/link";
import AuthorByline from "../components/AuthorByline";
import { pageMetadata } from "../lib/seo";
import { articleSchema, breadcrumbSchema, faqPageSchema } from "../lib/schema";
import { ENGLISH_VIDEOS, VIDEOS } from "../lib/videos";
import { whatsappHref } from "../lib/whatsapp";

const path = "/blog-forex-broker-due-diligence-uae";
const headline = "A Forex Broker Checklist for Residents of the UAE";
const description =
  "What a UAE resident can read before a forex deposit: the legal name, the regulator's register, the MT5 specification, and the withdrawal path.";

const brokerFaq = [
  {
    q: "Does Equity Fin Academy open the broker account?",
    text: "No. You open the account yourself, in your own name, unless your own lawyer or accountant has told you a different structure is required. The academy does not ask for the password and does not hold the balance. Practical sessions use StarTrader on MetaTrader 5. That name is a place to start the checklist, not a reason to skip it.",
  },
  {
    q: "Is a broker's regulation the same thing as the course being licensed?",
    text: "No. The Securities and Commodities Authority is a regulator a firm may be listed with. A listing belongs to that firm. It is not a licence for the lesson, and it is not a licence for the academy to manage your money. The academy teaches. The fee for a class is quoted in AED when you enquire and is separate from any deposit at a broker.",
  },
  {
    q: "What if the public register does not show the firm?",
    text: "Do not send money because a chat message said the firm is regulated. Ask which legal entity you would contract with, and read that name on a register you opened yourself. If you still cannot find it, pause. A demo can wait. A deposit should not.",
  },
  {
    q: "Can a UAE resident use a firm regulated outside the UAE?",
    text: "This page does not give that legal opinion. Ask the firm which entity would hold the money, and ask a lawyer if you need a view on whether that entity may serve a resident of the UAE. The checklist is the same either way: legal name, regulator, specification, and how a withdrawal is requested.",
  },
  {
    q: "Does a regulated firm mean a trade cannot lose money?",
    text: "No. Regulation is a fact you can look up about the firm. A trade can still lose the money you posted. Price can also move through a stop. Education at the academy is not a forecast and not a payment for a profit.",
  },
];

const brokerEnglish = ENGLISH_VIDEOS.find((video) => video.id === "bC097etTQeI");
const whatsapp = whatsappHref(
  "Hi Gopi, I would like a private hour to go through a broker checklist. Please quote the fee in AED."
);

export const metadata = pageMetadata({
  title: "Forex Broker Checklist for UAE Residents",
  description,
  keywords:
    "forex broker UAE, forex broker due diligence Dubai, SCA broker checklist, choose forex broker UAE residents, forex training Dubai",
  path,
  type: "article",
});

const postSchema = articleSchema({
  headline,
  description,
  path,
  datePublished: "2026-11-25",
  dateModified: "2026-11-25",
  type: "BlogPosting",
});

export default function BrokerDueDiligencePost() {
  return (
    <>
      <JsonLd data={postSchema} />
      <JsonLd data={faqPageSchema(brokerFaq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Forex Broker Checklist", path },
        ])}
      />
      <Header active="blog" />

      <main>
        <section className="tight">
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <Link href="/blog">Blog</Link>
              <span className="sep">/</span>
              <span className="current">Forex Broker Checklist</span>
            </nav>

            <div className="blog-article">
              <span className="eyebrow">DUE DILIGENCE</span>
              <h1>{headline}</h1>
              <AuthorByline detail="25 Nov 2026 · 14 min read" />

              <p>
                A logo on a landing page is not a firm. Before you deposit dirhams, dollars, or any other currency, you should be able to name the legal entity, the regulator it claims, the specification of the symbol you will trade, and the path a withdrawal takes. This note is that reading, written for a resident of the UAE who is about to fund a first account or who already has one and has never checked it. Forex trading can lose the money placed at a broker. A listing on a register does not change that. A lesson is education. It is not a forecast, and it is not a payment for a profit.
              </p>
              <p>
                The teacher is <Link href="/gopi-chandran">Gopi Chandran</Link>. Classes are in person in Dubai, UAE, and live online across the UAE on Gulf Standard Time. Practical sessions use StarTrader, a firm the academy describes as regulated by the UAE Securities and Commodities Authority, on MetaTrader 5. You open the account yourself. Run the checklist on that name the same way you would run it on any other name. The account link and the affiliate disclosure sit on{" "}
                <Link href="/blog-forex-spreads-swaps-pip-value-uae">spreads, swaps, and pip value</Link>, because that is where the specification is explained. This page does not repeat the link.
              </p>

              <h2>Write the legal name, then open the register yourself</h2>
              <p>
                Copy the name from the account agreement or from the footer of the firm&apos;s own site, not from a WhatsApp forward. Then open the public register of the regulator the firm names. For a firm that says it is regulated in the UAE, that register is published by the Securities and Commodities Authority. Search the name you copied. Read whether the listing is the same entity, and what activity the listing describes.
              </p>
              <p>
                A match is a fact. It is not a view on whether your next trade will work. A missing match is a reason to pause. Do not fill the gap with a screenshot someone sent you. If the firm names a regulator outside the UAE, open that regulator&apos;s register the same way. This page does not rank regulators, and it does not tell you which permission a resident needs. If that question matters to your situation, ask a lawyer. The enrolment worksheet that names the broker used in class, without this longer reading, is{" "}
                <Link href="/why-choose-us">why choose us</Link>.
              </p>

              <h2>Read how client money is described</h2>
              <p>
                Look for a sentence, in the firm&apos;s documents or on the regulator&apos;s listing, about where client money sits. Some firms describe it as held apart from the firm&apos;s own money. Some documents are vague. If you cannot find the sentence, ask the firm in writing before you deposit, and keep the reply with the legal name. A class in Dubai can tell you what the sentence is for. It cannot invent a sentence the firm did not publish.
              </p>
              <p>
                The course fee and the broker balance are different payments. The fee is quoted in AED when you enquire. How a quote is requested, still without a dirham figure on this page, is on{" "}
                <Link href="/forex-course-fees-dubai">forex course fees in Dubai</Link>. The rules of a booking are on the <Link href="/terms">terms page</Link>. How an enquiry is stored is on the <Link href="/privacy">privacy page</Link>.
              </p>

              <h2>Compare the specification with the sales page</h2>
              <p>
                Open a demo on the same firm, on MetaTrader 5, and open the symbol specification for the symbol you think you will trade. Write four lines.
              </p>
              <ol className="guide-list">
                <li>The contract size, and the name the firm uses for a lot.</li>
                <li>The spread you see on the demo, and the spread the sales page described. They may differ by session.</li>
                <li>The swap for long and short, if you might hold past the firm&apos;s rollover.</li>
                <li>The leverage the account is offering. An offered leverage is not a target size.</li>
              </ol>
              <p>
                How to read the spread, the swap, and the pip unit is in{" "}
                <Link href="/blog-forex-spreads-swaps-pip-value-uae">spreads, swaps, and pip value</Link>. How leverage changes the cash set aside is in{" "}
                <Link href="/blog-forex-leverage-margin-mt5-uae">leverage and margin on MT5</Link>. What a demo hides once you fund a live login is in{" "}
                <Link href="/blog-demo-vs-live-mt5-uae">demo versus live on MT5</Link>. The install, if you do not have the platform yet, is in{" "}
                <Link href="/blog-start-forex-trading-uae-mt5">how to start forex trading in the UAE with MT5</Link>.
              </p>
              <p>
                If the sales page promised a bonus, read the condition before you treat the bonus as money you can withdraw. A condition you have not read is not a gift. The volume you will type, once a slice exists, is a different decision:{" "}
                <Link href="/blog-forex-position-sizing-high-capital-uae">position sizing for a high-capital account</Link>.
              </p>

              <h2>Ask how a withdrawal is requested</h2>
              <p>
                Before the first deposit, ask the firm which screen or email requests a withdrawal, which currencies they send, and what time they publish for the transfer. Write the answer down. You are not testing them with a trick. You are checking that a path exists in their own words. A later refusal is easier to discuss when you still have that reply.
              </p>
              <p>
                Do not send a password to a person who offers to &quot;set the account up for you&quot;. Do not send a password to the academy. A live hour needs the symbol and the specification, which you can read while you are logged in. The fields on the ticket are named in{" "}
                <Link href="/blog-mt5-order-ticket-dubai">the MT5 order ticket</Link>. Nobody in the lesson needs the login.
              </p>

              <h2>A blank you can fill in before you deposit</h2>
              <p>Leave the right-hand column empty until you have opened the document it names. A filled example from someone else&apos;s account does not count.</p>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Check</th>
                      <th>Write this from a page you opened</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Legal name</td>
                      <td>The entity on the agreement, not the logo.</td>
                    </tr>
                    <tr>
                      <td>Regulator named</td>
                      <td>The authority the firm itself claims.</td>
                    </tr>
                    <tr>
                      <td>Register</td>
                      <td>Whether you found that name on the register you opened, and the activity listed.</td>
                    </tr>
                    <tr>
                      <td>Client money</td>
                      <td>The sentence you found, or &quot;not found&quot;.</td>
                    </tr>
                    <tr>
                      <td>Specification</td>
                      <td>Contract size, spread, swap, and leverage on the symbol you will trade.</td>
                    </tr>
                    <tr>
                      <td>Withdrawal</td>
                      <td>How the firm says a withdrawal is requested.</td>
                    </tr>
                    <tr>
                      <td>Password</td>
                      <td>Who has it. The expected answer is you.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>What the checklist is not</h2>
              <p>
                It is not a ranking of firms, and it is not a promise that a listed firm will stay listed. It is not a reason to ignore the cost of a trade. It does not replace the decision about how much of your money is allowed to sit at a broker. The statements that firm sends you, kept apart from a journal, are in{" "}
                <Link href="/blog-forex-tax-record-keeping-uae">forex record-keeping habits for UAE traders</Link>. That page is education for a later conversation with an adviser. It is not tax advice. Business owners who still need to separate company cash from a learning balance should read{" "}
                <Link href="/blog-forex-trading-business-owners-uae">forex education for business owners in the UAE</Link>. If you are still choosing the person who will teach the platform, the questions about the teacher are in{" "}
                <Link href="/blog-choose-forex-mentor-dubai">how to choose a forex mentor in Dubai</Link>, and what to watch in a demo of the teaching is in{" "}
                <Link href="/blog-evaluate-forex-mentor-teaching-uae">how to evaluate a mentor&apos;s teaching process</Link>.
              </p>
              <p>
                How an academy describes its own broker, its syllabus, and its fee is a separate worksheet:{" "}
                <Link href="/blog-choose-forex-academy-uae">how to choose a forex training academy in the UAE</Link>. The topic list, once you are past the firm, is on the <Link href="/courses">courses page</Link>.
              </p>

              <h2>Bring the page, not the password</h2>
              <p>
                A private hour can be spent on the seven lines. A group class follows the shared syllabus, and the lines show whether your platform matches the one the room will use. Name the firm, whether you found it on a register, demo or live, and the symbol. Ask for the fee in AED.
              </p>
              <p>
                Use the <Link href="/contact">contact page</Link>, the chat on this site, or{" "}
                <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp +971 55 904 7030
                </a>
                . The academy is open 24/7. The classroom is in Dubai, UAE. Ask for directions on WhatsApp after a time is agreed. A 5.0 Google rating from 30+ reviews describes the academy. It is not a review of your broker. How to read that listing is on the <Link href="/success-stories">reviews page</Link>.
              </p>
              <h2>Questions about the broker checklist</h2>
              <FaqList items={brokerFaq} />
              <AcademyLinks lead="The class that can read the specification with you is the" />
              <div className="blog-cta">
                <p>Name the firm from the agreement. Then open the register yourself.</p>
                <div className="cta-row">
                  <Link href="/contact" className="btn btn-primary">
                    Book a class
                  </Link>
                  <Link href="/free-demo" className="btn btn-outline">
                    Book a free demo class
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <YouTubeSection
          videos={[VIDEOS.whatIsForex]}
          englishVideos={brokerEnglish ? [brokerEnglish] : []}
          title="Hear the broker questions in English"
          intro="The English lesson, from Equity Global English, covers questions to ask when choosing a forex broker in the UAE, and how the recording discusses US stock investing from the UAE. The Malayalam tab is an Equity Global introduction to what forex trading is. Neither video is a recommendation of a firm, and neither replaces the register you open yourself or a lesson in Dubai."
        />
      </main>

      <Footer />
    </>
  );
}
