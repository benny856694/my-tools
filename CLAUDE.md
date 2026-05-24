# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev              # Vite dev server on port 1337
npm run build            # Type-check (vue-tsc --noEmit) then production build to docs/
npm run deploy           # `npx convex deploy --cmd 'npm run build'` — pushes Convex backend + builds frontend
npm run serve            # Preview production build locally

npm run validate:types   # Run vue-tsc type-check only (no build)
npm run test             # Vitest unit tests (silent)
npm run test:watch       # Vitest in watch mode
npm run coverage         # Vitest with coverage (80% thresholds for functions/branches/statements)
npm run test:e2e         # Cypress E2E interactive (starts dev server + Cypress concurrently)
npm run test:e2e:headless # Cypress E2E headless
npm run test:e2e:setup   # First-time E2E setup: install Cypress binary + clear cache

npm run lint             # ESLint --fix on src/
npm run format           # Prettier format all files
```

## Environment variables

Create a `.env.local` file (gitignored) with:

```
VITE_CONVEX_URL=<your-convex-deployment-url>
VITE_IPINFO_TOKEN=<ipinfo.io-api-token>
```

- `VITE_CONVEX_URL` — consumed by `convex-vue` plugin in `src/main.ts`.
- `VITE_IPINFO_TOKEN` — used by the VLESS URL geolocation feature in `src/utils/utils.ts`.

## Architecture

Vue 3 SPA built with Vite, deployed to **GitHub Pages** at `/my-tools/` (configured in `vite.config.ts` base). Build output goes to `docs/`.

### Frontend (src/)

- **Entry** (`src/main.ts`): Bootstraps Vue with Pinia (localStorage persistence via `pinia-plugin-persistedstate`), Vue Router (web history mode), global Naive UI components + FontAwesome icons, and the Convex-Vue plugin.
- **Layout** (`App.vue`): Header with dark mode toggle, collapsible sidebar (Naive UI `n-menu`), and `<router-view>`. Dark mode stored in localStorage. Naive UI locale is set to `zhCN`.
- **Routing** (`src/router/index.ts`): Four lazy-loaded routes:
  - `/` — HelloWorld demo page (accepts `msg` prop)
  - `/vlessmod` — VLESS URL modifier (accepts `msg` prop)
  - `/firmware` — firmware push view
  - `/firmman` — firmware CRUD (hidden from sidebar, accessed via Ctrl+Click on header title)
- **State** (`src/store/main.ts`): Single Pinia store with `counter` and `selectedSourceId` (persisted to localStorage).
- **UI**: Naive UI component library with Sass-styled Inter font. Tailwind CSS 4 via PostCSS plugin (`@tailwindcss/postcss`). FontAwesome 7 icons registered globally in `src/components/global/vendor/icons.ts`.
- **Theme** (`src/lib/theme.ts`): Custom Naive UI `GlobalThemeOverrides` with green/blue color palette for both light and dark modes. Applied in `App.vue`.
- **Utils** (`src/utils/`): VLESS URL parsing/geolocation utilities. `src/utils/render.ts` has rendering helpers.

### Backend — Convex (convex/)

BaaS with two tables in `convex/schema.ts`:
- `firmwares`: `{ name, md5, size, fileName }`
- `sources`: `{ name, baseUrl }` — firmware download source URLs

API in `convex/pet.ts`:
| Type | Name | Args |
|------|------|------|
| mutation | `addFirmware` | `name, md5, size, fileName` |
| mutation | `updateFirmware` | `id, name, md5, size, fileName` |
| mutation | `removeFirmware` | `id` |
| query | `getFirmwares` | (none — returns all) |
| query | `getSources` | (none — returns all) |

Vue components use `useConvexQuery` / `useConvexMutation` from `convex-vue`.

### Testing

- **Unit** (`test/unit/`): Vitest with `happy-dom` environment. `test/unit/testhelper.ts` provides `mountComponent()` wrapper that sets up Pinia, global components, and router.
- **E2E** (`test/e2e/`): Cypress with Cucumber/BDD preprocessor. Gherkin `.feature` files in `test/e2e/specs/features/`, step definitions in TypeScript. Custom Cypress commands (`dataCy`, `getTestElement`, `getTestElementByClass`) in `test/e2e/support/commands.ts`. Code coverage via `vite-plugin-istanbul` (only when `CYPRESS_TEST=true`).

### Tailwind CSS v4

Tailwind v4 uses a CSS-first configuration. Entry point is `src/styles/vendor/_tailwind.css` which imports `tailwindcss/theme.css` and `tailwindcss/utilities.css`. Both `@tailwindcss/vite` and `@tailwindcss/postcss` are configured in `vite.config.ts` — the PostCSS plugin is the one that actually processes the styles.

## Key conventions

- Path alias `@/` maps to `src/` (configured in `tsconfig.json` + `vite.config.ts` via `vite-tsconfig-paths`).
- App base path is `/my-tools/` — all routes and assets are served under this prefix.
- `convex/_generated/` is auto-generated — never edit directly.
- Build outputs to `docs/` (not `dist/`). After `npm run deploy`, `docs/` is committed and pushed for GitHub Pages.
- Global Vue plugins registered via `globalComponents` pattern in `src/components/global/index.ts`.
- `pinia-plugin-persistedstate` auto-persists the Pinia store to localStorage. The `main` store has `persist: true`.
- The app uses `zhCN` locale for Naive UI globally (set in `App.vue` via `n-config-provider`).
- Nav menu labels use Chinese: 固件推送, 固件管理.
