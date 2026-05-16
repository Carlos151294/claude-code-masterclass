# Plan: Authentication Forms (`/login` and `/signup`)

## Context

The `/login` and `/signup` pages exist as stubs under `app/(public)/login/page.tsx` and `app/(public)/signup/page.tsx`. They render only a heading. The goal is to add functional auth forms with email/password fields, a password visibility toggle, a submit button that logs to the console, and a link to switch between the two pages. No real authentication is wired up yet.

---

## Approach

Create a single reusable `AuthForm` client component that accepts a `mode` prop (`"login" | "signup"`). Both forms are structurally identical — same fields, same toggle, different title/button label/switch-link text — so a shared component avoids duplication and satisfies the "easily switch between forms" requirement via a `<Link>` inside the component.

Password confirmation on signup is **deferred** (not in functional requirements or acceptance criteria).

---

## Files to Create

### `components/AuthForm/AuthForm.tsx`
- `"use client"` directive (needs `useState`)
- Props: `mode: "login" | "signup"`
- State: `email`, `password`, `showPassword` (boolean)
- Renders:
  - `<h1>` title — "Log in to Your Account" or "Sign up for an Account"
  - Email `<input type="email" required>`
  - Password `<input type={showPassword ? "text" : "password"} required>` + toggle button with `Eye` / `EyeOff` icons from `lucide-react`
  - Submit `<button>` — "Log in" or "Sign up"
  - Switch link via Next.js `<Link>` — e.g. "Don't have an account? Sign up" → `/signup`
- `onSubmit` handler: `e.preventDefault()` then `console.log({ email, password })`

### `components/AuthForm/AuthForm.module.css`
- Follow the `@reference "@/app/globals.css"` pattern at top
- Use `@apply` for layout: centered form, field grouping, password wrapper (relative positioning for the toggle icon button)
- Reuse `.btn` and `.btn-primary` from `globals.css` for the submit button

### `components/AuthForm/index.ts`
- Barrel export: `export { default } from "./AuthForm"`

---

## Files to Modify

### `app/(public)/login/page.tsx`
Replace stub content — import `AuthForm` and render `<AuthForm mode="login" />`

### `app/(public)/signup/page.tsx`
Replace stub content — import `AuthForm` and render `<AuthForm mode="signup" />`

---

## Files to Create (Tests)

### `tests/components/AuthForm.test.tsx`
Follow the Navbar/Avatar test pattern (no imports for `describe`/`it`/`expect`, use RTL):

- Login form renders email field, password field, and "Log in" button
- Signup form renders email field, password field, and "Sign up" button
- Password field starts as `type="password"` (hidden)
- Clicking toggle button changes field to `type="text"` (visible)
- Clicking toggle again restores `type="password"`
- Submitting login form calls `console.log` with `{ email, password }`
- Submitting signup form calls `console.log` with `{ email, password }`
- Login page contains link to `/signup`
- Signup page contains link to `/login`

---

## Key Reuse

- Icons: `Eye` / `EyeOff` from `lucide-react` (already installed, used in Navbar)
- Button classes: `.btn` / `.btn-primary` from `app/globals.css`
- Layout classes: `.center-content` / `.page-content` from `app/globals.css` for page-level centering
- Link: `next/link` (used in Navbar)

---

## Verification

1. `npm run dev` → visit `/login` and `/signup` — forms render correctly
2. Toggle the eye icon — password text shows/hides
3. Fill in fields and submit — `{ email, password }` logged in browser console
4. Click the switch link on `/login` → navigates to `/signup` and vice versa
5. `npm test` → all `AuthForm` tests pass
6. `npm run lint` → no lint errors
