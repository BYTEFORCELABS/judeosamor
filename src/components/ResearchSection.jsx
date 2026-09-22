import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import PublicationCard from "@/components/PublicationCard";
import {
  getPublications,
  getScholarMetrics,
  getScholarRetrieved,
  getScholarUrl,
} from "@/lib/publicationsData";

export default function ResearchSection() {
  const publications = getPublications();
  const scholarMetrics = getScholarMetrics();
  const scholarRetrieved = getScholarRetrieved();
  const scholarUrl = getScholarUrl();

  // The homepage shows his three most-cited *security* papers. The earlier
  // materials-science work is real and well cited, but leading a cyber page
  // with tissue scaffolds misrepresents what he does; it keeps its place on
  // /research under "Earlier Research".
  const featured = publications
    .filter((p) => p.area !== "materials")
    .sort((a, b) => b.citations - a.citations)
    .slice(0, 3);

  return (
    <section
      id="research"
      className="relative bg-zinc-900 py-24 sm:py-32 border-t border-hairline overflow-hidden text-ink"
    >
      <div className="section-wash" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7 space-y-5">
            <Reveal as="p" variant="fade" className="type-eyebrow text-gold">
              Peer-Reviewed Research
            </Reveal>

            <Reveal
              as="h2"
              variant="wipe"
              className="type-display text-3xl sm:text-5xl lg:text-6xl text-ink"
            >
              Published &amp; cited
            </Reveal>

            <Reveal as="p" variant="up" delay={100} className="type-body text-base sm:text-lg text-zinc-300 max-w-xl">
              Machine learning for malware and fraud detection, and security in
              vehicular networks — cited {scholarMetrics[0].value} times to date.
            </Reveal>
          </div>

          {/* Scholar metrics, counting up as they come into view. */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-6">
            {scholarMetrics.map((metric) => (
              <Reveal key={metric.label} variant="up" delay={120}>
                <p className="type-display text-3xl sm:text-4xl text-gold">
                  <CountUp value={metric.value} />
                </p>
                <p className="type-label text-zinc-400 pt-1">{metric.label}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((pub, idx) => (
            <Reveal key={pub.id} variant="up" delay={idx * 80}>
              <PublicationCard publication={pub} scholarUrl={scholarUrl} />
            </Reveal>
          ))}
        </div>

        <Reveal variant="up" className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <p className="text-xs text-zinc-500">
            Figures from Google Scholar, {scholarRetrieved}.
          </p>
          <Link
            href="/research"
            className="gold-button inline-flex items-center gap-2.5 px-7 py-3.5 text-xs"
          >
            All Publications
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
