"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import LeadForm from "./LeadForm";
import { draftFromMessages } from "../lib/leadCapture";
import { hasPhoneAttempt, findUaeMobile } from "../lib/phone";
import { COURSE_WHATSAPP_TEXT, SLOW_CHAT_REPLY, STARTRADER_LIVE_URL, whatsappHref } from "../lib/whatsapp";

const STARTER = {
  role: "assistant",
  content:
    "Hello. I can help with private one-to-one lessons, group classes, or live trading in Dubai, or online across the UAE. May I have your name and a UAE mobile number (+971 or 05)? We'll only use your number to contact you about courses. Trading involves risk.",
};

const WHATSAPP_LINK = whatsappHref(COURSE_WHATSAPP_TEXT);

function ChatText({ text, whatsapp }) {
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
      {whatsapp ? (
        <a className="assist-wa-inline" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          WhatsApp us
        </a>
      ) : null}
    </>
  );
}

export default function EnquiryWidget() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("chat");
  const [messages, setMessages] = useState([STARTER]);
  const [draft, setDraft] = useState("");
  const [pending, setPending] = useState(false);
  const [typing, setTyping] = useState(false);
  const [leadNote, setLeadNote] = useState("");
  const logRef = useRef(null);
  const savedPhone = useRef("");

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [messages, open, typing, leadNote]);

  async function onAsk(event) {
    event.preventDefault();
    const content = draft.trim();
    if (!content || pending) return;
    const history = messages.filter((item) => item !== STARTER);
    const next = [...messages, { role: "user", content }];
    setMessages(next);
    setDraft("");
    setPending(true);
    setTyping(true);
    captureLead(next);
    let closed = false;
    let acc = "";
    const showSlowReply = () => {
      if (closed || acc) return;
      closed = true;
      setTyping(false);
      setPending(false);
      setMessages((current) => [...current, { role: "assistant", content: SLOW_CHAT_REPLY, whatsapp: true }]);
    };
    const slowTimer = setTimeout(showSlowReply, 26_000);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          messages: [...history, { role: "user", content }].map(({ role, content: text }) => ({ role, content: text })),
        }),
      });
      if (closed) return;
      const type = response.headers.get("content-type") || "";
      if (!type.includes("text/event-stream")) {
        const data = await response.json().catch(() => ({}));
        closed = true;
        clearTimeout(slowTimer);
        setTyping(false);
        setMessages((current) => [
          ...current,
          {
            role: "assistant",
            content: data.reply || SLOW_CHAT_REPLY,
            whatsapp: true,
          },
        ]);
        return;
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      while (!closed) {
        const { done, value } = await reader.read();
        if (done || closed) break;
        buffer += decoder.decode(value, { stream: true });
        const chunks = buffer.split("\n\n");
        buffer = chunks.pop() || "";
        for (const chunk of chunks) {
          if (closed) break;
          const line = chunk.split("\n").find((item) => item.startsWith("data:"));
          if (!line) continue;
          const payload = JSON.parse(line.slice(5).trim());
          if (payload.token) {
            clearTimeout(slowTimer);
            setTyping(false);
            acc += payload.token;
            const snapshot = acc;
            setMessages((current) => {
              const copy = current.slice();
              if (copy[copy.length - 1]?.live) copy[copy.length - 1] = { role: "assistant", content: snapshot, live: true };
              else copy.push({ role: "assistant", content: snapshot, live: true });
              return copy;
            });
          }
          if (payload.fallback && !acc) {
            closed = true;
            clearTimeout(slowTimer);
            setTyping(false);
            const reply = payload.reply || SLOW_CHAT_REPLY;
            setMessages((current) => [...current, { role: "assistant", content: reply, whatsapp: true }]);
          }
        }
      }
      if (!closed && !acc) showSlowReply();
    } catch {
      if (!closed && !acc) {
        closed = true;
        clearTimeout(slowTimer);
        setTyping(false);
        setMessages((current) => [...current, { role: "assistant", content: SLOW_CHAT_REPLY, whatsapp: true }]);
      }
    } finally {
      clearTimeout(slowTimer);
      setTyping(false);
      setPending(false);
    }
  }

  function captureLead(nextMessages) {
    const latest = nextMessages[nextMessages.length - 1]?.content || "";
    const draft = draftFromMessages(nextMessages, window.location.pathname);
    if (!draft) {
      if (hasPhoneAttempt(latest) && !findUaeMobile(latest)) {
        setLeadNote("Please send a UAE mobile as +971 followed by 9 digits, or a number starting with 05.");
      }
      return;
    }
    if (savedPhone.current === draft.phone) return;
    fetch("/api/lead", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(draft),
    })
      .then((response) => response.json().then((data) => ({ response, data })).catch(() => ({ response, data: {} })))
      .then(({ response, data }) => {
        if (data.ok) {
          savedPhone.current = draft.phone;
          setLeadNote("Thanks. We'll only use your number to contact you about courses.");
          return;
        }
        if (response.status === 400) {
          setLeadNote(data.error || "Please send your name and a UAE mobile number.");
          return;
        }
        setLeadNote("That number is not stored on the site yet. You can send it on WhatsApp as well.");
      })
      .catch(() => {
        setLeadNote("That number is not stored on the site yet. You can send it on WhatsApp as well.");
      });
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
                    <ChatText text={message.content} whatsapp={message.whatsapp} />
                  </p>
                ))}
                {typing ? (
                  <p className="assist-bot assist-typing" aria-live="polite" aria-label="Assistant is typing">
                    <span />
                    <span />
                    <span />
                  </p>
                ) : null}
              </div>
              <p className="assist-privacy">
                We'll only use your number to contact you about courses. <Link href="/privacy">Privacy</Link>
              </p>
              {leadNote ? <p className="assist-privacy">{leadNote}</p> : null}
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
