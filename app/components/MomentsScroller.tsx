"use client";

import Image from "next/image";
import { useRef } from "react";
import type { Moment } from "@/content/profile";

export function MomentsScroller({ moments }: { moments: Moment[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dx: number) =>
    trackRef.current?.scrollBy({ left: dx, behavior: "smooth" });

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {moments.map((m) => {
          const card = (
            <div className="group w-[62%] shrink-0 snap-start overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-pulse/40 sm:w-[30%]">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={m.image}
                  alt={`Aaina with ${m.name}`}
                  fill
                  sizes="(max-width: 640px) 62vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="font-medium text-ink">{m.name}</p>
                <p className="mt-1 text-sm text-muted">{m.role}</p>
              </div>
            </div>
          );
          return m.linkedinUrl ? (
            <a
              key={m.name}
              href={m.linkedinUrl}
              target="_blank"
              rel="noopener"
              className="focus-ring rounded-2xl"
            >
              {card}
            </a>
          ) : (
            <div key={m.name}>{card}</div>
          );
        })}
      </div>
      <div className="mt-2 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollBy(-320)}
          aria-label="Scroll left"
          className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-pulse/50"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => scrollBy(320)}
          aria-label="Scroll right"
          className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-pulse/50"
        >
          →
        </button>
      </div>
    </div>
  );
}
