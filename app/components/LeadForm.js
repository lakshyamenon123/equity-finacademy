"use client";

import { useState } from "react";
import { enquiryText, whatsappHref } from "../lib/whatsapp";

const INTERESTS = ["Private one-to-one", "Group cohort", "Live trading sessions", "Not sure yet"];

export default function LeadForm({ compact = false, id = "lead-form" }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState(INTERESTS[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [fallbackHref, setFallbackHref] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    setPending(true);
    setStatus("");
    setFallbackHref("");
    const payload = {
      name,
      phone,
      interest,
      message,
      page: typeof window !== "undefined" ? window.location.pathname : "",
    };
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json().catch(() => ({}));
      if (data.ok) {
        setStatus("Enquiry received. The academy will reply by phone or WhatsApp.");
        setName("");
        setPhone("");
        setMessage("");
        return;
      }
      const href = whatsappHref(enquiryText(payload));
      setFallbackHref(href);
      setStatus(
        data.error ||
          "This enquiry is not stored on the site yet. Send it on WhatsApp and the academy can reply there."
      );
    } catch {
      setFallbackHref(whatsappHref(enquiryText(payload)));
      setStatus("The enquiry form could not reach the server. Send it on WhatsApp instead.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form className={`lead-form${compact ? " lead-form-compact" : ""}`} id={id} onSubmit={onSubmit}>
      <label>
        Name
        <input name="name" autoComplete="name" required maxLength={80} value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Phone
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          maxLength={40}
          placeholder="+971 …"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </label>
      <label>
        Interest
        <select name="interest" value={interest} onChange={(event) => setInterest(event.target.value)}>
          {INTERESTS.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <label>
        Message
        <textarea name="message" maxLength={1000} rows={compact ? 3 : 4} value={message} onChange={(event) => setMessage(event.target.value)} />
      </label>
      <button className="btn btn-primary" type="submit" disabled={pending}>
        {pending ? "Sending…" : "Send enquiry"}
      </button>
      {status ? <p className="lead-status">{status}</p> : null}
      {fallbackHref ? (
        <a className="btn btn-outline" href={fallbackHref} target="_blank" rel="noopener noreferrer">
          Continue on WhatsApp
        </a>
      ) : null}
    </form>
  );
}
