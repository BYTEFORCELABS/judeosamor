"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Award, GraduationCap, ShieldCheck, HeartHandshake, ArrowRight, ExternalLink } from "lucide-react";

export default function AboutSection() {
  const pillars = [
    {
      icon: GraduationCap,
      title: "Academic & Intellectual Rigor",
      tagline: "SCHOLARLY AUTHORITY",
      description:
        "Rooted in continuous peer-reviewed research, algorithmic rigor, and analytical depth. Holding a PhD, Dr. Osamor investigates machine learning in anomaly detection, predictive anti-phishing models, and digital forensic integrity.",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Cyber Leadership",
      tagline: "FORTUNE 500 RESILIENCE",
      description:
        "Directing high-stakes defense across complex financial systems. Serving as Vice President of Cybersecurity, delivering structural integrity, SOC operational excellence, and proactive threat intelligence.",
    },
    {
      icon: HeartHandshake,
      title: "Ethical Stewardship & Inclusion",
      tagline: "CO-FOUNDER OF CYBLACK",
      description:
        "Championing talent equity, public cyber education, and mentorship. As co-founder of CyBlack, opening durable professional pathways for Black professionals in the UK cybersecurity industry.",
    },
  ];

  const milestones = [
    {
      role: "Vice President of Cybersecurity",
      org: "Fortune 500 Financial Institution",
      period: "Present",
      detail: "Leading cyber defense operations, cloud security resilience, and institutional threat management.",
    },
    {
      role: "Co-Founder & Executive Director",
      org: "CyBlack (UK Non-Profit)",
      period: "Present",
      detail: "Steering national mentorship cohorts, industry conferences, and technical security internships.",
    },
    {
      role: "Senior Lecturer & Academic Researcher",
      org: "UWE Bristol / Glasgow Caledonian / Westminster",
      period: "Past & Ongoing",
      detail: "Delivering advanced curricula in Digital Forensics, Network Security, and AI-assisted defense architectures.",
    },
    {
      role: "Doctor of Philosophy (PhD) & Computing (BSc 1st Class)",
      org: "Imperial College London & Edinburgh Napier University",
      period: "Academic Distinction",
      detail: "Scholarly honors including MFM National First Class Honours recognition.",
    },
  ];

  return (
    <section id="about" className="relative bg-[#0A1E35] py-24 sm:py-32 border-t border-white/5 overflow-hidden text-white">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,#112947_0%,#0A1E35_70%)] pointer-events-none" />
      <div className="absolute -bottom-32 -left-20 w-[480px] h-[480px] bg-[#C6A98A]/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-24">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <Reveal variant="fade">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C6A98A]">
              Executive Biography & Narrative
            </span>
          </Reveal>
          
          <Reveal as="h2" variant="wipe" className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F9F6F0] font-bold tracking-tight leading-[1.05]">
            Quiet Strength. <br />
            <span className="text-[#C6A98A] italic font-normal">Command-Level</span> Foresight.
          </Reveal>

          <Reveal as="p" variant="up" delay={120} className="text-zinc-300 text-base sm:text-lg font-normal leading-relaxed">
            Dr. Jude Osamor bridges the gap between frontier academic investigation and board-level enterprise risk governance.
          </Reveal>
        </div>

        {/* Biography Row: Brand Lockup / Portrait + Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Visual Brand Card / Executive Portrait */}
          <Reveal variant="left" className="lg:col-span-5">
            <div className="relative group max-w-md mx-auto lg:mx-0">
              {/* Outer offset gold border */}
              <div className="absolute -inset-3 border border-[#C6A98A]/35 translate-x-2.5 translate-y-2.5 transition-transform duration-700 pointer-events-none" />
              
              <div className="relative bg-[#071322] border border-white/10 shadow-2xl overflow-hidden">
                {/* Executive Portrait */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#0A1E35]">
                  <Image
                    src="/images/jude_osamor_beige_steeple.jpg"
                    alt="Dr. Jude Osamor in discussion"
                    fill
                    sizes="(max-width: 1024px) 90vw, 420px"
                    className="object-cover object-[center_20%] group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071322] via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="p-7 space-y-5 bg-[#071322]">
                  <div className="space-y-1">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-[#C6A98A] font-semibold">
                      Core Specializations
                    </p>
                    <p className="font-serif text-lg font-bold text-white">
                      Cyber Strategy &amp; Research Authority
                    </p>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-300 font-sans">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C6A98A]" />
                      <span>Enterprise Security Operations (SOC)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C6A98A]" />
                      <span>AI / ML Applications in Cyber Threat Mitigation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C6A98A]" />
                      <span>Digital Forensics &amp; Incident Response (DFIR)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C6A98A]" />
                      <span>African Data Sovereignty &amp; Tech Policy</span>
                    </li>
                  </ul>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
                    <span>Based in United Kingdom</span>
                    <span className="text-[#C6A98A] font-semibold uppercase tracking-wider text-[11px]">Global Engagements</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Narrative Content */}
          <div className="lg:col-span-7 space-y-6 text-zinc-300 text-base sm:text-[17px] leading-[1.8] font-normal">
            <Reveal as="p" variant="up">
              In an era where technology is frequently commoditized and cybersecurity is often reduced to reactive panic,{" "}
              <strong className="text-[#F9F6F0] font-semibold">Dr. Jude Osamor</strong> advocates for an unshakeable standard of quiet resilience.
              His career is distinguished by the rare intersection of senior banking cybersecurity leadership and prolific academic research.
            </Reveal>

            <Reveal as="p" variant="up" delay={100}>
              As <strong className="text-[#F9F6F0] font-semibold">Vice President of Cybersecurity</strong> within Fortune 500 financial institutions, 
              he steers high-consequence security architecture, incident response, and cyber defenses against automated threat actors. 
              His leadership ensures that mission-critical digital infrastructure withstands sophisticated nation-state and cybercriminal campaigns.
            </Reveal>

            <Reveal as="p" variant="up" delay={150}>
              Parallel to his corporate leadership, Dr. Osamor holds a <strong className="text-[#F9F6F0] font-semibold">Doctor of Philosophy (PhD)</strong> and 
              has served as Senior Lecturer at institutions including the University of the West of England (UWE Bristol) and Glasgow Caledonian University. 
              His peer-reviewed publications explore how artificial intelligence and temporal convolutional networks can detect malicious anomalies, prevent targeted phishing, and secure financial conduits.
            </Reveal>

            <Reveal as="p" variant="up" delay={200}>
              Recognizing that the cybersecurity workforce requires profound structural equity, Dr. Osamor co-founded{" "}
              <strong className="text-[#F9F6F0] font-semibold">CyBlack</strong>—a landmark non-profit committed to opening high-value cyber careers, 
              mentorship, and internships for underrepresented Black professionals in the UK.
            </Reveal>

            <Reveal variant="up" delay={250} className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/#advisory"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#C6A98A] hover:text-[#DAC8B3] font-semibold border-b border-[#C6A98A]/50 pb-1 transition-colors"
              >
                <span>Request Executive Advisory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="https://cyblack.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-zinc-400 hover:text-white font-medium border-b border-transparent hover:border-zinc-400 pb-1 transition-colors"
              >
                <span>Visit CyBlack.org</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </Reveal>
          </div>

        </div>

        {/* ============================================================ */}
        {/* BRAND PILLARS (Brand Identity Guidelines Page 1)              */}
        {/* ============================================================ */}
        <div id="pillars" className="space-y-12 pt-12 border-t border-white/10">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C6A98A]">
              Strategic Foundations
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#F9F6F0] font-bold">
              The Three Brand Pillars
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base">
              Defined in the official brand guidelines as the guiding tenets of Dr. Jude Osamor&rsquo;s professional authority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} variant="up" delay={idx * 120}>
                  <div className="h-full bg-[#071322] border border-[#C6A98A]/25 p-8 relative flex flex-col justify-between group hover:border-[#C6A98A]/60 transition-colors duration-300">
                    <div className="space-y-5">
                      <div className="w-12 h-12 flex items-center justify-center bg-[#0A1E35] border border-[#C6A98A]/30 text-[#C6A98A] group-hover:bg-[#C6A98A] group-hover:text-[#0A1E35] transition-colors duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      
                      <div className="space-y-1.5">
                        <p className="text-[10px] uppercase tracking-[0.22em] text-[#C6A98A] font-semibold">
                          {pillar.tagline}
                        </p>
                        <h4 className="font-serif text-xl text-white font-bold">
                          {pillar.title}
                        </h4>
                      </div>

                      <p className="text-zinc-300 text-sm leading-relaxed font-sans">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-white/5">
                      <span className="text-[11px] uppercase tracking-[0.16em] text-zinc-400 group-hover:text-[#C6A98A] transition-colors">
                        Core Competency &middot; 0{idx + 1}
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* ============================================================ */}
        {/* EXECUTIVE MILESTONES & CREDENTIALS                           */}
        {/* ============================================================ */}
        <div className="space-y-8 pt-8">
          <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold">
            Career Trajectory & Appointments
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {milestones.map((m, idx) => (
              <Reveal key={m.role} variant="up" delay={idx * 80}>
                <div className="bg-[#071322]/80 border border-white/5 p-6 space-y-2 hover:border-[#C6A98A]/30 transition-colors">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C6A98A]">
                      {m.period}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A98A]/60" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-white">
                    {m.role}
                  </h4>
                  <p className="text-xs text-[#DAC8B3] uppercase tracking-wider font-semibold">
                    {m.org}
                  </p>
                  <p className="text-sm text-zinc-400 pt-1 font-sans">
                    {m.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
