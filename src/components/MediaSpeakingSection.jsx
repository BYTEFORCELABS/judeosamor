import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { getAppearances } from "@/lib/media";

export default function MediaSpeakingSection() {
  // Both recorded talks play in place here; the rest of the material,
  // including engagements with no recording, lives on /media.
  const watchable = getAppearances().filter((a) => a.videoId);

  return (
    <section
      id="media"
      className="relative bg-black py-24 sm:py-32 border-t border-hairline overflow-hidden text-ink"
    >
      <div className="section-wash" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-14">
        <div className="max-w-2xl space-y-5">
          <Reveal as="p" variant="fade" className="type-eyebrow text-gold">
            Talks &amp; Media
          </Reveal>

          <Reveal
            as="h2"
            variant="wipe"
            className="type-display text-3xl sm:text-5xl lg:text-6xl text-ink"
          >
            In conversation
          </Reveal>

          <Reveal as="p" variant="up" delay={100} className="type-body text-base sm:text-lg text-zinc-300">
            Panels, keynotes and interviews on data sovereignty, AI governance and
            enterprise cyber defence.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8">
          {watchable.map((item, idx) => (
            <Reveal key={item.id} variant="up" delay={idx * 90} className="space-y-5">
              <YouTubeEmbed id={item.videoId} title={item.title} />

              <div className="space-y-2.5">
                <p className="type-eyebrow text-gold">{item.kind}</p>
                <h3 className="type-heading text-xl text-ink">{item.title}</h3>
                <p className="type-label text-gold-bright">{item.channel}</p>
                <p className="type-body text-sm text-zinc-300">{item.summary}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal variant="up" className="flex justify-start pt-2">
          <Link
            href="/media"
            className="gold-button inline-flex items-center gap-2.5 px-7 py-3.5 text-xs"
          >
            All Talks &amp; Keynote Topics
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
