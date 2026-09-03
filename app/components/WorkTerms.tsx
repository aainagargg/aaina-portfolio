import type { WorkTerm } from "@/content/profile";
import { Reveal } from "./Reveal";

export function WorkTerms({ terms }: { terms: WorkTerm[] }) {
  return (
    <div className="grid gap-0 sm:grid-cols-4 sm:gap-4">
      {terms.map((t, i) => (
        <Reveal key={t.term} delay={i * 80} className="relative">
          <div className="flex gap-4 pb-8 sm:block sm:pb-0">
            <div className="flex flex-col items-center sm:mb-4 sm:flex-row">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-signal/40 bg-surface font-mono text-xs text-signal">
                {i}
              </span>
              {i < terms.length - 1 && (
                <span className="mt-1 w-px flex-1 bg-line sm:ml-2 sm:mt-0 sm:h-px sm:w-full sm:flex-none" />
              )}
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-signal">{t.term}</p>
              <p className="mt-1 font-display text-base font-semibold text-ink">{t.org}</p>
              <p className="text-xs text-muted">{t.role} · {t.dates}</p>
              <p className="mt-2 max-w-[22ch] text-sm text-ink/70">{t.project}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
