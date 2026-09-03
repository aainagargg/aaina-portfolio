"use client";

import { useCountUp } from "./useCountUp";

function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const { ref, count } = useCountUp(value);
  return (
    <div className="min-w-0">
      <p className="font-accent text-2xl italic leading-tight text-ink sm:text-4xl md:text-5xl">
        <span ref={ref as React.RefObject<HTMLSpanElement>} className="tabular-nums">
          {count.toLocaleString()}
        </span>
        {suffix}
      </p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
}

export function StatBand({
  stats,
}: {
  stats: { value: number; suffix?: string; label: string }[];
}) {
  return (
    <div className="grid grid-cols-1 gap-6 min-[420px]:grid-cols-2 md:grid-cols-4 md:gap-8">
      {stats.map((s) => (
        <Stat key={s.label} {...s} />
      ))}
    </div>
  );
}
