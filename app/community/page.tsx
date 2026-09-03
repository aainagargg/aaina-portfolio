import Image from "next/image";
import { communityClubs, communityBuilds, clubLeadership } from "@/content/profile";
import { Reveal } from "../components/Reveal";
import { DomainIcon } from "../components/DomainIcon";

export default function CommunityPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 pt-16 pb-28 sm:pt-24">
      <Reveal>
        <p className="font-mono text-sm text-pulse">Community</p>
        <h1 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
          Outside the day job
        </h1>
        <p className="mt-5 max-w-xl text-lg text-ink/80">
          The clubs I&rsquo;ve organized, founded, and shown up for. Each one
          is a real, active community, not a line on a resume.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {communityClubs.map((c, i) => (
          <Reveal key={c.name} delay={i * 70}>
            <a
              href={c.url}
              target="_blank"
              rel="noopener"
              className="focus-ring group block h-full overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-pulse/40"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line bg-void">
                {c.image ? (
                  <Image
                    src={c.image}
                    alt={`${c.name} website`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-pulse/20 via-surface to-econ/10">
                    <p className="font-display text-2xl font-bold text-ink/80">{c.name}</p>
                  </div>
                )}
              </div>
              <div className="p-5">
                <p className="font-display text-lg font-semibold text-ink group-hover:text-pulse">
                  {c.name} ↗
                </p>
                <p className="mt-1 text-sm text-econ">{c.role}</p>
                <p className="mt-2 text-sm text-ink/70">{c.description}</p>
              </div>
            </a>
          </Reveal>
        ))}

        {communityBuilds.map((b, i) => (
          <Reveal key={b.name} delay={(communityClubs.length + i) * 70}>
            <article className="flex h-full flex-col gap-4 rounded-2xl border border-econ/30 bg-surface p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-econ/30 bg-void/40">
                <DomainIcon domain="econ" className="h-6 w-6" />
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-ink">{b.name}</p>
                <p className="mt-1 text-sm text-econ">
                  {b.role} · <span className="font-mono text-xs text-muted">{b.dates}</span>
                </p>
                <p className="mt-2 text-sm text-ink/70">{b.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16" delay={100}>
        <h2 className="font-display text-xl font-semibold text-ink">Also involved with</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {clubLeadership.map((c) => (
            <div key={`${c.role}-${c.org}`} className="rounded-full border border-line px-5 py-3 text-sm">
              <span className="font-medium text-ink">{c.role}</span>
              <span className="text-muted"> ({c.org})</span>
            </div>
          ))}
        </div>
      </Reveal>
    </main>
  );
}
