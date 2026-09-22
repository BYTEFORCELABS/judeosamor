"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { LinkedInIcon, ResearchGateIcon, XTwitterIcon, YouTubeIcon } from "@/components/SocialIcons";
import { Mail, MapPin, ExternalLink, ShieldCheck } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: LinkedInIcon,
      url: "https://www.linkedin.com/search/results/all/?keywords=Jude%20Osamor%20CyBlack",
    },
    {
      name: "ResearchGate",
      icon: ResearchGateIcon,
      url: "https://www.researchgate.net/profile/Jude-Osamor",
    },
    {
      name: "X (Twitter)",
      icon: XTwitterIcon,
      url: "https://x.com/cyblackorg",
    },
    {
      name: "YouTube",
      icon: YouTubeIcon,
      url: "https://www.youtube.com/results?search_query=Jude+Osamor+cybersecurity",
    },
  ];

  return (
    <footer className="bg-black text-ink pt-20 pb-12 border-t border-hairline relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        
        {/* Top Tier: Brand Lockup & Direct Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-hairline">
          
          {/* Brand Identity & Monogram */}
          <Reveal variant="up" className="lg:col-span-5 space-y-6">
            <div className="relative w-56 h-14">
              <Image
                src="/images/logo_white_text.png"
                alt="Dr. Jude Osamor Logo"
                fill
                sizes="230px"
                className="object-contain object-left"
              />
            </div>

            <p className="text-xs uppercase tracking-brand text-gold font-semibold">
              PhD &middot; Cybersecurity Executive &middot; Co-Founder CyBlack
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-md font-sans">
              Balancing rigorous academic inquiry with decisive enterprise cyber defense leadership. 
              Committed to quiet resilience, critical infrastructure security, and diversifying the technology ecosystem.
            </p>
          </Reveal>

          {/* Navigation Links */}
          <Reveal variant="up" delay={90} className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-gold-bright">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-brand text-zinc-300 font-sans">
              <li>
                <Link href="/#about" className="hover:text-gold transition-colors">
                  Executive Biography
                </Link>
              </li>
              <li>
                <Link href="/#pillars" className="hover:text-gold transition-colors">
                  Brand Pillars
                </Link>
              </li>
              <li>
                <Link href="/#cyblack" className="hover:text-gold transition-colors">
                  CyBlack Non-Profit
                </Link>
              </li>
              <li>
                <Link href="/research" className="hover:text-gold transition-colors">
                  Research & Publications
                </Link>
              </li>
              <li>
                <Link href="/media" className="hover:text-gold transition-colors">
                  Media & Keynotes
                </Link>
              </li>
              <li>
                <Link href="/#advisory" className="hover:text-gold transition-colors">
                  Speaking & Advisory
                </Link>
              </li>
            </ul>
          </Reveal>

          {/* Institutional Contact */}
          <Reveal variant="up" delay={180} className="lg:col-span-4 space-y-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-gold-bright">
              Institutional Channels
            </h4>
            
            <div className="space-y-3 text-xs text-zinc-300 font-sans">
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-gold" />
                <a href="mailto:contact@judeosamor.com" className="hover:text-gold transition-colors">
                  contact@judeosamor.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                <a href="https://cyblack.org" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <span>CyBlack UK (cyblack.org)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-gold" />
                <span>London & Bristol, United Kingdom</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-4 text-gold">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-8 h-8 rounded border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-zinc-900 transition-all duration-200"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </Reveal>

        </div>

        {/* Bottom Tier: Copyright & Disclaimers */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-sans">
          <p>
            &copy; {new Date().getFullYear()} Dr. Jude Osamor. All Rights Reserved.
          </p>
          <p className="text-[11px] tracking-wider uppercase text-zinc-400">
            Brand Identity & Visual System &middot; Midnight Navy &amp; Warm Beige
          </p>
        </div>

      </div>
    </footer>
  );
}
