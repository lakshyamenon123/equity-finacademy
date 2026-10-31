import { createHash, timingSafeEqual } from "crypto";
import { cleanSlot, UNNAMED_VISITOR } from "./booking";
import { findUaeMobile } from "./phone";
import { cleanVisitorName, chatSummary } from "./leadCapture";

const REDIS_KEY = "efa:leads";
const leadHits = new Map();

export function dubaiTimestamp(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Dubai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type) => parts.find((part) => part.type === type)?.value || "00";
  return `${get("year")}-${get("month")}-${get("day")}T${get("hour")}:${get("minute")}:${get("second")}+04:00`;
}

export function redisConfig() {
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL || "";
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN || "";
  if (!url || !token) return null;
  return { url, token };
}

export function postgresUrl() {
  return process.env.POSTGRES_URL || process.env.POSTGRES_URL_NON_POOLING || process.env.DATABASE_URL || "";
}

export function storageKind() {
  if (redisConfig()) return "redis";
  if (postgresUrl()) return "postgres";
  if (process.env.LEAD_WEBHOOK_URL) return "webhook";
  return "";
}

export function allowLeadRequest(ip) {
  const now = Date.now();
  const recent = (leadHits.get(ip) || []).filter((time) => now - time < 60_000);
  if (recent.length >= 8) {
    leadHits.set(ip, recent);
    return false;
  }
  recent.push(now);
  leadHits.set(ip, recent);
  if (leadHits.size > 500) leadHits.delete(leadHits.keys().next().value);
  return true;
}

function clip(value, max) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

function cleanPage(value) {
  const page = clip(value, 200);
  if (!page.startsWith("/") || page.startsWith("//")) return "/";
  return page.split("?")[0];
}

function sameLeadRefresh(prior, lead) {
  if (!prior) return false;
  if (lead.time && lead.time !== (prior.time || "")) return true;
  if (lead.interest && lead.interest !== (prior.interest || "")) return true;
  if (prior.name === UNNAMED_VISITOR && lead.name && lead.name !== UNNAMED_VISITOR) return true;
  return false;
}

export function prepareLead(input) {
  const name = cleanVisitorName(input?.name);
  const phone = findUaeMobile(input?.phone);
  if (!name) return { error: "Please send your name." };
  if (!phone) return { error: "Please send a UAE mobile as +971 followed by 9 digits, or a number starting with 05." };
  const time = cleanSlot(input?.time);
  let summary = chatSummary(input?.summary || input?.message || "");
  if (time && !/preferred time:/i.test(summary)) summary = chatSummary(`Preferred time: ${time}. ${summary}`);
  return {
    lead: {
      id: crypto.randomUUID(),
      name,
      phone,
      time,
      interest: clip(input?.interest, 80) || "Course enquiry",
      summary,
      page: cleanPage(input?.page),
      createdAt: dubaiTimestamp(),
    },
  };
}

async function redisCommand(command) {
  const config = redisConfig();
  const response = await fetch(config.url, {
    method: "POST",
    headers: {
      authorization: `Bearer ${config.token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(command),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok || data.error) throw new Error("redis");
  return data.result;
}

async function recentRedisEntries(minScore) {
  const rows = await redisCommand(["ZRANGEBYSCORE", REDIS_KEY, String(minScore), "+inf"]);
  if (!Array.isArray(rows)) return [];
  return rows
    .map((raw) => {
      try {
        return { raw: String(raw), lead: JSON.parse(raw) };
      } catch {
        return null;
      }
    })
    .filter((item) => item?.lead);
}

async function recentRedisLeads(minScore) {
  const entries = await recentRedisEntries(minScore);
  return entries.map((item) => item.lead);
}

let postgresReady = null;

async function postgresSql() {
  const { neon } = await import("@neondatabase/serverless");
  const sql = neon(postgresUrl());
  if (!postgresReady) {
    postgresReady = (async () => {
      await sql`
        CREATE TABLE IF NOT EXISTS leads (
          id text PRIMARY KEY,
          name text NOT NULL,
          phone text NOT NULL,
          interest text,
          summary text,
          page text,
          created_at timestamptz NOT NULL,
          preferred_time text
        )
      `;
      await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS preferred_time text`;
    })().catch((error) => {
      postgresReady = null;
      throw error;
    });
  }
  await postgresReady;
  return sql;
}

async function postWebhook(lead) {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) return false;
  const headers = { "content-type": "application/json" };
  if (process.env.LEAD_WEBHOOK_SECRET) headers.authorization = `Bearer ${process.env.LEAD_WEBHOOK_SECRET}`;
  const response = await fetch(url, { method: "POST", headers, body: JSON.stringify(lead) });
  return response.ok;
}

