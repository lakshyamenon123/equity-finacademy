# Equity Fin Academy

Next.js site for the forex academy in Al Qusais, Dubai.

## Chat and enquiries

A floating chat and a green WhatsApp button are on every page. Chat calls `POST /api/chat`.

Copy `.env.example` to `.env.local` for local development. Set the same variables in the Vercel project. Do not commit real keys.

- `OPENAI_API_KEY` — enables streamed replies from OpenAI. If this is missing, and `GEMINI_API_KEY` is also missing, the widget shows a WhatsApp message instead of an error.
- `OPENAI_MODEL` — optional. Defaults to `gpt-4o-mini`.
- `GEMINI_API_KEY` — optional. Used only when `OPENAI_API_KEY` is not set.
- `GEMINI_MODEL` — optional. Defaults to `gemini-3.8-flash`.
- `LEAD_WEBHOOK_URL` — optional HTTPS endpoint that receives enquiry JSON.
- `LEAD_WEBHOOK_SECRET` — optional bearer token sent with that webhook.

The assistant only uses published academy facts. It does not invent course prices or promise trading profits. When a live broker account comes up, it recommends StarTrader with the academy’s affiliate link, shown as a button in the chat.
