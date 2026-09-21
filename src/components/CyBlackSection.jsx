"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Users, GraduationCap, Award, ExternalLink, ArrowRight, ShieldCheck, Heart } from "lucide-react";

export default function CyBlackSection() {
  const initiatives = [
    {
      title: "Executive & Peer Mentorship",
      desc: "Structured cohorts pairing emerging cybersecurity practitioners with veteran CISOs, engineers, and threat analysts across the UK.",
      icon: Users,
    },
    {
      title: "Technical Internships & Labs",
      desc: "Practical, hands-on Security Operations Center (SOC) simulations, incident handling exercises, and certification pathways.",
      icon: ShieldCheck,
    },
    {
      title: "Annual CyBlack Conference",
      desc: "Flagship cybersecurity symposium gathering industry innovators, policymakers, and talent for keynotes, workshops, and hiring expos.",
      icon: Award,
    },
    {
      title: "Certification Scholarships",
      desc: "Direct sponsorship and financial support enabling underrepresented candidates to acquire industry-standard credentials.",
      icon: GraduationCap,
    },
  ];

  return (
    <section id="cyblack" className="relative bg-[#071322] py-24 sm:py-32 border-t border-white/5 overflow-hidden text-white">
      {/* Ambient background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,#0A1E35_0%,#071322_70%)] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-[#C6A98A]/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-20">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8 space-y-4">
            <Reveal variant="fade">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#C6A98A]/30 bg-[#0A1E35]/60">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A98A]" />
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#DAC8B3]">
                  Non-Profit Leadership & Equity
                </span>
              </div>
            </Reveal>

            <Reveal as="h2" variant="wipe" className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F9F6F0] font-bold tracking-tight">
              Co-Founder of <span className="text-[#C6A98A]">CyBlack</span>
            </Reveal>

            <Reveal as="p" variant="up" delay={120} className="text-zinc-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
              Addressing the critical cybersecurity talent shortfall by building transparent, sustainable, 
              and empowering pathways for Black and underrepresented professionals across the United Kingdom.
            </Reveal>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <Reveal variant="fade" delay={180}>
              <a
                href="https://cyblack.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#0A1E35] border border-[#C6A98A]/50 text-[#C6A98A] hover:bg-[#C6A98A] hover:text-[#0A1E35] text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(198,169,138,0.25)]"
              >
                <span>Visit CyBlack.org</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </Reveal>
          </div>
        </div>

        {/* Feature Spotlight Card */}
        <Reveal variant="up">
          <div className="bg-[#0A1E35]/70 border border-[#C6A98A]/25 p-8 sm:p-12 relative backdrop-blur-xl">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#C6A98A]" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#C6A98A]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Leader Portrait */}
              <div className="lg:col-span-4">
                <div className="relative group max-w-sm mx-auto lg:mx-0">
                  <div className="absolute -inset-2 border border-[#C6A98A]/30 translate-x-2 translate-y-2 pointer-events-none" />
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#071322] border border-white/10 shadow-2xl">
                    <Image
                      src="/images/jude_osamor_beige_profile.jpg"
                      alt="Dr. Jude Osamor - Co-Founder of CyBlack"
                      fill
                      sizes="(max-width: 1024px) 90vw, 340px"
                      className="object-cover object-[center_22%] group-hover:scale-[1.02] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071322]/95 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#0A1E35]/95 border border-[#C6A98A]/40 backdrop-blur-md">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#C6A98A] font-semibold">
                        Strategic Co-Founder
                      </p>
                      <p className="font-serif text-sm font-bold text-white">
                        Dr. Jude Osamor
                      </p>
                      <p className="text-[10px] text-zinc-300 font-sans">
                        Fostering Equity Across UK Cybersecurity
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission & Initiatives */}
              <div className="lg:col-span-8 space-y-8">
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-[0.22em] text-[#C6A98A] font-semibold">
                    The Mission &amp; Genesis
                  </span>
                  
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold leading-snug">
                    Transforming Representation from Entry-Level to the Boardroom
                  </h3>

                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    Conceived out of a clear recognition that systemic diversity deficits in cybersecurity weaken overall institutional defense, 
                    Dr. Jude Osamor co-founded CyBlack to institutionalize support mechanisms. From mentorship exchanges on social platforms to a formal 
                    national charity, CyBlack provides educational grants, high-impact conferences, and direct employer hiring pipelines.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-white/10">
                    <div>
                      <p className="font-serif text-2xl sm:text-3xl font-bold text-[#C6A98A]">1,000+</p>
                      <p className="text-[11px] uppercase tracking-wider text-zinc-400 pt-0.5">Community Talent</p>
                    </div>
                    <div>
                      <p className="font-serif text-2xl sm:text-3xl font-bold text-[#C6A98A]">50+</p>
                      <p className="text-[11px] uppercase tracking-wider text-zinc-400 pt-0.5">Industry Mentors</p>
                    </div>
                    <div>
                      <p className="font-serif text-2xl sm:text-3xl font-bold text-[#C6A98A]">Annual</p>
                      <p className="text-[11px] uppercase tracking-wider text-zinc-400 pt-0.5">UK Conference</p>
                    </div>
                    <div>
                      <p className="font-serif text-2xl sm:text-3xl font-bold text-[#C6A98A]">100%</p>
                      <p className="text-[11px] uppercase tracking-wider text-zinc-400 pt-0.5">Mission Focused</p>
                    </div>
                  </div>
                </div>

                {/* Initiatives Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {initiatives.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="bg-[#071322] border border-white/10 p-4 space-y-2 hover:border-[#C6A98A]/40 transition-colors">
                        <Icon className="w-4 h-4 text-[#C6A98A]" />
                        <h4 className="font-serif text-sm font-bold text-white">
                          {item.title}
                        </h4>
                        <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
