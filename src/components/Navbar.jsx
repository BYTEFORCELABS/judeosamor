"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import ThemeToggle from "@/components/ThemeToggle";

// Advisory is deliberately absent here — it is the call to action on the
// right, and listing it in both places put "Advisory" on screen twice.
const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Pillars", href: "/#pillars" },
  { name: "CyBlack", href: "/#cyblack" },
  { name: "Research", href: "/research" },
  { name: "Talks & Media", href: "/media" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // While the full-screen menu is up, the page behind it must not scroll,
  // and Escape should close it like any other dialog.
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
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

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              className="relative w-11 h-11 flex items-center justify-center rounded-full border border-hairline text-zinc-300 hover:text-gold transition-colors cursor-pointer"
            >
              <span className="w-5 h-3.5 relative flex flex-col justify-between pointer-events-none">
                <span className="h-px w-5 bg-current" />
                <span className="h-px w-5 bg-current" />
                <span className="h-px w-3.5 bg-current" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen menu. It takes the whole viewport so nothing of the page
          shows through and competes with it; the links arrive one after
          another rather than all at once. */}
      {menuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
          className="menu-overlay fixed inset-0 z-[60] bg-black overflow-y-auto lg:hidden"
        >
          <div className="min-h-full flex flex-col px-6 py-6">
            <div className="flex items-center justify-between gap-3 flex-shrink-0">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                aria-label="Dr. Jude Osamor — home"
                className="min-w-0"
              >
                <BrandLogo className="w-36 sm:w-44 h-10" sizes="176px" />
              </Link>

              <div className="flex items-center gap-2 flex-shrink-0">
                <ThemeToggle />
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-hairline text-zinc-300 hover:text-gold transition-colors cursor-pointer flex-shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <nav className="flex-1 flex flex-col justify-center py-10">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ "--menu-delay": `${80 + idx * 55}ms` }}
                  className="menu-item block type-display text-4xl text-ink hover:text-gold transition-colors py-4 border-b border-hairline"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/#advisory"
                onClick={() => setMenuOpen(false)}
                style={{ "--menu-delay": `${80 + navLinks.length * 55}ms` }}
                className="menu-item block gold-button type-label mt-10 py-4 text-center"
              >
                Advisory &amp; Speaking
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
