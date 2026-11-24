"use client";

import { useEffect, useState } from "react";
import { findUaeMobile } from "../lib/phone";
import { DEMO_FORMATS, DEMO_SLOTS, INTEREST_FREE_DEMO, demoWhatsappHref, slotLabel, submitLead } from "../lib/leadOffers";

// Next calendar date of a weekday in Dubai (UTC+4), e.g. "Mon 30 Nov".
function nextDubaiDate(day) {
  const now = new Date(Date.now() + 4 * 3600 * 1000);
  const diff = (day - now.getUTCDay() + 7) % 7 || 7;
  const date = new Date(now.getTime() + diff * 86400 * 1000);
  return date.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", timeZone: "UTC" });
}

export default function FreeDemoBooking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [format, setFormat] = useState(DEMO_FORMATS[0]);
  const [slotId, setSlotId] = useState("");
  const [dates, setDates] = useState({});
  const [status, setStatus] = useState("");
  const [whatsHref, setWhatsHref] = useState("");
  const [pending, setPending] = useState(false);

  useEffect(() => {
    const next = {};
    DEMO_SLOTS.forEach((slot) => {
      next[slot.id] = nextDubaiDate(slot.day);
    });
    setDates(next);
  }, []);

  async function onSubmit(event) {
    event.preventDefault();
    setStatus("");
    const slot = DEMO_SLOTS.find((item) => item.id === slotId);
    if (!slot) {
      setStatus("Choose a slot first.");
      return;
    }
    const phoneValue = findUaeMobile(phone);
    if (!phoneValue) {
      setStatus("Please enter a UAE mobile as +971 5… or 05….");
      return;
    }
    const when = `${slotLabel(slot)}${dates[slot.id] ? `, next on ${dates[slot.id]}` : ""}`;
    const href = demoWhatsappHref({ name: name.trim(), slot: when, format });
    setWhatsHref(href);
    // Open WhatsApp inside the click so browsers do not block the new tab.
    const tab = window.open(href, "_blank");
    if (tab) tab.opener = null;
    setPending(true);
    const result = await submitLead(
      { name, phone: phoneValue, interest: INTEREST_FREE_DEMO, time: slot.time, message: `Slot: ${when}. Format: ${format}.` },
      { keepalive: true }
    );
    setPending(false);
    setStatus(
      result.ok
        ? `Thank you. Your request for ${when} is saved. Send the WhatsApp message and the academy will confirm the slot.`
        : "Send the WhatsApp message to confirm your slot. The academy replies there."
    );
    if (!tab) setStatus((text) => `${text} If WhatsApp did not open, use the button below.`);
  }

  return (
    <form className="lead-form demo-booking" id="free-demo-form" onSubmit={onSubmit}>
      <fieldset className="slot-grid">
        <legend>Choose a weekly slot (Dubai time)</legend>
        {DEMO_SLOTS.map((slot) => (
          <label key={slot.id} className={`slot-option${slotId === slot.id ? " slot-selected" : ""}`}>
            <input type="radio" name="slot" value={slot.id} checked={slotId === slot.id} onChange={() => setSlotId(slot.id)} />
            <span className="slot-day">{slot.dayLabel}</span>
            <span className="slot-hour">{slot.hour}</span>
            <span className="slot-date">{dates[slot.id] ? `Next: ${dates[slot.id]}` : "\u00a0"}</span>
          </label>
        ))}
      </fieldset>
      <label>
        Format
        <select name="format" value={format} onChange={(e) => setFormat(e.target.value)}>
          {DEMO_FORMATS.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
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
      <button className="btn btn-primary" type="submit" disabled={pending}>
        {pending ? "Saving…" : "Book on WhatsApp"}
      </button>
      {status ? (
        <p className="lead-status" role="status">
          {status}
        </p>
      ) : null}
      {whatsHref ? (
        <a className="btn btn-outline" href={whatsHref} target="_blank" rel="noopener noreferrer">
          Open WhatsApp +971 55 904 7030
        </a>
      ) : null}
    </form>
  );
}
