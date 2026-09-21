import Image from "next/image";
import type { Moment } from "@/content/profile";

export function MomentsScroller({ moments }: { moments: Moment[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {moments.map((m) => {
        const card = (
          <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-pulse/40">
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src={m.image}
                alt={`Aaina with ${m.name}`}
                fill
                sizes="(max-width: 640px) 45vw, 22vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <p className="font-medium leading-tight text-ink">{m.name}</p>
              <p className="mt-1 text-xs leading-snug text-muted">{m.role}</p>
            </div>
          </div>
        );
        return m.linkedinUrl ? (
          <a
            key={m.name}
            href={m.linkedinUrl}
            target="_blank"
            rel="noopener"
            className="focus-ring block rounded-2xl"
          >
            {card}
          </a>
        ) : (
          <div key={m.name}>{card}</div>
        );
      })}
    </div>
  );
}
