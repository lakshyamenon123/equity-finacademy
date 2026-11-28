"use client";

import { useState } from "react";
import { findUaeMobile } from "../lib/phone";
import { submitLead } from "../lib/leadOffers";
import { enquiryText, whatsappHref } from "../lib/whatsapp";

// Two required fields (name and WhatsApp) and one optional choice. Every
// submission goes to /api/leads so it reaches the daily lead report.
export default function ShortLeadForm({
  id = "short-lead-form",
  interest,
  options = [],
  optionLabel = "Preference (optional)",
  submitLabel = "Send",
  successText = "Thank you. The academy will reply on WhatsApp.",
  whatsappIntro = "",
  onSuccess,
  children,
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [choice, setChoice] = useState("");
  const [status, setStatus] = useState("");
  const [fallbackHref, setFallbackHref] = useState("");
  const [thanksHref, setThanksHref] = useState("");
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    setStatus("");
    setFallbackHref("");
    const phoneValue = findUaeMobile(phone);
    if (!phoneValue) {
      setStatus("Please enter a UAE mobile as +971 5… or 05….");
      return;
    }
    setPending(true);
    const message = choice ? `Preference: ${choice}` : "";
    const result = await submitLead({ name, phone: phoneValue, interest, message });
    setPending(false);
    const href = whatsappHref(
      whatsappIntro
        ? [whatsappIntro, `Name: ${name}`, message].filter(Boolean).join("\n")
        : enquiryText({ name, phone: phoneValue, interest, message })
    );
    if (result.ok) {
      setThanksHref(href);
      setDone(true);
      setStatus(successText);
      if (onSuccess) onSuccess({ name: name.trim(), phone: phoneValue, choice });
      return;
    }
    setFallbackHref(href);
    setStatus(result.error || "The form could not be sent just now. Send the same details on WhatsApp instead.");
  }

  if (done && children) return children;

  if (done) {
    return (
      <div className="offer-success" role="status">
        <p>{successText}</p>
        <a className="btn btn-primary" href={thanksHref} target="_blank" rel="noopener noreferrer">
          Continue on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form className="lead-form lead-form-compact short-lead-form" id={id} onSubmit={onSubmit}>
      <label>
        Name
        <input name="name" autoComplete="name" required maxLength={80} value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        WhatsApp number
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          maxLength={40}
          placeholder="+971 5… or 05…"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      {options.length ? (
        <label>
          {optionLabel}
          <select name="preference" value={choice} onChange={(e) => setChoice(e.target.value)}>
            <option value="">No preference</option>
            {options.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
      ) : null}
      <button className="btn btn-primary" type="submit" disabled={pending || done}>
        {pending ? "Sending…" : submitLabel}
      </button>
      {status ? (
        <p className="lead-status" role="status">
          {status}
        </p>
      ) : null}
      {fallbackHref ? (
        <a className="btn btn-outline" href={fallbackHref} target="_blank" rel="noopener noreferrer">
          Continue on WhatsApp
        </a>
      ) : null}
    </form>
  );
}
