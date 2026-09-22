"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
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

  // "Annual" has no digits, so CountUp renders it untouched rather than
  // trying to animate it.
  const stats = [
    { value: "1,000+", label: "Community Talent" },
    { value: "50+", label: "Industry Mentors" },
    { value: "Annual", label: "UK Conference" },
    { value: "100%", label: "Mission Focused" },
  ];

  return (
    <section id="cyblack" className="relative bg-black py-24 sm:py-32 border-t border-hairline overflow-hidden text-ink">
      {/* Ambient background decoration */}
      <div className="section-wash" />
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-gold/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-20">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8 space-y-4">
            <Reveal variant="fade">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-gold/30 bg-zinc-900/60 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="text-[11px] uppercase tracking-brand font-semibold text-gold-bright">
                  Non-Profit Leadership & Equity
                </span>
              </div>
            </Reveal>

            <Reveal as="h2" variant="wipe" className="font-display text-3xl sm:text-5xl lg:text-6xl text-ink font-bold tracking-tight">
              Co-Founder of <span className="text-gold">CyBlack</span>
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
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-zinc-900 border border-gold/50 text-gold hover:bg-gold hover:text-zinc-900 text-xs uppercase tracking-brand font-semibold transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(198,169,138,0.25)] rounded-full"
              >
                <span>Visit CyBlack.org</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </Reveal>
          </div>
        </div>

        {/* Feature Spotlight Card */}
        <Reveal variant="up">
          <div className="bg-zinc-900/70 border border-gold/25 p-8 sm:p-12 relative backdrop-blur-xl rounded-[1.25rem]">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Leader Portrait */}
              <div className="lg:col-span-5">
                <div className="relative group max-w-md mx-auto lg:max-w-none">
                  <div className="absolute -inset-2 border border-gold/30 translate-x-2 translate-y-2 pointer-events-none rounded-[1.25rem]" />
                  <div className="relative aspect-[4/5] overflow-hidden bg-black border border-hairline shadow-2xl rounded-[1.25rem]">
                    <Image
                      src="/images/jude_osamor_beige_profile.jpg"
                      alt="Dr. Jude Osamor - Co-Founder of CyBlack"
                      fill
                      sizes="(max-width: 1024px) 90vw, 480px"
                      className="object-cover object-[center_18%] grayscale group-hover:scale-[1.02] transition-transform duration-700"
                    />
                    {/* This shot was taken on a pink and teal backdrop that fights
                        the palette, so it is desaturated and re-tinted to the brand
                        beige — a duotone reads as deliberate where the raw colour
                        read as an accident. */}
                    <div className="photo-tint" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute bottom-3 left-3 right-3 p-3 bg-zinc-900/95 border border-gold/40 backdrop-blur-md rounded-[1.25rem]">
                      <p className="text-[10px] uppercase tracking-brand text-gold font-semibold">
                        Strategic Co-Founder
                      </p>
                      <p className="font-display text-sm font-bold text-ink">
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
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-brand text-gold font-semibold">
                    The Mission &amp; Genesis
                  </span>
                  
                  <h3 className="font-display text-2xl sm:text-3xl text-ink font-bold leading-snug">
                    Transforming Representation from Entry-Level to the Boardroom
                  </h3>

                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    Conceived out of a clear recognition that systemic diversity deficits in cybersecurity weaken overall institutional defense, 
                    Dr. Jude Osamor co-founded CyBlack to institutionalize support mechanisms. From mentorship exchanges on social platforms to a formal 
                    national charity, CyBlack provides educational grants, high-impact conferences, and direct employer hiring pipelines.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-hairline">
                    {stats.map((stat) => (
                      <div key={stat.label}>
                        <p className="font-display text-2xl sm:text-3xl font-bold text-gold">
                          <CountUp value={stat.value} />
                        </p>
                        <p className="text-[11px] uppercase tracking-wider text-zinc-400 pt-0.5">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Initiatives Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {initiatives.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <Reveal key={item.title} variant="up" delay={idx * 90}>
                        <div className="card-lift h-full bg-black border border-hairline p-4 space-y-2 rounded-[1.25rem]">
                          <Icon className="w-4 h-4 text-gold" />
                          <h4 className="font-display text-sm font-bold text-ink">
                            {item.title}
                          </h4>
                          <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                            {item.desc}
                          </p>
                        </div>
                      </Reveal>
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
