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
const MOBILE_QUERY = "(max-width: 860px)";

const QUICK_REPLIES = [
  { label: "Private classes", text: "Private classes" },
  { label: "Group classes", text: "Group classes" },
  { label: "Fees", text: "Fees" },
  { label: "Open StarTrader account", text: "Open StarTrader account" },
  { label: "Download MT5", text: "Download MT5" },
];

const WHATSAPP_LINK = whatsappHref(COURSE_WHATSAPP_TEXT);

const RISK_SENTENCE =
  /[^.!?\n]*(?:trading involves risk|can lose money|risk of loss|significant risk of loss|please note that trading)[^.!?\n]*[.!?]?/gi;
const RISK_TAIL =
  /(?:please note that trading|trading involves risk|people can lose money|you can lose money|you may lose money|risk of loss|significant risk)[^]*$/i;

function withoutRiskDisclaimer(text) {
  return String(text || "")
    .replace(RISK_SENTENCE, "")
    .replace(RISK_TAIL, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
}

function clock(at) {
  return new Date(at).toLocaleTimeString("en-AE", { hour: "numeric", minute: "2-digit" });
}

function linkify(text) {
  const value = withoutRiskDisclaimer(text);
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
  const panelRef = useRef(null);
  const savedPhone = useRef("");
  const engaged = useRef(false);
  const leadWarned = useRef(false);
  const pendingRef = useRef(false);

  function scrollLog() {
    const log = logRef.current;
    if (log) log.scrollTop = log.scrollHeight;
  }

  useEffect(() => {
    setMessages((current) => current.map((item, index) => (index === 0 && !item.at ? { ...item, at: Date.now() } : item)));
  }, []);

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
      const mobile = window.matchMedia(MOBILE_QUERY).matches;
      setNudged(true);
      if (mobile) setGreet(true);
      else setOpen(true);
    }, 4000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const mobile = window.matchMedia(MOBILE_QUERY).matches;
    if (open && mobile) document.body.classList.add("assist-chat-open");
    else document.body.classList.remove("assist-chat-open");
    return () => document.body.classList.remove("assist-chat-open");
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const viewport = window.visualViewport;
    const mobileQuery = window.matchMedia(MOBILE_QUERY);
    const apply = () => {
      const panel = panelRef.current;
      if (!panel) return;
      const mobile = mobileQuery.matches && viewport;
      if (!mobile) {
        panel.style.top = "";
        panel.style.height = "";
        panel.classList.remove("assist-keyboard");
        return;
      }
      panel.style.top = `${viewport.offsetTop}px`;
      panel.style.height = `${viewport.height}px`;
      panel.classList.toggle("assist-keyboard", window.innerHeight - viewport.height > 80);
      scrollLog();
    };
    apply();
    viewport?.addEventListener("resize", apply);
    viewport?.addEventListener("scroll", apply);
    return () => {
      viewport?.removeEventListener("resize", apply);
      viewport?.removeEventListener("scroll", apply);
    };
  }, [open]);

  useEffect(() => {
    scrollLog();
  }, [messages, open, typing]);

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

  function toggleChat() {
    if (open) {
      setOpen(false);
      rememberDismiss();
      return;
    }
    openChatPanel();
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
            at: Date.now(),
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
            at: Date.now(),
          },
        ]);
      });
  }

  async function sendText(raw) {
    const content = String(raw || "").trim();
    if (!content || pendingRef.current) return;
    const next = [...messages, { role: "user", content, at: Date.now() }];
    pendingRef.current = true;
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
      pendingRef.current = false;
      setMessages((current) => [...current, { role: "assistant", content: SLOW_CHAT_REPLY, at: Date.now() }]);
    };
    const slowTimer = setTimeout(showSlowReply, 26_000);
    const rememberReply = (text) => {
      const clean = withoutRiskDisclaimer(text);
      if (!clean) return;
      setMessages((current) => {
        const copy = current.slice();
        const last = copy[copy.length - 1];
        if (last?.live) copy[copy.length - 1] = { role: "assistant", content: clean, live: true, at: last.at };
        else copy.push({ role: "assistant", content: clean, live: true, at: Date.now() });
        return copy;
      });
    };
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
        const reply = withoutRiskDisclaimer(data.reply || SLOW_CHAT_REPLY) || SLOW_CHAT_REPLY;
        setMessages((current) => [...current, { role: "assistant", content: reply, at: Date.now() }]);
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
            rememberReply(acc);
          }
          if (payload.fallback && !acc) {
            closed = true;
            clearTimeout(slowTimer);
            setTyping(false);
            const reply = withoutRiskDisclaimer(payload.reply || SLOW_CHAT_REPLY) || SLOW_CHAT_REPLY;
            setMessages((current) => [...current, { role: "assistant", content: reply, at: Date.now() }]);
          }
        }
      }
      if (!closed && !acc) showSlowReply();
      else if (acc) rememberReply(acc);
    } catch {
      if (!closed && !acc) {
        closed = true;
        clearTimeout(slowTimer);
        setTyping(false);
        setMessages((current) => [...current, { role: "assistant", content: SLOW_CHAT_REPLY, at: Date.now() }]);
      }
    } finally {
      clearTimeout(slowTimer);
      setTyping(false);
      setPending(false);
      pendingRef.current = false;
    }
  }

  function onAsk(event) {
    event.preventDefault();
    sendText(draft);
  }

  const showQuick = !messages.some((item) => item.role === "user");

  return (
    <div className={`assist-dock${open ? " is-open" : ""}`}>
      {open ? (
        <section className="assist-panel" aria-label="Academy chat" ref={panelRef}>
          <header className="assist-head">
            <span className="assist-online" aria-hidden="true" />
            <div>
              <h2>Equity Fin Academy</h2>
              <p className="assist-status">Online</p>
            </div>
            <button type="button" className="assist-close" onClick={toggleChat} aria-label="Close chat">
              ×
            </button>
          </header>
          <div className="assist-log" ref={logRef}>
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={message.role === "user" ? "assist-row is-user" : "assist-row is-bot"}>
                <div className={message.role === "user" ? "assist-user" : "assist-bot"}>{linkify(message.content)}</div>
                {message.at ? (
                  <time className="assist-time" dateTime={new Date(message.at).toISOString()}>
                    {clock(message.at)}
                  </time>
                ) : null}
              </div>
            ))}
            {typing ? (
              <div className="assist-row is-bot">
                <div className="assist-bot assist-typing" aria-live="polite" aria-label="Assistant is typing">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            ) : null}
          </div>
          {showQuick ? (
            <div className="assist-chips" role="group" aria-label="Quick replies">
              {QUICK_REPLIES.map((item) => (
                <button key={item.label} type="button" onClick={() => sendText(item.text)} disabled={pending}>
                  {item.label}
                </button>
              ))}
            </div>
          ) : null}
          <form onSubmit={onAsk} className="assist-compose">
            <label className="sr-only" htmlFor="assist-draft">
              Message
            </label>
            <input
              id="assist-draft"
              value={draft}
              maxLength={500}
              enterKeyHint="send"
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
      <div className="assist-actions">
        <a className="assist-wa" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp the academy">
          WhatsApp
        </a>
        <div className="assist-launch">
          {greet && !open ? (
            <div className="assist-greet" role="status">
              <button type="button" className="assist-greet-close" onClick={rememberDismiss} aria-label="Close greeting">
                ×
              </button>
              <button type="button" className="assist-greet-open" onClick={openChatPanel}>
                {GREETING}
              </button>
            </div>
          ) : null}
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
    </div>
  );
}
