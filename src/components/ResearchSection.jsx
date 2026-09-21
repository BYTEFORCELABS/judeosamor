"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { BookOpen, ExternalLink, ArrowRight, FileText, Cpu, Database, ShieldAlert, Sparkles } from "lucide-react";

export default function ResearchSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Works" },
    { id: "ai", label: "AI & Threat Detection" },
    { id: "forensics", label: "Digital Forensics" },
    { id: "fraud", label: "Fraud & Anti-Phishing" },
    { id: "policy", label: "Data Sovereignty" },
  ];

  const publications = [
    {
      title: "Adaptive Temporal Convolutional Network Autoencoders for Malicious Anomaly Detection",
      category: "ai",
      journal: "Peer-Reviewed Security & AI Research",
      year: "2024",
      highlight: "Featured Paper",
      abstract:
        "Investigating sequence analysis and deep temporal autoencoders to uncover obfuscated malicious payloads, outperforming conventional intrusion detection architectures.",
      tags: ["Deep Learning", "Malware Classification", "Temporal Networks"],
      link: "https://www.researchgate.net/profile/Jude-Osamor",
    },
    {
      title: "The Evolution of Phishing: Adversarial Advancements and Machine Learning Defense",
      category: "fraud",
      journal: "International Journal of Cybersecurity & Forensics",
      year: "2023",
      highlight: "High Citation",
      abstract:
        "Comprehensive taxonomy tracing the migration from generic deceptive emails to AI-synthesized social engineering attacks, presenting resilient defensive paradigms.",
      tags: ["Anti-Phishing", "Social Engineering", "Fraud Prevention"],
      link: "https://www.researchgate.net/profile/Jude-Osamor",
    },
    {
      title: "Comparative Empirical Analysis of Digital Forensic Tooling: FTK vs. Autopsy in Investigative Pipelines",
      category: "forensics",
      journal: "Digital Forensics Research Journal",
      year: "2023",
      highlight: "Investigative Standard",
      abstract:
        "A rigorous comparative benchmark evaluating forensic parsing speed, artifact extraction fidelity, and legal chain-of-custody compliance across leading commercial and open-source platforms.",
      tags: ["DFIR", "Forensic Tools", "Incident Response"],
      link: "https://www.researchgate.net/profile/Jude-Osamor",
    },
    {
      title: "Machine Learning Approaches to Financial Fraud and Credit Card Anomaly Detection",
      category: "fraud",
      journal: "Banking Systems & Cyber Risk",
      year: "2023",
      highlight: "Enterprise Focus",
      abstract:
        "Formulating real-time predictive scoring models that effectively counter financial transaction fraud with low latency, preserving client throughput in enterprise banking environments.",
      tags: ["Financial Security", "Predictive AI", "Enterprise Banking"],
      link: "https://www.researchgate.net/profile/Jude-Osamor",
    },
    {
      title: "Who Owns Africa's Data? Data Sovereignty, Cloud Dominance, and Enterprise Governance in the Age of AI",
      category: "policy",
      journal: "Technology Policy & African Digital Economy",
      year: "2024",
      highlight: "Keynote Focus",
      abstract:
        "Strategic evaluation of data residency laws, digital value extraction, and national infrastructure autonomy across developing technological frontiers.",
      tags: ["Data Sovereignty", "Cloud Governance", "AI Policy"],
      link: "https://www.researchgate.net/profile/Jude-Osamor",
    },
    {
      title: "Systemic Vulnerabilities in Global Software Supply Chains: A Ransomware Vector Analysis",
      category: "forensics",
      journal: "Critical Infrastructure Cyber Journal",
      year: "2022",
      highlight: "Risk Assessment",
      abstract:
        "Examining downstream propagation mechanics in modern supply chain compromises with retrospective lessons from major historic ransomware incidents.",
      tags: ["Supply Chain", "Ransomware", "Risk Governance"],
      link: "https://www.researchgate.net/profile/Jude-Osamor",
    },
  ];

  const filteredPubs =
    activeCategory === "all"
      ? publications
      : publications.filter((p) => p.category === activeCategory);

  return (
    <section id="research" className="relative bg-[#0A1E35] py-24 sm:py-32 border-t border-white/5 overflow-hidden text-white">
      {/* Subtle radial aura */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,#071322_0%,#0A1E35_60%)] pointer-events-none" />
      <div className="absolute -top-24 left-1/3 w-[500px] h-[500px] bg-[#C6A98A]/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <Reveal variant="fade">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C6A98A]">
                Scholarship & Peer-Reviewed Inquiry
              </span>
            </Reveal>

            <Reveal as="h2" variant="wipe" className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F9F6F0] font-bold tracking-tight">
              Research & Strategic Publications
            </Reveal>

            <Reveal as="p" variant="up" delay={100} className="text-zinc-300 text-base sm:text-lg font-normal leading-relaxed">
              Dr. Osamor&rsquo;s published scholarship investigates the convergence of machine learning, 
              digital forensics, fraud mitigation, and data residency in critical digital infrastructure.
            </Reveal>
          </div>

          <Reveal variant="fade" delay={180} className="flex flex-wrap items-center gap-4">
            <a
              href="https://www.researchgate.net/profile/Jude-Osamor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#071322] border border-[#C6A98A]/40 text-[#C6A98A] hover:bg-[#C6A98A] hover:text-[#0A1E35] text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 shadow-sm"
            >
              <span>ResearchGate Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://sciprofiles.com/profile/judeosamor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 border border-white/10 text-zinc-300 hover:text-white hover:border-white/30 text-xs uppercase tracking-[0.18em] font-medium transition-colors"
            >
              <span>SciProfiles</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Reveal>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#C6A98A] text-[#0A1E35] shadow-md"
                  : "bg-[#071322]/60 text-zinc-400 hover:text-white border border-white/5 hover:border-white/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPubs.map((pub, idx) => (
            <Reveal key={pub.title} variant="up" delay={idx * 70}>
              <div className="h-full bg-[#071322] border border-white/10 p-7 flex flex-col justify-between hover:border-[#C6A98A]/50 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#C6A98A]">
                      {pub.year} &middot; {pub.journal}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 border border-[#C6A98A]/30 text-[#DAC8B3]">
                      {pub.highlight}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#DAC8B3] transition-colors leading-snug">
                    {pub.title}
                  </h3>

                  <p className="text-zinc-300 text-sm font-sans leading-relaxed">
                    {pub.abstract}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-[#0A1E35] text-zinc-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-[#C6A98A] group-hover:text-white font-semibold transition-colors"
                  >
                    <span>View Academic Paper</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
