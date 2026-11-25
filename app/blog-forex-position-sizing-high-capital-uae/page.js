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

const path = "/blog-forex-position-sizing-high-capital-uae";
const headline = "Position Sizing for a High-Capital Forex Account in the UAE";
const description =
  "How a UAE investor turns a named learning slice into a MetaTrader 5 volume: stop distance, pip value, and the money that stays off the ticket.";

const sizingFaq = [
  {
    q: "Should the percentage be taken from everything I own?",
    text: "No. Salary, company cash, a home, and a portfolio that already has a job are not the figure on the ticket. Write a smaller slice that you have decided may sit at a broker while you learn. If you use a percentage, it refers to that slice. The beginner note on this site shows the arithmetic on a 5,000 dirham illustration. This page is for the step before that arithmetic, when the money you can reach is much larger.",
  },
  {
    q: "Does a larger account mean a larger lot?",
    text: "A larger balance can hold a larger loss. That is not a reason to type a larger volume. The volume follows the dirham amount you are willing to lose if the stop is hit, and the distance from the entry to that stop. A wide stop needs a smaller volume if the dirham loss is meant to stay the same.",
  },
  {
    q: "Where do I read the pip value?",
    text: "Open the symbol specification in MetaTrader 5 for the symbol you will actually trade, at the volume you are about to type. A worked unit for EUR/USD is on the spreads and pip value note. Use that page to understand the unit. Use the specification for the number on your ticket. A conversion, a commission, or a different contract size will move it.",
  },
  {
    q: "Can I raise the size after a good week at work?",
    text: "A good week at the office is not a result on the platform. The review that looks at tickets you already sent is a separate page. It is not allowed to raise the size because income from work makes the learning slice feel small. If you want a larger slice, write a new slice on a quiet day, before a ticket is open, and say why the old one was wrong.",
  },
  {
    q: "Will the academy tell me the lot to use?",
    text: "A private hour can watch the three numbers you bring: the slice, the dirham loss, and the stop distance. It does not invent a lot for wealth the mentor has not been asked to see. The course fee is quoted in AED when you enquire. The broker balance stays in the account you opened yourself.",
  },
];

const mt5English = ENGLISH_VIDEOS.find((video) => video.id === "ssUPlUHnDLo");
const whatsapp = whatsappHref(
  "Hi Gopi, I would like a private hour on position size for a learning slice. Please quote the fee in AED."
);

