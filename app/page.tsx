import Link from "next/link";
import Image from "next/image";
import { person, education, buildWork, thinkWork, beyondWork, distinctions, press, substackPosts } from "@/content/profile";
import { Reveal } from "./components/Reveal";
import { StatBand } from "./components/StatBand";
import { DomainIcon } from "./components/DomainIcon";
import { SubstackScroller } from "./components/SubstackScroller";

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
        <div className="grid gap-10 sm:grid-cols-[1fr_auto] sm:items-start">
          <div>
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
          </div>
          <Reveal delay={150} className="order-first sm:order-none">
            <div className="relative mx-auto h-56 w-56 shrink-0 sm:h-72 sm:w-72">
              <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-signal/40 to-pulse/40 opacity-60 blur-xl" />
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-line">
                <Image
                  src="/photos/aaina.png"
                  alt={person.name}
                  fill
                  sizes="(max-width: 640px) 224px, 288px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={250} className="mt-12 rounded-3xl border border-signal/30 bg-surface bg-glow-signal p-6 sm:p-8">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-signal" />
            </span>
            <p className="font-mono text-sm font-medium text-signal">Currently</p>
          </div>
          <p className="mt-3 max-w-2xl text-lg text-ink/90">
            On the Data and AI team at Arcadis. Researching AI governance
            at Sentient Futures and applied AI economics at Cohumain Labs.
            Directing the annual conference at UofT AI, and still running
            UofT Pilates &amp; Yoga Club, which I founded and grew from 0 to
            700+ members. Writing on Building Out Loud in between. Based in
            Toronto, graduating spring 2027.
          </p>
        </Reveal>

        <Reveal delay={300} className="mt-8 rounded-3xl border border-line bg-surface/60 bg-glow-pulse p-8 sm:p-12">
          <StatBand stats={heroStats} />
        </Reveal>

        {press.length > 0 && (
          <Reveal delay={350} className="mt-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {press.map((p) => (
                <a
                  key={p.url}
                  href={p.url}
                  target="_blank"
                  rel="noopener"
                  className="focus-ring group flex gap-4 overflow-hidden rounded-2xl border border-line bg-surface p-3 transition-colors hover:border-pulse/40"
                >
                  <div className="relative h-full w-24 shrink-0 overflow-hidden rounded-xl border border-line bg-void sm:w-28">
                    <Image
                      src={p.image}
                      alt={`${p.publication}: ${p.title}`}
                      fill
                      sizes="112px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="py-1 pr-2">
                    <p className="font-mono text-xs text-muted">{p.publication} · {p.date}</p>
                    <p className="mt-1 font-medium text-ink group-hover:text-pulse">{p.title} ↗</p>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        )}
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
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-bold text-ink">Writing</h2>
              <p className="mt-2 max-w-lg text-muted">Building Out Loud, an experiment in remembering.</p>
            </div>
            <a
              href={person.links.substack}
              target="_blank"
              rel="noopener"
              className="focus-ring rounded-full border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-pulse/50 hover:text-pulse"
            >
              All posts ↗
            </a>
          </div>
        </Reveal>
        <Reveal delay={100} className="mt-8">
          <SubstackScroller posts={substackPosts} />
        </Reveal>
      </section>
    </main>
  );
}
