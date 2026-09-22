import Image from "next/image";

// Both lockups are rendered and swapped by CSS off <html data-theme>, so the
// correct one is painted immediately with no hydration mismatch. The cream
// wordmark disappears on a light page; the navy one disappears on a dark page.
export default function BrandLogo({ className = "w-48 h-12", sizes = "192px", priority = false }) {
  return (
    <span className={`relative block ${className}`}>
      <Image
        src="/images/logo_white_text.png"
        alt="Dr. Jude Osamor"
        fill
        sizes={sizes}
        priority={priority || undefined}
        className="logo-for-dark object-contain object-left"
      />
      <Image
        src="/images/logo.png"
        alt=""
        aria-hidden="true"
        fill
        sizes={sizes}
        className="logo-for-light object-contain object-left"
      />
    </span>
  );
}