export const metadata = pageMetadata({
  title: "Forex Position Size for a Large Account | UAE",
  description,
  keywords:
    "forex position sizing UAE, lot size large account Dubai, high capital forex training, position size MT5 dirhams, forex course Dubai",
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

export default function PositionSizingHighCapitalPost() {
  return (
    <>
      <JsonLd data={postSchema} />
      <JsonLd data={faqPageSchema(sizingFaq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Position Size for a Large Account", path },
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
              <span className="current">Position Size for a Large Account</span>
            </nav>

            <div className="blog-article">
              <span className="eyebrow">HIGH CAPITAL</span>
              <h1>{headline}</h1>
              <AuthorByline detail="25 Nov 2026 · 13 min read" />

              <p>
                A large balance does not tell you the volume to type. It tells you that most of the money should never reach the ticket. This note is for a business owner, a senior executive, or an investor in the UAE who can fund an account easily and can also lose more than they meant to, because the platform will accept a size the person did not calculate. Forex trading can lose the money placed at a broker, including more than the loss you wrote down if price gaps or a stop is not filled where you marked it. A lesson is education. It is not a forecast, and it is not a payment for a profit.
              </p>
              <p>
                The beginner version of the arithmetic, including a 5,000 dirham illustration and a stop, is in{" "}
                <Link href="/blog-risk-management">how much to risk per forex trade</Link>. Stay on this page when that illustration is too small to describe the money you can already move. The teacher is{" "}
                <Link href="/gopi-chandran">Gopi Chandran</Link>. Classes are in person in Dubai, UAE, and live online across the UAE on Gulf Standard Time.
              </p>

              <h2>Name three numbers before you name a lot</h2>
              <p>
                Write them on one page, in dirhams, before MetaTrader 5 is open. If you cannot write a number, you are not ready to compare lot sizes.
              </p>
              <ul>
                <li>
                  <strong>Money that stays off the platform.</strong> Salary for the month, company cash, a home, and any portfolio that already has a job. This page does not ask for the total. It asks you to notice that the total is not the trading account.
                </li>
                <li>
                  <strong>The learning slice.</strong> The amount you have decided may sit at a broker while you study. You choose it. A mentor can ask how you chose it. A blog cannot know your net worth, and it should not pretend to.
                </li>
                <li>
                  <strong>The loss on one trade.</strong> The dirham amount you can see closed against you, at the stop, without opening a second ticket to &quot;make it back&quot;. If you use a percentage, the percentage refers to the slice, not to the money that stayed off the platform.
                </li>
              </ul>
              <p>
                Investors who already hold capital, and need that boundary in writing, should read{" "}
                <Link href="/blog-forex-portfolio-diversification-uae">forex beside a portfolio</Link> and{" "}
                <Link href="/blog-forex-training-family-office-abu-dhabi">forex training for family offices and investors in Abu Dhabi</Link>. A founder separating company cash from a learning balance should read{" "}
                <Link href="/blog-forex-trading-business-owners-uae">forex education for business owners</Link>. A weekly routine for the slice, once it exists, is in{" "}
                <Link href="/blog-forex-education-senior-executives-dubai">forex education for senior executives in Dubai</Link>.
              </p>

              <h2>The volume is the last number, not the first</h2>
              <p>
                Position size is the volume that makes your stop cost about the dirham loss you already wrote. The order is fixed. Mark the stop where the idea is wrong. Read the distance in pips. Read what one pip is worth at the volume you are considering. Multiply. If the product is larger than the loss you wrote, the volume is too large for that stop. Reduce the volume. Do not drag the stop closer so that a large volume looks acceptable.
              </p>
              <p>
                Margin is a different figure. It is cash the platform sets aside while the trade is open. A high leverage setting can make a small slice control a large contract, which is how a comfortable balance becomes a large loss. How to read margin and free margin is in{" "}
                <Link href="/blog-forex-leverage-margin-mt5-uae">leverage and margin on MT5</Link>. The fields where volume and stop loss are typed are named in{" "}
                <Link href="/blog-mt5-order-ticket-dubai">the MT5 order ticket</Link>.
              </p>

              <h2>A labelled illustration, not a size to copy</h2>
              <p>
                Nothing in this table is a recommendation, a live quote, or a record from an account. The numbers are round so the multiplication is visible. Replace every one of them with your own before you send a ticket.
              </p>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Line</th>
                      <th>Illustration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Learning slice</td>
                      <td>50,000 AED, written by the person, not taken from a salary.</td>
                    </tr>
                    <tr>
                      <td>Loss if the stop is hit</td>
                      <td>250 AED. In this illustration that is half of one percent of the slice. It is not a rule for your account.</td>
                    </tr>
                    <tr>
                      <td>Stop distance</td>
                      <td>25 pips, taken from a mark on the chart, not from the loss.</td>
                    </tr>
                    <tr>
                      <td>Pip value the volume must stay near</td>
                      <td>250 divided by 25, which is 10 AED a pip. If the specification shows more than that at the volume on screen, the volume is too big for this stop.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                The pip-value note on this site uses the dirham peg of 3.6725 dirhams per US dollar to turn a 10 US dollar pip on a standard lot of EUR/USD into about 36.73 dirhams, and a mini-lot pip into about 3.67 dirhams. That is a way to read the unit. It is not today&apos;s spread, and it is not an instruction to trade EUR/USD. Read the contract size in the specification, then read{" "}
                <Link href="/blog-forex-spreads-swaps-pip-value-uae">spreads, swaps, and pip value</Link> if the unit itself is still unclear. A commission or a different contract size will change the dirhams.
              </p>

              <h2>What a large account gets wrong</h2>
              <p>The mistakes are ordinary. The dirhams are not.</p>
              <ul>
                <li>
                  <strong>Sizing from wealth.</strong> The slice was never written, so the volume follows a feeling about what someone in that job &quot;should&quot; trade.
                </li>
                <li>
                  <strong>Sizing from a standard lot.</strong> One lot is a contract size in the specification. It is not a sign of seriousness. On the unit above, a standard lot of EUR/USD is a little over 36 dirhams a pip before you have measured the stop.
                </li>
                <li>
                  <strong>Raising size to feel the trade.</strong> If 250 AED does not feel meaningful next to a company, that is a reason to keep the slice small while you learn, not a reason to multiply the volume.
                </li>
                <li>
                  <strong>Adding a second position because the first one is small.</strong> Two tickets with the same idea are one larger risk. Write them as one loss, or do not open the second.
                </li>
                <li>
                  <strong>Moving from demo to the full slice in a week.</strong> A demo hides the feeling of a closed loss. What it hides is in{" "}
                  <Link href="/blog-demo-vs-live-mt5-uae">demo versus live on MT5</Link>. The first live slice can be smaller than the slice you eventually wrote.
                </li>
              </ul>

              <h2>Keep the size inside the plan you can reread</h2>
              <p>
                The three numbers belong on the same page as the symbol, the session you are allowed to trade, and the time you stop. That page is{" "}
                <Link href="/blog-forex-trading-plan-uae">a forex trading plan and journal</Link>. After the tickets exist, the meeting with them is{" "}
                <Link href="/blog-forex-performance-review-dubai">a weekly performance review</Link>. The review checks whether the volume you sent was the volume the stop allowed. It does not set a new slice because the week felt quiet.
              </p>
              <p>
                If the firm that holds the slice is still an open question, do that reading first. The checks are in{" "}
                <Link href="/blog-forex-broker-due-diligence-uae">a forex broker checklist for UAE residents</Link>. A position size calculated on a firm you have not identified is a number without an account.
              </p>

              <h2>What to bring to a class in Dubai</h2>
              <p>
                Bring the slice, the dirham loss, the symbol, the stop distance, and whether the history is demo or live. A private hour can stay on that page. A group class follows the shared list on the <Link href="/courses">courses page</Link>. Your numbers show where you are in that list. They do not replace the candle or the quote.
              </p>
              <p>
                You do not need to bring a statement for money that stays off the platform. You do not need to bring a broker password. The fee for the hour is quoted in AED when you enquire. The offer, as a longer mentorship rather than as one calculation, is{" "}
                <Link href="/forex-mentorship-dubai">forex mentorship in Dubai</Link>.
              </p>

              <h2>Ask for the hour if the volume is still a guess</h2>
              <p>
                You can do the multiplication alone. If the specification and the stop disagree, enquire. Name the symbol, demo or live, private or group, Dubai or online, and the loss you wrote in dirhams. Ask for the fee in AED.
              </p>
              <p>
                Use the <Link href="/contact">contact page</Link>, the chat on this site, or{" "}
                <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp +971 55 904 7030
                </a>
                . The academy is open 24/7. The classroom is in Dubai, UAE. Ask for directions on WhatsApp after a time is agreed. The rules of a booking are on the <Link href="/terms">terms page</Link>. A 5.0 Google rating from 30+ reviews describes the academy. It is not a line on your position size. How to read that listing is on the <Link href="/success-stories">reviews page</Link>.
              </p>
              <h2>Questions about size on a large account</h2>
              <FaqList items={sizingFaq} />
              <AcademyLinks lead="The class that can watch the three numbers with you is the" />
              <div className="blog-cta">
                <p>Write the slice first. The lot is what remains after the stop has a dirham cost.</p>
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
          title="See where the volume is typed"
          intro="The English lesson, from Equity Global English, walks through opening a broker account and using MetaTrader 5, which is where volume and a stop are typed. The Malayalam tab is the Equity Global MT5 tutorial. Watch the ticket once so a class in Dubai can talk about the dirham loss, not the menu. The recording is a preview of the platform, not a position size."
        />
      </main>

      <Footer />
    </>
  );
}
