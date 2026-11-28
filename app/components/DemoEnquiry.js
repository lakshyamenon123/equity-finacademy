"use client";

import { useState } from "react";
import { TIME_SLOTS } from "../lib/booking";
import { markDemoPromptSeen } from "../lib/demoPrompt";
import { INTEREST_FREE_DEMO, submitLead } from "../lib/leadOffers";
import { findUaeMobile } from "../lib/phone";
import { whatsappHref } from "../lib/whatsapp";

const FORMATS = ["Private one-to-one", "Small group"];

function timeLabel(value) {
  return TIME_SLOTS.find((slot) => slot.value === value)?.label || value;
}

// Name, mobile, preferred time, and an optional private or group choice.
// Posts to /api/leads through submitLead, the same path as the other forms.
export default function DemoEnquiry({ id = "demo-enquiry" }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");
  const [format, setFormat] = useState("");
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
    if (!time) {
      setStatus("Please choose a preferred time.");
      return;
    }
    const message = format ? `Format: ${format}` : "";
    const payload = {
      name: name.trim(),
      phone: phoneValue,
      time,
      interest: INTEREST_FREE_DEMO,
      message,
    };
    setPending(true);
    const result = await submitLead(payload);
    setPending(false);
    const href = whatsappHref(
      [
        "Hi, I would like to book a free demo class.",
        `Name: ${payload.name}`,
        `Mobile: ${phoneValue}`,
        `Preferred time: ${timeLabel(time)}`,
        format ? `Format: ${format}` : "",
      ]
        .filter(Boolean)
        .join("\n")
    );
    if (result.ok) {
      markDemoPromptSeen();
      setThanksHref(href);
      setDone(true);
      return;
    }
    setFallbackHref(href);
    setStatus(result.error || "The form could not be sent just now. Send the same details on WhatsApp instead.");
  }

  if (done) {
    return (
      <div className="offer-success" role="status">
        <p>
          <strong>Thank you, {name.trim()}.</strong> Your free demo request is saved. Message the academy on WhatsApp and
          they will confirm a time.
        </p>
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
        <input name="name" autoComplete="name" required maxLength={80} value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Mobile
        <input
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
          maxLength={40}
          placeholder="+971 5… or 05…"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </label>
      <label>
        Preferred time
        <select name="time" required value={time} onChange={(event) => setTime(event.target.value)}>
          <option value="">Choose a time</option>
          {TIME_SLOTS.map((slot) => (
            <option key={slot.value} value={slot.value}>
              {slot.label}
            </option>
          ))}
        </select>
      </label>
      <label>
        Private or group (optional)
        <select name="format" value={format} onChange={(event) => setFormat(event.target.value)}>
          <option value="">No preference</option>
          {FORMATS.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <button className="btn btn-primary" type="submit" disabled={pending}>
        {pending ? "Sending…" : "Request a free demo"}
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
