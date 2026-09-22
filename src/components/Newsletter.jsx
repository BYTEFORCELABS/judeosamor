"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { CheckCircle2, ShieldCheck, Mail, ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Unable to register subscription. Please try again.");
      }

      setFeedbackMsg(data.message || "Subscription confirmed. You will receive executive cybersecurity briefings.");
      setSubscribed(true);
      setEmail("");
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-black py-20 sm:py-28 text-ink overflow-hidden border-t border-hairline relative">
      <div className="section-wash" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Emblem & Monogram */}
          <Reveal variant="left" className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-zinc-900 border border-gold/30 p-8 sm:p-10 shadow-2xl relative rounded-[1.25rem]">
              <div className="space-y-6 text-center">
                <div className="relative w-24 h-24 mx-auto">
                  <Image
                    src="/images/monogram_light.png"
                    alt="Dr. Jude Osamor JO Monogram"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="space-y-2">
                  <p className="text-[11px] uppercase tracking-brand text-gold font-semibold">
                    Strategic Intelligence
                  </p>
                  <h3 className="font-display text-2xl font-bold text-ink">
                    Cyber & AI Executive Brief
                  </h3>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    Curated analyses on zero-day mitigation, algorithmic fraud defenses, and African tech governance.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Narrative & Form */}
          <Reveal variant="right" className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-brand font-semibold text-gold">
                Executive Briefing
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight">
                Stay Ahead of Frontier <br className="hidden sm:inline" />
                <span className="text-gold font-light">Threat Vectors</span>
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans max-w-xl">
                Join a selected network of CISOs, enterprise architects, academics, and policymakers receiving 
                periodic strategic whitepapers and keynote summaries authored by Dr. Jude Osamor.
              </p>
            </div>

            {subscribed ? (
              <div className="p-5 bg-zinc-900 border border-gold/40 flex items-center gap-3 rounded-[1.25rem]">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                <p className="text-xs uppercase tracking-wider text-gold-bright font-medium font-sans">
                  {feedbackMsg}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-grow">
                    <Mail className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="email"
                      required
                      placeholder="Enter executive or institutional email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-zinc-900 border border-hairline pl-11 pr-4 py-3.5 text-sm text-ink placeholder-zinc-500 focus:outline-none focus:border-gold transition-colors rounded-xl"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-3.5 bg-gold text-on-gold text-xs uppercase tracking-brand font-semibold hover:bg-gold-bright transition-colors shrink-0 flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Subscribing...</span>
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {errorMsg && (
                  <p className="text-xs text-red-400 font-sans">{errorMsg}</p>
                )}

                <p className="text-[11px] text-zinc-500 font-sans">
                  Strict privacy protocols. Zero unsolicited communications. Unsubscribe at any time.
                </p>
              </form>
            )}
          </Reveal>

        </div>
      </div>
    </section>
  );
}
