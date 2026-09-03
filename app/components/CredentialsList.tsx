"use client";

import { useState } from "react";
import type { Credential } from "@/content/profile";

export function CredentialsList({ credentials }: { credentials: Credential[] }) {
  const [expanded, setExpanded] = useState(false);
  const featured = credentials.filter((c) => c.featured);
  const rest = credentials.filter((c) => !c.featured);

  return (
    <div>
      <ul className="grid gap-4 sm:grid-cols-2">
        {featured.map((c) => (
          <li
            key={c.title}
            className="rounded-2xl border border-line bg-surface p-4 transition-colors hover:border-pulse/50"
          >
            <p className="text-ink">{c.title}</p>
            <p className="mt-1 text-sm text-muted">
              {c.issuer} <span className="font-mono">· {c.issued}</span>
            </p>
          </li>
        ))}
      </ul>

      {rest.length > 0 && (
        <div className="mt-8">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="focus-ring rounded-full border border-line px-4 py-2 text-sm text-muted transition-colors hover:border-pulse/50 hover:text-ink"
            aria-expanded={expanded}
          >
            {expanded ? "Show fewer" : `+${rest.length} more, mostly business & econ coursework`}
          </button>
          {expanded && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {rest.map((c) => (
                <li
                  key={c.title}
                  className="rounded-full border border-line px-3 py-1.5 text-xs text-muted"
                >
                  {c.title} <span className="text-muted/60">({c.issuer})</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
