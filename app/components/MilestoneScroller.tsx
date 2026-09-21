"use client";

import { useRef } from "react";
import Link from "next/link";
import { DomainIcon } from "./DomainIcon";

type Accent = "signal" | "pulse" | "econ";

export type Milestone = {
  date: string;
  org: string;
  role: string;
  description: string;
  accent: Accent;
  href: string;
};

const accentBorder: Record<Accent, string> = {
  signal: "border-signal/30 hover:border-signal/60",
  pulse: "border-pulse/30 hover:border-pulse/60",
  econ: "border-econ/30 hover:border-econ/60",
};

// Most recent first.
const MILESTONES: Milestone[] = [
  { date: "Now, 2026", org: "Sentient Futures", role: "AI Governance Fellow", description: "Researching how frontier LLMs reason about moral status.", accent: "pulse", href: "/research" },
  { date: "2026", org: "Arcadis", role: "Data Science Intern", description: "Shipped the AI intake tool used by 60,000 employees.", accent: "signal", href: "/technical" },
  { date: "2025", org: "Google DeepMind", role: "AI Research Fellow", description: "Led \"FairAI,\" cutting a gender bias gap by 68%.", accent: "signal", href: "/technical" },
  { date: "2025 · 2nd year", org: "HotSpot, Arcadis", role: "Product Management Analyst", description: "Led the end-to-end LPR system redevelopment.", accent: "signal", href: "/technical" },
  { date: "2024 · 1st year", org: "Arcadis", role: "Business Analyst", description: "First internship, landed before first year was over.", accent: "econ", href: "/technical" },
  { date: "2023", org: "University of Toronto", role: "Where it all started", description: "Began CS + Econ, and started asking questions.", accent: "econ", href: "/journey" },
];

export function MilestoneScroller() {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dx: number) => trackRef.current?.scrollBy({ left: dx, behavior: "smooth" });

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {MILESTONES.map((m) => (
          <Link
            key={m.date + m.org}
            href={m.href}
            className={`group w-[72%] shrink-0 snap-start rounded-2xl border bg-surface p-5 transition-colors sm:w-[32%] ${accentBorder[m.accent]}`}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-void/60">
                <DomainIcon domain={m.accent} className="h-5 w-5" />
              </div>
              <p className="font-mono text-xs text-muted">{m.date}</p>
            </div>
            <p className="mt-3 font-display text-lg font-bold text-ink group-hover:text-pulse">{m.org}</p>
            <p className="text-sm text-muted">{m.role}</p>
            <p className="mt-2 text-sm text-ink/70">{m.description}</p>
          </Link>
        ))}
      </div>
      <div className="mt-2 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollBy(-300)}
          aria-label="Scroll milestones left"
          className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-econ/40 hover:text-econ"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => scrollBy(300)}
          aria-label="Scroll milestones right"
          className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-econ/40 hover:text-econ"
        >
          →
        </button>
      </div>
    </div>
  );
}
