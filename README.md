# Seif Islem Benrabah — Portfolio

Personal portfolio site for Seif Islem Benrabah, Creative Designer & Developer — presented as an interactive "iPhone/macOS" experience: splash → lock screen → home screen, with each section of the portfolio living behind an app icon (Notes, Behance, GitHub, Messages, Gmail, Spotify, Translate).

Live: https://seifislembenrabah.github.io/Portfolio/

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Static export (`output: 'export'`) for GitHub Pages hosting
- Tailwind CSS v4
- Motion (`motion/react`)
- Lucide icons

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Produces a static export in `out/`.

## Deployment

Pushing to `main` triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the site and publishes the `out/` directory to GitHub Pages.

## Content

- `data/personal.ts` — name, avatar, stats, social links
- `data/projects.ts` — all projects; `designProjects` (Behance app) and `devProjects` (GitHub app) are derived by category
- `data/testimonials.ts` — client testimonials (Messages app)
- `data/notes.ts` — skills / experience / services content (Notes app)
- `context/language-context.tsx` — EN/FR/AR translations, RTL handled via `document.dir` (Translate app)

Swap the placeholder reciter/surah in `components/apps/spotify-app.tsx` (`TRACKS`) for your preferred mp3quran.net selection.
