# Project brief — Aaina Garg's portfolio site

## What this is

A personal portfolio site for Aaina Garg — CS + Econ student at UofT, ML
engineer at Arcadis, AI governance research fellow at Sentient Futures,
AI research intern at Cohumain Labs. She builds production ML systems
(computer vision, NLP, recommendation-style pipelines) AND does research
on AI governance and how models reason about moral status. Both halves
are real and both need real estate — this isn't a dev portfolio with a
"hobbies" afterthought.

All content is already written and complete in `content/profile.ts` —
every project, metric, date, and role is pulled directly from her resume.
**Don't invent new copy or new projects. Do pull from this file for
everything.** If content feels thin anywhere, that's a signal to ask
Aaina for more detail, not to pad it with generic language.

The current `app/page.tsx` is a deliberately plain, unstyled render of
that content — a checklist that everything is present and correctly
wired, not a design. **Your job is the design pass.**

## What already failed once (context, so you don't repeat it)

A first pass at this site was rejected for:
- Not flowing naturally — it read as a rigid data-grid (fixed label
  columns, boxed stat readouts, hairline rules everywhere) rather than
  something someone would actually enjoy scrolling through.
- Feeling like a spec sheet, not a story. Every case study had the same
  mechanical shape (org / role / dates / bullets / stack chips) repeated
  five times with no variation in pacing or emphasis.
- Not covering the full scope of what she's done, or explaining *how*
  she thinks about the work — the connective tissue between projects
  was missing.

Take that as a signal to vary rhythm and structure between sections
rather than templating one card shape and repeating it.

## Reference points

Aaina pointed to two sites she likes as feel references — fetch and look
at both before designing:
- https://www.whyismynamerudy.tech — bold, stats-forward, "building in
  public" energy; a running counter block, a podcast section, a "Now"
  section, a clean list of standout projects.
- https://soniavaidya.netlify.app — quieter and more personal; splits an
  identity into distinct lenses via simple top navigation, real photography,
  first-person voice, short paragraphs.

She wants a blend of both, in her own voice — not a copy of either.
Don't reuse their exact color palettes, layouts, or section names.

## Design direction

Work in two passes, the way a design studio would:

1. **Plan first.** Propose a compact token system before writing code:
   - Color: 4–6 named hex values, chosen for *this* brief (ML engineer +
     AI governance researcher + Toronto), not defaults.
   - Type: 1–2 typeface families and their roles (display / body / data).
   - Layout: a one-paragraph layout concept plus an ASCII wireframe.
   - One sentence on what makes this specific and not a generic
     "AI portfolio."
2. **Critique the plan against this brief** before building — if any
   part of it is the thing you'd produce for any similar prompt (a warm
   cream background with a terracotta accent; a near-black background
   with one neon accent; rounded SaaS cards with soft shadows; a
   monospace-everything "hacker" aesthetic), revise it. Say what you
   changed and why.
3. Only then write the code.

Concretely, avoid:
- The single boxed-stat-grid treatment repeated as the section format.
- Numbering sections 01/02/03 unless the content is genuinely sequential.
- ALL-CAPS eyebrow labels above every heading, or middle-dot-joined meta
  strings on every card.
- Identical card shapes for every project regardless of how much there
  is to say about each one.

Do:
- Let the hero be the one bold moment; keep the rest disciplined.
- Vary how each case study is presented based on what's actually
  interesting about it (some deserve more prose, some deserve a stat
  called out big, some barely need more than a line).
- Build to a real quality floor: responsive to mobile, visible keyboard
  focus states, `prefers-reduced-motion` respected, real color contrast.
- Take screenshots as you go and critique your own work before calling
  it done.

## Content notes

- `content/profile.ts` has two TODO blocks: press links (AI4Good feature,
  an Indian financial-press feature) and a placeholder Substack
  description. Ask Aaina for these directly — don't fabricate URLs or
  invent what the press coverage said.
- A real headshot/photo isn't in `public/photos/` yet. Ask if she wants
  one before treating photography as part of the design.
- `person.links.github` assumes `github.com/aainagargg` — confirm this
  is the repo she wants linked (it may need to become this repo).

## Tech

Next.js 14 (App Router) + TypeScript + Tailwind, no CMS — content lives
in `content/profile.ts` as plain exported objects/arrays. Deploy target
is Vercel or Netlify, either works with zero config for this stack.

## Suggested first prompt to yourself

"Read content/profile.ts and app/page.tsx in full, then fetch both
reference URLs above. Propose a design plan per the process above,
show it to me before writing any code, then build it section by
section, taking screenshots to self-review as you go."
