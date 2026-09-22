/**
 * Talks, interviews and speaking material.
 *
 * The two `videoId` entries are real, verified YouTube uploads and play
 * inline on the site. Anything without a videoId is an engagement with no
 * public recording, so it links out instead of pretending to be watchable.
 */

export const appearances = [
  {
    id: "africa-data-ai",
    videoId: "VW-1pH2HFHk",
    title: "Who Owns Africa's Data In The Age of AI",
    kind: "Keynote Panel",
    channel: "Wale Ameen Technology Channel",
    role: "Keynote Panellist & Cybersecurity VP",
    summary:
      "Digital sovereignty, cloud infrastructure ownership and data residency — and why emerging markets need control of the datasets their AI is trained on.",
  },
  {
    id: "cykea-podcast",
    videoId: "q_Y-HU0O8ag",
    title: "The Cykea Podcast — Episode 2",
    kind: "Podcast Episode",
    channel: "The Cykea Podcast",
    role: "Guest",
    summary:
      "The route from academic computing to a cybersecurity VP role, the real mechanics of running an enterprise SOC, and the founding of CyBlack.",
  },
  {
    id: "cyblack-conference",
    videoId: null,
    href: "https://cyblack.org",
    title: "Empowering the Next Generation of Cybersecurity Leadership",
    kind: "Conference Keynote",
    channel: "Annual CyBlack UK Conference",
    role: "Co-Founder & Keynote Host",
    summary:
      "Bringing policy leaders, corporate sponsors and emerging talent together on the industry's talent shortage, systemic inclusion and practical apprenticeships.",
  },
];

export const speakingTopics = [
  {
    topic: "Enterprise Cyber Resilience in High-Stakes Finance",
    audience: "CISOs, Board Directors, Executive Committees",
    desc: "Turning reactive security spend into resilient defence architecture that holds up against nation-state and automated attacks.",
  },
  {
    topic: "Data Sovereignty & AI Governance in Emerging Markets",
    audience: "Regulators, Tech Executives, Policy Thinktanks",
    desc: "Cross-border data residency, cloud autonomy, and the infrastructure investment needed to avoid algorithmic dependency.",
  },
  {
    topic: "Machine Learning in Modern Threat Hunting",
    audience: "Engineering Leaders, Security Architects, Researchers",
    desc: "What his published work on API-sequence models and image-based malware classification means in an operational SOC.",
  },
  {
    topic: "Building Resilient, Diverse Cyber Talent Pipelines",
    audience: "Human Capital Executives, Non-Profit Leaders, Alliances",
    desc: "Frameworks for recruiting, mentoring and retaining underrepresented technical talent against a global workforce shortage.",
  },
];
