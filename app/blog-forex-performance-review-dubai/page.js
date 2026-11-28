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

const path = "/blog-forex-performance-review-dubai";
const headline = "A Weekly Forex Performance Review for Busy Professionals in Dubai";
const description =
  "A twenty-five minute weekly forex review for professionals in Dubai: four counts from your own journal, a pause rule, and what to bring to class.";

const reviewFaq = [
  {
    q: "Is a weekly review the same as a trading journal?",
    text: "No. The journal is the row you write on the day of the trade. The review is one meeting with those rows, once in the week, for about twenty-five minutes. If the rows were never written, the meeting is the place you notice that, and the next week is for the missing rows.",
  },
  {
    q: "Which day should a professional in Dubai keep?",
    text: "Pick a block you have already kept once. Sunday morning, before the UAE work week, suits many private-sector diaries. A Thursday evening suits people who want the review before the weekend. Gulf Standard Time does not change in summer. If a rota deletes that block, do not invent a daily ritual. Read the note for doctors, engineers and bankers and book a private hour you can actually attend.",
  },
  {
    q: "Should the review score profit in dirhams?",
    text: "You may write the result in AED as a column. The meeting is the four counts: tickets sent, whether the written plan was followed, whether a stop was moved after entry, and whether the session stopped when the plan said to stop. A dirham total does not replace those four.",
  },
  {
    q: "What if I had no trades this week?",
    text: "Write that down. A blank history is a result of the review, not a failed one. Say whether you stayed flat because the plan said so, or because the week left no honest hour. Then write one sentence for the next week. Do not add a symbol so the page looks busy.",
  },
  {
    q: "Can a class in Dubai look at this page?",
    text: "Yes. A private hour can be spent on the one page. A group class follows the shared syllabus, and the page shows where you are in that list. Bring the counts, the symbol, and whether the account was demo or live. The fee is quoted in AED when you enquire. The academy does not need your broker password to read the page.",
  },
];

const mt5English = ENGLISH_VIDEOS.find((video) => video.id === "ssUPlUHnDLo");
const whatsapp = whatsappHref(
  "Hi Gopi, I would like a private hour to review a weekly forex performance page. Please quote the fee in AED."
);

export const metadata = pageMetadata({
  title: "Weekly Forex Performance Review in Dubai | UAE",
  description,
  keywords:
    "forex performance review Dubai, weekly trading review UAE, forex journal review professionals, private forex lesson Dubai, forex training Dubai",
  path,
  type: "article",
});

const postSchema = articleSchema({
  headline,
  description,
  path,
  datePublished: "2026-11-24",
  dateModified: "2026-11-24",
  type: "BlogPosting",
});

