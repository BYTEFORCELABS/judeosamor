"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import PublicationCard from "@/components/PublicationCard";

export default function ResearchExplorer({
  publications,
  researchAreas,
  scholarMetrics,
  scholarUrl,
  scholarRetrieved,
}) {
  const [area, setArea] = useState("all");

  const shown = useMemo(
    () => (area === "all" ? publications : publications.filter((p) => p.area === area)),
    [area, publications]
  );

  // Only offer a filter that would actually return something.
  const areas = researchAreas.filter(
    (a) => a.id === "all" || publications.some((p) => p.area === a.id)
  );

  const i10 = scholarMetrics.find((m) => m.label.toLowerCase().includes("i10"));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
      {/* The metrics and filters hold still while the papers move past them,
          so the citation count stays in view as context for what you read. */}
      <aside className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start space-y-10">
        <div className="grid grid-cols-3 lg:grid-cols-1 gap-6">
          {scholarMetrics.map((metric) => (
            <div key={metric.label} className="lg:flex lg:items-baseline lg:gap-4">
              <p className="type-display text-3xl sm:text-4xl text-gold lg:w-24">
                <CountUp value={metric.value} />
              </p>
              <p className="type-label text-zinc-400 pt-1 lg:pt-0">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="space-y-3 pt-8 border-t border-hairline">
          <p className="type-eyebrow text-gold">Filter by area</p>
          <div className="flex flex-wrap gap-2">
            {areas.map((a) => (
              <button
                key={a.id}
                type="button"
                onClick={() => setArea(a.id)}
                aria-pressed={area === a.id}
                className={`type-label px-4 py-2 rounded-full border transition-colors cursor-pointer ${
                  area === a.id
                    ? "bg-gold text-on-gold border-transparent"
                    : "border-hairline text-zinc-400 hover:text-gold hover:border-gold/50"
                }`}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4 pt-8 border-t border-hairline">
          <p className="text-xs text-zinc-500 leading-relaxed">
            Figures from Google Scholar, {scholarRetrieved}.
            {i10 && ` This page shows his most-cited work; an i10-index of ${i10.value} means at least that many papers have ten or more citations.`}
          </p>
          <a
            href={scholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-button-outline type-label inline-flex items-center gap-2 px-5 py-3"
          >
            Full Scholar Profile
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </aside>

      <div className="lg:col-span-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {shown.map((pub, idx) => (
            <Reveal key={pub.id} variant="up" delay={idx * 80}>
              <PublicationCard publication={pub} scholarUrl={scholarUrl} />
            </Reveal>
          ))}
        </div>

        {shown.length === 0 && (
          <p className="type-body text-sm text-zinc-500 py-20 text-center">
            No papers in that area yet.
          </p>
        )}
      </div>
    </div>
  );
}
