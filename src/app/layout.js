import "./globals.css";
import localFont from "next/font/local";
import SplashScreen from "@/components/SplashScreen";

/**
 * Futura is the brand face (see "Dr. Jude Osamor - Brand Identity Guidelines").
 * It is the ONLY family on the site — hierarchy comes from weight, size and
 * tracking, never from swapping in a second typeface.
 */
const futura = localFont({
  src: [
    { path: "../../public/fonts/Futura-Light.woff", weight: "300", style: "normal" },
    { path: "../../public/fonts/Futura-Book.woff", weight: "400", style: "normal" },
    { path: "../../public/fonts/Futura-Medium.woff", weight: "500", style: "normal" },
    { path: "../../public/fonts/Futura-Bold.woff", weight: "700", style: "normal" },
    { path: "../../public/fonts/Futura-ExtraBold.woff", weight: "800", style: "normal" },
  ],
  variable: "--font-futura",
  display: "swap",
  // Closest widely-installed geometric sans before Arial's metric fallback.
  fallback: ["Avenir Next", "Avenir", "Century Gothic", "system-ui", "sans-serif"],
});

export const metadata = {
  metadataBase: new URL("https://judeosamor.com"),
  title: "Dr. Jude Osamor | VP of Cybersecurity, Academic Researcher & CyBlack Co-Founder",
  description:
    "Official website and executive portfolio of Dr. Jude Osamor — Vice President of Cybersecurity, Academic Researcher (PhD), and Co-Founder of CyBlack. Specializing in AI-driven threat mitigation, digital forensics, enterprise cyber defense, and data sovereignty.",
  keywords: [
    "Dr. Jude Osamor",
    "Jude Osamor",
    "Vice President Cybersecurity",
    "CyBlack Co-Founder",
    "Cybersecurity Researcher",
    "Digital Forensics",
    "AI Threat Detection",
    "Enterprise Cyber Defense",
    "Data Sovereignty Africa",
    "Cybersecurity Keynote Speaker",
  ],
  authors: [{ name: "Dr. Jude Osamor" }],
  openGraph: {
    title: "Dr. Jude Osamor | Cybersecurity Executive & Researcher",
    description:
      "Balancing the rigorous, analytical depth of academic authority (PhD) with the decisive structural integrity of senior cyber defense leadership.",
    url: "https://judeosamor.com",
    siteName: "Dr. Jude Osamor",
    images: [
      {
        url: "/images/logo.png",
        width: 1981,
        height: 583,
        alt: "Dr. Jude Osamor — Brand Identity",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Jude Osamor | Executive Cybersecurity & Research",
    description:
      "VP of Cybersecurity, Academic Researcher (PhD), and Co-Founder of CyBlack.",
    images: ["/images/logo.png"],
  },
};

// Runs before first paint so the page never flashes the wrong palette, and
// so the splash is marked as seen before it has a chance to animate.
// Dark is the brand default; light is opt-in. The splash plays once per
// session — a welcome the first time, an obstacle every time after.
const bootScript = `(function(){var d=document.documentElement;try{d.setAttribute("data-theme",localStorage.getItem("theme")==="light"?"light":"dark")}catch(e){d.setAttribute("data-theme","dark")}try{if(sessionStorage.getItem("splash")){d.classList.add("splash-seen")}else{sessionStorage.setItem("splash","1")}}catch(e){}})()`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${futura.variable}`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="bg-black text-ink min-h-screen flex flex-col selection:bg-gold selection:text-on-gold antialiased">
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
