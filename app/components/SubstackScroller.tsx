"use client";

import { useRef } from "react";
import type { SubstackPost } from "@/content/profile";

export function SubstackScroller({ posts }: { posts: SubstackPost[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dx: number) => {
    trackRef.current?.scrollBy({ left: dx, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {posts.map((post) => (
          <a
            key={post.url}
            href={post.url}
            target="_blank"
            rel="noopener"
            className="focus-ring group w-[78%] shrink-0 snap-start rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-pulse/40 sm:w-[46%]"
          >
            <p className="font-mono text-xs text-muted">{post.date}</p>
            <h3 className="mt-2 font-display text-lg font-semibold text-ink group-hover:text-pulse">
              {post.title}
            </h3>
            <p className="mt-3 text-sm text-ink/70">{post.excerpt}</p>
            <p className="mt-4 text-sm font-medium text-pulse opacity-0 transition-opacity group-hover:opacity-100">
              Read on Substack ↗
            </p>
          </a>
        ))}
      </div>
      <div className="mt-2 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollBy(-320)}
          aria-label="Scroll posts left"
          className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-pulse/40 hover:text-pulse"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => scrollBy(320)}
          aria-label="Scroll posts right"
          className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-pulse/40 hover:text-pulse"
        >
          →
        </button>
      </div>
    </div>
  );
}
