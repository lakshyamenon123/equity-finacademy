import { storeLead } from "../../lib/assistant";

function clip(value, max) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const lead = {
      name: clip(body.name, 80),
      phone: clip(body.phone, 40),
      interest: clip(body.interest, 80),
      message: clip(body.message, 1000),
      page: clip(body.page, 200),
      createdAt: new Date().toISOString(),
    };
    if (!lead.name || !lead.phone) {
      return Response.json({ ok: false, error: "Name and phone are required." }, { status: 400 });
    }
    const result = await storeLead(lead);
    return Response.json(result);
  } catch {
    return Response.json({ ok: false, fallback: "whatsapp" });
  }
}
