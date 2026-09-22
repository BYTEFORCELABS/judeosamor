import { getPublicationsData } from "@/lib/db";

/**
 * Server-only accessors for the editable half of the publication record
 * (papers, scholar metrics, retrieval date). Reads `data/publications.json`,
 * which the admin portal writes to. Never import this from a "use client"
 * component — it touches the filesystem.
 */

export function getPublications() {
  return getPublicationsData().publications;
}

export function getScholarMetrics() {
  return getPublicationsData().scholarMetrics;
}

export function getScholarRetrieved() {
  return getPublicationsData().scholarRetrieved;
}

export function getScholarUrl() {
  return getPublicationsData().scholarUrl;
}
