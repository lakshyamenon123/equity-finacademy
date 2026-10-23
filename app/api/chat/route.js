import {
  allowChatRequest,
  chatProvider,
  MAX_MESSAGE_LENGTH,
  sanitizeMessages,
  streamReply,
  WHATSAPP_FALLBACK_REPLY,
} from "../../lib/assistant";

export const maxDuration = 60;
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function jsonFallback(reply, status = 200) {
  return Response.json({ ok: false, fallback: "whatsapp", reply }, { status });
}

export async function POST(request) {
  try {
    const ip = (request.headers.get("x-forwarded-for") || "local").split(",")[0].trim() || "local";
    if (!allowChatRequest(ip)) {
      return jsonFallback("You have sent several messages in a short time. Continue this conversation on WhatsApp.", 429);
    }

    const body = await request.json().catch(() => null);
    const rawLatest = Array.isArray(body?.messages) ? body.messages[body.messages.length - 1]?.content : "";
    if (String(rawLatest || "").trim().length > MAX_MESSAGE_LENGTH) {
      return jsonFallback(`Please keep your message under ${MAX_MESSAGE_LENGTH} characters, or continue on WhatsApp.`);
    }

    const messages = sanitizeMessages(body?.messages);
    const latest = messages[messages.length - 1];
    if (!latest || latest.role !== "user") {
      return jsonFallback(WHATSAPP_FALLBACK_REPLY);
    }
    if (!chatProvider()) {
      return jsonFallback(WHATSAPP_FALLBACK_REPLY);
    }

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        const send = (payload) => controller.enqueue(encoder.encode(`data: ${JSON.stringify(payload)}\n\n`));
        try {
          let wrote = false;
          await streamReply(messages, (token) => {
            wrote = true;
            send({ token });
          });
          if (!wrote) send({ fallback: "whatsapp", reply: WHATSAPP_FALLBACK_REPLY });
          else send({ done: true });
        } catch (error) {
          console.error(`[chat] upstream ${error?.status || ""}: ${error?.body || error?.message || error}`);
          send({ fallback: "whatsapp", reply: WHATSAPP_FALLBACK_REPLY });
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "content-type": "text/event-stream; charset=utf-8",
        "cache-control": "no-cache, no-transform",
      },
    });
  } catch (error) {
    console.error(`[chat] request failed: ${error?.message || error}`);
    return jsonFallback(WHATSAPP_FALLBACK_REPLY);
  }
}
