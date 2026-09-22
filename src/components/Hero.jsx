"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="overview"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-black"
    >
      <div className="section-wash" />

      {/* Watermarked JO monogram, sitting behind the portrait column. */}
      <div className="absolute right-[-8%] lg:right-[2%] top-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] lg:w-[560px] aspect-square opacity-[0.03] pointer-events-none select-none">
        <Image src="/images/monogram_light.png" alt="" aria-hidden="true" fill className="object-contain" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">

          <div className="lg:col-span-7">
            <Reveal as="h1" variant="wipe" className="type-display text-5xl sm:text-6xl lg:text-7xl text-ink">
              Dr. Jude Osamor
            </Reveal>

            <Reveal
              as="p"
              variant="up"
              delay={100}
              className="type-heading text-2xl sm:text-3xl lg:text-4xl text-gold font-light mt-4"
            >
              Vice President of Cybersecurity
            </Reveal>

            <Reveal as="p" variant="up" delay={160} className="type-label text-zinc-400 mt-5">
              PhD &middot; Senior Lecturer &middot; Co-Founder of CyBlack
            </Reveal>

            <Reveal
              as="p"
              variant="up"
              delay={220}
              className="type-body text-base sm:text-lg text-zinc-300 max-w-xl mt-8"
            >
              He directs enterprise cyber defence at Barclays, researches how machine learning detects malicious anomalies and
              phishing at scale, and co-founded CyBlack to open cyber careers to Black
              professionals across the UK.
            </Reveal>

            {/* Side by side at every width. On a phone the labels shorten
                rather than the buttons stacking or the type shrinking to
                something unreadable. */}
            <Reveal variant="up" delay={280} className="flex items-stretch gap-3 mt-10">
              <Link
                href="/research"
                className="gold-button flex flex-1 sm:flex-initial items-center justify-center gap-2 px-4 sm:px-7 py-3.5 text-[11px] sm:text-xs whitespace-nowrap"
              >
                <span className="sm:hidden">Research</span>
                <span className="hidden sm:inline">Explore Research</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </Link>

              <Link
                href="/#advisory"
                className="gold-button-outline flex flex-1 sm:flex-initial items-center justify-center px-4 sm:px-7 py-3.5 text-[11px] sm:text-xs whitespace-nowrap"
              >
                <span className="sm:hidden">Advisory</span>
                <span className="hidden sm:inline">Speaking &amp; Advisory</span>
              </Link>
            </Reveal>
          </div>

          {/* Portrait. The studio backdrop is a cold near-white, so it is warmed
              toward the brand beige. On the dark theme its base melts into the
              page; on the light theme it stays a defined card, which is what
              the hairline border is for. */}
          <div className="lg:col-span-5">
            <Reveal variant="fade" delay={300} className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-zinc-900 border border-hairline">
                <Image
                  src="/images/jude_osamor_navy_standing.jpg"
                  alt="Dr. Jude Osamor"
                  fill
                  sizes="(max-width: 1024px) 90vw, 440px"
                  priority
                  className="object-cover object-[center_12%]"
                />
                {/* Multiply leaves the dark suit almost untouched while pulling the
                    cold white backdrop onto the brand beige. */}
                <div className="photo-tint photo-tint-soft" />
                <div className="photo-fade" />
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
