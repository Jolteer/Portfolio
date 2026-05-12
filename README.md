# Portfolio

A personal SWE portfolio built with **Next.js 15 (App Router)**, **TypeScript**,
**Tailwind CSS v4**, and **MDX**. Deployed on **Vercel** &mdash; every push to
`main` ships to production.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Add a new project

Create one file under `content/projects/`:

```mdx
---
title: "Project Title"
slug: "project-title"
summary: "One-sentence description that shows in cards and OG images."
tags: ["TypeScript", "React"]
role: "Solo project"
date: "2026-06-01"
featured: true
links:
  github: "https://github.com/you/repo"
  live: "https://example.com"
cover: "/images/projects/project-title/cover.png"
---

## Problem

...

## What I built

...

## Impact

...
```

Commit, push, done. The home page (featured), `/projects` listing, sitemap,
and dynamic OG image all pick it up automatically.

## Edit the about / resume / personal info

- `lib/site.ts` &mdash; name, title, links, navigation, OG defaults.
- `content/about.mdx` &mdash; long-form bio shown on `/about`.
- `app/about/page.tsx` &mdash; skills + experience timeline.
- `app/resume/page.tsx` &mdash; web resume content.
- `public/resume.pdf` &mdash; downloadable PDF (replace the placeholder).

## Project layout

```text
app/                  # App Router pages
  api/og/             # Dynamic OG image (next/og)
  projects/[slug]/    # MDX-rendered project pages
components/           # Nav, Footer, ProjectCard, MDX renderer, etc.
content/              # Source-of-truth MDX content (projects + about)
lib/                  # Site config, project loader, utils
public/               # Static assets (resume.pdf, images, favicon)
```

## Deploy

1. Push the repo to GitHub.
2. Import it into [Vercel](https://vercel.com/new) &mdash; Next.js is
   auto-detected.
3. Set the canonical site URL in `lib/site.ts` (`url` and `ogImage`).
4. Optionally add a custom domain in the Vercel dashboard.

Every push to `main` triggers a production deploy. PR branches get a
preview URL automatically.

## Useful scripts

| Command             | What it does                       |
| ------------------- | ---------------------------------- |
| `npm run dev`       | Local dev server with Fast Refresh |
| `npm run build`     | Production build                   |
| `npm run start`     | Run the production build           |
| `npm run lint`      | Lint with `next lint`              |
| `npm run typecheck` | Type-check the project (no emit)   |
