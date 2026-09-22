"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Advisory is deliberately absent here — it is the call to action on the
  // right, and listing it in both places put "Advisory" on screen twice.
  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Pillars", href: "/#pillars" },
    { name: "CyBlack", href: "/#cyblack" },
    { name: "Research", href: "/#research" },
    { name: "Media & Talks", href: "/#media" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md py-4 border-b border-hairline"
          : "bg-gradient-to-b from-black/90 via-black/50 to-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">

        <Link href="/" aria-label="Dr. Jude Osamor — home">
          <BrandLogo className="w-44 sm:w-52 h-11" sizes="(max-width: 768px) 176px, 208px" priority />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="type-label link-underline text-zinc-300 hover:text-ink transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/#advisory"
            className="gold-button-outline type-label inline-flex items-center justify-center px-5 py-2.5"
          >
            Advisory
          </Link>

          <ThemeToggle />
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`relative w-11 h-11 flex items-center justify-center rounded-full border transition-colors duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
              mobileMenuOpen
                ? "text-gold border-gold/40"
                : "text-zinc-300 hover:text-gold border-hairline"
            }`}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span className="w-5 h-5 relative flex items-center justify-center pointer-events-none">
              <span
                className={`absolute h-px w-5 bg-current transition-transform duration-300 ${
                  mobileMenuOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute h-px w-5 bg-current transition-opacity duration-200 ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute h-px w-5 bg-current transition-transform duration-300 ${
                  mobileMenuOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/98 backdrop-blur-2xl border-b border-hairline px-6 py-6 animate-mobile-drawer">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="type-label py-4 border-b border-hairline text-zinc-300 hover:text-gold transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#advisory"
              onClick={() => setMobileMenuOpen(false)}
              className="gold-button type-label mt-6 py-3.5 text-center"
            >
              Advisory &amp; Speaking
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
