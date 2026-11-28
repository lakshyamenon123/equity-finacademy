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
import PostCta from "../components/PostCta";

const path = "/blog-forex-tax-record-keeping-uae";
const headline = "Forex Tax and Record-Keeping Habits for UAE Traders";
const description =
  "Record-keeping habits for UAE forex traders: broker statements in one folder, kept apart from the journal. Education for an adviser. Not tax advice.";

const recordsFaq = [
  {
    q: "Is this page tax advice for forex traders in the UAE?",
    text: "No. It is a habit for keeping papers. It does not say what a person or a company owes, which form to file, or which rate applies. A qualified adviser who already knows the entity is the person who answers those questions. Equity Fin Academy teaches the chart. It does not prepare a return.",
  },
  {
    q: "Is the trading journal the same file as the broker statements?",
    text: "No. The journal is the row you write about a decision: the symbol, whether you followed the plan, and one sentence. The statement is the document the broker produced: deposits, withdrawals, and the history on that login. Keep them in different folders. Mixing them makes both harder to read.",
  },
  {
    q: "Should I put the account password or the company books in this folder?",
    text: "No. The folder holds statements and a short index of what each file is. It does not hold a password, a full set of company ledgers, or a list of other holdings. Those stay with you and with any adviser who already looks after them. A private lesson does not need the password to discuss a chart.",
  },
  {
    q: "What if I have a company, a free zone entity, or a family office?",
    text: "Then you may already have a filing calendar that is not a trading login. Write the legal name on the broker account at the top of the index, and say whether that name is you or an entity. Do not decide on this page which calendar the login belongs to. Take that question to the adviser, with the statements, not with a lot size.",
  },
  {
    q: "Can a class in Dubai look at the statement folder?",
    text: "A private hour can look at one symbol on a practice chart. It is a poor use of the hour to sort a year of statements. Bring the index if you want to show that the folder exists. Leave the password, the company books, and the tax question outside the room. The fee for the hour is quoted in AED when you enquire.",
  },
];

const brokerEnglish = ENGLISH_VIDEOS.find((video) => video.id === "bC097etTQeI");
const whatsapp = whatsappHref(
  "Hi Gopi, I would like a private hour on a practice chart. I keep my own broker statements for an adviser. Please quote the fee in AED."
);

export const metadata = pageMetadata({
  title: "Forex Record-Keeping Habits for UAE Traders",
  description,
  keywords:
    "forex record keeping UAE, forex statements Dubai, trading records for an adviser, forex education Dubai, private forex mentorship UAE",
  path,
  type: "article",
});

const postSchema = articleSchema({
  headline,
  description,
  path,
  datePublished: "2026-11-28",
  dateModified: "2026-11-28",
  type: "BlogPosting",
});

