import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth dark ${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#071322] text-[#F9F6F0] min-h-screen flex flex-col font-sans selection:bg-[#C6A98A] selection:text-[#0A1E35] antialiased">
        {children}
      </body>
    </html>
  );
}
