# Spec for auth-forms

branch: claude/feature/auth-forms
figma_component (if used): N/A

## Summary

Authentication forms for the `/login` and `/signup` public pages. Each page renders a form with email and password fields, a password visibility toggle, and a submit button. On submission the form logs the field values to the console (no real auth yet). A navigation link lets users switch between the two forms without losing their place.

## Functional Requirements

- The `/login` page renders a login form with:
  - An email input field (type email)
  - A password input field (type password) with a toggle icon to show/hide the password
  - A "Log in" submit button
  - A link to switch to the `/signup` page
- The `/signup` page renders a signup form with:
  - An email input field (type email)
  - A password input field (type password) with a toggle icon to show/hide the password
  - A "Sign up" submit button
  - A link to switch to the `/login` page
- When the hide/show password icon is clicked the password field toggles between `type="password"` and `type="text"`
- On form submission, the email and password values are logged to the browser console; no network request is made
- The switch link between forms is clearly visible and easy to reach (e.g. "Don't have an account? Sign up")

## Possible Edge Cases

- User clicks submit with empty fields — no console log should fire; rely on native HTML5 `required` validation
- User rapidly toggles the password visibility — state should stay in sync with the input value
- User navigates between `/login` and `/signup` via the switch link — the form resets to empty on each page load

## Acceptance Criteria

- `/login` renders an email field, a password field with visibility toggle, and a "Log in" button
- `/signup` renders an email field, a password field with visibility toggle, and a "Sign up" button
- Clicking the eye/hide icon toggles password visibility on both pages
- Submitting a filled-in login form logs `{ email, password }` to the console
- Submitting a filled-in signup form logs `{ email, password }` to the console
- Each page contains a clearly labeled link that navigates to the other form page
- Both pages use the `(public)` route group layout

## Open Questions

- Should password confirmation (re-enter password) be required on the signup form now, or deferred?
- Will the forms share a single reusable `AuthForm` component, or be implemented independently per page?
- What icon library (if any) is already in use for the show/hide password icon?

## Testing Guidelines

Create a test file(s) in the ./tests folder for the new feature, and create meaningful tests for the following cases, without going too heavy:

- Login form renders email field, password field, and submit button
- Signup form renders email field, password field, and submit button
- Password visibility toggles from hidden to visible when the icon is clicked
- Password visibility toggles back to hidden on a second click
- Submitting the login form with values calls `console.log` with the correct email and password
- Submitting the signup form with values calls `console.log` with the correct email and password
- Each page contains a link pointing to the other auth page
