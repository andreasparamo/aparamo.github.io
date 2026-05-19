# aparamo.github.io

Personal portfolio & resume website.

## Stack

- **Vite** — lightning-fast dev server & build tool
- **Tailwind CSS v4** — utility-first styling via the Vite plugin
- **TypeScript** — type-safe JavaScript
- **GitHub Pages** — hosting via GitHub Actions

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build     # outputs to ./dist
npm run preview   # preview the production build locally
```

## Deployment

Deployment is fully automated via GitHub Actions. Every push to `main` triggers a build and deploy to GitHub Pages.

The workflow is defined in `.github/workflows/deploy.yml`.

### Setup (one-time)

1. Create the repository `aparamo.github.io` on GitHub
2. Push this code to the `main` branch
3. Go to **Settings → Pages** and set Source to **GitHub Actions**
4. The site will be live at `https://aparamo.github.io/`
