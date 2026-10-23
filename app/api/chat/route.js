import { answerQuestion, sanitizeMessages, WHATSAPP_FALLBACK_REPLY } from "../../lib/assistant";

export async function POST(request) {
  try {
    const body = await request.json().catch(() => null);
    const messages = sanitizeMessages(body?.messages);
    const latest = messages[messages.length - 1];
    if (!latest || latest.role !== "user") {
      return Response.json(
        { ok: false, fallback: "whatsapp", reply: WHATSAPP_FALLBACK_REPLY },
        { status: 400 }
      );
    }
    const result = await answerQuestion(messages);
    return Response.json(result);
  } catch {
    return Response.json({ ok: false, fallback: "whatsapp", reply: WHATSAPP_FALLBACK_REPLY });
  }
}
