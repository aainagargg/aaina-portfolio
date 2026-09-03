# aaina-garg-portfolio

Personal portfolio site — Next.js 14 + TypeScript + Tailwind. Content lives
in `content/profile.ts`; the design is intentionally unfinished — see
`CLAUDE.md` for the actual design brief, meant to be picked up in Claude
Code.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Design this with Claude Code

This repo is set up to be designed *with* Claude Code, not just coded by
it — that's the point. From this folder:

```bash
claude
```

Claude Code will pick up `CLAUDE.md` automatically as project context.
Ask it to read that file plus `content/profile.ts`, then start the
design pass described in `CLAUDE.md`.

## Publish to GitHub

This folder is already a git repo with an initial commit. To push it to
your own GitHub:

```bash
# create a new empty repo on github.com first (no README/license), then:
git remote add origin https://github.com/aainagargg/aaina-portfolio.git
git branch -M main
git push -u origin main
```

(Or use `gh repo create aaina-portfolio --public --source=. --push` if
you have the GitHub CLI installed.)

## Deploy

Easiest path is Vercel (built by the Next.js team, zero config):

1. Push this repo to GitHub (above).
2. Go to https://vercel.com/new, import the repo, click deploy.

Netlify also works — set build command `npm run build` and publish
directory `.next` with the Next.js runtime plugin (Netlify detects this
automatically for Next.js repos).

## Project structure

```
app/
  layout.tsx      — root layout, fonts, metadata
  page.tsx        — the page itself (currently a plain baseline render)
  globals.css     — Tailwind entrypoint
content/
  profile.ts      — ALL content: experience, projects, metrics, links.
                    Edit this file to change what the site says.
public/photos/    — put a headshot or other images here
CLAUDE.md         — design brief for the redesign pass
```
