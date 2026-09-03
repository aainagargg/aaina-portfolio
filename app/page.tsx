import {
  person,
  education,
  distinctions,
  clubLeadership,
  skills,
  buildWork,
  thinkWork,
  press,
  beyondWork,
} from "@/content/profile";

// NOTE: this is a deliberately plain baseline. Structure and content are
// complete and correct — pulled straight from content/profile.ts — but the
// visual design here is a placeholder, not a finished direction. See
// CLAUDE.md for the actual design brief before shipping this.

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 leading-relaxed">
      {/* Hero */}
      <section className="mb-20">
        <p className="text-sm text-gray-500 mb-3">{person.location}</p>
        <h1 className="text-4xl font-semibold mb-6 leading-tight">
          {person.name}
        </h1>
        <p className="text-xl text-gray-700 max-w-xl">{person.tagline}</p>
        <p className="mt-4 text-sm text-gray-500">
          {education.program} · {education.school}, {education.expected}
        </p>
      </section>

      {/* Build */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-8 border-b pb-2">Build</h2>
        <div className="space-y-10">
          {buildWork.map((item) => (
            <article key={item.slug}>
              <p className="text-sm text-gray-500 mb-1">
                {item.org} · {item.dates}
              </p>
              <h3 className="text-lg font-medium mb-2">{item.title}</h3>
              <p className="text-gray-700 mb-3">{item.description}</p>
              {item.metrics.length > 0 && (
                <ul className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-600 mb-2">
                  {item.metrics.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              )}
              <p className="text-xs text-gray-400">{item.stack.join(" · ")}</p>
              {item.orgUrl && (
                <a
                  href={item.orgUrl}
                  target="_blank"
                  rel="noopener"
                  className="text-sm underline text-gray-600"
                >
                  {item.org} ↗
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Think */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-8 border-b pb-2">Think</h2>
        <div className="space-y-10">
          {thinkWork.map((item) => (
            <article key={item.slug}>
              <p className="text-sm text-gray-500 mb-1">
                {item.org} · {item.dates}
              </p>
              <h3 className="text-lg font-medium mb-2">{item.title}</h3>
              <p className="text-gray-700 mb-2">{item.description}</p>
              {item.orgUrl && (
                <a
                  href={item.orgUrl}
                  target="_blank"
                  rel="noopener"
                  className="text-sm underline text-gray-600"
                >
                  {item.org} ↗
                </a>
              )}
            </article>
          ))}
        </div>
        {press.length > 0 && (
          <div className="mt-8">
            <p className="text-sm text-gray-500 mb-2">Press &amp; features</p>
            <ul className="space-y-1">
              {press.map((p) => (
                <li key={p.url}>
                  <a href={p.url} className="underline text-sm">
                    {p.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Beyond the build */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-8 border-b pb-2">
          Beyond the build
        </h2>
        <div className="space-y-10 mb-10">
          {beyondWork.map((item) => (
            <article key={item.org}>
              <p className="text-sm text-gray-500 mb-1">
                {item.role} · {item.dates}
              </p>
              <h3 className="text-lg font-medium mb-2">{item.org}</h3>
              <p className="text-gray-700">{item.description}</p>
            </article>
          ))}
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-2">Leadership</p>
          <ul className="space-y-1 text-gray-700">
            {clubLeadership.map((c) => (
              <li key={c.org}>
                {c.role}, {c.org}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Distinctions */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-8 border-b pb-2">
          Distinctions
        </h2>
        <ul className="space-y-2 text-gray-700">
          {distinctions.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </section>

      {/* Skills */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-8 border-b pb-2">Skills</h2>
        <p className="text-gray-700">
          {skills.languagesAndTools.join(" · ")}
        </p>
      </section>

      {/* Contact */}
      <footer className="text-sm text-gray-500 space-x-4">
        <a href={`mailto:${person.email}`} className="underline">
          Email
        </a>
        <a href={person.links.linkedin} className="underline">
          LinkedIn
        </a>
        <a href={person.links.github} className="underline">
          GitHub
        </a>
        <a href={person.links.substack} className="underline">
          Substack
        </a>
      </footer>
    </main>
  );
}
