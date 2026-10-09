# GSoC Launchpad

An interactive platform that guides someone from zero programming and
open-source experience to being prepared to apply for Google Summer of Code
(GSoC). Ten progressive stages with lessons, exercises, checklists, official
links, and personal progress tracking.

Preparation progress only — this project never predicts selection, and it is
not affiliated with Google.

## Getting started

Requirements: Node.js 20.

```bash
cd web
npm install
npm run dev      # http://localhost:3000
```

## Scripts (run inside `web/`)

| Command            | What it does                              |
| ------------------ | ----------------------------------------- |
| `npm run dev`      | Start the development server              |
| `npm run build`    | Production build                          |
| `npm run start`    | Serve a production build                  |
| `npm run typecheck`| TypeScript check (`tsc --noEmit`)         |

## Project structure

```text
web/
  app/
    page.tsx                 # Home: hero + ten-stage overview
    layout.tsx               # Header, footer, theme wiring
    ThemeToggle.tsx           # Dark (default) / light toggle, saved locally
    globals.css              # Theme tokens shared by every page
    (site)/launchpad/
      page.tsx               # Dashboard: official sources + roadmap
      LaunchpadBoard.tsx     # Search, checklists, progress, export
  content/
    launchpad.ts             # The 10 stages. The only place stages are written.
  lib/
    launchpadProgress.ts     # localStorage progress store + JSON export
```

## Content rules

- Official Google Summer of Code documentation is the primary source. Every
  stage links to the authoritative page for its claims.
- Dates, rules, organisation lists, and project availability are
  year-specific. Never hardcode a future deadline as fact — link the official
  page and update `LAST_VERIFIED` in `web/content/launchpad.ts` when facts
  are re-checked (currently `2026-10-09`).
- Never invent an organisation, project, mentor, issue, deadline, or
  contribution opportunity.
- Never present an acceptance score or selection prediction. Progress shown
  is preparation completed, nothing more.

## Progress storage

Progress lives in the browser's `localStorage` under
`gsoc-launchpad-progress-v1`. No account, no server, no tracking. Users can
export their progress as JSON from the roadmap page.

## Roadmap

- [x] Stage 1: layout, dashboard, 10-stage roadmap, progress tracking
- [ ] Organisation explorer (official GSoC data only)
- [ ] Contribution tracker (issues, PRs, feedback, merged work)
- [ ] Proposal writing studio (drafts, completeness checklist, self-review)
- [ ] Timeline / deadline tracker, interview prep, FAQ, resources
