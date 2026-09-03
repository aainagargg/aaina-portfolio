"use client";

type Pose = "mountain" | "warrior" | "reachup" | "star" | "triangle" | "forwardfold";
type Accent = "signal" | "pulse" | "econ";

const accentHex: Record<Accent, string> = {
  signal: "#FF7A3D",
  pulse: "#9B87F5",
  econ: "#F5C451",
};

// One consistent template for every pose: a head, a straight spine, two
// legs, two arms. Only the angles change. Keeping every figure this simple
// is what makes each pose read clearly at small size — the earlier version
// tried to be anatomically clever (bent knees, curved backs) and that
// extra detail is exactly what made the poses hard to tell apart.
const POSE_LIMBS: Record<Pose, { legs: [string, string]; arms: [string, string] }> = {
  mountain: { legs: ["14,44", "26,44"], arms: ["11,24", "29,24"] },
  warrior: { legs: ["8,44", "32,44"], arms: ["2,14", "38,14"] },
  star: { legs: ["6,44", "34,44"], arms: ["4,2", "36,2"] },
  reachup: { legs: ["15,44", "25,44"], arms: ["10,-4", "30,-4"] },
  triangle: { legs: ["10,44", "30,44"], arms: ["36,-2", "6,40"] },
  forwardfold: { legs: ["4,44", "36,44"], arms: ["16,30", "24,30"] },
};

function YogaFigure({ pose, color, x, y }: { pose: Pose; color: string; x: number; y: number }) {
  const { legs, arms } = POSE_LIMBS[pose];
  const common = {
    fill: "none",
    stroke: color,
    strokeWidth: 4.5,
    strokeLinecap: "round" as const,
  };

  return (
    <g transform={`translate(${x}, ${y}) scale(2)`}>
      <circle cx="20" cy="8" r="5.5" {...common} />
      <path
        d={`M20,14 L20,28 M20,28 L${legs[0]} M20,28 L${legs[1]} M20,14 L${arms[0]} M20,14 L${arms[1]}`}
        {...common}
      />
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
};

// Most recent first, road runs top (now) to bottom (where it all started).
const STOPS: Stop[] = [
  { x: 150, y: 30, side: "right", pose: "star", accent: "pulse", date: "Now, 2026", org: "Sentient Futures", role: "AI Governance Fellow" },
  { x: 78, y: 230, side: "right", pose: "warrior", accent: "signal", date: "2026", org: "Arcadis", role: "Data Science Intern" },
  { x: 224, y: 430, side: "left", pose: "reachup", accent: "signal", date: "2025", org: "Google DeepMind", role: "AI Research Fellow" },
  { x: 70, y: 630, side: "right", pose: "mountain", accent: "signal", date: "2025 · 2nd year", org: "HotSpot, Arcadis", role: "Led the LPR redevelopment" },
  { x: 226, y: 830, side: "left", pose: "triangle", accent: "econ", date: "2024 · 1st year", org: "Arcadis", role: "First internship, landed" },
  { x: 130, y: 1030, side: "right", pose: "forwardfold", accent: "econ", date: "2023", org: "University of Toronto", role: "Where it all started" },
];

const ROAD_PATH =
  "M150,-40 L150,20 C 80,140 78,170 78,230 C 78,290 224,370 224,430 C 224,490 70,570 70,630 C 70,690 226,770 226,830 C 226,890 130,970 130,1030 C 130,1060 140,1075 150,1090 L150,1140";

export function JourneyRoad() {
  return (
    <svg
      viewBox="0 -70 320 1220"
      className="mx-auto w-full max-w-sm"
      role="img"
      aria-label="An illustrated road showing the journey backward from current AI governance and engineering work to first year at university, marked by stick figures in yoga and pilates poses, with the road continuing beyond both ends"
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
        <g key={s.org + s.date}>
          <circle cx={s.x} cy={s.y} r="5" fill={accentHex[s.accent]} />
          <YogaFigure pose={s.pose} color={accentHex[s.accent]} x={s.x - 20} y={s.y - 76} />
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
            className="font-display"
            fontSize="13"
            fontWeight="700"
            fill="#F4F2ED"
          >
            {s.org}
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
        </g>
      ))}
    </svg>
  );
}
