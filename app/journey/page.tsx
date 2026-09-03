import { journey, yearHighlights, type JourneyYear } from "@/content/profile";
import { Reveal } from "../components/Reveal";

const accentDot: Record<string, string> = {
  signal: "bg-signal",
  pulse: "bg-pulse",
  econ: "bg-econ",
};
const accentText: Record<string, string> = {
  signal: "text-signal",
  pulse: "text-pulse",
  econ: "text-econ",
};

const YEAR_ORDER: JourneyYear[] = ["Year 4", "Year 3", "Year 2", "Year 1", "Before UofT"];

export default function JourneyPage() {
  const groups = YEAR_ORDER.map((year) => ({
    year,
    items: journey.filter((j) => j.year === year),
  })).filter((g) => g.items.length > 0);

  return (
    <main className="mx-auto max-w-3xl px-6 pt-16 pb-28 sm:pt-24">
      <Reveal>
        <p className="font-mono text-sm text-muted">Journey</p>
        <h1 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
          The full record
        </h1>
        <p className="mt-5 max-w-xl text-lg text-ink/80">
          Most recent first, working back to where it started. Nothing
          trimmed, organized by year so the shape of it is easy to see.
        </p>
      </Reveal>

      <div className="mt-16 space-y-20">
        {groups.map((group) => (
          <section key={group.year}>
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-ink">{group.year}</h2>
              <p className="mt-2 max-w-xl text-ink/70">{yearHighlights[group.year]}</p>
            </Reveal>

            <ol className="relative mt-10 ml-3 space-y-8 border-l border-line pl-8 sm:ml-6 sm:pl-10">
              {group.items.map((j, i) => (
                <Reveal key={`${j.org}-${j.role}`} delay={Math.min(i * 30, 300)}>
                  <li className="relative">
                    <span className="absolute -left-[2.6rem] top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-void bg-void sm:-left-[3.6rem]">
                      <span className={`h-2 w-2 rounded-full ${accentDot[j.accent]}`} aria-hidden />
                    </span>
                    <p className="font-mono text-xs text-muted">
                      {j.dates}
                      {j.location ? ` · ${j.location}` : ""}
                    </p>
                    <p className="mt-1 font-display text-lg font-semibold text-ink">{j.role}</p>
                    <p className={`mt-0.5 text-sm ${accentText[j.accent]}`}>{j.org}</p>
                    <p className="mt-2 max-w-xl text-sm text-ink/70">{j.description}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </main>
  );
}
