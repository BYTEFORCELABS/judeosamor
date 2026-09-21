"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ArrowRight, ShieldCheck, BookOpen, Users, Award } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="overview"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-[#071322]"
    >
      {/* Subtle architectural grid & ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,#0A1E35_0%,#071322_70%)] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#C6A98A]/[0.05] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-24 left-10 w-[420px] h-[420px] bg-[#0A1E35] rounded-full blur-[120px] pointer-events-none" />

      {/* Watermarked JO Monogram in background */}
      <div className="absolute right-[-4%] lg:right-[5%] top-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] lg:w-[620px] h-[340px] sm:h-[500px] lg:h-[620px] opacity-[0.035] pointer-events-none select-none">
        <Image
          src="/images/monogram_light.png"
          alt="JO Monogram"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Academic & Credential Descriptor */}
            <Reveal variant="fade">
              <div className="inline-flex items-center gap-3 px-3.5 py-1.5 border border-[#C6A98A]/35 bg-[#0A1E35]/60 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A98A]" />
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#DAC8B3] uppercase">
                  Dr. Jude Osamor &middot; PhD | Cybersecurity Executive
                </span>
              </div>
            </Reveal>

            {/* Main Headline in Playfair Display Serif */}
            <div className="space-y-4">
              <Reveal as="h1" variant="wipe" className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F9F6F0] leading-[1.08]">
                Quiet Resilience. <br className="hidden sm:inline" />
                <span className="text-[#C6A98A] italic font-normal">Strategic Defense.</span> <br />
                Intellectual Rigor.
              </Reveal>

              <Reveal as="p" variant="up" delay={120} className="text-zinc-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal pt-2">
                In the high-stakes landscape of global cybersecurity, true security is never loud, reactionary, or flashy. 
                Balancing the rigorous, analytical depth of academic research with the decisive, structural integrity of senior enterprise cyber defense leadership.
              </Reveal>
            </div>

            {/* CTAs */}
            <Reveal variant="up" delay={200} className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/#research"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#C6A98A] text-[#0A1E35] font-semibold text-xs uppercase tracking-[0.18em] transition-all duration-300 hover:bg-[#DAC8B3] shadow-lg hover:shadow-[0_0_25px_rgba(198,169,138,0.3)]"
              >
                <span>Explore Research</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/#advisory"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#C6A98A]/50 text-[#F9F6F0] hover:text-[#C6A98A] hover:border-[#C6A98A] font-semibold text-xs uppercase tracking-[0.18em] transition-all duration-300 bg-[#0A1E35]/40 backdrop-blur-sm"
              >
                <span>Speaking & Advisory</span>
              </Link>

              <Link
                href="/#cyblack"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-zinc-300 hover:text-[#C6A98A] text-xs uppercase tracking-[0.18em] font-medium transition-colors"
              >
                <span>CyBlack Initiative</span>
              </Link>
            </Reveal>

            {/* Executive Highlights Bar */}
            <Reveal variant="up" delay={300} className="pt-8 border-t border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[#C6A98A]">
                    <ShieldCheck className="w-4 h-4 text-[#C6A98A]" />
                    <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#DAC8B3]">
                      Enterprise Leadership
                    </span>
                  </div>
                  <p className="text-sm font-serif text-white font-medium">
                    Vice President of Cybersecurity, Fortune 500 Financial Services
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[#C6A98A]">
                    <Users className="w-4 h-4 text-[#C6A98A]" />
                    <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#DAC8B3]">
                      Non-Profit Impact
                    </span>
                  </div>
                  <p className="text-sm font-serif text-white font-medium">
                    Co-Founder of CyBlack, UK Cyber Talent & Equity Initiative
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[#C6A98A]">
                    <BookOpen className="w-4 h-4 text-[#C6A98A]" />
                    <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#DAC8B3]">
                      Academic Rigor
                    </span>
                  </div>
                  <p className="text-sm font-serif text-white font-medium">
                    PhD & Senior Lecturer, AI Threat Detection & Forensics
                  </p>
                </div>
              </div>
            </Reveal>

          </div>

          {/* Right Column: Executive Portrait */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <Reveal variant="fade" delay={250} className="w-full max-w-sm sm:max-w-md">
              <div className="relative group">
                {/* Offset gold luxury frame */}
                <div className="absolute -inset-3 border border-[#C6A98A]/35 translate-x-3 translate-y-3 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-700 pointer-events-none" />

                <div className="relative aspect-[3/4] overflow-hidden bg-[#0A1E35] border border-white/10 shadow-2xl">
                  <Image
                    src="/images/jude_osamor_navy_standing.jpg"
                    alt="Dr. Jude Osamor - Executive Portrait"
                    fill
                    sizes="(max-width: 768px) 90vw, 420px"
                    priority
                    className="object-cover object-[center_18%] group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  {/* Subtle legibility gradient at base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071322]/90 via-transparent to-transparent pointer-events-none" />

                  {/* Floating credentials badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#0A1E35]/95 border border-[#C6A98A]/40 p-4 backdrop-blur-md shadow-xl">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#C6A98A] font-semibold">
                      Dr. Jude Osamor
                    </p>
                    <p className="font-serif text-sm font-bold text-white tracking-wide">
                      PhD &middot; Vice President of Cybersecurity
                    </p>
                    <p className="text-[11px] text-zinc-300 font-sans pt-0.5">
                      Fortune 500 Cyber Defense &amp; Co-Founder of CyBlack
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
