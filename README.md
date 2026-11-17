# Saddam — Android Developer Portfolio

Professional portfolio built with **Next.js**, **React**, and **Framer Motion**. Deployed to GitHub Pages as a static export.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Local development server |
| `npm run build` | Static export to `out/` |
| `npm start` | Serve production build locally |

## Project Structure

```
app/                  Next.js App Router pages
components/           UI sections + gallery/lightbox
data/                 Projects, skills, certifications, personal info
public/assets/        Screenshots, favicon, certificates
.github/workflows/    GitHub Pages deploy
```

## Editing Content

- Personal info: `data/personal.ts`
- Projects: `data/projects.ts`
- Skills: `data/skills.ts`
- Certifications: `data/certifications.ts`

Screenshots live in `public/assets/projects/<project-id>/`.

## GitHub Pages

Push to `main`. The workflow builds the site and deploys the `out/` folder.

In the repo **Settings → Pages**, set Source to **GitHub Actions**.
