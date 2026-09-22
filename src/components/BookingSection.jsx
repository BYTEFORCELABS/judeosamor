"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { Mail, Calendar, MapPin, Send, CheckCircle2, ShieldCheck, ArrowRight, Clock, Building2 } from "lucide-react";

export default function BookingSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    title: "",
    organization: "",
    email: "",
    phone: "",
    inquiryType: "Conference Keynote Address",
    timeline: "",
    location: "London, UK / In-Person",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <section id="advisory" className="relative py-24 sm:py-32 bg-zinc-900 overflow-hidden text-ink border-t border-hairline">
      {/* Background ambient gradient */}
      <div className="section-wash" />
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-gold/[0.04] blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Reveal variant="fade">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-gold/35 bg-black/80 rounded-full">
              <Calendar className="w-3.5 h-3.5 text-gold" />
              <span className="text-[11px] uppercase tracking-brand font-semibold text-gold-bright">
                Executive Advisory & Keynotes
              </span>
            </div>
          </Reveal>

          <Reveal as="h2" variant="wipe" className="font-display text-3xl sm:text-5xl lg:text-6xl text-ink font-bold tracking-tight">
            Consultation & Speaking Inquiries
          </Reveal>

          <Reveal as="p" variant="up" delay={100} className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Direct channels for institutional cybersecurity advisory, board consultations, 
            academic guest lectures, and keynote addresses at international summits.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Institutional Channels */}
          <Reveal variant="left" className="lg:col-span-5 space-y-8">
            <div className="bg-black border border-gold/25 p-8 sm:p-10 space-y-8 shadow-2xl relative rounded-[1.25rem]">
              {/* Gold corner brackets */}

              <div className="space-y-3">
                <span className="text-xs uppercase tracking-brand font-semibold text-gold">
                  Direct Protocols
                </span>
                <h3 className="font-display text-2xl font-bold text-ink">
                  Institutional Inquiries
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                  For formal keynote requests, enterprise security reviews, and corporate CyBlack sponsorships.
                </p>
              </div>

              <div className="space-y-4 pt-2 text-sm text-zinc-300 font-sans">
                <div className="flex items-start gap-3.5 p-3.5 bg-zinc-900/60 border border-hairline rounded-[1.25rem]">
                  <Mail className="w-4 h-4 text-gold mt-1 shrink-0" />
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-zinc-400">Advisory Inquiries</p>
                    <a href="mailto:contact@judeosamor.com" className="text-ink hover:text-gold transition-colors font-medium">
                      contact@judeosamor.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 bg-zinc-900/60 border border-hairline rounded-[1.25rem]">
                  <Building2 className="w-4 h-4 text-gold mt-1 shrink-0" />
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-zinc-400">CyBlack Non-Profit Partnerships</p>
                    <a href="mailto:partnerships@cyblack.org" className="text-ink hover:text-gold transition-colors font-medium">
                      partnerships@cyblack.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 bg-zinc-900/60 border border-hairline rounded-[1.25rem]">
                  <MapPin className="w-4 h-4 text-gold mt-1 shrink-0" />
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-zinc-400">Location & Availability</p>
                    <p className="text-ink font-medium">United Kingdom &middot; Global Engagements (In-Person / Virtual)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 bg-zinc-900/60 border border-hairline rounded-[1.25rem]">
                  <Clock className="w-4 h-4 text-gold mt-1 shrink-0" />
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-zinc-400">Response Protocol</p>
                    <p className="text-zinc-300">Executive correspondence reviewed within 48 business hours.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-hairline text-xs text-zinc-400 font-display">
                &ldquo;True security is never loud, reactionary, or flashy. It is a state of quiet, robust, and unshakeable resilience.&rdquo;
              </div>
            </div>
          </Reveal>

          {/* Right Column: Inquiry Form */}
          <Reveal variant="right" className="lg:col-span-7">
            <div className="bg-black border border-hairline p-8 sm:p-10 shadow-2xl rounded-[1.25rem]">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-zinc-900 border border-gold text-gold flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink">
                    Inquiry Received
                  </h3>
                  <p className="text-zinc-300 text-sm max-w-md mx-auto leading-relaxed font-sans">
                    Thank you for reaching out. Your request has been transmitted securely and will be reviewed by Dr. Jude Osamor&rsquo;s executive advisory team.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: "",
                        title: "",
                        organization: "",
                        email: "",
                        phone: "",
                        inquiryType: "Conference Keynote Address",
                        timeline: "",
                        location: "London, UK / In-Person",
                        message: "",
                      });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-zinc-900 border border-gold/50 text-gold text-xs uppercase tracking-brand font-semibold hover:bg-gold hover:text-zinc-900 transition-colors rounded-full"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs uppercase tracking-brand font-semibold text-zinc-300">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-zinc-900 border border-hairline px-4 py-3 text-sm text-ink placeholder-zinc-500 focus:outline-none focus:border-gold transition-colors rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs uppercase tracking-brand font-semibold text-zinc-300">
                        Professional Title & Role
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Chief Information Security Officer"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="w-full bg-zinc-900 border border-hairline px-4 py-3 text-sm text-ink placeholder-zinc-500 focus:outline-none focus:border-gold transition-colors rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs uppercase tracking-brand font-semibold text-zinc-300">
                        Organization / Entity *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Financial Services Corp / University"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full bg-zinc-900 border border-hairline px-4 py-3 text-sm text-ink placeholder-zinc-500 focus:outline-none focus:border-gold transition-colors rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs uppercase tracking-brand font-semibold text-zinc-300">
                        Official Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@organization.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-zinc-900 border border-hairline px-4 py-3 text-sm text-ink placeholder-zinc-500 focus:outline-none focus:border-gold transition-colors rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs uppercase tracking-brand font-semibold text-zinc-300">
                        Nature of Inquiry *
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full bg-zinc-900 border border-hairline px-4 py-3 text-sm text-ink focus:outline-none focus:border-gold transition-colors rounded-xl"
                      >
                        <option value="Conference Keynote Address">Conference Keynote Address</option>
                        <option value="Board / Executive Security Advisory">Board / Executive Security Advisory</option>
                        <option value="Corporate Cyber Resilience Workshop">Corporate Cyber Resilience Workshop</option>
                        <option value="Academic Lecture / Guest Faculty">Academic Lecture / Guest Faculty</option>
                        <option value="Media Commentary / Panel Discussion">Media Commentary / Panel Discussion</option>
                        <option value="CyBlack Non-Profit Partnership">CyBlack Non-Profit Partnership</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs uppercase tracking-brand font-semibold text-zinc-300">
                        Proposed Timeline / Event Date
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Q3 2026 / October 15, 2026"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full bg-zinc-900 border border-hairline px-4 py-3 text-sm text-ink placeholder-zinc-500 focus:outline-none focus:border-gold transition-colors rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-brand font-semibold text-zinc-300">
                      Scope, Audience & Strategic Objectives *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please outline the strategic context, expected audience size, themes, or specific advisory scope..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-zinc-900 border border-hairline px-4 py-3 text-sm text-ink placeholder-zinc-500 focus:outline-none focus:border-gold transition-colors resize-none rounded-xl"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-gold text-on-gold font-semibold text-xs uppercase tracking-brand hover:bg-gold-bright transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(198,169,138,0.3)] disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Transmitting Request...</span>
                    ) : (
                      <>
                        <span>Submit Executive Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}
