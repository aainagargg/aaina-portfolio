import Link from "next/link";
import { person, education, buildWork, thinkWork, beyondWork, distinctions } from "@/content/profile";
import { Reveal } from "./components/Reveal";
import { StatBand } from "./components/StatBand";
import { DomainIcon } from "./components/DomainIcon";
import { JourneyRoad } from "./components/JourneyRoad";

const heroStats = [
  { value: 60, suffix: "k+", label: "people using systems I've shipped" },
  { value: 96, suffix: "%+", label: "detection accuracy, production CV pipeline" },
  { value: buildWork.length, suffix: "+", label: "shipped ML and product builds" },
  { value: distinctions.length, suffix: "+", label: "selective fellowships and programs" },
];

const lenses = [
  {
    href: "/research",
    label: "Research",
    accent: "pulse" as const,
    teaser: "AI governance and safety work, at Sentient Futures, Cohumain Labs, and IIT Delhi.",
  },
  {
    href: "/technical",
    label: "Technical",
    accent: "signal" as const,
    teaser: "Production ML I've shipped, at Arcadis, Google DeepMind, and Cash App.",
  },
  {
    href: "/fellowships",
    label: "Fellowships",
    accent: "econ" as const,
    teaser: "The selective programs, and what I built inside each one.",
  },
  {
    href: "/community",
    label: "Community",
    accent: "pulse" as const,
    teaser: "The clubs I lead, founded, and organize outside of work.",
  },
];

export default function Home() {
  return (
    <main id="top" className="mx-auto max-w-5xl px-6">
      <section className="pt-16 pb-24 sm:pt-24 sm:pb-32">
        <Reveal>
          <p className="font-mono text-sm text-muted">{person.location}</p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-4 font-display text-5xl font-bold leading-[0.95] tracking-tight text-ink sm:text-7xl">
            Hi, I&rsquo;m {person.name.split(" ")[0]}.
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/85 sm:text-xl">
            I&rsquo;m a Computer Science and Economics student at the{" "}
            {education.school} who ended up chasing the same question from
            two directions: how do you actually ship an AI system at scale,
            and how do you know whether you{" "}
            <em className="font-accent not-italic italic text-pulse">should</em> have
            shipped it at all. Right now that means a seat on the AI team at{" "}
            {buildWork[0].org}, a research fellowship with {thinkWork[0].org}, and
            an internship at {thinkWork[1].org}, on top of selective stints
            at Google DeepMind, Cash App, and RBC Borealis.
          </p>
        </Reveal>
        <Reveal delay={300} className="mt-20 rounded-3xl border border-line bg-surface/60 bg-glow-pulse p-8 sm:p-12">
          <StatBand stats={heroStats} />
        </Reveal>
      </section>

      <section className="border-t border-line py-16">
        <Reveal>
          <p className="font-mono text-sm text-signal">Currently</p>
          <p className="mt-3 max-w-xl text-lg text-ink/85">
            Shipping the AI intake tool at Arcadis. Building a
            sentience-aware LLM evaluation toolkit for Sentient Futures.
            Writing on Building Out Loud in between. Based in Toronto,
            graduating spring 2027.
          </p>
        </Reveal>
      </section>

      <section className="border-t border-line py-16">
        <Reveal>
          <h2 className="font-display text-2xl font-bold text-ink">Pick a lens</h2>
          <p className="mt-2 text-muted">Four sides of the same person. Start wherever you want.</p>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {lenses.map((l, i) => (
            <Reveal key={l.href} delay={i * 70}>
              <Link
                href={l.href}
                className="focus-ring group flex items-start gap-4 rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-pulse/40"
              >
                <DomainIcon domain={l.accent} className="h-9 w-9 shrink-0" />
                <div>
                  <p className="font-display text-lg font-semibold text-ink group-hover:text-pulse">
                    {l.label} →
                  </p>
                  <p className="mt-1 text-sm text-muted">{l.teaser}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line py-16">
        <Reveal>
          <h2 className="font-display text-2xl font-bold text-ink">The road so far</h2>
          <p className="mt-2 max-w-lg text-muted">
            Working backward from right now to first year, one stop at a time.
          </p>
        </Reveal>
        <Reveal delay={100} className="mt-10">
          <JourneyRoad />
        </Reveal>
        <Reveal delay={150} className="mt-8 text-center">
          <Link
            href="/journey"
            className="focus-ring inline-block rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-econ/50 hover:text-econ"
          >
            See the full journey ↗
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
