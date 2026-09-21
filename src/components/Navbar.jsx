"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Pillars", href: "/#pillars" },
    { name: "CyBlack", href: "/#cyblack" },
    { name: "Research", href: "/#research" },
    { name: "Media & Talks", href: "/#media" },
    { name: "Advisory", href: "/#advisory" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#071322]/95 backdrop-blur-md py-4 border-b border-[#C6A98A]/20 shadow-2xl"
          : "bg-gradient-to-b from-[#071322]/90 via-[#071322]/50 to-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-48 sm:w-56 h-12">
            <Image
              src="/images/logo_white_text.png"
              alt="Dr. Jude Osamor Logo"
              fill
              sizes="(max-width: 768px) 190px, 224px"
              priority
              className="object-contain object-left drop-shadow-md group-hover:opacity-95 transition-opacity duration-300"
            />
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.16em] font-medium text-zinc-300 hover:text-[#C6A98A] transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}

          {/* Executive CTA Button */}
          <Link
            href="/#advisory"
            className="inline-flex items-center justify-center px-4 py-2 border border-[#C6A98A]/60 text-[#C6A98A] hover:bg-[#C6A98A] hover:text-[#0A1E35] text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 rounded-none shadow-sm hover:shadow-[0_0_20px_rgba(198,169,138,0.25)]"
          >
            Advisory & Speaking
          </Link>
        </nav>

        {/* Mobile Animated Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden relative w-11 h-11 flex items-center justify-center rounded-lg border transition-all duration-300 active:scale-75 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A98A] ${
            mobileMenuOpen
              ? "text-[#C6A98A] bg-[#C6A98A]/15 border-[#C6A98A]/40 shadow-[0_0_18px_rgba(198,169,138,0.35)] rotate-90"
              : "text-zinc-200 hover:text-[#C6A98A] bg-white/[0.04] border-white/10 hover:border-[#C6A98A]/30 hover:bg-[#C6A98A]/5 rotate-0"
          }`}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          <div className="w-5 h-5 relative flex items-center justify-center pointer-events-none">
            {/* Bar 1 */}
            <span
              className={`absolute h-[2px] w-5 rounded-full transition-all duration-300 ease-in-out ${
                mobileMenuOpen
                  ? "bg-[#C6A98A] rotate-45 translate-y-0"
                  : "bg-current -translate-y-1.5"
              }`}
            />
            {/* Bar 2 */}
            <span
              className={`absolute h-[2px] w-5 rounded-full transition-all duration-200 ease-in-out ${
                mobileMenuOpen
                  ? "opacity-0 scale-x-0 bg-[#C6A98A]"
                  : "opacity-100 scale-x-100 bg-current"
              }`}
            />
            {/* Bar 3 */}
            <span
              className={`absolute h-[2px] w-5 rounded-full transition-all duration-300 ease-in-out ${
                mobileMenuOpen
                  ? "bg-[#C6A98A] -rotate-45 translate-y-0"
                  : "bg-current translate-y-1.5"
              }`}
            />
          </div>
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071322]/98 backdrop-blur-2xl border-b border-[#C6A98A]/20 px-6 py-6 space-y-3 animate-mobile-drawer shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase tracking-[0.18em] font-medium py-3 px-3 rounded border-b border-white/5 text-zinc-200 hover:text-[#C6A98A] hover:bg-[#C6A98A]/5 transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                href="/#advisory"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center py-3 border border-[#C6A98A] text-[#C6A98A] hover:bg-[#C6A98A] hover:text-[#0A1E35] text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-200"
              >
                Advisory & Speaking Inquiries
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
