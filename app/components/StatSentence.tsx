"use client";

import { useCountUp } from "./useCountUp";

// Finds the most striking number in a sentence — the largest one, so
// "1 of 30 ... from 1,000+ applicants" highlights the pool size, not the
// leading "1" — and counts it up from 0 once scrolled into view.
// Everything else in the sentence renders as plain text, unchanged.
const isYearLike = (raw: string) => /^(19|20)\d{2}$/.test(raw);

export function StatSentence({ text }: { text: string }) {
  const allTokens = text.match(/[\d,]+/g) ?? [];
  const tokens = allTokens.some((t) => !isYearLike(t))
    ? allTokens.filter((t) => !isYearLike(t))
    : allTokens;
  const biggest = tokens.reduce<string | null>((max, t) => {
    const value = parseInt(t.replace(/,/g, ""), 10);
    const maxValue = max ? parseInt(max.replace(/,/g, ""), 10) : -1;
    return value > maxValue ? t : max;
  }, null);
  const matchIndex = biggest ? text.indexOf(biggest) : -1;
  const target = biggest ? parseInt(biggest.replace(/,/g, ""), 10) : 0;
  const { ref, count } = useCountUp(target);

  if (!biggest) return <>{text}</>;

  const [before, after] = [
    text.slice(0, matchIndex),
    text.slice(matchIndex + biggest.length),
  ];

  return (
    <>
      {before}
      <span ref={ref as React.RefObject<HTMLSpanElement>} className="font-mono text-pulse tabular-nums">
        {count.toLocaleString()}
      </span>
      {after}
    </>
  );
}
