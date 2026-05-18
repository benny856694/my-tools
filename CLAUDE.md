# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev              # Vite dev server on port 1337
npm run build            # Type-check (vue-tsc --noEmit) then production build to docs/
npm run deploy           # Deploy Convex backend + build frontend (commits docs/ for GitHub Pages)
npm run serve            # Preview production build locally

npm run test             # Vitest unit tests (silent)
npm run test:watch       # Vitest in watch mode
npm run coverage         # Vitest with coverage (80% thresholds for functions/branches/statements)
npm run test:e2e         # Cypress E2E interactive (starts dev server + Cypress concurrently)
npm run test:e2e:headless # Cypress E2E headless
npm run test:e2e:wsl     # Cypress E2E under WSL

npm run lint             # ESLint --fix on src/
npm run format           # Prettier format all files
```

## Architecture

Vue 3 SPA built with Vite, deployed to **GitHub Pages** at the path `/my-tools/` (configured in `vite.config.ts` base). The build output goes to `docs/` so GitHub Pages can serve it directly.

### Frontend (src/)

- **Entry**: `src/main.ts` — bootstraps Vue with Pinia (localStorage persistence via `pinia-plugin-persistedstate`), Vue Router (web history mode), global Naive UI components + FontAwesome icons, and the Convex-Vue plugin.
- **Layout**: `App.vue` — provides the shell: header with dark mode toggle, collapsible sidebar (Naive UI `n-menu`), and `<router-view>`. Dark mode preference stored in localStorage.
- **Routing** (`src/router/index.ts`): Four lazy-loaded routes — `/` (HelloWorld), `/vlessmod` (VLESS URL modifier), `/firmware` (firmware push), `/firmman` (firmware CRUD). The `/firmman` route is hidden from the sidebar and accessed via Ctrl+Click on the header title.
- **State** (`src/store/main.ts`): Single Pinia store holding `counter` (HelloWorld demo) and `selectedSourceId` (persisted firmware source selection).
- **UI**: Naive UI component library with Sass-styled Inter font. Tailwind CSS 4 via PostCSS plugin. FontAwesome 7 icons registered globally in `src/components/global/vendor/icons.ts`.

### Backend — Convex (convex/)

BaaS with two tables defined in `convex/schema.ts`:
- `firmwares`: `{ name, md5, size, fileName }`
- `sources`: `{ name, baseUrl }` — firmware download source URLs

API in `convex/pet.ts`: mutations `addFirmware`/`removeFirmware`, queries `getFirmwares`/`getSources`. Vue components use `useConvexQuery` and `useConvexMutation` from `convex-vue` to talk to the backend.

### Testing

- **Unit** (`test/unit/`): Vitest with `happy-dom` environment. `test/unit/testhelper.ts` provides a `mountComponent()` wrapper that sets up Pinia, global components, and router.
- **E2E** (`test/e2e/`): Cypress with Cucumber/BDD preprocessor. Gherkin `.feature` files in `test/e2e/specs/features/`, step definitions in TypeScript. Code coverage instrumented via `vite-plugin-istanbul` (only when `CYPRESS_TEST=true`).

## Key conventions

- Path alias `@/` maps to `src/` (configured in both `tsconfig.json` and `vite.config.ts` via `vite-tsconfig-paths`).
- The app base path is `/my-tools/` — all routes and assets are served under this prefix. When adding links or assets, account for this base.
- `convex/_generated/` is auto-generated — never edit it directly.
- The build outputs to `docs/` (not `dist/`). After `npm run deploy`, the docs directory is committed and pushed for GitHub Pages deployment.
