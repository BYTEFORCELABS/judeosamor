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
              He directs enterprise cyber defence for a Fortune 500 financial services
              firm, researches how machine learning detects malicious anomalies and
              phishing at scale, and co-founded CyBlack to open cyber careers to Black
              professionals across the UK.
            </Reveal>

            <Reveal variant="up" delay={280} className="flex flex-wrap items-center gap-3 mt-10">
              <Link
                href="/#research"
                className="gold-button inline-flex items-center gap-2.5 px-7 py-3.5 text-xs"
              >
                <span>Explore Research</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/#advisory"
                className="gold-button-outline inline-flex items-center px-7 py-3.5 text-xs"
              >
                Speaking &amp; Advisory
              </Link>
            </Reveal>
          </div>

          {/* Portrait. The studio backdrop is a cold near-white, so it is warmed
              toward the brand beige and its base is melted into the page rather
              than left as a bright rectangle floating on the navy. */}
          <div className="lg:col-span-5">
            <Reveal variant="fade" delay={300} className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-zinc-900">
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
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
