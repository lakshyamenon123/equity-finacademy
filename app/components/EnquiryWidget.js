"use client";

import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { draftFromMessages } from "../lib/leadCapture";
import { OPEN_CHAT_EVENT } from "../lib/openChat";
import { COURSE_WHATSAPP_TEXT, SLOW_CHAT_REPLY, WHATSAPP_URL, whatsappHref } from "../lib/whatsapp";

const GREETING =
  "👋 Hi! Welcome to Equity Fin Academy. Looking to learn forex? I can help you choose private one-to-one or group classes. May I know your name?";

const STARTER = {
  role: "assistant",
  content: GREETING,
};

const DISMISS_KEY = "efa-chat-dismissed";

const WHATSAPP_LINK = whatsappHref(COURSE_WHATSAPP_TEXT);

function linkify(text) {
  const value = String(text || "");
  const pattern = /https?:\/\/[^\s<>"']+/g;
  const nodes = [];
  let last = 0;
  let key = 0;
  for (const match of value.matchAll(pattern)) {
    const raw = match[0];
    const href = raw.replace(/[),.;!?]+$/g, "");
    const start = match.index || 0;
    if (start > last) nodes.push(value.slice(last, start));
    nodes.push(
      <a key={key} href={href} target="_blank" rel="noopener noreferrer">
        {href}
      </a>
    );
    key += 1;
    const end = start + raw.length;
    if (href.length < raw.length) nodes.push(raw.slice(href.length));
    last = end;
  }
  if (last < value.length) nodes.push(value.slice(last));
  return nodes;
}

