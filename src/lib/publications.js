/**
 * Static configuration for Dr. Jude Osamor's publication record.
 *
 * The papers themselves, the scholar metrics and the retrieval date are
 * editable content — see `publicationsData.js`, which reads them from
 * `data/publications.json` (kept in sync from the admin portal). What's left
 * here is the small, structural taxonomy that isn't something he'd edit from
 * day to day, and is safe to import from client components.
 */

export const researchAreas = [
  { id: "all", label: "All Work" },
  { id: "ai", label: "AI & Malware Detection" },
  { id: "fraud", label: "Financial Fraud" },
  { id: "iot", label: "IoT & Vehicular Security" },
  { id: "materials", label: "Earlier Research" },
];

// The author to emphasise when a byline is rendered.
export const AUTHOR_SURNAME = "Osamor";
