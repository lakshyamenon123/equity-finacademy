import Link from "next/link";
import TradingPlanSheet from "../../components/TradingPlanSheet";
import PrintButton from "../../components/PrintButton";
import { whatsappHref } from "../../lib/whatsapp";

export const metadata = {
  title: "The Executive's One-Page Trading Plan (Printable) | Equity Fin Academy",
  description: "Printable one-page forex trading plan from Equity Fin Academy, Dubai, UAE.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.equityfinacademy.com/free-trading-plan" },
};

const FOLLOW_UP = whatsappHref(
  "Hi Gopi, I downloaded the executive's one-page trading plan. Could you go through it with me?"
);

export default function TradingPlanPrintPage() {
  return (
    <main className="plan-page">
      <div className="plan-actions no-print">
        <Link href="/free-trading-plan" className="btn btn-outline">
          ← Back
        </Link>
        <PrintButton />
        <a href={FOLLOW_UP} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
          Go through it on WhatsApp
        </a>
        <Link href="/free-demo" className="btn btn-outline">
          Book a free demo class
        </Link>
      </div>
      <TradingPlanSheet />
    </main>
  );
}
