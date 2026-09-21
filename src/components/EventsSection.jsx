"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function EventsSection() {
  return (
    <section id="events" className="bg-black py-20 text-white border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Screenshot 1 */}
        <div className="text-center space-y-2 mb-12">
          <Reveal as="h2" variant="up" className="font-fjalla text-4xl sm:text-6xl text-[#C6A98A] uppercase tracking-wide font-bold">
            UPCOMING EVENTS
          </Reveal>
          <Reveal as="p" variant="up" delay={120} className="text-zinc-300 text-sm sm:text-base font-normal tracking-wide">
            Never miss a beat. Connect with Minister Lilian Nneji live in concert and other events
          </Reveal>
        </div>

        {/* Event Banner Strip matching Screenshot 1 */}
        <Reveal variant="up" delay={180} className="group w-full bg-[#0A1A2D] hover:bg-[#0D2440] border-y border-zinc-800/80 hover:border-[#C6A98A]/30 py-6 px-6 sm:px-10 my-6 shadow-xl transition-colors duration-500">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

            {/* Left: Date */}
            <div className="flex-shrink-0">
              <span className="font-fjalla text-3xl sm:text-4xl text-[#C6A98A] font-bold tracking-tight">
                1ST NOV.
              </span>
            </div>

            {/* Location Tag */}
            <div className="flex-shrink-0">
              <span className="font-fjalla text-xl sm:text-2xl text-white font-bold tracking-wider">
                PH, NG
              </span>
            </div>

            {/* Event Name & Venue */}
            <div className="flex-grow text-center md:text-left md:px-6">
              <span className="font-fjalla text-lg sm:text-xl text-white tracking-wide uppercase font-medium">
                REVERB | EUI EVENT CENTER | 4:00 PM
              </span>
            </div>

            {/* Outlined Yellow REGISTER Button */}
            <div className="flex-shrink-0">
              <Link
                href="/reverb"
                className="shimmer-sweep relative overflow-hidden inline-block border border-[#C6A98A] text-[#C6A98A] hover:bg-[#C6A98A] hover:text-black font-semibold text-xs tracking-widest px-8 py-2.5 rounded-none uppercase transition-all duration-200 active:scale-95 shadow-md"
              >
                REGISTER
              </Link>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
