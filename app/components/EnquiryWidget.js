"use client";

import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import {
  ASK_ANYTHING,
  GREETING,
  INTEREST_DEMO,
  OFFER_ASK,
  OFFER_DEMO,
  OFFER_FOLLOWUP,
  OFFER_MENTOR,
  TIME_SLOTS,
  bookingNote,
  bookingWhatsappHref,
  confirmPrompt,
  interestForOffer,
  invalidPhonePrompt,
  invalidTimePrompt,
  mentionsBookingOffer,
  namePrompt,
  offerLabel,
  phonePrompt,
  parseSlot,
  timePrompt,
} from "../lib/booking";
import { draftFromMessages, visitorNameFromText } from "../lib/leadCapture";
import { OPEN_CHAT_EVENT } from "../lib/openChat";
import { findUaeMobile } from "../lib/phone";
import { COURSE_WHATSAPP_TEXT, SLOW_CHAT_REPLY, WHATSAPP_URL, whatsappHref } from "../lib/whatsapp";

const STARTER = {
  role: "assistant",
  content: GREETING,
};

const DISMISS_KEY = "efa-chat-dismissed";
const MOBILE_QUERY = "(max-width: 860px)";

const OFFER_CHIPS = [
  { label: OFFER_DEMO, text: OFFER_DEMO },
  { label: OFFER_MENTOR, text: OFFER_MENTOR },
  { label: OFFER_ASK, text: OFFER_ASK },
];

const BOOK_CHIPS = [
  { label: OFFER_DEMO, text: OFFER_DEMO },
  { label: OFFER_MENTOR, text: OFFER_MENTOR },
];

const TOPIC_CHIPS = [
  { label: "Private classes", text: "Private classes" },
  { label: "Group classes", text: "Group classes" },
  { label: "Fees", text: "Fees" },
  { label: "Open StarTrader account", text: "Open StarTrader account" },
  { label: "Download MT5", text: "Download MT5" },
];

const TIME_CHIPS = TIME_SLOTS.map((slot) => ({ label: slot.label, text: slot.label }));

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

function bubble(role, content, extra) {
  return { role, content, at: Date.now(), ...extra };
}

