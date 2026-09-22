import { getMediaData } from "@/lib/db";

/**
 * Talks, interviews and speaking material — editable content, read from
 * `data/media.json` (kept in sync from the admin portal). Server-only:
 * this touches the filesystem, so never import it from a "use client"
 * component. Everywhere it's used today (MediaSpeakingSection, the /media
 * page) is a server component.
 */

export function getAppearances() {
  return getMediaData().appearances;
}

export function getSpeakingTopics() {
  return getMediaData().speakingTopics;
}
