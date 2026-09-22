import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ResearchExplorer from "@/components/ResearchExplorer";
import { scholarMetrics } from "@/lib/publications";

export const metadata = {
  title: "Research & Publications | Dr. Jude Osamor",
  description:
    `Peer-reviewed research by Dr. Jude Osamor — ${scholarMetrics[0].value} citations across machine learning for malware detection, financial fraud detection, and vehicular network security.`,
  alternates: { canonical: "/research" },
};

export default function ResearchPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-ink">
      <Navbar />

      <main className="flex-grow">
        <section className="relative pt-40 pb-24 sm:pb-32 overflow-hidden">
          <div className="section-wash" />

          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-16">
            <div className="max-w-3xl space-y-5">
              <Reveal as="p" variant="fade" className="type-eyebrow text-gold">
                Peer-Reviewed Research
              </Reveal>

              <Reveal
                as="h1"
                variant="wipe"
                className="type-display text-4xl sm:text-5xl lg:text-6xl text-ink"
              >
                Publications
              </Reveal>

              <Reveal
                as="p"
                variant="up"
                delay={120}
                className="type-body text-base sm:text-lg text-zinc-300"
              >
                Work on machine learning for malware and fraud detection, security and
                privacy in vehicular networks, and  from earlier in his career 
                biomaterials engineering.
              </Reveal>
            </div>

            <ResearchExplorer />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
