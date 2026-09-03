type Domain = "signal" | "pulse" | "econ";

const stroke: Record<Domain, string> = {
  signal: "#FF7A3D",
  pulse: "#9B87F5",
  econ: "#F5C451",
};

// Simple line-art motifs, one per domain, used as a recurring visual
// thread across the timeline and project sections: a network for ML
// engineering, a balance for governance, a rising line for strategy.
export function DomainIcon({ domain, className }: { domain: Domain; className?: string }) {
  const c = stroke[domain];
  if (domain === "signal") {
    return (
      <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
        <circle cx="8" cy="10" r="3.5" stroke={c} strokeWidth="1.6" />
        <circle cx="32" cy="10" r="3.5" stroke={c} strokeWidth="1.6" />
        <circle cx="20" cy="30" r="3.5" stroke={c} strokeWidth="1.6" />
        <path d="M11 12L17 27M29 12L23 27M11.5 10H28.5" stroke={c} strokeWidth="1.4" />
      </svg>
    );
  }
  if (domain === "pulse") {
    return (
      <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
        <path d="M20 6V34M8 12L20 6L32 12" stroke={c} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M8 12L4 22C4 25 8 27 8 27C8 27 12 25 12 22L8 12Z" stroke={c} strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M32 12L28 22C28 25 32 27 32 27C32 27 36 25 36 22L32 12Z" stroke={c} strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M13 34H27" stroke={c} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <path d="M6 30L15 19L22 25L34 10" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 10H34V18" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 34H34" stroke={c} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