export default function ForexPerformanceReviewPost() {
  return (
    <>
      <JsonLd data={postSchema} />
      <JsonLd data={faqPageSchema(reviewFaq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Weekly Performance Review", path },
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
              <span className="current">Weekly Performance Review</span>
            </nav>

            <div className="blog-article">
              <span className="eyebrow">PROFESSIONALS</span>
              <h1>{headline}</h1>
              <AuthorByline detail="24 Nov 2026 · 14 min read" />

              <p>
                A busy week in Dubai does not fail because you lacked a new setup. It fails because the notes from the last session never get read. The row you write on the day is a journal. The meeting you hold with those rows, once, is a performance review. This page is that meeting. It is written for a professional who can protect about twenty-five minutes and cannot protect a second job.
              </p>
              <p>
                How to write the plan, and the row that follows a trade, is already in{" "}
                <Link href="/blog-forex-trading-plan-uae">how to write a forex trading plan and journal</Link>. Stay here when the rows exist, or when they should exist, and you need a way to look at them without turning Sunday into a research project. The teacher is{" "}
                <Link href="/gopi-chandran">Gopi Chandran</Link>. Classes are in person in Dubai, UAE, and live online across the UAE on Gulf Standard Time.
              </p>

              <h2>The review is not a second journal</h2>
              <p>
                The journal answers one trade. Date, symbol, demo or live, whether you followed the plan, and one sentence on what you would repeat. That page is allowed to be short. The review answers the week. It does not retell every candle. It counts. If you copy the journal into a longer document and call it a review, you have done the same work twice and learned nothing the second time.
              </p>
              <p>
                Keep the two pages apart on purpose. The journal can live in a note on your phone, written the same day in Gulf Standard Time. Where that note should live so a short evening can finish it is{" "}
                <Link href="/blog-trading-journal-system-dubai">a trading journal system for busy professionals in Dubai</Link>. The review is one page, paper or a single note, with the week written at the top. When the review starts to collect screenshots, close it. A folder of pictures without a count is how a professional avoids the sentence they do not want to write.
              </p>

              <h2>Put the meeting where the week can keep it</h2>
              <p>
                Choose a block you have already survived once. For many people in the UAE private sector, Sunday morning is the honest start of the week, before the first call. A Thursday evening works if you would rather close the working week than open the next one. Twenty-five minutes is enough. Forty minutes becomes a second session, and a second session is what gets cancelled.
              </p>
              <p>
                Gulf Standard Time does not move in summer. A review at 8am is 8am in Dubai and in Abu Dhabi. Put the phone in another room. Open the journal and the platform history, not a news feed. If the block is eaten by a night shift, a site day, or a client evening that always runs long, do not pretend you will review daily. That constraint is written in{" "}
                <Link href="/blog-forex-training-doctors-engineers-bankers-uae">forex training for doctors, engineers and bankers</Link>. A week that simply cannot repeat is{" "}
                <Link href="/blog-forex-coaching-entrepreneurs-flexible-week">private forex coaching for an irregular week</Link>. Name the block you can keep, or do not schedule the meeting.
              </p>
              <p>
                The forex market itself is shut from Saturday morning until Monday morning, UAE time. A Sunday review can still happen. It will be a reading of last week&apos;s rows, not a new candle. Weekend classes, if you would rather do this with an instructor, are on{" "}
                <Link href="/weekend-forex-classes-dubai">weekend forex classes in Dubai</Link>.
              </p>

              <h2>Open the history, then take four counts</h2>
              <p>
                MetaTrader 5 keeps an account history. Use that list, not your memory of a good Tuesday. The fields on the window that created those rows are named in{" "}
                <Link href="/blog-mt5-order-ticket-dubai">the MT5 order ticket</Link>. The review does not reopen the ticket. It reads what the ticket already left behind. Demo and live stay in separate counts. Mixing them makes a quiet demo week look like a live decision.
              </p>
              <p>Four counts are enough. Write the number, then stop.</p>
              <ul>
                <li>
                  <strong>Tickets sent.</strong> How many orders were actually placed. A chart you looked at and did not trade is not a ticket. If the history and your memory disagree, the history wins.
                </li>
                <li>
                  <strong>Plan followed.</strong> For each journal row, yes or no. If the row was never written, the count is &quot;unknown&quot;, and unknown is the fact the meeting is for.
                </li>
                <li>
                  <strong>Stop moved after entry.</strong> Name the row, or write none. Moving a stop is not automatically a mistake. It is a change. A change you cannot explain in one line is the one to bring to class.
                </li>
                <li>
                  <strong>Session stopped on time.</strong> Yes or no, against the line in the plan that says when you stop for the day. A difficult morning that became a long night is a no, even if the last ticket looks tidy.
                </li>
              </ul>
              <p>
                A result in AED can sit in a fifth column if you want it. It is not the meeting. The dirham amount you decided before the ticket opened is explained in{" "}
                <Link href="/blog-risk-management">how much to risk per trade</Link>. The review checks whether that amount was the amount you used. It does not set a new one because the week felt small.
              </p>

              <h2>A blank you can copy</h2>
              <p>
                This is a form, not a record of anyone&apos;s account. Leave the counts empty until you have read your own history.
              </p>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Line</th>
                      <th>Write this</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Week</td>
                      <td>The dates, in Gulf Standard Time, and demo or live.</td>
                    </tr>
                    <tr>
                      <td>Symbol</td>
                      <td>The symbol the history actually shows. Add the timeframe you were using.</td>
                    </tr>
                    <tr>
                      <td>Tickets sent</td>
                      <td>The count from the platform, including a zero.</td>
                    </tr>
                    <tr>
                      <td>Plan followed</td>
                      <td>Yes, no, or unknown, from the journal rows.</td>
                    </tr>
                    <tr>
                      <td>Stop moved</td>
                      <td>None, or the row you would want watched.</td>
                    </tr>
                    <tr>
                      <td>Stopped on time</td>
                      <td>Yes or no, against the plan&apos;s stopping line.</td>
                    </tr>
                    <tr>
                      <td>Next week</td>
                      <td>One sentence. Not a new indicator.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                An example of the last line, written as words rather than a result: &quot;Next week the stop stays where the plan put it, and I stop after the second attempt.&quot; There is no profit in that sentence on purpose. If you cannot write the sentence without a forecast, the review is not finished. It has turned into a wish.
              </p>

              <PostCta path="/blog-forex-performance-review-dubai" placement="mid" />
              <h2>What the meeting is allowed to change</h2>
              <p>
                One sentence for the next week is the whole output. Keep the stop where it was written. Stay on a demo until the journal rows exist. Skip the London and New York overlap if you cannot be at the screen, and study at the hour you can keep. The clock for those sessions is in{" "}
                <Link href="/blog-forex-market-hours-dubai">forex market hours in Dubai</Link>.
              </p>
              <p>
                The meeting is not allowed to add an indicator because one row looked clever. It is not allowed to change the symbol because the week was quiet. It is not allowed to raise the size because income from work makes the account feel small. That last habit is how a salary leaks into a learning balance. Ways this goes wrong are listed in{" "}
                <Link href="/blog-common-mistakes">beginner mistakes in the UAE</Link>. None of them are fixed by a longer review.
              </p>

              <h2>Decide the pause before the week needs it</h2>
              <p>
                Write the pause while the week is ordinary. If you cannot say whether the plan was followed, because the journal is blank, the next week does not get a larger size. It gets the missing rows. If you are still on a demo, those rows stay on the demo. What a demo hides, and when a live account is a separate decision, is in{" "}
                <Link href="/blog-demo-vs-live-mt5-uae">demo versus live on MT5</Link>.
              </p>
              <p>
                A pause is not a mood. It is the rule you can point at on Thursday when you want to &quot;make the week back&quot;. If the stopping line was already broken once, the review&apos;s sentence is to restore the line, not to schedule a second session. Investors who already hold capital, and need the learning balance kept apart from it, should read{" "}
                <Link href="/blog-forex-portfolio-diversification-uae">forex beside a portfolio</Link> before the review starts to talk about the rest of the money.
              </p>

              <h2>How a class in Dubai uses the one page</h2>
              <p>
                Bring the page to a private lesson if you want the counts watched. The hour can stay on the sentence for next week, the stop that moved, and the symbol in the history. A group class follows the shared list on the <Link href="/courses">courses page</Link>. Your page is how you show where you are in that list. It does not replace the candle, the swing, or the quote.
              </p>
              <p>
                What to carry into the first private hour, besides this page, is in{" "}
                <Link href="/blog-first-private-forex-lesson-dubai">your first private forex lesson in Dubai</Link>. A coaching plan that covers several weeks is in{" "}
                <Link href="/blog-personal-forex-coaching-uae">personal forex coaching in the UAE</Link>. The offer, as mentorship rather than as a single note, is{" "}
                <Link href="/forex-mentorship-dubai">forex mentorship in Dubai</Link>. Senior executives who need a weekly capital routine, rather than a review of tickets, should read{" "}
                <Link href="/blog-forex-education-senior-executives-dubai">forex education for senior executives in Dubai</Link>. Business owners who are separating company cash from a learning balance should read{" "}
                <Link href="/blog-forex-trading-business-owners-uae">forex education for business owners</Link>.
              </p>
              <p>
                If you are still choosing the person who will read the page with you, the questions to ask are in{" "}
                <Link href="/blog-choose-forex-mentor-dubai">how to choose a forex mentor in Dubai</Link>. What you should be able to see in the teaching itself is in{" "}
                <Link href="/blog-evaluate-forex-mentor-teaching-uae">how to evaluate a mentor&apos;s teaching process</Link>.
              </p>

              <h2>Ask for a seat if you want the page read with you</h2>
              <p>
                You can hold the meeting alone. If you want someone to tell you the sentence for next week is still a forecast, enquire. Name the symbol, whether the history is demo or live, private or group, Dubai or online, and the twenty-five minutes you can keep. Ask for the fee in AED.
              </p>
              <p>
                Use the <Link href="/contact">contact page</Link>, the chat on this site, or{" "}
                <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp +971 55 904 7030
                </a>
                . The academy is open 24/7. The classroom is in Dubai, UAE. The marketing pages do not print a floor or a building name. Ask for directions on WhatsApp after a time is agreed. Online study from another emirate uses the same clock. Abu Dhabi readers can start from the{" "}
                <Link href="/forex-course-abu-dhabi">Abu Dhabi course page</Link>.
              </p>
              <p>
                A 5.0 Google rating from 30+ reviews describes the academy. It is not a line on your review page. How to read that listing is on the <Link href="/success-stories">reviews page</Link>. The rules of a booking are on the <Link href="/terms">terms page</Link>.
              </p>
              <h2>Questions about the weekly review</h2>
              <FaqList items={reviewFaq} />
              <AcademyLinks lead="The class that can read the page with you is the" />
              <PostCta path="/blog-forex-performance-review-dubai" />
            </div>
          </div>
        </section>

        <YouTubeSection
          videos={[VIDEOS.metatrader]}
          englishVideos={mt5English ? [mt5English] : []}
          title="See the platform the review reads"
          intro="The English lesson, from Equity Global English, walks through MetaTrader 5, which is where the account history sits. The Malayalam tab is the Equity Global MT5 tutorial. Watch the history once so the weekly review starts from the rows, not from memory. The recording is a preview of the platform, not a result."
        />
      </main>

      <Footer />
    </>
  );
}
