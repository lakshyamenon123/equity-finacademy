"use client";

import Link from "next/link";
import ShortLeadForm from "./ShortLeadForm";
import { INTEREST_TRADING_PLAN } from "../lib/leadOffers";
import { whatsappHref } from "../lib/whatsapp";

const FOLLOW_UP = whatsappHref(
  "Hi Gopi, I downloaded the executive's one-page trading plan. Could you go through it with me?"
);

export default function TradingPlanOffer({ id = "trading-plan-form" }) {
  return (
    <ShortLeadForm
      id={id}
      interest={INTEREST_TRADING_PLAN}
      options={["Private one-to-one", "Small group", "Just the plan for now"]}
      optionLabel="Interested in classes? (optional)"
      submitLabel="Get the one-page plan"
      successText="Thank you. Your plan is ready."
      whatsappIntro="Hi Gopi, I would like the executive's one-page trading plan."
    >
      <div className="offer-success" role="status">
        <p>
          <strong>Your plan is ready.</strong> Open it, fill it in, and print it or save it as a PDF.
        </p>
        <div className="cta-row">
          <Link href="/free-trading-plan/print" className="btn btn-primary">
            Open the one-page plan
          </Link>
          <a href={FOLLOW_UP} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
            Go through it with Gopi on WhatsApp
          </a>
        </div>
      </div>
    </ShortLeadForm>
  );
}
