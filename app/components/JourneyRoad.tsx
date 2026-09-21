"use client";

import Link from "next/link";
import { DomainIcon } from "./DomainIcon";

type Accent = "signal" | "pulse" | "econ";

const accentHex: Record<Accent, string> = {
  signal: "#FF7A3D",
  pulse: "#9B87F5",
  econ: "#F5C451",
};

type Stop = {
  x: number;
  y: number;
  side: "left" | "right";
  accent: Accent;
  date: string;
  org: string;
  role: string;
  href: string;
};

// Most recent first, road runs top (now) to bottom (where it all started).
const STOPS: Stop[] = [
  { x: 188, y: 30, side: "right", accent: "pulse", date: "Now, 2026", org: "Sentient Futures", role: "AI Governance Fellow", href: "/research" },
  { x: 98, y: 230, side: "right", accent: "signal", date: "2026", org: "Arcadis", role: "Data Science Intern", href: "/technical" },
  { x: 280, y: 430, side: "left", accent: "signal", date: "2025", org: "Google DeepMind", role: "AI Research Fellow", href: "/technical" },
  { x: 88, y: 630, side: "right", accent: "signal", date: "2025 · 2nd year", org: "HotSpot, Arcadis", role: "Led the LPR redevelopment", href: "/technical" },
  { x: 283, y: 830, side: "left", accent: "econ", date: "2024 · 1st year", org: "Arcadis", role: "First internship, landed", href: "/technical" },
  { x: 163, y: 1030, side: "right", accent: "econ", date: "2023", org: "University of Toronto", role: "Where it all started", href: "/journey" },
];

const ROAD_PATH =
  "M188,-40 L188,20 C 100,140 97,170 97,230 C 97,290 280,370 280,430 C 280,490 88,570 88,630 C 88,690 283,770 283,830 C 283,890 163,970 163,1030 C 163,1060 175,1075 188,1090 L188,1140";

export function JourneyRoad() {
  return (
    <div className="mx-auto max-w-2xl rounded-3xl border border-line bg-surface/40 bg-glow-econ p-4 sm:p-8">
      <svg
        viewBox="0 -70 400 1220"
        className="mx-auto w-full overflow-visible"
        role="img"
        aria-label="An illustrated road showing the journey backward from current AI governance and engineering work to first year at university. Each stop links to more detail."
      >
        <path d={ROAD_PATH} fill="none" stroke="#211F2C" strokeWidth="40" strokeLinecap="round" />
        <path d={ROAD_PATH} fill="none" stroke="#2A2836" strokeWidth="40" strokeLinecap="round" opacity="0.6" />
        <path d={ROAD_PATH} fill="none" stroke="#948FA3" strokeWidth="3" strokeDasharray="10 12" opacity="0.55" />

        {/* fades at both ends to signal the road keeps going */}
        <rect x="0" y="-70" width="400" height="70" fill="url(#fadeTop)" />
        <rect x="0" y="1080" width="400" height="70" fill="url(#fadeBottom)" />
        <defs>
          <linearGradient id="fadeTop" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor="#09090F" stopOpacity="0" />
            <stop offset="1" stopColor="#09090F" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="fadeBottom" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#09090F" stopOpacity="0" />
            <stop offset="1" stopColor="#09090F" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path d="M182,-58 L188,-68 L194,-58" fill="none" stroke="#948FA3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
        <path d="M182,1128 L188,1138 L194,1128" fill="none" stroke="#948FA3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />

        {STOPS.map((s) => (
          <Link key={s.org + s.date} href={s.href} className="group cursor-pointer">
            <circle
              cx={s.x}
              cy={s.y}
              r="6"
              fill={accentHex[s.accent]}
              className="origin-center transition-transform duration-200 group-hover:scale-125"
            />
            <foreignObject x={s.x - 26} y={s.y - 64} width="52" height="52" className="overflow-visible">
              <div
                className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl border-2 bg-void shadow-lg transition-transform duration-200 group-hover:scale-110"
                style={{ borderColor: accentHex[s.accent] }}
              >
                <DomainIcon domain={s.accent} className="h-7 w-7" />
              </div>
            </foreignObject>
            <text
              x={s.side === "right" ? s.x + 40 : s.x - 40}
              y={s.y - 4}
              textAnchor={s.side === "right" ? "start" : "end"}
              className="font-mono"
              fontSize="10.5"
              fill="#948FA3"
            >
              {s.date}
            </text>
            <text
              x={s.side === "right" ? s.x + 40 : s.x - 40}
              y={s.y + 13}
              textAnchor={s.side === "right" ? "start" : "end"}
              className="font-display transition-colors duration-200"
              fontSize="15"
              fontWeight="700"
              fill="#F4F2ED"
              style={{ transition: "fill 200ms" }}
              onPointerEnter={(e) => (e.currentTarget.style.fill = accentHex[s.accent])}
              onPointerLeave={(e) => (e.currentTarget.style.fill = "#F4F2ED")}
            >
              {s.org} {s.side === "right" ? "↗" : ""}
            </text>
            <text
              x={s.side === "right" ? s.x + 40 : s.x - 40}
              y={s.y + 29}
              textAnchor={s.side === "right" ? "start" : "end"}
              fontSize="11"
              fill="#948FA3"
            >
              {s.role}
            </text>
          </Link>
        ))}
      </svg>
    </div>
  );
}
