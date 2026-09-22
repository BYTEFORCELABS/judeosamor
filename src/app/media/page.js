import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { getAppearances, getSpeakingTopics } from "@/lib/media";

// Appearances and topics are edited live from the admin portal, so this page
// can't be statically prerendered — it has to read data/media.json fresh on
// every request.
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Talks & Media | Dr. Jude Osamor",
  description:
    "Keynotes, panels and podcast appearances by Dr. Jude Osamor on data sovereignty, AI governance and enterprise cyber defence — watchable in full.",
  alternates: { canonical: "/media" },
};

export default function MediaPage() {
  const appearances = getAppearances();
  const speakingTopics = getSpeakingTopics();
  const withVideo = appearances.filter((a) => a.videoId);
  const withoutVideo = appearances.filter((a) => !a.videoId);

  return (
    <div className="flex flex-col min-h-screen bg-black text-ink">
      <Navbar />

      <main className="flex-grow">
        {/* Appearances */}
        <section className="relative pt-40 pb-24 overflow-hidden">
          <div className="section-wash" />

          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-16">
            <div className="max-w-3xl space-y-5">
              <Reveal as="p" variant="fade" className="type-eyebrow text-gold">
                Talks &amp; Media
              </Reveal>

              <Reveal
                as="h1"
                variant="wipe"
                className="type-display text-4xl sm:text-5xl lg:text-6xl text-ink"
              >
                In conversation
              </Reveal>

              <Reveal
                as="p"
                variant="up"
                delay={120}
                className="type-body text-base sm:text-lg text-zinc-300"
              >
                Panels, keynotes and interviews on data sovereignty, AI governance and
                what enterprise cyber defence actually takes. Everything here plays on
                this page.
              </Reveal>
            </div>

            <div className="space-y-20">
              {withVideo.map((item, idx) => (
                <Reveal key={item.id} variant="up" delay={idx * 80}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    <div className="lg:col-span-7">
                      <YouTubeEmbed id={item.videoId} title={item.title} />
                    </div>

                    <div className="lg:col-span-5 space-y-4 lg:pt-4">
                      <p className="type-eyebrow text-gold">{item.kind}</p>
                      <h2 className="type-heading text-2xl text-ink">{item.title}</h2>
                      <div className="space-y-1">
                        <p className="type-label text-gold-bright">{item.channel}</p>
                        <p className="text-xs text-zinc-400">Role: {item.role}</p>
                      </div>
                      <p className="type-body text-sm text-zinc-300">{item.summary}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {withoutVideo.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-hairline">
                {withoutVideo.map((item, idx) => (
                  <Reveal key={item.id} variant="up" delay={idx * 80}>
                    <div className="card-lift h-full bg-zinc-900/60 border border-hairline rounded-[1.25rem] p-7 space-y-3">
                      <p className="type-eyebrow text-gold">{item.kind}</p>
                      <h2 className="type-heading text-lg text-ink">{item.title}</h2>
                      <p className="type-label text-gold-bright">{item.channel}</p>
                      <p className="type-body text-sm text-zinc-300">{item.summary}</p>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="type-label inline-flex items-center gap-1.5 text-gold hover:text-ink transition-colors"
                      >
                        Find out more
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Speaking topics — the brief holds still, the topics scroll past it. */}
        <section className="relative py-24 sm:py-32 border-t border-hairline overflow-hidden bg-zinc-900">
          <div className="section-wash" />

          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start space-y-6">
                <p className="type-eyebrow text-gold">Booking</p>
                <h2 className="type-display text-3xl sm:text-4xl text-ink">
                  Core keynote &amp; workshop topics
                </h2>
                <p className="type-body text-sm sm:text-base text-zinc-300">
                  Built for executive boardrooms, academic commencements and
                  international cybersecurity summits.
                </p>
                <Link
                  href="/#advisory"
                  className="gold-button inline-flex items-center gap-2 px-7 py-3.5 text-xs"
                >
                  Enquire About Booking
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="lg:col-span-7 space-y-5">
                {speakingTopics.map((item, idx) => (
                  <Reveal key={item.topic} variant="up" delay={idx * 70}>
                    <div className="card-lift bg-black border border-hairline rounded-[1.25rem] p-7 space-y-2.5">
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="type-label text-gold">
                          Topic {String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="type-heading text-lg text-ink">{item.topic}</h3>
                      <p className="type-body text-sm text-zinc-300">{item.desc}</p>
                      <p className="text-xs text-zinc-500 pt-1">{item.audience}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
