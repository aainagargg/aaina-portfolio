import { buildWork, workTerms } from "@/content/profile";
import { Reveal } from "../components/Reveal";
import { DomainIcon } from "../components/DomainIcon";
import { WorkTerms } from "../components/WorkTerms";

export default function TechnicalPage() {
  const [featured, ...rest] = buildWork;

  return (
    <main className="mx-auto max-w-4xl px-6 pt-16 pb-28 sm:pt-24">
      <Reveal>
        <p className="font-mono text-sm text-signal">Technical</p>
        <h1 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
          Systems that ship
        </h1>
        <p className="mt-5 max-w-xl text-lg text-ink/80">
          Full-stack software, machine learning, AI, and generative AI:
          backend, frontend, and everything in between. The models,
          pipelines, and products I&rsquo;ve built and put in front of real users.
        </p>
      </Reveal>

      {/* The work-term arc */}
      <Reveal delay={80} className="mt-14 rounded-3xl border border-line bg-surface/60 p-6 sm:p-10">
        <p className="font-mono text-xs uppercase tracking-wide text-muted">One role, every year</p>
        <div className="mt-6">
          <WorkTerms terms={workTerms} />
        </div>
      </Reveal>

      {/* Featured */}
      <Reveal delay={100} className="mt-16">
        <article className="rounded-3xl border border-signal/30 bg-surface bg-glow-signal p-6 sm:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-signal/30 bg-void/40">
              <DomainIcon domain="signal" className="h-7 w-7" />
            </div>
            <div>
              <p className="font-mono text-sm text-muted">
                {featured.org} · {featured.role} · {featured.dates}
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">{featured.title}</h2>
            </div>
          </div>
          <p className="mt-5 max-w-2xl text-ink/80">{featured.description}</p>
          <div className="mt-6 flex flex-wrap gap-8">
            {featured.metrics.map((m) => (
              <p key={m} className="font-accent text-2xl italic text-signal">
                {m}
              </p>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">{featured.stack.join(" · ")}</p>
        </article>
      </Reveal>

      {/* Everything else, alternating icon side */}
      <div className="mt-16 space-y-14">
        {rest.map((item, i) => {
          const flip = i % 2 === 1;
          return (
            <Reveal key={item.slug}>
              <article className={`grid gap-6 sm:grid-cols-[auto_1fr] ${flip ? "sm:[direction:rtl]" : ""}`}>
                <div className={`flex sm:[direction:ltr] ${flip ? "sm:justify-self-end" : ""}`}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-signal/30 bg-surface">
                    <DomainIcon domain="signal" className="h-7 w-7" />
                  </div>
                </div>
                <div className="sm:[direction:ltr]">
                  <p className="font-mono text-xs text-muted">
                    {item.org} · {item.role} · {item.dates}
                  </p>
                  <h2 className="mt-2 font-display text-xl font-semibold text-ink">{item.title}</h2>
                  <p className="mt-3 max-w-2xl text-ink/75">{item.description}</p>
                  {item.metrics.length > 0 && (
                    <p className="mt-4 font-mono text-sm text-signal">{item.metrics.join(" · ")}</p>
                  )}
                  {item.stack.length > 0 && (
                    <p className="mt-3 text-xs text-muted">{item.stack.join(" · ")}</p>
                  )}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-16 rounded-2xl border border-line/60 p-6 text-sm text-muted">
        Arcadis, Google DeepMind, and Cash App are internal or client work.
        Code and internal tooling can&rsquo;t be shared publicly.
      </Reveal>
    </main>
  );
}
