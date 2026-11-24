import { whatsappHref } from "./whatsapp";

// Weekly free demo slots, Dubai time (Gulf Standard Time, UTC+4).
// `day` uses JavaScript's getUTCDay numbering (0 = Sunday). `time` is the
// value the leads API accepts for the preferred-time field.
export const DEMO_SLOTS = [
  { id: "mon-1930", day: 1, dayLabel: "Monday", hour: "7:30 pm", time: "evening" },
  { id: "tue-2030", day: 2, dayLabel: "Tuesday", hour: "8:30 pm", time: "evening" },
  { id: "wed-1930", day: 3, dayLabel: "Wednesday", hour: "7:30 pm", time: "evening" },
  { id: "thu-2030", day: 4, dayLabel: "Thursday", hour: "8:30 pm", time: "evening" },
  { id: "sat-1100", day: 6, dayLabel: "Saturday", hour: "11:00 am", time: "weekend" },
  { id: "sat-1600", day: 6, dayLabel: "Saturday", hour: "4:00 pm", time: "weekend" },
];

export const DEMO_FORMATS = ["Private one-to-one", "Small group", "Not sure yet"];

export const INTEREST_FREE_DEMO = "Free demo class";
export const INTEREST_TRADING_PLAN = "Free trading plan";
export const INTEREST_BRIEFING = "Executive Market Briefing";
export const INTEREST_FEES = "Fee enquiry";
export const INTEREST_STRATEGY_CALL = "Free strategy call";

export function slotLabel(slot) {
  return `${slot.dayLabel} ${slot.hour} (Dubai time)`;
}

export function demoWhatsappHref({ name, slot, format }) {
  return whatsappHref(
    [
      "Hi Gopi, I would like to book a free demo class.",
      name ? `Name: ${name}` : "",
      slot ? `Slot: ${slot}` : "",
      format ? `Interest: ${format}` : "",
    ]
      .filter(Boolean)
      .join("\n")
  );
}

export const STRATEGY_CALL_WHATSAPP = whatsappHref(
  "Hi Gopi, I would like a free 20-minute strategy call about forex training."
);

// Posts a lead to the site's own server route. The route holds every
// credential, so nothing secret is needed or exposed here.
export async function submitLead(payload, { keepalive = false } = {}) {
  try {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        ...payload,
        page: typeof window !== "undefined" ? window.location.pathname : payload.page,
      }),
      keepalive,
    });
    const data = await response.json().catch(() => ({}));
    return data && data.ok ? { ok: true } : { ok: false, error: data?.error || "" };
  } catch {
    return { ok: false, error: "" };
  }
}
