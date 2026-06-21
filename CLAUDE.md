# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A pnpm monorepo publishing three npm/JSR packages exposing ~250 traditional Japanese colors from nipponcolors.com as typed JS constants, pre-built CSS utilities, and a Tailwind CSS plugin. Includes a VitePress docs site.

## Commands

```bash
# Install all workspace deps
pnpm install

# Build all packages (core → css → tailwind, order matters)
pnpm build

# Run all tests
pnpm test

# Run tests for a single package
cd packages/core && pnpm test
cd packages/css && pnpm test
cd packages/tailwind && pnpm test

# Run a single test file
cd packages/core && npx vitest run test/index.test.ts

# Docs dev server
pnpm dev:docs

# Build docs
pnpm build:docs

# Scrape color data (one-time, Playwright)
npx tsx scripts/scrape.ts

# Regenerate docs/colors.md from color data
npx tsx scripts/gen-colors-doc.ts

# Publish
pnpm publish:npm   # npm
pnpm publish:jsr   # JSR
```

## Architecture

```
wairo-palette/
├── packages/
│   ├── core/        # @wairo-palette/core — source of truth, deps: none
│   ├── css/         # @wairo-palette/css  — deps: core
│   └── tailwind/    # @wairo-palette/tailwind — deps: core
├── docs/            # VitePress site
└── scripts/         # scrape.ts, gen-colors-doc.ts
```

### Data Flow

`scripts/scrape.ts` (Playwright, one-time) → `packages/core/src/data/colors.json` (committed, static) → `@wairo-palette/core` (JS exports) → consumed by `@wairo-palette/css` and `@wairo-palette/tailwind` at build time.

### Package Details

**`@wairo-palette/core`** — built with unbuild (ESM + CJS dual output). Exports:
- `colors: Record<string, NipponColor>` — keyed by romaji (lowercase, no spaces)
- `colorList: NipponColor[]` — full array
- `NipponColor` type — `{ name, romaji, kanji, hex, rgb: {r,g,b}, hsl: {h,s,l} }`

**`@wairo-palette/css`** — `src/generate.ts` runs at build time to produce `dist/wairo-palette.css`. Ships only the pre-built CSS file. Generates per-color `:root` custom properties (`--color-{romaji}`) and five utility classes: `.text-`, `.bg-`, `.border-`, `.fill-`, `.stroke-`.

**`@wairo-palette/tailwind`** — built with unbuild (ESM + CJS). Plugin object with `handler: () => {}` and `config.theme.extend.colors.wairo` containing the full palette. Colors namespaced under `wairo-*` to avoid collision with Tailwind's built-in palette.

### Key Design Decisions

- `colors.json` is committed — no scraping at install or runtime
- Hex values in CSS (not oklch) for maximum browser compat
- Romaji-only keys in JS exports and CSS class names
- `wairo-*` prefix in Tailwind prevents palette conflicts
- Tasks 4 (`css`) and 5 (`tailwind`) are independent and safe to run in parallel once `core` is built and committed

### Build Config

Each package uses `build.config.ts` with `unbuild`. Root `tsconfig.base.json` extended per-package. Tests run via `vitest` directly on TypeScript source (no pre-build needed for tests).

### Scraper Notes

If `scripts/scrape.ts` yields 0 colors, inspect `debug.png` and `debug.html` (auto-written on failure). Update the selectors array in the scraper and re-run. The JSON shape is `{ name, romaji, kanji, hex, rgb: {r,g,b}, hsl: {h,s,l} }[]`.