export default function EnquiryWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([STARTER]);
  const [draft, setDraft] = useState("");
  const [pending, setPending] = useState(false);
  const [typing, setTyping] = useState(false);
  const [greet, setGreet] = useState(false);
  const [nudged, setNudged] = useState(false);
  const logRef = useRef(null);
  const savedPhone = useRef("");
  const engaged = useRef(false);
  const leadWarned = useRef(false);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(DISMISS_KEY) === "1";
    } catch {
      dismissed = false;
    }
    if (dismissed) return undefined;
    const timer = window.setTimeout(() => {
      if (engaged.current) return;
      const mobile = window.matchMedia("(max-width: 860px)").matches;
      setNudged(true);
      if (mobile) setGreet(true);
      else setOpen(true);
    }, 4000);
    return () => window.clearTimeout(timer);
  }, []);

  function rememberDismiss() {
    engaged.current = true;
    setGreet(false);
    setNudged(false);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* private browsing can block storage */
    }
  }

  function openChatPanel() {
    engaged.current = true;
    flushSync(() => {
      setGreet(false);
      setNudged(false);
      setOpen(true);
    });
    document.getElementById("assist-draft")?.focus();
  }

  useEffect(() => {
    function open() {
      openChatPanel();
    }
    function onClick(event) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a[data-open-chat], a[href='#chat'], a[href='#enquiry']");
      if (!link) return;
      event.preventDefault();
      open();
    }
    window.openChat = open;
    window.addEventListener(OPEN_CHAT_EVENT, open);
    document.addEventListener("click", onClick, true);
    return () => {
      window.removeEventListener(OPEN_CHAT_EVENT, open);
      document.removeEventListener("click", onClick, true);
      if (window.openChat === open) delete window.openChat;
    };
  }, []);

  function dismissGreeting() {
    rememberDismiss();
  }

  function openGreeting() {
    openChatPanel();
  }

  function toggleChat() {
    if (open) {
      setOpen(false);
      rememberDismiss();
      return;
    }
    openChatPanel();
  }

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [messages, open, typing]);

  async function onAsk(event) {
    event.preventDefault();
    const content = draft.trim();
    if (!content || pending) return;
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
      setMessages((current) => [...current, { role: "assistant", content: SLOW_CHAT_REPLY }]);
    };
    const slowTimer = setTimeout(showSlowReply, 26_000);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          messages: next.map(({ role, content: text }) => ({ role, content: text })),
        }),
      });
      if (closed) return;
      const type = response.headers.get("content-type") || "";
      if (!type.includes("text/event-stream")) {
        const data = await response.json().catch(() => ({}));
        closed = true;
        clearTimeout(slowTimer);
        setTyping(false);
        setMessages((current) => [...current, { role: "assistant", content: data.reply || SLOW_CHAT_REPLY }]);
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
            setMessages((current) => [...current, { role: "assistant", content: payload.reply || SLOW_CHAT_REPLY }]);
          }
        }
      }
      if (!closed && !acc) showSlowReply();
    } catch {
      if (!closed && !acc) {
        closed = true;
        clearTimeout(slowTimer);
        setTyping(false);
        setMessages((current) => [...current, { role: "assistant", content: SLOW_CHAT_REPLY }]);
      }
    } finally {
      clearTimeout(slowTimer);
      setTyping(false);
      setPending(false);
    }
  }

  function captureLead(nextMessages) {
    const draftLead = draftFromMessages(nextMessages, window.location.pathname);
    if (!draftLead || savedPhone.current === draftLead.phone) return;
    fetch("/api/lead", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(draftLead),
    })
      .then((response) => response.json().then((data) => ({ response, data })).catch(() => ({ response, data: {} })))
      .then(({ response, data }) => {
        if (data.ok) {
          savedPhone.current = draftLead.phone;
          return;
        }
        if (response.status === 400 || leadWarned.current) return;
        leadWarned.current = true;
        setMessages((current) => [
          ...current,
          {
            role: "assistant",
            content: `I couldn't store that number on the site. You can message us on WhatsApp: ${WHATSAPP_URL}`,
          },
        ]);
      })
      .catch(() => {
        if (leadWarned.current) return;
        leadWarned.current = true;
        setMessages((current) => [
          ...current,
          {
            role: "assistant",
            content: `I couldn't store that number on the site. You can message us on WhatsApp: ${WHATSAPP_URL}`,
          },
        ]);
      });
  }

  return (
    <div className="assist-dock">
      {open ? (
        <section className="assist-panel" aria-label="Academy chat">
          <header className="assist-head">
            <div>
              <p className="assist-kicker">Equity Fin Academy</p>
              <h2>Chat</h2>
            </div>
            <button type="button" className="assist-close" onClick={toggleChat} aria-label="Close chat">
              ×
            </button>
          </header>
          <div className="assist-log" ref={logRef}>
            {messages.map((message, index) => (
              <p key={`${message.role}-${index}`} className={message.role === "user" ? "assist-user" : "assist-bot"}>
                {linkify(message.content)}
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
          <form onSubmit={onAsk} className="assist-compose">
            <label className="sr-only" htmlFor="assist-draft">
              Message
            </label>
            <input
              id="assist-draft"
              value={draft}
              maxLength={500}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Type a message"
              autoComplete="off"
            />
            <button className="btn btn-primary" type="submit" disabled={pending || !draft.trim()}>
              Send
            </button>
          </form>
        </section>
      ) : null}
      {greet && !open ? (
        <div className="assist-greet" role="status">
          <button type="button" className="assist-greet-close" onClick={dismissGreeting} aria-label="Close greeting">
            ×
          </button>
          <button type="button" className="assist-greet-open" onClick={openGreeting}>
            {GREETING}
          </button>
        </div>
      ) : null}
      <div className="assist-actions">
        <a className="assist-wa" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp the academy">
          WhatsApp
        </a>
        <button
          type="button"
          className={nudged ? "assist-open assist-nudge" : "assist-open"}
          aria-expanded={open}
          aria-label={open ? "Close chat" : "Open chat"}
          onClick={toggleChat}
        >
          {open ? "Close" : "Chat"}
          {nudged && !open ? <span className="assist-badge" aria-hidden="true" /> : null}
        </button>
      </div>
    </div>
  );
}