export default function ForexTaxRecordKeepingPost() {
  return (
    <>
      <JsonLd data={postSchema} />
      <JsonLd data={faqPageSchema(recordsFaq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Forex Records", path },
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
              <span className="current">Forex Records</span>
            </nav>

            <div className="blog-article">
              <span className="eyebrow">RECORD-KEEPING</span>
              <h1>{headline}</h1>
              <AuthorByline detail="28 Nov 2026 · 13 min read" />

              <p>
                This page is education about a filing habit. It is not tax advice, not a reading of UAE law, and not a statement of what any person or company owes. Executives, founders, and family offices in Dubai already know that a chart and a filing calendar are different rooms. The teacher is{" "}
                <Link href="/gopi-chandran">Gopi Chandran</Link>. A private hour at Equity Fin Academy looks at a practice chart. It does not prepare a return, name a rate, or store your statements.
              </p>
              <p>
                If a sentence on this page sounds like an instruction to file, ignore that reading and ask a qualified adviser who already knows the entity. The useful work here is narrower: keep the broker&apos;s own papers in one place, in Gulf Standard Time, so that conversation can start from documents instead of from memory.
              </p>

              <h2>The journal and the statements are different folders</h2>
              <p>
                The row you write after a trade is a journal. It answers whether you followed a plan. How to build the place that row lives, for a week that is already full, is{" "}
                <Link href="/blog-trading-journal-system-dubai">a trading journal system for busy professionals in Dubai</Link>. The lines you write before the session are in{" "}
                <Link href="/blog-forex-trading-plan-uae">a forex trading plan and journal</Link>. Leave those pages in the study folder.
              </p>
              <p>
                The statement folder is what the broker produced. A monthly statement, a deposit confirmation, a withdrawal confirmation, and the legal name on the account. You did not write those documents. You received them. Putting a journal sentence inside a statement, or a statement inside the journal, makes both files worse. An adviser cannot audit a feeling, and a mentor cannot teach from a PDF of cash movements.
              </p>

              <h2>Write the legal name before you write a story</h2>
              <p>
                Open the agreement you signed, not a marketing page. Copy the legal name of the firm and the name on the account into the first line of a one-page index. Say whether that account name is you, or a company, or another entity. If you cannot find the name, that is the fact to write down. How to look for the firm on a register you open yourself is in{" "}
                <Link href="/blog-forex-broker-due-diligence-uae">a forex broker checklist for residents of the UAE</Link>.
              </p>
              <p>
                A desk in DIFC, a company in Dubai, or capital looked after from Abu Dhabi does not change this line. It changes who should read the folder later. Founders who still mix company cash with a learning balance should read{" "}
                <Link href="/blog-forex-trading-business-owners-uae">forex education for business owners in the UAE</Link> before they treat a trading login as an operating account. Family offices and private investors who need the learning amount kept apart from capital that already has a job should read{" "}
                <Link href="/blog-forex-training-family-office-abu-dhabi">forex training for family offices and investors in Abu Dhabi</Link>. The brief that keeps an adviser on the wealth, and the mentor on the chart, is{" "}
                <Link href="/blog-premium-executive-forex-mentorship-dubai">premium executive forex mentorship in Dubai</Link>.
              </p>

              <h2>What the statement folder holds</h2>
              <p>
                One folder for each calendar year is enough. Inside it, the broker&apos;s files, named by the month in Gulf Standard Time. Add a single index at the front. Six lines cover a month. If a line is blank, write &quot;not received&quot; rather than leaving a gap you will forget.
              </p>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Line</th>
                      <th>What you file</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Account name</td>
                      <td>The legal name on the login, and whether it is a person or an entity.</td>
                    </tr>
                    <tr>
                      <td>Firm</td>
                      <td>The legal name from the agreement, not a nickname from an advertisement.</td>
                    </tr>
                    <tr>
                      <td>Book</td>
                      <td>Demo or live. A demo export is practice. It is not the live file.</td>
                    </tr>
                    <tr>
                      <td>Cash in and out</td>
                      <td>Deposits and withdrawals as the broker wrote them, with the date in Gulf Standard Time.</td>
                    </tr>
                    <tr>
                      <td>Statement</td>
                      <td>The monthly document, saved as the broker sent it. Do not retype it into a prettier sheet and throw the original away.</td>
                    </tr>
                    <tr>
                      <td>Where it lives</td>
                      <td>The folder path, or the drawer, so a busy month can find it again.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                A demo and a live login do not share a folder. What a demo hides, including the feeling of a live fill, is in{" "}
                <Link href="/blog-demo-vs-live-mt5-uae">demo versus live on MT5</Link>. The window those tickets were typed into is{" "}
                <Link href="/blog-mt5-order-ticket-dubai">the MetaTrader 5 order ticket</Link>. The statement is the history after that window, not a second opinion about the click.
              </p>

              <PostCta path="/blog-forex-tax-record-keeping-uae" placement="mid" />
              <h2>Hand an adviser the papers, not a password</h2>
              <p>
                When you sit with an adviser, the useful bundle is the index, the statements, and the legal name. It is not a password, not a screenshot of an open position, and not a request for the academy to explain a filing. How long to keep the folder is their question to answer for your facts. This page does not set a number of years.
              </p>
              <p>
                Do not ask the lesson to do that job. A private hour in Dubai, UAE, or live online across the UAE, can mark a swing and read a journal sentence. It will not tell you whether a login belongs on a company return. If that question is open, pause the deposit conversation until the adviser has seen the name on the account. The size of a learning slice, once the money is allowed to sit at a broker at all, is a different note:{" "}
                <Link href="/blog-forex-position-sizing-high-capital-uae">position sizing for a high-capital account</Link>.
              </p>

              <h2>The course fee is a different paper</h2>
              <p>
                A fee paid to the academy for a class is not a broker statement. If you receive a document for that fee, keep it with the course, in AED, apart from the trading folder. What a fee covers is described on the{" "}
                <Link href="/pricing">pricing page</Link>. The figure for your format is quoted when you enquire. The rules of a booking, including that the broker account stays separate from the fee, are on the{" "}
                <Link href="/terms">terms page</Link>.
              </p>
              <p>
                Nothing on this page tells you how to treat that fee, a swap, a spread, or a result in dirhams. Those words belong in the conversation with the adviser, with the statements in front of them. The class can still teach the spread as a cost on the ticket. That lesson is{" "}
                <Link href="/blog-forex-spreads-swaps-pip-value-uae">spreads, swaps, and pip value</Link>. It is not a tax worksheet.
              </p>

              <h2>Bring the chart, and leave the folder at home</h2>
              <p>
                For a one-to-one hour, send the symbol, whether the account you are studying is demo or live, and the question about the chart. Mention that an adviser already holds the filing question if that is true. Do not attach the year of statements. The agenda of the sitting itself is in{" "}
                <Link href="/blog-private-forex-mentorship-hour-dubai">what one private mentorship hour contains</Link>. The two tracks, once you are past the paperwork, are on the{" "}
                <Link href="/courses">courses page</Link>.
              </p>
              <p>
                Use the <Link href="/contact">contact page</Link>, the chat on this site, or{" "}
                <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp +971 55 904 7030
                </a>
                . The academy is open 24/7. The classroom is in Dubai, UAE. Ask for directions on WhatsApp after a time is agreed. A 5.0 Google rating from 30+ reviews describes the academy. It is not a comment on your broker or on a filing. How to read that listing is on the <Link href="/success-stories">reviews page</Link>.
              </p>
              <h2>Questions about the statement folder</h2>
              <FaqList items={recordsFaq} />
              <AcademyLinks lead="The class that stays on the chart, while the filing stays with your adviser, is the" />
              <PostCta path="/blog-forex-tax-record-keeping-uae" />
            </div>
          </div>
        </section>

        <YouTubeSection
          videos={[VIDEOS.metatrader]}
          englishVideos={brokerEnglish ? [brokerEnglish] : []}
          title="Hear the account questions before you file a statement"
          intro="The English lesson, from Equity Global English, covers questions to ask when choosing a forex broker in the UAE. The Malayalam tab is the Equity Global MetaTrader 5 tutorial, which is where account history can be read. Neither recording is tax advice, a filing checklist, or a recommendation of a firm. The statement you save should be the document the broker issued."
        />
      </main>

      <Footer />
    </>
  );
}
