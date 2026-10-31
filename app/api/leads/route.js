import { allowLeadRequest, leadsAuthorized, listLeads, saveLead, sinceMillis, storageKind } from "../../lib/leadsStore";

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
    const { status, ...payload } = await saveLead({
      name: body.name,
      phone: body.phone,
      time: body.time,
      interest: body.interest,
      summary: body.message || body.summary,
      page: body.page,
    });
    return Response.json(payload, { status: status || 200 });
  } catch {
    return Response.json({ ok: false, fallback: "whatsapp", error: "The enquiry could not be stored. Continue on WhatsApp." });
  }
}

export async function GET(request) {
  try {
    if (!leadsAuthorized(request)) {
      return Response.json({ ok: false, error: "Unauthorized." }, { status: 401 });
    }
    const since = sinceMillis(new URL(request.url).searchParams.get("since"));
    if (since == null) {
      return Response.json({ ok: false, error: "since must be an ISO date." }, { status: 400 });
    }
    const kind = storageKind();
    if (kind !== "redis" && kind !== "postgres") {
      return Response.json(
        { ok: false, error: "Durable lead storage is not configured. Connect Upstash Redis or Vercel Postgres." },
        { status: 503 }
      );
    }
    const leads = await listLeads(since);
    return Response.json({ ok: true, leads }, { headers: { "cache-control": "no-store" } });
  } catch {
    return Response.json({ ok: false, error: "Leads could not be read." }, { status: 502 });
  }
}
