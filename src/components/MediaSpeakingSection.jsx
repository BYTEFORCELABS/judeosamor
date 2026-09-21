"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Mic, Video, Users, ArrowRight, Calendar, Radio, Sparkles } from "lucide-react";

export default function MediaSpeakingSection() {
  const mediaFeatures = [
    {
      type: "Featured Broadcast / Video",
      title: "Who Owns Africa's Data in the Age of AI?",
      channel: "Wale Ameen Technology Channel",
      role: "Keynote Panellist & Cybersecurity VP",
      summary:
        "An in-depth discourse dissecting digital sovereignty, cloud infrastructure ownership, data residency regulations, and why emerging markets must control their own AI training datasets.",
      format: "Video Feature & Roundtable",
      linkText: "Watch Discussion on YouTube",
      href: "https://www.youtube.com/results?search_query=Jude+Osamor+Who+Owns+Africas+Data",
      icon: Video,
    },
    {
      type: "Podcast Episode",
      title: "Building Resilient Cyber Defense & Breaking Industry Barriers",
      channel: "The Cykea Podcast",
      role: "Guest Speaker",
      summary:
        "Exploring career evolution from academic computing to Fortune 500 VP, the real-world mechanics of enterprise SOC architecture, and the founding mission of CyBlack.",
      format: "Audio & Video Interview",
      linkText: "Listen to Cykea Episode",
      href: "https://www.youtube.com/results?search_query=Jude+Osamor+Cykea",
      icon: Mic,
    },
    {
      type: "Keynote Address",
      title: "Empowering the Next Generation of Cybersecurity Leadership",
      channel: "Annual CyBlack UK Conference",
      role: "Co-Founder & Keynote Host",
      summary:
        "Unifying policy leaders, corporate sponsors, and emerging talent to address critical industry talent shortages through systemic inclusion and practical apprenticeships.",
      format: "Annual Conference Keynote",
      linkText: "Learn About CyBlack Conference",
      href: "https://cyblack.org",
      icon: Radio,
    },
  ];

  const speakingTopics = [
    {
      topic: "Enterprise Cyber Resilience in High-Stakes Finance",
      audience: "CISOs, Board Directors, Executive Committees",
      desc: "Transforming reactive security expenditures into quiet, resilient defense architectures capable of neutralizing nation-state and automated cyber assaults.",
    },
    {
      topic: "Data Sovereignty & AI Governance in Emerging Markets",
      audience: "Government Regulators, Tech Executives, Policy Thinktanks",
      desc: "Examining cross-border data residency, cloud autonomy, and strategic infrastructure investments required to prevent algorithmic digital colonialism.",
    },
    {
      topic: "Deep Learning & AI in Modern Threat Hunting",
      audience: "Engineering Leaders, Security Architects, Researchers",
      desc: "Practical application of temporal neural networks, autoencoders, and predictive models to outpace polymorphic malware and credential theft.",
    },
    {
      topic: "Building Resilient, Diverse Cyber Talent Pipelines",
      audience: "Human Capital Executives, Non-Profit Leaders, Industry Alliances",
      desc: "Actionable frameworks for recruiting, mentoring, and retaining underrepresented technical talent to resolve global workforce shortages.",
    },
  ];

  return (
    <section id="media" className="relative bg-[#071322] py-24 sm:py-32 border-t border-white/5 overflow-hidden text-white">
      {/* Subtle ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,#0A1E35_0%,#071322_70%)] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#C6A98A]/[0.035] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-24">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <Reveal variant="fade">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C6A98A]">
              Thought Leadership & Media
            </span>
          </Reveal>

          <Reveal as="h2" variant="wipe" className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F9F6F0] font-bold tracking-tight">
            Keynotes, Media & Public Discourse
          </Reveal>

          <Reveal as="p" variant="up" delay={100} className="text-zinc-300 text-base sm:text-lg font-normal leading-relaxed">
            Sharing strategic insights on international panels, podcasts, and executive symposiums 
            to shape the future of enterprise defense and technological sovereignty.
          </Reveal>
        </div>

        {/* Featured Media Cards */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-2xl font-bold text-white">
              Featured Appearances & Podcasts
            </h3>
            <span className="text-xs uppercase tracking-[0.18em] text-[#C6A98A] font-semibold hidden sm:inline">
              Selected Commentary
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mediaFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} variant="up" delay={idx * 100}>
                  <div className="h-full bg-[#0A1E35]/60 border border-white/10 p-8 flex flex-col justify-between hover:border-[#C6A98A]/40 transition-all duration-300 group">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#C6A98A]">
                          {item.type}
                        </span>
                        <Icon className="w-4 h-4 text-[#DAC8B3]" />
                      </div>

                      <h4 className="font-serif text-xl font-bold text-white group-hover:text-[#DAC8B3] transition-colors leading-snug">
                        {item.title}
                      </h4>

                      <div className="space-y-1 text-xs">
                        <p className="text-[#DAC8B3] font-semibold uppercase tracking-wider">
                          {item.channel}
                        </p>
                        <p className="text-zinc-400">
                          Role: {item.role}
                        </p>
                      </div>

                      <p className="text-zinc-300 text-sm font-sans leading-relaxed pt-1">
                        {item.summary}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-white/5">
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#C6A98A] group-hover:text-white font-semibold transition-colors"
                      >
                        <span>{item.linkText}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Keynote Topics for Event Planners */}
        <div className="bg-[#0A1E35] border border-[#C6A98A]/25 p-8 sm:p-12 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C6A98A] font-semibold">
                Conference & Symposium Programming
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Core Keynote & Executive Workshop Topics
              </h3>
              <p className="text-zinc-300 text-sm font-sans">
                Tailored for executive boardrooms, academic commencements, and international cybersecurity summits.
              </p>
            </div>

            <Link
              href="/#advisory"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C6A98A] text-[#0A1E35] text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#DAC8B3] transition-colors self-start sm:self-auto shadow-md"
            >
              <span>Inquire About Booking</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4 border-t border-white/10">
            {/* Keynote Speaker Portrait */}
            <div className="lg:col-span-4">
              <div className="relative group max-w-sm mx-auto lg:mx-0">
                <div className="absolute -inset-2 border border-[#C6A98A]/35 translate-x-2 translate-y-2 pointer-events-none" />
                <div className="relative aspect-[3/4] overflow-hidden bg-[#071322] border border-white/10 shadow-2xl">
                  <Image
                    src="/images/jude_osamor_navy_seated.jpg"
                    alt="Dr. Jude Osamor - Keynote Speaker"
                    fill
                    sizes="(max-width: 1024px) 90vw, 340px"
                    className="object-cover object-[center_16%] group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071322]/90 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#0A1E35]/95 border border-[#C6A98A]/40 backdrop-blur-md">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#C6A98A] font-semibold">
                      Featured Keynote Speaker
                    </p>
                    <p className="font-serif text-sm font-bold text-white">
                      Dr. Jude Osamor
                    </p>
                    <p className="text-[10px] text-zinc-300 font-sans">
                      Summits, Executive Panels &amp; Commencements
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Speaking Topics Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {speakingTopics.map((item, idx) => (
                <div
                  key={item.topic}
                  className="bg-[#071322] border border-white/5 p-5 space-y-2 hover:border-[#C6A98A]/30 transition-colors"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[11px] uppercase tracking-[0.18em] text-[#C6A98A] font-semibold">
                      Topic 0{idx + 1}
                    </span>
                    <span className="text-[10px] text-zinc-400 font-sans">
                      {item.audience}
                    </span>
                  </div>

                  <h4 className="font-serif text-base font-bold text-white">
                    {item.topic}
                  </h4>

                  <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
