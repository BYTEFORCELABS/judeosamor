import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import CyBlackSection from "@/components/CyBlackSection";
import ResearchSection from "@/components/ResearchSection";
import MediaSpeakingSection from "@/components/MediaSpeakingSection";
import BookingSection from "@/components/BookingSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-ink">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <CyBlackSection />
        <ResearchSection />
        <MediaSpeakingSection />
        <BookingSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
