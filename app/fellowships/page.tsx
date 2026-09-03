import { distinctions, honors, beyondWork, credentials } from "@/content/profile";
import { Reveal } from "../components/Reveal";
import { StatSentence } from "../components/StatSentence";
import { CredentialsList } from "../components/CredentialsList";
import { DomainIcon } from "../components/DomainIcon";

export default function FellowshipsPage() {
  const [rbcBorealis, embark] = beyondWork;

  return (
    <main className="mx-auto max-w-4xl px-6 pt-16 pb-28 sm:pt-24">
      <Reveal>
        <p className="font-mono text-sm text-econ">Fellowships</p>
        <h1 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
          Selected, not just applied
        </h1>
        <p className="mt-5 max-w-xl text-lg text-ink/80">
          Every program below chose from a large pool. The numbers are real,
          and each one came with a real deliverable, not just a certificate.
        </p>
      </Reveal>

      <ul className="mt-14 grid gap-4 sm:grid-cols-2">
        {distinctions.map((d, i) => (
          <Reveal key={d} delay={i * 80}>
            <li className="h-full rounded-2xl border border-line bg-surface p-6 text-lg leading-snug text-ink/90">
              <StatSentence text={d} />
            </li>
          </Reveal>
        ))}
      </ul>

      <div className="mt-20 space-y-14">
        {[rbcBorealis, embark].map((item) => (
          <Reveal key={item.org}>
            <article className="rounded-3xl border border-econ/30 bg-surface bg-glow-econ p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-econ/30 bg-void/40">
                  <DomainIcon domain="econ" className="h-7 w-7" />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted">
                    {item.org} · {item.dates}
                  </p>
                  <h2 className="mt-2 font-display text-xl font-semibold text-ink">{item.role}</h2>
                </div>
              </div>
              <p className="mt-5 max-w-2xl text-ink/75">{item.description}</p>
              {item.metrics.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-6">
                  {item.metrics.map((m) => (
                    <p key={m} className="font-accent text-lg italic text-econ">
                      {m}
                    </p>
                  ))}
                </div>
              )}
              {item.stack.length > 0 && (
                <p className="mt-5 text-sm text-muted">{item.stack.join(" · ")}</p>
              )}
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-20" delay={100}>
        <h2 className="font-display text-2xl font-bold text-ink">Honors and awards</h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {honors.map((h) => (
            <li key={h} className="rounded-full border border-econ/30 bg-surface px-4 py-2 text-sm text-ink/85">
              {h}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="mt-16" delay={150}>
        <h2 className="font-display text-2xl font-bold text-ink">Coursework and credentials</h2>
        <div className="mt-8">
          <CredentialsList credentials={credentials} />
        </div>
      </Reveal>
    </main>
  );
}
