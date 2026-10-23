"use client";

import { useEffect, useRef, useState } from "react";
import LeadForm from "./LeadForm";
import { COURSE_WHATSAPP_TEXT, STARTRADER_LIVE_URL, whatsappHref } from "../lib/whatsapp";

const STARTER = {
  role: "assistant",
  content:
    "Ask about private one-to-one lessons, group classes, or live trading in Al Qusais. I can help you enrol, and you can book a seat on WhatsApp. Trading involves risk.",
};

const WHATSAPP_LINK = whatsappHref(COURSE_WHATSAPP_TEXT);

function ChatText({ text }) {
  const parts = String(text || "").split(STARTRADER_LIVE_URL);
  return (
    <>
      {parts.map((part, index) => (
        <span key={index}>
          {part}
          {index < parts.length - 1 ? (
            <a className="broker-chat-btn" href={STARTRADER_LIVE_URL} target="_blank" rel="noopener noreferrer">
              Open a StarTrader live account
            </a>
          ) : null}
        </span>
      ))}
    </>
  );
}

export default function EnquiryWidget() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("chat");
  const [messages, setMessages] = useState([STARTER]);
  const [draft, setDraft] = useState("");
  const [pending, setPending] = useState(false);
  const logRef = useRef(null);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [messages, open]);

  async function onAsk(event) {
    event.preventDefault();
    const content = draft.trim();
    if (!content || pending) return;
    const history = messages.filter((item) => item !== STARTER);
    const next = [...messages, { role: "user", content }];
    setMessages(next);
    setDraft("");
    setPending(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          messages: [...history, { role: "user", content }].map(({ role, content: text }) => ({ role, content: text })),
        }),
      });
      const type = response.headers.get("content-type") || "";
      if (!type.includes("text/event-stream")) {
        const data = await response.json().catch(() => ({}));
        setMessages((current) => [
          ...current,
          {
            role: "assistant",
            content: data.reply || "Message us on WhatsApp and we can help you book a seat.",
          },
        ]);
        return;
      }

      setMessages((current) => [...current, { role: "assistant", content: "" }]);
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let acc = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const chunks = buffer.split("\n\n");
        buffer = chunks.pop() || "";
        for (const chunk of chunks) {
          const line = chunk.split("\n").find((item) => item.startsWith("data:"));
          if (!line) continue;
          const payload = JSON.parse(line.slice(5).trim());
          if (payload.token) {
            acc += payload.token;
            const snapshot = acc;
            setMessages((current) => {
              const copy = current.slice();
              copy[copy.length - 1] = { role: "assistant", content: snapshot };
              return copy;
            });
          }
          if (payload.fallback) {
            const reply = payload.reply || "Message us on WhatsApp and we can help you book a seat.";
            setMessages((current) => {
              const copy = current.slice();
              copy[copy.length - 1] = { role: "assistant", content: reply };
              return copy;
            });
          }
        }
      }
    } catch {
      setMessages((current) => [
        ...current,
        { role: "assistant", content: "The assistant could not be reached. Message us on WhatsApp and we can help you book." },
      ]);
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
              <div className="assist-log" ref={logRef}>
                {messages.map((message, index) => (
                  <p key={`${message.role}-${index}`} className={message.role === "user" ? "assist-user" : "assist-bot"}>
                    <ChatText text={message.content} />
                  </p>
                ))}
              </div>
              <p className="assist-risk">Trading involves risk. You can lose money.</p>
              <a className="broker-chat-btn" href={STARTRADER_LIVE_URL} target="_blank" rel="noopener noreferrer">
                Open a StarTrader live account
              </a>
              <a className="assist-wa-inline" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              <form onSubmit={onAsk} className="assist-compose">
                <label className="sr-only" htmlFor="assist-draft">
                  Your question
                </label>
                <input
                  id="assist-draft"
                  value={draft}
                  maxLength={500}
                  onChange={(event) => setDraft(event.target.value)}
                  placeholder="Ask about the courses"
                />
                <button className="btn btn-primary" type="submit" disabled={pending}>
                  {pending ? "…" : "Send"}
                </button>
              </form>
            </div>
          ) : (
            <LeadForm compact id="dock-lead-form" />
          )}
        </section>
      ) : null}
      <div className="assist-actions">
        <a className="assist-wa" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp the academy">
          WhatsApp
        </a>
        <button type="button" className="assist-open" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? "Close" : "Chat"}
        </button>
      </div>
    </div>
  );
}
