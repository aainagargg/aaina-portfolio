"use client";

import Link from "next/link";

type Pose = "mountain" | "warrior" | "reachup" | "star" | "triangle" | "forwardfold";
type Accent = "signal" | "pulse" | "econ";

const accentHex: Record<Accent, string> = {
  signal: "#FF7A3D",
  pulse: "#9B87F5",
  econ: "#F5C451",
};

// A chunky, filled "yoga buddy" body: round head, a thick capsule torso,
// and pill-shaped limbs. Thin stick lines don't read as a body at this
// size — a solid, rounded silhouette does, the way a fitness-app icon or
// a trail-map figure would draw it.
const POSE_LIMBS: Record<Pose, { legs: [string, string]; arms: [string, string] }> = {
  mountain: { legs: ["13,42", "27,42"], arms: ["9,22", "31,22"] },
  warrior: { legs: ["5,42", "35,42"], arms: ["0,13", "40,13"] },
  star: { legs: ["3,42", "37,42"], arms: ["1,0", "39,0"] },
  reachup: { legs: ["14,42", "26,42"], arms: ["9,-6", "31,-6"] },
  triangle: { legs: ["8,42", "32,42"], arms: ["38,-4", "3,38"] },
  forwardfold: { legs: ["2,42", "38,42"], arms: ["14,28", "26,28"] },
};

function YogaFigure({ pose, color }: { pose: Pose; color: string }) {
  const { legs, arms } = POSE_LIMBS[pose];
  return (
    <g strokeLinecap="round">
      {/* limbs, drawn first so the torso sits on top */}
      <line x1="20" y1="24" x2={legs[0].split(",")[0]} y2={legs[0].split(",")[1]} stroke={color} strokeWidth="7" />
      <line x1="20" y1="24" x2={legs[1].split(",")[0]} y2={legs[1].split(",")[1]} stroke={color} strokeWidth="7" />
      <line x1="20" y1="13" x2={arms[0].split(",")[0]} y2={arms[0].split(",")[1]} stroke={color} strokeWidth="6" />
      <line x1="20" y1="13" x2={arms[1].split(",")[0]} y2={arms[1].split(",")[1]} stroke={color} strokeWidth="6" />
      {/* torso */}
      <line x1="20" y1="13" x2="20" y2="25" stroke={color} strokeWidth="13" />
      {/* head */}
      <circle cx="20" cy="7" r="7.5" fill={color} />
    </g>
  );
}

type Stop = {
  x: number;
  y: number;
  side: "left" | "right";
  pose: Pose;
  accent: Accent;
  date: string;
  org: string;
  role: string;
  href: string;
};

// Most recent first, road runs top (now) to bottom (where it all started).
const STOPS: Stop[] = [
  { x: 150, y: 30, side: "right", pose: "star", accent: "pulse", date: "Now, 2026", org: "Sentient Futures", role: "AI Governance Fellow", href: "/research" },
  { x: 78, y: 230, side: "right", pose: "warrior", accent: "signal", date: "2026", org: "Arcadis", role: "Data Science Intern", href: "/technical" },
  { x: 224, y: 430, side: "left", pose: "reachup", accent: "signal", date: "2025", org: "Google DeepMind", role: "AI Research Fellow", href: "/technical" },
  { x: 70, y: 630, side: "right", pose: "mountain", accent: "signal", date: "2025 · 2nd year", org: "HotSpot, Arcadis", role: "Led the LPR redevelopment", href: "/technical" },
  { x: 226, y: 830, side: "left", pose: "triangle", accent: "econ", date: "2024 · 1st year", org: "Arcadis", role: "First internship, landed", href: "/technical" },
  { x: 130, y: 1030, side: "right", pose: "forwardfold", accent: "econ", date: "2023", org: "University of Toronto", role: "Where it all started", href: "/journey" },
];

const ROAD_PATH =
  "M150,-40 L150,20 C 80,140 78,170 78,230 C 78,290 224,370 224,430 C 224,490 70,570 70,630 C 70,690 226,770 226,830 C 226,890 130,970 130,1030 C 130,1060 140,1075 150,1090 L150,1140";

export function JourneyRoad() {
  return (
    <svg
      viewBox="0 -70 320 1220"
      className="mx-auto w-full max-w-sm overflow-visible"
      role="img"
      aria-label="An illustrated road showing the journey backward from current AI governance and engineering work to first year at university, marked by yoga-pose figures. Each stop links to more detail."
    >
      <path d={ROAD_PATH} fill="none" stroke="#1C1B27" strokeWidth="34" strokeLinecap="round" />
      <path d={ROAD_PATH} fill="none" stroke="#948FA3" strokeWidth="2.5" strokeDasharray="9 11" opacity="0.5" />

      {/* fades at both ends to signal the road keeps going */}
      <rect x="0" y="-70" width="320" height="70" fill="url(#fadeTop)" />
      <rect x="0" y="1080" width="320" height="70" fill="url(#fadeBottom)" />
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
      <path d="M144,-58 L150,-68 L156,-58" fill="none" stroke="#948FA3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      <path d="M144,1128 L150,1138 L156,1128" fill="none" stroke="#948FA3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />

      {STOPS.map((s) => (
        <Link key={s.org + s.date} href={s.href} className="group cursor-pointer">
          <circle
            cx={s.x}
            cy={s.y}
            r="6"
            fill={accentHex[s.accent]}
            className="origin-center transition-transform duration-200 group-hover:scale-125"
          />
          <g
            transform={`translate(${s.x - 20}, ${s.y - 68})`}
            className="origin-center transition-transform duration-200 group-hover:scale-110"
          >
            <YogaFigure pose={s.pose} color={accentHex[s.accent]} />
          </g>
          <text
            x={s.side === "right" ? s.x + 34 : s.x - 34}
            y={s.y - 4}
            textAnchor={s.side === "right" ? "start" : "end"}
            className="font-mono"
            fontSize="10"
            fill="#948FA3"
          >
            {s.date}
          </text>
          <text
            x={s.side === "right" ? s.x + 34 : s.x - 34}
            y={s.y + 12}
            textAnchor={s.side === "right" ? "start" : "end"}
            className="font-display transition-colors duration-200"
            fontSize="13"
            fontWeight="700"
            fill="#F4F2ED"
            style={{ transition: "fill 200ms" }}
            onPointerEnter={(e) => (e.currentTarget.style.fill = accentHex[s.accent])}
            onPointerLeave={(e) => (e.currentTarget.style.fill = "#F4F2ED")}
          >
            {s.org} {s.side === "right" ? "↗" : ""}
          </text>
          <text
            x={s.side === "right" ? s.x + 34 : s.x - 34}
            y={s.y + 27}
            textAnchor={s.side === "right" ? "start" : "end"}
            fontSize="10.5"
            fill="#948FA3"
          >
            {s.role}
          </text>
        </Link>
      ))}
    </svg>
  );
}
