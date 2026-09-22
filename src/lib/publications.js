/**
 * Dr. Jude Osamor's publication record.
 *
 * Source: his Google Scholar profile (user v6eLMpAAAAAJ), retrieved
 * September 2026. Every title, venue, year and citation count below is
 * taken from that profile — nothing here is illustrative.
 *
 * This is his most-cited work, not the complete list: an i10-index of 13
 * means at least thirteen papers have ten or more citations. The pages
 * that render this say so and link to the profile as the source of truth.
 */

export const SCHOLAR_URL =
  "https://scholar.google.com/citations?user=v6eLMpAAAAAJ&hl=en";

export const SCHOLAR_RETRIEVED = "September 2026";

export const scholarMetrics = [
  { value: "918", label: "Total Citations" },
  { value: "11", label: "h-index" },
  { value: "13", label: "i10-index" },
];

/**
 * Research areas drawn from the actual corpus rather than invented
 * marketing categories. `accent` drives the generated cover for each card.
 */
export const researchAreas = [
  { id: "all", label: "All Work" },
  { id: "ai", label: "AI & Malware Detection" },
  { id: "fraud", label: "Financial Fraud" },
  { id: "iot", label: "IoT & Vehicular Security" },
  { id: "materials", label: "Earlier Research" },
];

export const publications = [
  {
    id: "credit-card-fraud-ensemble",
    title: "Enhancing credit card fraud detection: an ensemble machine learning approach",
    authors: ["AR Khalid", "N Owoh", "O Uthmani", "M Ashawa", "J Osamor", "J Adejoh"],
    venue: "Big Data and Cognitive Computing",
    volume: "8(1)",
    year: "2024",
    citations: 352,
    area: "fraud",
    summary:
      "An ensemble approach to catching fraudulent card transactions, combining multiple classifiers to raise detection rates without drowning analysts in false positives.",
  },
  {
    id: "iov-trust-privacy",
    title: "A novel trust-based security and privacy model for internet of vehicles",
    authors: ["MS Rathore", "M Poongodi", "P Saurabh", "UK Lilhore", "S Bourouis", "et al."],
    venue: "Computers and Electrical Engineering",
    volume: "102",
    year: "2022",
    citations: 198,
    area: "iot",
    summary:
      "A trust model for connected vehicles, addressing how nodes in a vehicular network establish confidence in one another without surrendering driver privacy.",
  },
  {
    id: "malware-transformer-cnn",
    title: "Enhanced image-based malware classification using transformer-based convolutional neural networks",
    authors: ["M Ashawa", "N Owoh", "S Hosseinzadeh", "J Osamor"],
    venue: "Electronics",
    volume: "13(20)",
    year: "2024",
    citations: 51,
    area: "ai",
    summary:
      "Treating malware binaries as images and classifying them with transformer-based convolutional networks, improving on conventional signature and CNN-only pipelines.",
  },
  {
    id: "malware-api-gru-gan",
    title:
      "Malware detection based on API call sequence analysis: a gated recurrent unit–generative adversarial network model approach",
    authors: ["N Owoh", "J Adejoh", "S Hosseinzadeh", "M Ashawa", "J Osamor", "A Qureshi"],
    venue: "Future Internet",
    volume: "16(10)",
    year: "2024",
    citations: 38,
    area: "ai",
    summary:
      "Reading the sequence of API calls a program makes and pairing a GRU with a GAN to recognise malicious behaviour, including variants the model has not seen before.",
  },
  {
    id: "collagen-silk-scaffolds",
    title:
      "Optimization of glutaraldehyde vapor treatment for electrospun collagen/silk tissue engineering scaffolds",
    authors: ["B Zhu", "W Li", "N Chi", "RV Lewis", "J Osamor", "R Wang"],
    venue: "ACS Omega",
    volume: "2(6)",
    year: "2017",
    citations: 84,
    area: "materials",
    summary:
      "Earlier materials-science work on crosslinking electrospun collagen and silk scaffolds — from before the move into security research, and still cited.",
  },
];

// The author to emphasise when a byline is rendered.
export const AUTHOR_SURNAME = "Osamor";