export async function saveLead(input) {
  const prepared = prepareLead(input);
  if (prepared.error) return { ok: false, error: prepared.error, status: 400 };
  const lead = prepared.lead;
  const kind = storageKind();
  if (!kind) return { ok: false, fallback: "whatsapp", error: "Lead storage is not configured." };

  try {
    if (kind === "redis") {
      const since = Date.now() - 12 * 60 * 60 * 1000;
      const recent = await recentRedisEntries(since);
      const phoneRows = recent.filter((item) => item.lead.phone === lead.phone);
      const match =
        phoneRows.find((item) => item.lead.name === lead.name) ||
        phoneRows.find((item) => item.lead.name === UNNAMED_VISITOR);
      if (match && !sameLeadRefresh(match.lead, lead)) {
        return { ok: true, duplicate: true, storage: "redis" };
      }
      if (match) {
        lead.id = match.lead.id || lead.id;
        lead.createdAt = match.lead.createdAt || lead.createdAt;
        await redisCommand(["ZREM", REDIS_KEY, match.raw]);
      }
      await redisCommand(["ZADD", REDIS_KEY, String(Date.parse(lead.createdAt)), JSON.stringify(lead)]);
      return { ok: true, storage: "redis", ...(match ? { updated: true } : {}) };
    }

    if (kind === "postgres") {
      const sql = await postgresSql();
      const existing = await sql`
        SELECT id, name, phone, interest, preferred_time
        FROM leads
        WHERE phone = ${lead.phone}
          AND created_at > NOW() - INTERVAL '12 hours'
          AND (name = ${lead.name} OR name = ${UNNAMED_VISITOR})
        ORDER BY created_at DESC
        LIMIT 1
      `;
      const prior = existing[0]
        ? {
            name: existing[0].name,
            phone: existing[0].phone,
            interest: existing[0].interest,
            time: existing[0].preferred_time || "",
          }
        : null;
      if (prior && !sameLeadRefresh(prior, lead)) return { ok: true, duplicate: true, storage: "postgres" };
      if (prior) {
        await sql`
          UPDATE leads
          SET name = ${lead.name},
              interest = ${lead.interest},
              summary = ${lead.summary},
              preferred_time = ${lead.time}
          WHERE id = ${existing[0].id}
        `;
        return { ok: true, storage: "postgres", updated: true };
      }
      await sql`
        INSERT INTO leads (id, name, phone, interest, summary, page, created_at, preferred_time)
        VALUES (${lead.id}, ${lead.name}, ${lead.phone}, ${lead.interest}, ${lead.summary}, ${lead.page}, ${lead.createdAt}, ${lead.time})
      `;
      return { ok: true, storage: "postgres" };
    }

    const ok = await postWebhook(lead);
    if (!ok) return { ok: false, fallback: "whatsapp", error: "Lead storage is not configured." };
    return { ok: true, storage: "webhook" };
  } catch {
    return { ok: false, fallback: "whatsapp", error: "The enquiry could not be stored. Continue on WhatsApp." };
  }
}

function cleanToken(value) {
  return String(value ?? "").trim();
}

export function leadsAuthorized(request) {
  const expected = cleanToken(process.env.LEADS_TOKEN);
  const header = request.headers.get("authorization") || "";
  const match = header.match(/^\s*bearer\s+([\s\S]+)$/i);
  const provided = cleanToken(match ? match[1] : request.headers.get("x-leads-token") || "");
  if (!expected || !provided) return false;
  const left = createHash("sha256").update(expected).digest();
  const right = createHash("sha256").update(provided).digest();
  return timingSafeEqual(left, right);
}

export function sinceMillis(value) {
  if (!value) {
    const day = `${dubaiTimestamp().slice(0, 10)}T00:00:00+04:00`;
    return Date.parse(day);
  }
  const ms = Date.parse(value);
  if (!Number.isFinite(ms)) return null;
  return ms;
}

export async function listLeads(sinceMs) {
  const kind = storageKind();
  if (kind === "redis") {
    const leads = await recentRedisLeads(sinceMs);
    return leads
      .filter((lead) => Date.parse(lead.createdAt) >= sinceMs)
      .sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt))
      .slice(0, 500)
      .map(publicLead);
  }
  if (kind === "postgres") {
    const sql = await postgresSql();
    const since = new Date(sinceMs).toISOString();
    const result = await sql`
      SELECT id, name, phone, interest, summary, page, created_at, preferred_time
      FROM leads
      WHERE created_at >= ${since}
      ORDER BY created_at ASC
      LIMIT 500
    `;
    return result.map((row) =>
      publicLead({
        name: row.name,
        phone: row.phone,
        time: row.preferred_time || "",
        interest: row.interest,
        summary: row.summary,
        page: row.page,
        createdAt: dubaiTimestamp(new Date(row.created_at)),
      })
    );
  }
  return null;
}

function publicLead(lead) {
  return {
    name: lead.name,
    phone: lead.phone,
    time: lead.time || "",
    interest: lead.interest || "",
    summary: lead.summary || "",
    page: lead.page || "/",
    createdAt: lead.createdAt,
  };
}
