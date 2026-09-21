import { thinkWork, press } from "@/content/profile";
import { Reveal } from "../components/Reveal";
import { DomainIcon } from "../components/DomainIcon";

const OPEN_SOURCE_SOON = new Set(["sentient-futures", "cohumain"]);

export default function ResearchPage() {
  const [featuredA, featuredB, ...rest] = thinkWork;
  const writing = rest.find((r) => r.slug === "substack");
  const others = rest.filter((r) => r.slug !== "substack");

  return (
    <main className="mx-auto max-w-4xl px-6 pt-16 pb-28 sm:pt-24">
      <Reveal>
        <p className="font-mono text-sm text-pulse">Research</p>
        <h1 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
          AI governance, taken seriously
        </h1>
        <p className="mt-5 max-w-xl text-lg text-ink/80">
          The question I keep coming back to isn&rsquo;t whether we can build
          a system. It&rsquo;s whether we should, and how we&rsquo;d know if
          we shouldn&rsquo;t have.
        </p>
      </Reveal>

      <div className="mt-20 space-y-20">
        {[featuredA, featuredB].map((item) => (
          <Reveal key={item.slug}>
            <article className="grid gap-6 sm:grid-cols-[auto_1fr]">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-pulse/30 bg-surface">
                <DomainIcon domain="pulse" className="h-8 w-8" />
              </div>
              <div>
                <p className="font-mono text-xs text-muted">
                  {item.org} · {item.dates}
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">
                  {item.title.split(": ")[1] ?? item.title}
                </h2>
                <p className="mt-4 max-w-2xl text-ink/80">{item.description}</p>
                {OPEN_SOURCE_SOON.has(item.slug) && (
                  <p className="mt-4 inline-block rounded-full border border-pulse/30 px-3 py-1 font-mono text-xs text-pulse">
                    In progress. Open sourcing on release.
                  </p>
                )}
              </div>
            </article>
          </Reveal>
        ))}

        <div className="grid gap-8 sm:grid-cols-2">
          {others.map((item, i) => (
            <Reveal key={item.slug} delay={i * 80}>
              <article className="h-full rounded-2xl border border-pulse/20 bg-surface p-6">
                <p className="font-mono text-xs text-muted">
                  {item.org} · {item.dates}
                </p>
                <h2 className="mt-2 font-display text-lg font-semibold text-ink">{item.title}</h2>
                <p className="mt-3 text-sm text-ink/70">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {writing && (
          <Reveal>
            <article className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
              <p className="font-mono text-xs text-muted">{writing.org} · {writing.dates}</p>
              <h2 className="mt-2 font-display text-xl font-semibold text-ink">
                Writing: Building Out Loud
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-ink/70">{writing.description}</p>
            </article>
          </Reveal>
        )}

        {press.length > 0 && (
          <Reveal>
            <h2 className="font-display text-xl font-semibold text-ink">In the press</h2>
            <div className="mt-4 space-y-4">
              {press.map((p) => (
                <a
                  key={p.url}
                  href={p.url}
                  target="_blank"
                  rel="noopener"
                  className="focus-ring block rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-pulse/40"
                >
                  <p className="text-xs text-muted">{p.publication} · {p.date}</p>
                  <p className="mt-1 font-medium text-ink">{p.title} ↗</p>
                  <p className="mt-2 text-sm italic text-ink/70">&ldquo;{p.quote}&rdquo;</p>
                </a>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </main>
  );
}
