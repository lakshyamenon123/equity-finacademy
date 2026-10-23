import { allowLeadRequest, saveLead } from "../../lib/leadsStore";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const ip = (request.headers.get("x-forwarded-for") || "local").split(",")[0].trim() || "local";
    if (!allowLeadRequest(ip)) {
      return Response.json(
        { ok: false, fallback: "whatsapp", error: "Please wait a moment, or continue on WhatsApp." },
        { status: 429 }
      );
    }
    const body = await request.json().catch(() => ({}));
    const { status, ...payload } = await saveLead(body);
    return Response.json(payload, { status: status || 200 });
  } catch {
    return Response.json({ ok: false, fallback: "whatsapp", error: "The enquiry could not be stored. Continue on WhatsApp." });
  }
}
