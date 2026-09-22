import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const SUBSCRIBERS_FILE = path.join(DATA_DIR, "subscribers.json");
const PUBLICATIONS_FILE = path.join(DATA_DIR, "publications.json");
const MEDIA_FILE = path.join(DATA_DIR, "media.json");

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
function readJSON(filePath, fallback = []) {
  ensureFiles();
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    return raw ? JSON.parse(raw) : fallback;
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err);
    return fallback;
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

// Drops keys with an `undefined` value, so a partial update object never
// overwrites existing fields it didn't intend to touch.
function definedOnly(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== undefined));
}

// --- PUBLICATIONS (research / citations) ---

const PUBLICATIONS_FALLBACK = {
  scholarUrl: "",
  scholarRetrieved: "",
  scholarMetrics: [],
  publications: [],
};

export function getPublicationsData() {
  return readJSON(PUBLICATIONS_FILE, PUBLICATIONS_FALLBACK);
}

export function savePublicationsData(data) {
  writeJSON(PUBLICATIONS_FILE, data);
  return data;
}

export function addPublication(publication) {
  const data = getPublicationsData();
  const newPub = { id: `pub_${Date.now()}`, ...publication };
  data.publications.unshift(newPub);
  savePublicationsData(data);
  return newPub;
}

export function updatePublication(id, updates) {
  const data = getPublicationsData();
  const index = data.publications.findIndex((p) => p.id === id);
  if (index === -1) return null;
  data.publications[index] = { ...data.publications[index], ...definedOnly(updates), id };
  savePublicationsData(data);
  return data.publications[index];
}

export function deletePublication(id) {
  const data = getPublicationsData();
  data.publications = data.publications.filter((p) => p.id !== id);
  savePublicationsData(data);
  return true;
}

export function updateScholarMetrics({ scholarMetrics, scholarRetrieved, scholarUrl }) {
  const data = getPublicationsData();
  if (scholarMetrics) data.scholarMetrics = scholarMetrics;
  if (scholarRetrieved !== undefined) data.scholarRetrieved = scholarRetrieved;
  if (scholarUrl !== undefined) data.scholarUrl = scholarUrl;
  savePublicationsData(data);
  return data;
}

// --- MEDIA (talks, podcasts, speaking topics) ---

const MEDIA_FALLBACK = { appearances: [], speakingTopics: [] };

export function getMediaData() {
  return readJSON(MEDIA_FILE, MEDIA_FALLBACK);
}

export function saveMediaData(data) {
  writeJSON(MEDIA_FILE, data);
  return data;
}

export function addAppearance(appearance) {
  const data = getMediaData();
  const newItem = { id: `app_${Date.now()}`, ...appearance };
  data.appearances.unshift(newItem);
  saveMediaData(data);
  return newItem;
}

export function updateAppearance(id, updates) {
  const data = getMediaData();
  const index = data.appearances.findIndex((a) => a.id === id);
  if (index === -1) return null;
  data.appearances[index] = { ...data.appearances[index], ...definedOnly(updates), id };
  saveMediaData(data);
  return data.appearances[index];
}

export function deleteAppearance(id) {
  const data = getMediaData();
  data.appearances = data.appearances.filter((a) => a.id !== id);
  saveMediaData(data);
  return true;
}

export function addSpeakingTopic(topic) {
  const data = getMediaData();
  const newItem = { id: `topic_${Date.now()}`, ...topic };
  data.speakingTopics.unshift(newItem);
  saveMediaData(data);
  return newItem;
}

export function updateSpeakingTopic(id, updates) {
  const data = getMediaData();
  const index = data.speakingTopics.findIndex((t) => t.id === id);
  if (index === -1) return null;
  data.speakingTopics[index] = { ...data.speakingTopics[index], ...definedOnly(updates), id };
  saveMediaData(data);
  return data.speakingTopics[index];
}

export function deleteSpeakingTopic(id) {
  const data = getMediaData();
  data.speakingTopics = data.speakingTopics.filter((t) => t.id !== id);
  saveMediaData(data);
  return true;
}
