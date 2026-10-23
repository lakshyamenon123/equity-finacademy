"use client";

import { useState } from "react";
import LeadForm from "./LeadForm";
import { whatsappHref } from "../lib/whatsapp";

const STARTER = {
  role: "assistant",
  content:
    "Ask about group classes, private one-to-one lessons, or live trading sessions in Al Qusais. Fees are quoted when you enquire.",
};

export default function EnquiryWidget() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("chat");
  const [messages, setMessages] = useState([STARTER]);
  const [draft, setDraft] = useState("");
  const [pending, setPending] = useState(false);
  const [whatsapp, setWhatsapp] = useState("");

  async function onAsk(event) {
    event.preventDefault();
    const content = draft.trim();
    if (!content || pending) return;
    const next = [...messages, { role: "user", content }];
    setMessages(next);
    setDraft("");
    setPending(true);
    setWhatsapp("");
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          messages: next.filter((item) => item !== STARTER).map(({ role, content: text }) => ({ role, content: text })),
        }),
      });
      const data = await response.json().catch(() => ({}));
      const reply = data.reply || "Send this question on WhatsApp and the academy can answer there.";
      setMessages((current) => [...current, { role: "assistant", content: reply }]);
      if (!data.ok || data.fallback === "whatsapp") {
        setWhatsapp(whatsappHref(`Hello Equity Fin Academy. I was asking on the website: ${content}`));
      }
    } catch {
      setMessages((current) => [
        ...current,
        { role: "assistant", content: "The assistant could not be reached. You can send the question on WhatsApp." },
      ]);
      setWhatsapp(whatsappHref(`Hello Equity Fin Academy. I was asking on the website: ${content}`));
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="assist-dock">
      {open ? (
        <section className="assist-panel" aria-label="Academy assistant">
          <header className="assist-head">
            <div>
              <p className="assist-kicker">Equity Fin Academy</p>
              <h2>Ask or enquire</h2>
            </div>
            <button type="button" className="assist-close" onClick={() => setOpen(false)} aria-label="Close assistant">
              ×
            </button>
          </header>
          <div className="assist-tabs" role="tablist">
            <button type="button" role="tab" aria-selected={tab === "chat"} onClick={() => setTab("chat")}>
              Chat
            </button>
            <button type="button" role="tab" aria-selected={tab === "lead"} onClick={() => setTab("lead")}>
              Enquire
            </button>
          </div>
          {tab === "chat" ? (
            <div className="assist-chat">
              <div className="assist-log">
                {messages.map((message, index) => (
                  <p key={`${message.role}-${index}`} className={message.role === "user" ? "assist-user" : "assist-bot"}>
                    {message.content}
                  </p>
                ))}
              </div>
              <form onSubmit={onAsk} className="assist-compose">
                <label className="sr-only" htmlFor="assist-draft">
                  Your question
                </label>
                <input
                  id="assist-draft"
                  value={draft}
                  maxLength={800}
                  onChange={(event) => setDraft(event.target.value)}
                  placeholder="Ask about the courses"
                />
                <button className="btn btn-primary" type="submit" disabled={pending}>
                  {pending ? "…" : "Send"}
                </button>
              </form>
              {whatsapp ? (
                <a className="btn btn-outline btn-block" href={whatsapp} target="_blank" rel="noopener noreferrer">
                  Continue on WhatsApp
                </a>
              ) : null}
            </div>
          ) : (
            <LeadForm compact id="dock-lead-form" />
          )}
        </section>
      ) : null}
      <div className="assist-actions">
        <a className="assist-wa" href={whatsappHref()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp the academy">
          WhatsApp
        </a>
        <button type="button" className="assist-open" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? "Close" : "Chat"}
        </button>
      </div>
    </div>
  );
}
