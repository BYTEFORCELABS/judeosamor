import crypto from "crypto";

// Signed, expiring admin session. The cookie value is an HMAC of its expiry
// time, so it cannot be forged without knowing ADMIN_PASSWORD / ADMIN_SECRET.
// If neither env var is set, nobody can log in (fails closed).

export const ADMIN_COOKIE = "admin_auth";
export const SESSION_MS = 7 * 24 * 60 * 60 * 1000;

function secret() {
  return process.env.ADMIN_SECRET || process.env.ADMIN_PASSWORD || "";
}

function sign(payload) {
  return crypto.createHmac("sha256", secret()).update(payload).digest("hex");
}

function safeEqual(a, b) {
  const ha = crypto.createHash("sha256").update(String(a)).digest();
  const hb = crypto.createHash("sha256").update(String(b)).digest();
  return crypto.timingSafeEqual(ha, hb);
}

export function passwordMatches(input) {
  const pass = process.env.ADMIN_PASSWORD;
  if (!pass || typeof input !== "string") return false;
  return safeEqual(input, pass);
}

export function createSessionToken() {
  const exp = String(Date.now() + SESSION_MS);
  return `${exp}.${sign(exp)}`;
}

export function isValidSessionToken(token) {
  if (!secret() || typeof token !== "string") return false;
  const [exp, sig] = token.split(".");
  if (!exp || !sig) return false;
  if (!(Number(exp) > Date.now())) return false;
  return safeEqual(sig, sign(exp));
}

export function isAuthorized(request) {
  const token = request.cookies.get(ADMIN_COOKIE)?.value;
  if (isValidSessionToken(token)) return true;

  const header = request.headers.get("authorization") || "";
  const pass = process.env.ADMIN_PASSWORD;
  if (pass && header.startsWith("Bearer ") && safeEqual(header.slice(7), pass)) {
    return true;
  }
  return false;
}
