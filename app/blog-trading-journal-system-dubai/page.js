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

const path = "/blog-trading-journal-system-dubai";
const headline = "A Trading Journal System for Busy Professionals in Dubai";
const description =
  "How busy professionals in Dubai keep one trading journal: where the file lives, the columns a short evening can finish, and what a private hour should see.";

const journalFaq = [
  {
    q: "Is this the same page as the trading plan, or the weekly review?",
    text: "No. The plan page is what you write before a session, and the fields of a single row after a trade. This page is the system around those rows: one file, a time of day, and a rule for a missing line. The weekly review is a separate meeting with the rows, about twenty-five minutes, once in the week. If you copy the rows into a longer document and call it a system, you have made a second journal.",
  },
  {
    q: "Where should the file live if the week is already full?",
    text: "One note you can open in a minute, on the phone or a single document, with a backup you have tested once. Not a chat thread to yourself, and not a camera roll of charts. If finding the file takes longer than writing the row, the system will die on a Thursday in Dubai. Name the place at the top of the note.",
  },
  {
    q: "What if I had no time to write on the day?",
    text: "Write 'missing' on the next honest evening, with the date of the ticket in Gulf Standard Time. Do not reconstruct a clever reason three days later and pretend it was written at the desk. A missing row is a result. The weekly review is where you notice a run of them. It is not a reason to skip the file.",
  },
  {
    q: "Should demo and live share one page?",
    text: "No. Use the same columns, and keep two sections, or two notes. A demo row is practice. A live row is a ticket with money at a broker. Mixing them lets a busy reader treat both as a score. What a demo will not show you is a different note.",
  },
  {
    q: "Can I bring this file to a private hour?",
    text: "Yes. Bring the last few rows, the symbol, and whether the book was demo or live. Leave the password, the account number, and any company ledger out of the note. The hour can read the sentence you wrote. It does not need the rest of your affairs. The fee is quoted in AED when you enquire.",
  },
];

const mt5English = ENGLISH_VIDEOS.find((video) => video.id === "ssUPlUHnDLo");
const whatsapp = whatsappHref(
  "Hi Gopi, I would like a private hour to read a short trading journal with me. Please quote the fee in AED."
);

