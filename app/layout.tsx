import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

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
  title: "Aaina Garg",
  description:
    "Machine learning engineer and AI governance researcher, Toronto.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable}`}>
      <body>
        <NavBar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
