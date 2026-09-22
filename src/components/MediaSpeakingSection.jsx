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
    <section id="media" className="relative bg-black py-24 sm:py-32 border-t border-hairline overflow-hidden text-ink">
      {/* Subtle ambient lighting */}
      <div className="section-wash" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-gold/[0.035] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-24">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <Reveal variant="fade">
            <span className="text-xs uppercase tracking-brand font-semibold text-gold">
              Thought Leadership & Media
            </span>
          </Reveal>

          <Reveal as="h2" variant="wipe" className="font-display text-3xl sm:text-5xl lg:text-6xl text-ink font-bold tracking-tight">
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
            <h3 className="font-display text-2xl font-bold text-ink">
              Featured Appearances & Podcasts
            </h3>
            <span className="text-xs uppercase tracking-brand text-gold font-semibold hidden sm:inline">
              Selected Commentary
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mediaFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} variant="up" delay={idx * 100}>
                  <div className="card-lift h-full bg-zinc-900/60 border border-hairline p-8 flex flex-col justify-between group rounded-[1.25rem]">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[11px] uppercase tracking-brand font-semibold text-gold">
                          {item.type}
                        </span>
                        <Icon className="w-4 h-4 text-gold-bright" />
                      </div>

                      <h4 className="font-display text-xl font-bold text-ink group-hover:text-gold-bright transition-colors leading-snug">
                        {item.title}
                      </h4>

                      <div className="space-y-1 text-xs">
                        <p className="text-gold-bright font-semibold uppercase tracking-wider">
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

                    <div className="pt-6 mt-6 border-t border-hairline">
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-brand text-gold group-hover:text-ink font-semibold transition-colors"
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
        <div className="bg-zinc-900 border border-gold/25 p-8 sm:p-12 space-y-10 rounded-[1.25rem]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs uppercase tracking-brand text-gold font-semibold">
                Conference & Symposium Programming
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink">
                Core Keynote & Executive Workshop Topics
              </h3>
              <p className="text-zinc-300 text-sm font-sans">
                Tailored for executive boardrooms, academic commencements, and international cybersecurity summits.
              </p>
            </div>

            <Link
              href="/#advisory"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-on-gold text-xs uppercase tracking-brand font-semibold hover:bg-gold-bright transition-colors self-start sm:self-auto shadow-md"
            >
              <span>Inquire About Booking</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4 border-t border-hairline">
            {/* Keynote Speaker Portrait */}
            <div className="lg:col-span-4">
              <div className="relative group max-w-sm mx-auto lg:mx-0">
                <div className="absolute -inset-2 border border-gold/35 translate-x-2 translate-y-2 pointer-events-none rounded-[1.25rem]" />
                <div className="relative aspect-[3/4] overflow-hidden bg-black border border-hairline shadow-2xl rounded-[1.25rem]">
                  <Image
                    src="/images/jude_osamor_navy_seated.jpg"
                    alt="Dr. Jude Osamor - Keynote Speaker"
                    fill
                    sizes="(max-width: 1024px) 90vw, 340px"
                    className="object-cover object-[center_16%] group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  {/* Same warming as the other portraits, so every photo on the
                      page sits on the palette rather than on cold studio white. */}
                  <div className="photo-tint photo-tint-soft" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-3 left-3 right-3 p-3 bg-zinc-900/95 border border-gold/40 backdrop-blur-md rounded-[1.25rem]">
                    <p className="text-[10px] uppercase tracking-brand text-gold font-semibold">
                      Featured Keynote Speaker
                    </p>
                    <p className="font-display text-sm font-bold text-ink">
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
                <Reveal key={item.topic} variant="up" delay={idx * 90}>
                <div
                  className="card-lift h-full bg-black border border-hairline p-5 space-y-2 rounded-[1.25rem]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[11px] uppercase tracking-brand text-gold font-semibold">
                      Topic 0{idx + 1}
                    </span>
                    <span className="text-[10px] text-zinc-400 font-sans">
                      {item.audience}
                    </span>
                  </div>

                  <h4 className="font-display text-base font-bold text-ink">
                    {item.topic}
                  </h4>

                  <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
