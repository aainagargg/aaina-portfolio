type Affiliation = {
  name: string;
  initials: string;
  accent: "signal" | "pulse" | "econ";
};

const affiliations: Affiliation[] = [
  { name: "University of Toronto", initials: "UT", accent: "econ" },
  { name: "Arcadis", initials: "AR", accent: "signal" },
  { name: "HotSpot", initials: "HS", accent: "signal" },
  { name: "Google DeepMind", initials: "GD", accent: "pulse" },
  { name: "RBC Borealis", initials: "RB", accent: "econ" },
  { name: "AI4Good Lab", initials: "A4", accent: "pulse" },
  { name: "Technology Leadership Initiative", initials: "TLI", accent: "econ" },
  { name: "Vector Institute", initials: "VI", accent: "pulse" },
  { name: "MILA", initials: "ML", accent: "pulse" },
  { name: "CIFAR", initials: "CF", accent: "pulse" },
  { name: "Cash App", initials: "CA", accent: "signal" },
  { name: "Sentient Futures", initials: "SF", accent: "pulse" },
  { name: "Cohumain Labs", initials: "CL", accent: "pulse" },
];

const accentClasses: Record<Affiliation["accent"], string> = {
  signal: "border-signal/30 text-signal group-hover:border-signal/60",
  pulse: "border-pulse/30 text-pulse group-hover:border-pulse/60",
  econ: "border-econ/30 text-econ group-hover:border-econ/60",
};

export function AffiliationStrip() {
  return (
    <div className="flex flex-wrap gap-3">
      {affiliations.map((a) => (
        <div
          key={a.name}
          className="group flex items-center gap-2 rounded-full border border-line bg-surface/60 py-1.5 pl-1.5 pr-3 transition-colors hover:border-line"
        >
          <span
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border bg-void font-mono text-[10px] font-semibold transition-colors ${accentClasses[a.accent]}`}
          >
            {a.initials}
          </span>
          <span className="text-xs text-muted transition-colors group-hover:text-ink/80">
            {a.name}
          </span>
        </div>
      ))}
    </div>
  );
}
