# Equity Fin Academy

Next.js site for the forex academy in Al Qusais, Dubai.

## Chat and enquiries

A floating chat and a green WhatsApp button are on every page. Chat calls `POST /api/chat`.

Early in the chat the assistant asks for a name and a UAE mobile (`+971` followed by 9 digits, or a number starting with `05`). The widget shows: “We'll only use your number to contact you about courses.” A valid pair is saved with `POST /api/lead` (name, phone, Asia/Dubai timestamp, page, interest, and a short summary). The same store receives the contact form via `POST /api/leads`.

Copy `.env.example` to `.env.local` for local development. Set the same variables in the Vercel project. Do not commit real keys.

### Chat

- `OPENAI_API_KEY` — streamed replies from OpenAI. If this and `GEMINI_API_KEY` are both missing, the widget shows a WhatsApp message instead of an error.
- `OPENAI_MODEL` — optional. Defaults to `gpt-4o-mini`.
- `GEMINI_API_KEY` — optional. Used only when `OPENAI_API_KEY` is not set.
- `GEMINI_MODEL` — optional. Defaults to `gemini-3.8-flash`.

The assistant only uses published academy facts. It does not invent course prices or promise trading profits. When a live broker account comes up, it recommends StarTrader with the academy’s affiliate link, shown as a button in the chat.

### Lead storage

Connect one durable store. `GET /api/leads` reads Redis or Postgres only.

**Upstash Redis (Vercel KV / Marketplace)**

1. In the Vercel project, open Storage and create or connect Upstash Redis.
2. Vercel adds either `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`, or `KV_REST_API_URL` and `KV_REST_API_TOKEN`. Leave whichever pair the integration fills in.
3. Redeploy.

**Vercel Postgres**

1. In Storage, create a Postgres database and connect it to this project. Vercel provisions this through Neon and sets `POSTGRES_URL`.
2. `POSTGRES_URL_NON_POOLING` or `DATABASE_URL` are accepted if `POSTGRES_URL` is empty.
3. Redeploy. The `leads` table is created the first time an enquiry is saved.

**Daily export**

1. Set `LEADS_TOKEN` to a long random string in the Vercel project environment.
2. Request leads since a Dubai ISO timestamp:

```bash
curl -H "Authorization: Bearer $LEADS_TOKEN" \
  "https://www.equityfinacademy.com/api/leads?since=2026-10-23T00:00:00%2B04:00"
```

`x-leads-token` is also accepted. If `since` is omitted, the response starts at the current Dubai day. Each lead has `name`, `phone`, `interest`, `summary`, `page`, and `createdAt` (`+04:00`).

`LEAD_WEBHOOK_URL` and `LEAD_WEBHOOK_SECRET` are optional and used only when Redis and Postgres are both unset. A webhook does not power the daily export.

If none of these are set, the chat still answers and shows a WhatsApp message instead of storing the number.

### Visits

`@vercel/analytics` is included on every page. In the Vercel project open Analytics and enable Web Analytics, then redeploy. No extra environment variable is required. Page counts do not include names or phone numbers.
