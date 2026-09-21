"use client";

import { useEffect, useRef } from "react";

export function BackgroundFX() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let frame = 0;
    const handleMove = (e: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const el = ref.current;
        if (el) {
          el.style.setProperty("--mx", `${(e.clientX / window.innerWidth) * 100}%`);
          el.style.setProperty("--my", `${(e.clientY / window.innerHeight) * 100}%`);
        }
        frame = 0;
      });
    };

    window.addEventListener("pointermove", handleMove);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ ["--mx" as string]: "50%", ["--my" as string]: "30%" }}
    >
      <div
        className="absolute inset-0 opacity-70 transition-[background] duration-300"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx) var(--my), rgba(155,135,245,0.10), transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(244,242,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(244,242,237,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />
    </div>
  );
}
