import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { person } from "@/content/profile";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["italic"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aaina-portfolio-blond.vercel.app"),
  title: {
    default: "Aaina Garg",
    template: "%s · Aaina Garg",
  },
  description:
    "Machine learning engineer and AI governance researcher, Toronto. Production ML at Arcadis, AI governance research at Sentient Futures, selective fellowships at Google DeepMind, Cash App, and RBC Borealis.",
  keywords: [
    "Aaina Garg",
    "Machine Learning Engineer",
    "AI Governance",
    "University of Toronto",
    "Arcadis",
    "Sentient Futures",
    "Google DeepMind AI4Good",
  ],
  openGraph: {
    title: "Aaina Garg",
    description:
      "Machine learning engineer and AI governance researcher, Toronto.",
    url: "/",
    siteName: "Aaina Garg",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaina Garg",
    description:
      "Machine learning engineer and AI governance researcher, Toronto.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    url: "https://aaina-portfolio-blond.vercel.app",
    jobTitle: "Machine Learning Engineer",
    address: {
      "@type": "PostalAddress",
      addressLocality: person.location,
    },
    sameAs: Object.values(person.links).filter(Boolean),
  };

  return (
    <html lang="en" className={`${fraunces.variable} ${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <NavBar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
