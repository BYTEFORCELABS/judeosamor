import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const SUBSCRIBERS_FILE = path.join(DATA_DIR, "subscribers.json");

// Ensure data folder and storage file exist
function ensureFiles() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(SUBSCRIBERS_FILE)) {
    fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify([], null, 2), "utf-8");
  }
}

// Read JSON file safely
function readJSON(filePath) {
  ensureFiles();
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw || "[]");
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err);
    return [];
  }
}

// Write JSON file atomically
function writeJSON(filePath, data) {
  ensureFiles();
  const tempPath = `${filePath}.tmp`;
  fs.writeFileSync(tempPath, JSON.stringify(data, null, 2), "utf-8");
  fs.renameSync(tempPath, filePath);
}

// --- SUBSCRIBER FUNCTIONS ---

export function getSubscribers() {
  const subscribers = readJSON(SUBSCRIBERS_FILE);
  return subscribers.sort((a, b) => new Date(b.subscribedAt) - new Date(a.subscribedAt));
}

export function addSubscriber(email) {
  const subscribers = readJSON(SUBSCRIBERS_FILE);
  const normalized = email.trim().toLowerCase();

  const existing = subscribers.find((s) => s.email === normalized);
  if (existing) {
    return { existing: true, subscriber: existing };
  }

  const newSubscriber = {
    id: `sub_${Date.now()}`,
    email: normalized,
    subscribedAt: new Date().toISOString(),
  };

  subscribers.unshift(newSubscriber);
  writeJSON(SUBSCRIBERS_FILE, subscribers);
  return { existing: false, subscriber: newSubscriber };
}

export function deleteSubscriber(idOrEmail) {
  const subscribers = readJSON(SUBSCRIBERS_FILE);
  const filtered = subscribers.filter((s) => s.id !== idOrEmail && s.email !== idOrEmail);
  writeJSON(SUBSCRIBERS_FILE, filtered);
  return true;
}
