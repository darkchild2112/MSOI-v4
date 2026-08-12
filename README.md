# MSOI-v4

A static Astro site for Making Sense of It.

## Project structure

- `src/pages/` contains route pages.
- `src/layouts/` contains shared page layouts (`BaseLayout.astro`, `ServicesLayout.astro`, `TextLayout.astro`).
- `src/components/` contains reusable UI components, including the contact form under `src/components/ContactUs/Form`.
- `src/clients/` contains client-side integration code for form submission.
- `public/` contains static assets and the backend mail endpoint at `public/api/mail/index.php`.

## Important notes

- This repo uses `astro@^5.1.2` and `@astrojs/react`.
- The contact form depends on `src/clients/localApi.js`, `src/clients/smtp2go.js`, and `public/api/mail/index.php`.
- For AI agent guidance, see `AGENTS.md` and `.github/copilot-instructions.md`.

## Commands

- `npm install` — install dependencies
- `npm run dev` — start local dev server
- `npm run build` — build production site
- `npm run preview` — preview the built site locally

## Notes

- There is no dedicated test or lint pipeline in this repo.
- Keep changes minimal and consistent with existing Astro + React patterns.
