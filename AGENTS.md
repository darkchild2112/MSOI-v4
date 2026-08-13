# AI Agent Instructions for MSOI-v4

## Project overview

- Astro site using `astro@^5.1.2` with `@astrojs/react` integration.
- Static site structure in `src/pages`, with reusable layouts in `src/layouts` and UI components in `src/components`.
- Styles are authored in Sass (`.scss`) and imported into Astro/JSX components.
- Minimal package scripts: `npm run dev`, `npm run build`, `npm run preview`, and `npm run astro`.

## Key conventions

- Route files live in `src/pages`. Nested directories map to nested routes, e.g. `src/pages/services/autism-adhd-assessments.astro` -> `/services/autism-adhd-assessments`.
- Layouts are defined in `src/layouts` and used by pages, especially `BaseLayout.astro`, `ServicesLayout.astro`, and `TextLayout.astro`.
- Most UI logic is in `.astro` components. React/JSX is used only for the contact form under `src/components/ContactUs/Form`.
- Shared content data is stored in component-specific files, such as `src/components/Services/services.js` and `src/components/ServicesNavigation/ServicesNavigationData.js`.
- Static assets are served from `public/`.

## Form handling and backend

- Contact form client code uses `src/clients/localApi.js` and `src/clients/smtp2go.js`.
- The mail endpoint is `public/api/mail/index.php` and should be preserved when working on contact/email behavior.
- Do not assume a full backend stack exists beyond the PHP endpoint and SMTP2GO integration in this repo.

## Practical guidance for edits

- Use existing layout and component patterns rather than introducing new architecture.
- Prefer updating `services.js` / `ServicesNavigationData.js` for service list changes instead of hardcoding strings in pages.
- When adding new pages, keep them in `src/pages` and apply the appropriate layout.
- Keep visual/styling changes within existing `.scss` files unless a new style needs a dedicated stylesheet.
- Avoid creating TypeScript-based build changes; the repo is configured as ESM with `type: "module"` in `package.json`.

## Commands

- `npm install` to install dependencies.
- `npm run dev` to start the local dev server.
- `npm run build` to produce the production site.
- `npm run preview` to preview the built site locally.
- `npm run lint:fix` / `npm run format` to fix ESLint/Prettier violations manually.

## Notes for AI agents

- ESLint (`npm run lint`, config in `.eslintrc.cjs`) and Prettier (`npm run format`, config in `.prettierrc`) run automatically on `git commit` via husky + lint-staged (staged files only — see `.husky/pre-commit` and the `lint-staged` key in `package.json`), and are re-checked repo-wide in CI on every PR to `main` (`.github/workflows/pr-ci.yml`), alongside a Playwright e2e suite (`npm run test:e2e`).
- The root `README.md` contains residual Astro starter content and should not be treated as authoritative for project-specific behavior.
- Keep changes minimal and aligned with the current Astro + React integration style.
