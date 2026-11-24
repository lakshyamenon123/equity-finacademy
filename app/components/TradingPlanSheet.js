// The executive's one-page trading plan. Plain educational template: the
// reader fills in their own numbers. No figures are claimed for anyone.
export const PLAN_SECTIONS = [
  {
    title: "1. Purpose",
    prompt: "Why am I learning to trade, and what does a good year of learning look like?",
    lines: 2,
  },
  {
    title: "2. Capital set aside",
    prompt: "The amount in AED kept apart from business, salary and family money. It never mixes with operating cash.",
    lines: 1,
  },
  {
    title: "3. Risk per trade and loss limits",
    prompt: "Risk per trade as a % and in AED. The daily and weekly loss at which I stop and review, not trade harder.",
    lines: 2,
  },
  {
    title: "4. Markets and hours",
    prompt: "The two or three pairs or symbols I follow, and the hours on Dubai time that fit my diary (before work, evening, Saturday review).",
    lines: 2,
  },
  {
    title: "5. My setup",
    prompt: "The timeframe and the exact conditions I need on the chart before I consider a trade.",
    lines: 3,
  },
  {
    title: "6. Entry, stop and target",
    prompt: "Where the order goes, where the stop goes and why, and where I take profit or move the stop.",
    lines: 2,
  },
  {
    title: "7. Before every trade",
    prompt: "Calendar checked for news · stop placed with the order · size matches the AED risk · no trade between meetings or when tired.",
    lines: 1,
  },
  {
    title: "8. Journal and weekly review",
    prompt: "After each trade: screenshot, reason, result, one lesson. Every weekend: 30 minutes reviewing the week against this page.",
    lines: 2,
  },
];

export default function TradingPlanSheet() {
  return (
    <div className="plan-sheet">
      <div className="plan-head">
        <p className="plan-brand">
          <strong>EQUITY</strong> FIN ACADEMY · Dubai, UAE
        </p>
        <h2>The executive&apos;s one-page trading plan</h2>
        <p className="plan-meta">Name: ____________________ &nbsp; Date: ____________ &nbsp; Review on: ____________</p>
      </div>
      <ol className="plan-list">
        {PLAN_SECTIONS.map((section) => (
          <li key={section.title}>
            <h3>{section.title}</h3>
            <p>{section.prompt}</p>
            {Array.from({ length: section.lines }).map((_, index) => (
              <span key={index} className="plan-line" aria-hidden="true" />
            ))}
          </li>
        ))}
      </ol>
      <p className="plan-foot">
        Questions about your plan: WhatsApp +971 55 904 7030 · www.equityfinacademy.com/free-demo
      </p>
    </div>
  );
}
