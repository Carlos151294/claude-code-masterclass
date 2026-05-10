# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server at localhost:3000
npm run build     # production build
npm run lint      # ESLint
npm test          # run all tests (Vitest)
npx vitest run components/Navbar  # run a single test file by path fragment
```

## Architecture

### Route groups

The app uses two Next.js route groups to enforce distinct layouts:

- `app/(public)/` — unauthenticated pages (splash, login, signup, preview). Layout wraps children in `<main className="public">`.
- `app/(dashboard)/` — authenticated area. Layout adds the shared `<Navbar />` above `<main>`.

The root `app/layout.tsx` only sets `<html>` / `<body>` and global styles; all meaningful layout lives in the route-group layouts.

### Path alias

`@/*` resolves to the repo root (e.g. `@/components/Navbar`, `@/app/globals.css`).

### Component conventions

Components live under `components/<Name>/` with three files:
- `<Name>.tsx` — the component
- `<Name>.module.css` — scoped styles (references `globals.css` via `@reference`)
- `index.ts` — re-exports the default export

Import via the barrel: `import Navbar from "@/components/Navbar"`.

### Styling

Tailwind v4 is configured through PostCSS. Design tokens (colors, font) are declared in `app/globals.css` inside `@theme { … }` and are available as Tailwind utilities (`bg-primary`, `text-body`, etc.). Component CSS Modules use `@apply` against those utilities.

### Testing

Vitest runs in a `jsdom` environment with `globals: true` (no need to import `describe`/`it`/`expect`). `vite-tsconfig-paths` makes the `@/*` alias work inside tests. Test files live under `tests/` mirroring the source tree (e.g. `tests/components/Navbar.test.tsx`).

### Preview route

`app/(public)/preview/page.tsx` is a sandbox for developing UI components in isolation before wiring them into real pages.
