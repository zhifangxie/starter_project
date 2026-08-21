# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server at http://localhost:3000
npm run build     # Production build
npm run lint      # Run ESLint
npm run test      # Run all Vitest tests
```

To run a single test file:
```bash
npx vitest tests/components/Navbar.test.tsx
```

## Architecture

**Pocket Heist** is a Next.js 16 + React 19 + TypeScript app for coordinating office pranks ("heists").

### Tech Stack

- **Next.js 16** with React 19 — App Router, server components by default
- **TypeScript 5** — strict mode enabled
- **Tailwind CSS v4** — via `@tailwindcss/postcss` (not the Vite plugin)
- **Vitest 4** + `@testing-library/react` + jsdom — unit/component testing
- **lucide-react** — icon library

### Route Organization

Uses Next.js App Router route groups to separate layouts:

- `app/(public)/` — Unauthenticated pages (home, login, signup, preview). No navbar.
- `app/(dashboard)/` — Protected pages (`heists/` listing, `heists/create`, `heists/[id]` detail). Includes the Navbar via `app/(dashboard)/layout.tsx`.

### Import Aliases

`@/*` resolves to the project root (defined in `tsconfig.json`). Use it for all non-relative imports:
```ts
import Navbar from '@/components/Navbar'
```

### Styling Architecture

Tailwind CSS v4 is configured via PostCSS (`postcss.config.mjs`). Global theme tokens and base styles are defined in `app/globals.css`:

- Primary: `#C27AFF` (purple), Secondary: `#FB64B6` (pink)
- Backgrounds: `#030712`, `#0A101D`, `#101828`
- Success: `#05DF72`, Error: `#FF6467`
- Font: Inter (Google Fonts)

Components may mix Tailwind utility classes with CSS Modules for scoped overrides.

### Component Structure

Reusable components live in `components/` with one folder per component:
```
components/
  Navbar/
    Navbar.tsx        # Component implementation
    Navbar.module.css # Scoped styles (CSS Modules)
    index.ts          # Re-export
```

### Testing Setup

- **Framework:** Vitest 4 with jsdom environment
- **Utilities:** `@testing-library/react` + `@testing-library/jest-dom` (matchers set up in `vitest.setup.ts`)
- **Globals:** `describe`, `it`, `expect`, `vi` are available without importing (configured in `vitest.config.mts`)
- **Test location:** `tests/` mirrors the source structure (e.g., `tests/components/Navbar.test.tsx`)

Prefer `screen.getByRole` and other accessible queries over `getByTestId` when asserting on rendered output.


### Additional Coding Preference

- DO NOT use semicolons for Javascript or Typescript code.
- DO NOT apply tailwind classes directly in component templates unless essential or just one at most. If an element needs more than a single tailwind class, combine them into a custom class using the `@apply` directive.
- Use minimal project dependencies where possible.
- Use the `git switch -c` command to switch to new branches.