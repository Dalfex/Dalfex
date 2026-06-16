# Dalfex Landing

Company landing page and portfolio showcase for **Dalfex** — the software studio
behind DaLynk, DaClipLab, DazzHabit and more.

Built with [Astro](https://astro.build) (static output) + React islands +
Tailwind CSS 4, deployed as a static site.

- **Live:** https://dalfex.com
- **Stack:** Astro 6, React 19, Tailwind 4, Framer Motion, lucide-react

## Project structure

```text
landing/
├── public/                 Static assets (fonts, favicon, images)
├── src/
│   ├── components/         React islands (Hero, Services, Projects, ...)
│   ├── data/
│   │   └── projects.ts     Single source of truth for the project list
│   ├── hooks/              Shared React hooks (in-view animation)
│   ├── layouts/
│   │   └── Layout.astro    Base HTML shell
│   ├── pages/
│   │   └── index.astro     The one-page site
│   └── styles/
│       └── global.css      Tailwind entry + global tokens
└── astro.config.mjs
```

The site is a single page composed of React islands hydrated with Astro's
`client:load` / `client:visible` directives.

## Showing / hiding projects

Every project on the site comes from one file: **`src/data/projects.ts`**.
Each entry has an `enabled` flag that controls its visibility everywhere — the
"What we build" list, the "Selected work" cards, and the project count in the
section heading. Disabled projects are never shipped in the build.

```ts
// src/data/projects.ts
{
  enabled: false,   // <- flip to true to show it again
  name: "Dancet",
  ...
}
```

To pause a project, set `enabled: false`. To bring it back, set `enabled: true`.
No other file needs to change — the heading ("Three projects.") and both
sections update automatically.

Currently **paused**: `Dancet`, `DaDaBatt` (undecided whether to continue).

## Commands

All commands run from `Dalfex/landing/`. This workspace uses **pnpm**.

| Command         | Action                                |
| :-------------- | :------------------------------------ |
| `pnpm install`  | Install dependencies                  |
| `pnpm dev`      | Start dev server at `localhost:4321`  |
| `pnpm build`    | Build the static site to `./dist/`    |
| `pnpm preview`  | Preview the production build locally   |

## Deployment

Static output (`dist/`) — host anywhere that serves static files.

**Vercel (recommended):** framework is auto-detected (Astro). Build command
`pnpm build`, output directory `dist`. Connect the `Dalfex/Dalfex` GitHub repo
or run `vercel` from this folder. The custom domain `dalfex.com` is configured
in the Vercel project settings.