export const metadata = pageMetadata({
  title: "Trading Journal System for Dubai Professionals",
  description,
  keywords:
    "trading journal system Dubai, forex journal busy professionals, private forex mentorship Dubai, forex notes for executives UAE, forex training Dubai",
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

export default function TradingJournalSystemPost() {
  return (
    <>
      <JsonLd data={postSchema} />
      <JsonLd data={faqPageSchema(journalFaq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Journal System", path },
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
              <span className="current">Journal System</span>
            </nav>

            <div className="blog-article">
              <span className="eyebrow">JOURNAL</span>
              <h1>{headline}</h1>
              <AuthorByline detail="28 Nov 2026 · 12 min read" />

              <p>
                A busy professional in Dubai does not fail at a journal because the columns were too few. The file was in three places, the row was promised for Sunday, and Sunday already belonged to the company. This page is the system that can survive that week. It is one file, five columns, and a rule for when the line is written. It is not a new strategy.
              </p>
              <p>
                The words inside a single row are already on{" "}
                <Link href="/blog-forex-trading-plan-uae">how to write a forex trading plan and journal</Link>. The meeting you hold with those rows, once, is{" "}
                <Link href="/blog-forex-performance-review-dubai">a weekly forex performance review</Link>. Stay here for the container: where it lives, what a short evening is allowed to finish, and what you carry into a private hour with{" "}
                <Link href="/gopi-chandran">Gopi Chandran</Link>. Classes are in person in Dubai, UAE, and live online across the UAE on Gulf Standard Time.
              </p>

              <h2>One file, and a place you can open tired</h2>
              <p>
                Choose the note before you choose a symbol. A single document, or a notes app you already unlock every day, with a backup you have opened once on a second device. Write the location in the first line, in plain words: &quot;Phone note, Trading journal, live&quot; or &quot;Folder on the laptop, demo&quot;. If you need a manual to find it, it is the wrong place.
              </p>
              <p>
                Do not keep the system in a chat you send to yourself, a camera roll, or a new spreadsheet each month. Those are how a Thursday after DIFC, Business Bay, or a site day disappears. Screenshots may sit under a row if the sentence needs the picture. A folder of pictures without the row is not a journal. The broker&apos;s own statements belong in a different folder, described in{" "}
                <Link href="/blog-forex-tax-record-keeping-uae">forex record-keeping habits for UAE traders</Link>. That page is about papers an adviser might read. It is not tax advice, and it is not this file.
              </p>

              <h2>Five columns a short evening can finish</h2>
              <p>
                The plan page allows a longer row when you have time. The system, on a week that is already sold, stops at five. If you add a sixth column, name what decision it changes. If you cannot, delete it. The point is a line you will actually write at 9pm, not a template you admire on Saturday.
              </p>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Column</th>
                      <th>What a tired evening writes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>When</td>
                      <td>Date and time in Gulf Standard Time. UAE clocks do not move in summer.</td>
                    </tr>
                    <tr>
                      <td>Book</td>
                      <td>Demo or live. The two books do not share a section.</td>
                    </tr>
                    <tr>
                      <td>Symbol</td>
                      <td>One symbol. A second symbol is a second row, or it waits.</td>
                    </tr>
                    <tr>
                      <td>Followed</td>
                      <td>Yes or no, against the plan line you wrote before the session.</td>
                    </tr>
                    <tr>
                      <td>Sentence</td>
                      <td>One sentence you can read next week without the chart open.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                An example of a finished line, written as a blank and not as someone&apos;s trade: &quot;28 Nov 2026, 21:10 GST. Live. EUR/USD. Followed: no. I widened the stop after the click.&quot; There is no dirham total in that line on purpose. A result can be a note under the sentence if you want it. It is not the system. How a volume was chosen, if the question is size rather than the record, is{" "}
                <Link href="/blog-forex-position-sizing-high-capital-uae">position sizing for a high-capital account</Link>. The fields on the ticket itself are{" "}
                <Link href="/blog-mt5-order-ticket-dubai">the MetaTrader 5 order ticket</Link>.
              </p>

              <h2>Write it the same day, or mark it missing</h2>
              <p>
                The row belongs to the day of the ticket, in Gulf Standard Time. If the diary eats that day, the next honest block gets the word &quot;missing&quot; and the date of the ticket. Do not backfill a calm explanation after the weekend has rewritten the memory. A missing line is more useful than a polished one you do not trust.
              </p>
              <p>
                Put the block where the week has already survived once. For many people that is a few minutes after the platform is closed, not a new morning ritual. How a weekend review and a weekday evening differ, when the problem is the diary rather than the file, is{" "}
                <Link href="/blog-executive-forex-study-schedule-dubai">how to fit forex learning around a busy executive schedule</Link>. A rota, a site day, or a banking evening that deletes the block is{" "}
                <Link href="/blog-forex-training-doctors-engineers-bankers-uae">forex training for doctors, engineers and bankers</Link>. A week that will not repeat at all is{" "}
                <Link href="/blog-forex-coaching-entrepreneurs-flexible-week">private forex coaching for an irregular week</Link>. The system does not invent an hour you do not have. It records the hour you did, or the fact that you had none.
              </p>

              <h2>Keep demo and live in separate sections</h2>
              <p>
                Use the same five columns on a demo. Give the demo its own heading, or its own note. A live ticket does not get filed under practice because the week was embarrassing, and a demo ticket does not get filed as live because the result looked serious. What the demo will not show you, and when a live account is a separate decision, is in{" "}
                <Link href="/blog-demo-vs-live-mt5-uae">demo versus live on MT5</Link>.
              </p>
              <p>
                The account history on the platform is the check, not the journal. Once a week, before the review, look at the history and see whether every live ticket has a row. You are looking for missing lines, not for a new idea. The review itself stays on its own page. It counts. It does not retype the system into a second document.
              </p>

              <h2>What the private hour is allowed to see</h2>
              <p>
                Bring the last few rows, the symbol, and the book. A mentor can tell you the sentence is still a forecast, or that &quot;followed: yes&quot; does not match a stop that moved. That is a useful hour. A printout of a company, a list of other holdings, and a password are not. Wealth that already has an adviser stays in that conversation. The brief for that boundary is{" "}
                <Link href="/blog-premium-executive-forex-mentorship-dubai">premium executive forex mentorship in Dubai</Link>.
              </p>
              <p>
                What to carry into a first sitting, besides this file, is in{" "}
                <Link href="/blog-first-private-forex-lesson-dubai">your first private forex lesson in Dubai</Link>. The shape of the hour, once you are in the room or on the live link, is{" "}
                <Link href="/blog-private-forex-mentorship-hour-dubai">what one private mentorship hour contains</Link>. The shared syllabus, if you want a group seat instead of a file read, is on the{" "}
                <Link href="/courses">courses page</Link>. The offer, as mentorship rather than as a note, is{" "}
                <Link href="/forex-mentorship-dubai">forex mentorship in Dubai</Link>.
              </p>

              <h2>Ask for the file to be read with you</h2>
              <p>
                You can keep the system alone. If you want the sentences watched, enquire. Name the symbol, demo or live, private or group, Dubai or online, and the few minutes you will use to write the row. Ask for the fee in AED.
              </p>
              <p>
                Use the <Link href="/contact">contact page</Link>, the chat on this site, or{" "}
                <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp +971 55 904 7030
                </a>
                . The academy is open 24/7. The classroom is in Dubai, UAE. Ask for directions on WhatsApp after a time is agreed. A 5.0 Google rating from 30+ reviews describes the academy. It is not a line in your journal. How to read that listing is on the <Link href="/success-stories">reviews page</Link>.
              </p>
              <h2>Questions about the journal system</h2>
              <FaqList items={journalFaq} />
              <AcademyLinks lead="The class that can read the file with you is the" />
              <div className="blog-cta">
                <p>One file. Five columns. The row on the day, or the word missing.</p>
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
          videos={[VIDEOS.metatrader]}
          englishVideos={mt5English ? [mt5English] : []}
          title="See where the account history sits"
          intro="The English lesson, from Equity Global English, walks through opening a broker account and using MetaTrader 5. The Malayalam tab is the Equity Global MT5 tutorial. The history on the platform is the check for missing journal rows. The recording is a preview of the platform, not a journal and not a result."
        />
      </main>

      <Footer />
    </>
  );
}
