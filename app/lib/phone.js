const INTL = /(?:\+|00)?971[\s\-().]*5(?:[\s\-().]*\d){8}(?!\d)/g;
const LOCAL = /(?<!\d)05(?:[\s\-().]*\d){8}(?!\d)/g;
const NATIONAL = /(?<!\d)5(?:[\s\-().]*\d){8}(?!\d)/g;

export function normalizeUaeMobile(input) {
  let raw = String(input || "").trim().replace(/[^\d+]/g, "");
  let national = "";
  if (raw.startsWith("+971")) national = raw.slice(4);
  else if (raw.startsWith("00971")) national = raw.slice(5);
  else if (raw.startsWith("971")) national = raw.slice(3);
  else if (raw.startsWith("0")) national = raw.slice(1);
  else national = raw;
  if (national.startsWith("0")) national = national.slice(1);
  if (!/^5\d{8}$/.test(national)) return "";
  return `+971${national}`;
}

export function findUaeMobile(text) {
  const source = String(text || "");
  for (const pattern of [INTL, LOCAL, NATIONAL]) {
    pattern.lastIndex = 0;
    for (const match of source.matchAll(pattern)) {
      const phone = normalizeUaeMobile(match[0]);
      if (phone) return phone;
    }
  }
  return "";
}

export function hasPhoneAttempt(text) {
  return String(text || "").replace(/\D/g, "").length >= 8;
}