export default function EnquiryWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([STARTER]);
  const [draft, setDraft] = useState("");
  const [pending, setPending] = useState(false);
  const [typing, setTyping] = useState(false);
  const [greet, setGreet] = useState(false);
  const [nudged, setNudged] = useState(false);
  const [step, setStep] = useState("offer");
  const [showOffers, setShowOffers] = useState(false);
  const logRef = useRef(null);
  const panelRef = useRef(null);
  const savedPhone = useRef("");
  const engaged = useRef(false);
  const leadWarned = useRef(false);
  const pendingRef = useRef(false);
  const stepRef = useRef("offer");
  const lastReplyRef = useRef("");
  const saveChain = useRef(Promise.resolve());
  const flowRef = useRef({
    mode: "greet",
    interest: "",
    name: "",
    phone: "",
    time: "",
    aiReplies: 0,
    offeredText: false,
    booked: false,
    startedAt: 0,
  });

  function scrollLog() {
    const log = logRef.current;
    if (log) log.scrollTop = log.scrollHeight;
  }

  function go(next) {
    stepRef.current = next;
    setStep(next);
  }

  function pushMessages(items) {
    setMessages((current) => [...current, ...items]);
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
  }, [messages, open, typing, step, showOffers]);

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

  function beginBook(kind) {
    const interest = interestForOffer(kind);
    const now = Date.now();
    if (now - flowRef.current.startedAt < 500 && flowRef.current.interest === interest && stepRef.current === "name") return;
    flowRef.current = {
      ...flowRef.current,
      mode: "book",
      interest,
      name: "",
      time: "",
      booked: false,
      startedAt: now,
    };
    setShowOffers(false);
    openChatPanel();
    go("name");
    pushMessages([
      bubble("user", offerLabel(kind)),
      bubble("assistant", namePrompt()),
    ]);
  }

  function beginFree() {
    if (stepRef.current === "topics") return;
    flowRef.current.mode = "free";
    setShowOffers(false);
    openChatPanel();
    go("topics");
    pushMessages([bubble("user", OFFER_ASK), bubble("assistant", ASK_ANYTHING)]);
  }

  const actionsRef = useRef({});
  actionsRef.current = { openChatPanel, beginBook };

  useEffect(() => {
    function openFrom(detail) {
      actionsRef.current.openChatPanel();
      if (detail?.intent === "demo" || detail?.intent === "mentor") actionsRef.current.beginBook(detail.intent);
    }
    function onEvent(event) {
      openFrom(event?.detail);
    }
    function onClick(event) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a[data-open-chat], a[href='#chat'], a[href='#enquiry']");
      if (!link) return;
      event.preventDefault();
      const intent = link.getAttribute("data-chat-intent");
      openFrom(intent === "demo" || intent === "mentor" ? { intent } : undefined);
    }
    window.openChat = (detail) => openFrom(detail);
    window.addEventListener(OPEN_CHAT_EVENT, onEvent);
    document.addEventListener("click", onClick, true);
    return () => {
      window.removeEventListener(OPEN_CHAT_EVENT, onEvent);
      document.removeEventListener("click", onClick, true);
      if (window.openChat) delete window.openChat;
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

  function warnLeadStore() {
    if (leadWarned.current) return;
    leadWarned.current = true;
    pushMessages([
      bubble("assistant", `I couldn't store that number on the site. You can message us on WhatsApp: ${WHATSAPP_URL}`),
    ]);
  }

  function postLead(payload, { warn = true } = {}) {
    const run = () =>
      fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json().then((data) => ({ response, data })).catch(() => ({ response, data: {} })))
        .then(({ response, data }) => {
          if (data.ok) {
            savedPhone.current = payload.phone;
            flowRef.current.phone = payload.phone;
            return true;
          }
          if (warn && response.status !== 400) warnLeadStore();
          return false;
        })
        .catch(() => {
          if (warn) warnLeadStore();
          return false;
        });
    const next = saveChain.current.then(run, run);
    saveChain.current = next.then(
      () => undefined,
      () => undefined
    );
    return next;
  }

  function captureLead(nextMessages) {
    const draftLead = draftFromMessages(nextMessages, window.location.pathname);
    if (!draftLead) return;
    if (savedPhone.current === draftLead.phone && !draftLead.time) return;
    const interest = flowRef.current.interest || draftLead.interest;
    const time = flowRef.current.time || draftLead.time || "";
    const summary = time ? `Preferred time: ${time}. ${draftLead.summary}` : draftLead.summary;
    postLead({
      ...draftLead,
      interest,
      time,
      summary,
    });
  }

  async function finishBooking(name, phone, time) {
    const interest = flowRef.current.interest || INTEREST_DEMO;
    flowRef.current = { ...flowRef.current, name, phone, time, booked: true, mode: "free" };
    setShowOffers(false);
    pendingRef.current = true;
    setPending(true);
    setTyping(true);
    const saved = await postLead(
      {
        name,
        phone,
        time,
        interest,
        page: window.location.pathname,
        summary: bookingNote(interest, time),
      },
      { warn: false }
    );
    const href = bookingWhatsappHref({ name, interest, time });
    go("chat");
    pendingRef.current = false;
    setPending(false);
    setTyping(false);
    if (saved) {
      pushMessages([bubble("assistant", confirmPrompt(name), { whatsapp: href })]);
      return;
    }
    pushMessages([
      bubble("assistant", `I couldn't store that number on the site. You can still WhatsApp Gopi Chandran's team to confirm your slot.`, {
        whatsapp: href,
      }),
    ]);
  }

  function handleName(content) {
    const phone = findUaeMobile(content);
    const name = visitorNameFromText(phone ? content.replace(phone, " ") : content);
    if (!name) {
      if (/[?]/.test(content) || content.split(/\s+/).length > 6) {
        flowRef.current.mode = "free";
        go("chat");
        askAi(content);
        return;
      }
      pushMessages([
        bubble("user", content),
        bubble("assistant", "Please send your name so Gopi Chandran's team knows who to ask for."),
      ]);
      return;
    }
    flowRef.current.name = name;
    pushMessages([bubble("user", content)]);
    if (phone) {
      flowRef.current.phone = phone;
      go("time");
      pushMessages([bubble("assistant", `Thanks ${name}. ${timePrompt()}`)]);
      postLead(
        {
          name,
          phone,
          interest: flowRef.current.interest || INTEREST_DEMO,
          page: window.location.pathname,
          summary: bookingNote(flowRef.current.interest, ""),
        },
        { warn: false }
      );
      return;
    }
    go("phone");
    pushMessages([bubble("assistant", phonePrompt(name))]);
  }

  function handlePhone(content) {
    const phone = findUaeMobile(content);
    const name = flowRef.current.name;
    pushMessages([bubble("user", content)]);
    if (!phone) {
      pushMessages([bubble("assistant", invalidPhonePrompt())]);
      return;
    }
    flowRef.current.phone = phone;
    go("time");
    pushMessages([bubble("assistant", `Thanks ${name}. ${timePrompt()}`)]);
    postLead(
      {
        name,
        phone,
        interest: flowRef.current.interest || INTEREST_DEMO,
        page: window.location.pathname,
        summary: bookingNote(flowRef.current.interest, ""),
      },
      { warn: false }
    );
  }

  function handleTime(content) {
    const time = parseSlot(content);
    pushMessages([bubble("user", content)]);
    if (!time) {
      pushMessages([bubble("assistant", invalidTimePrompt())]);
      return;
    }
    finishBooking(flowRef.current.name, flowRef.current.phone, time);
  }

  function maybeOfferFollowup() {
    const flow = flowRef.current;
    flow.aiReplies += 1;
    if (flow.booked || flow.phone || stepRef.current !== "chat") return;
    if (flow.aiReplies === 1 || flow.aiReplies === 2) setShowOffers(true);
    if (flow.offeredText || flow.aiReplies > 2) return;
    if (mentionsBookingOffer(lastReplyRef.current)) {
      flow.offeredText = true;
      return;
    }
    if (flow.aiReplies === 1 || flow.aiReplies === 2) {
      flow.offeredText = true;
      pushMessages([bubble("assistant", OFFER_FOLLOWUP)]);
    }
  }

  async function askAi(raw) {
    const content = String(raw || "").trim();
    if (!content || pendingRef.current) return;
    const phone = findUaeMobile(content);
    if (phone) {
      flowRef.current.phone = phone;
      setShowOffers(false);
    }
    const next = [...messages, bubble("user", content)];
    pendingRef.current = true;
    go("chat");
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
      lastReplyRef.current = SLOW_CHAT_REPLY;
      setMessages((current) => [...current, bubble("assistant", SLOW_CHAT_REPLY)]);
    };
    const slowTimer = setTimeout(showSlowReply, 26_000);
    const rememberReply = (text) => {
      const clean = withoutRiskDisclaimer(text);
      if (!clean) return;
      lastReplyRef.current = clean;
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
        lastReplyRef.current = reply;
        setMessages((current) => [...current, bubble("assistant", reply)]);
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
            lastReplyRef.current = reply;
            setMessages((current) => [...current, bubble("assistant", reply)]);
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
        lastReplyRef.current = SLOW_CHAT_REPLY;
        setMessages((current) => [...current, bubble("assistant", SLOW_CHAT_REPLY)]);
      }
    } finally {
      clearTimeout(slowTimer);
      setTyping(false);
      setPending(false);
      pendingRef.current = false;
      maybeOfferFollowup();
    }
  }

  function sendText(raw) {
    const content = String(raw || "").trim();
    if (!content || pendingRef.current) return;
    setDraft("");
    if (content === OFFER_DEMO) {
      beginBook("demo");
      return;
    }
    if (content === OFFER_MENTOR) {
      beginBook("mentor");
      return;
    }
    if (content === OFFER_ASK && stepRef.current !== "name" && stepRef.current !== "phone" && stepRef.current !== "time") {
      beginFree();
      return;
    }
    if (stepRef.current === "name") {
      handleName(content);
      return;
    }
    if (stepRef.current === "phone") {
      handlePhone(content);
      return;
    }
    if (stepRef.current === "time") {
      handleTime(content);
      return;
    }
    askAi(content);
  }

  function onAsk(event) {
    event.preventDefault();
    sendText(draft);
  }

  const chips =
    step === "offer" ? OFFER_CHIPS : step === "topics" ? TOPIC_CHIPS : step === "time" ? TIME_CHIPS : showOffers ? BOOK_CHIPS : null;
  const stacked = step === "offer" || (step === "chat" && showOffers);
  const placeholder =
    step === "name" ? "Your name" : step === "phone" ? "WhatsApp number" : step === "time" ? "Morning, afternoon, evening, or weekend" : "Type a message";

  return (
    <div className={`assist-dock${open ? " is-open" : ""}`}>
      {open ? (
        <section className="assist-panel" aria-label="Academy chat" ref={panelRef}>
          <header className="assist-head">
            <span className="assist-online" aria-hidden="true" />
            <div className="assist-id">
              <h2>Equity Fin Academy</h2>
              <p className="assist-status">Online</p>
            </div>
            <button type="button" className="assist-demo" onClick={() => beginBook("demo")}>
              Free demo class
            </button>
            <button type="button" className="assist-close" onClick={toggleChat} aria-label="Close chat">
              ×
            </button>
          </header>
          <div className="assist-log" ref={logRef}>
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={message.role === "user" ? "assist-row is-user" : "assist-row is-bot"}>
                <div className={message.role === "user" ? "assist-user" : "assist-bot"}>
                  {linkify(message.content)}
                  {message.whatsapp ? (
                    <a className="assist-wa-btn" href={message.whatsapp} target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                  ) : null}
                </div>
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
          {chips ? (
            <div className={stacked ? "assist-chips is-stack" : "assist-chips"} role="group" aria-label="Quick replies">
              {chips.map((item) => (
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
              placeholder={placeholder}
              inputMode={step === "phone" ? "tel" : "text"}
              autoComplete={step === "phone" ? "tel" : step === "name" ? "name" : "off"}
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
              <div className="assist-greet-offers" role="group" aria-label="Ways to start">
                {OFFER_CHIPS.map((item) => (
                  <button key={item.label} type="button" onClick={() => sendText(item.text)}>
                    {item.label}
                  </button>
                ))}
              </div>
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
