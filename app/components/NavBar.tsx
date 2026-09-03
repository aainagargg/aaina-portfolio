"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PAGES = [
  { href: "/research", label: "Research" },
  { href: "/technical", label: "Technical" },
  { href: "/fellowships", label: "Fellowships" },
  { href: "/community", label: "Community" },
  { href: "/journey", label: "Journey" },
];

export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-4 z-40 flex justify-center px-4">
      <nav className="flex w-full max-w-2xl items-center justify-between rounded-full border border-line bg-surface/80 px-5 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.4)] backdrop-blur-md">
        <Link href="/" className="focus-ring font-display text-sm font-semibold tracking-tight text-ink">
          AG
        </Link>
        <ul className="hidden items-center gap-4 text-sm sm:flex">
          {PAGES.map((p) => (
            <li key={p.href}>
              <Link
                href={p.href}
                className={`focus-ring rounded-full px-3 py-1 transition-colors ${
                  pathname === p.href ? "bg-signal/15 text-signal" : "text-muted hover:text-ink"
                }`}
              >
                {p.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              download
              className="focus-ring rounded-full border border-line px-3 py-1 text-muted transition-colors hover:border-signal/40 hover:text-signal"
            >
              Resume ↓
            </a>
          </li>
        </ul>
        <div className="relative sm:hidden" ref={menuRef}>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="focus-ring rounded-full bg-gradient-to-r from-signal to-pulse px-4 py-1.5 text-sm font-medium text-void"
          >
            Menu
          </button>
          {open && (
            <ul className="absolute right-0 mt-2 w-44 rounded-2xl border border-line bg-surface p-2 text-sm shadow-xl">
              {PAGES.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className={`focus-ring block rounded-xl px-3 py-2 ${
                      pathname === p.href ? "text-signal" : "text-muted hover:text-ink"
                    }`}
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/resume.pdf"
                  download
                  className="focus-ring block rounded-xl px-3 py-2 text-signal"
                >
                  Resume ↓
                </a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}
