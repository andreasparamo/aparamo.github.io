# Step-by-Step Migration Guide

This document logs the exact sequence of steps taken to migrate the project from the original Vite + Tailwind boilerplate to the modern Next.js ecosystem.

## Phase 1: Teardown & Cleanup
1. **Stop Development Servers**: Terminated the active `npm run dev` process that was serving the Vite application to prevent file-locking issues.
2. **Remove Legacy Code**: Deleted all Vite-specific configuration and source files, including:
   - `vite.config.ts`
   - `index.html`
   - `src/` directory (containing the old `main.ts` and `style.css`)
   - `package.json`, `package-lock.json`, and `node_modules` (to ensure a pristine slate for Next.js).

## Phase 2: Next.js Initialization
1. **Scaffold Next.js**: Executed the official initialization command:
   ```bash
   npx create-next-app@latest . \
     --typescript \
     --tailwind \
     --eslint \
     --app \
     --src-dir \
     --import-alias "@/*" \
     --use-npm
   ```
2. **Install Specialized Dependencies**: Added the required libraries for animations and 3D integration:
   ```bash
   npm install lenis framer-motion @splinetool/react-spline @splinetool/runtime
   ```

## Phase 3: System Configuration
1. **Next.js Static Export**: Modified `next.config.ts` to output a static site compatible with GitHub Pages:
   ```typescript
   const nextConfig = {
     output: "export",
     images: { unoptimized: true }
   };
   ```
2. **GitHub Pages `.nojekyll`**: Ensured that the `public/.nojekyll` file exists so GitHub Pages does not run the site through the Jekyll processor, which can mistakenly ignore paths starting with underscores (a common pattern in Next.js `_next/` directories).

## Phase 4: Boilerplate Component Creation
1. **Lenis Integration (`src/components/SmoothScroll.tsx`)**: Created a client component using the `"use client"` directive to initialize a `Lenis` instance and synchronize it with the browser's `requestAnimationFrame`.
2. **Spline Integration (`src/components/Scene.tsx`)**: Created a client component wrapper for `@splinetool/react-spline` to lazy-load a 3D scene (using a placeholder `.splinecode` URL that can be easily replaced by the developer).
3. **Framer Motion Integration (`src/components/AnimatedSection.tsx`)**: Built a reusable wrapper that utilizes `initial`, `whileInView`, and `viewport` props to create fade-and-slide reveals as the user scrolls down the page.

## Phase 5: Layout & Deployment
1. **Global Provider Wiring**: Updated `src/app/layout.tsx` to wrap the `<body>` content in the `<SmoothScroll>` provider, ensuring the entire page scrolls smoothly.
2. **Premium Dark Mode UI**: Re-wrote `src/app/page.tsx` utilizing Tailwind CSS utility classes to design a premium, dark-mode-first aesthetic with glassmorphism effects and deep contrasts.
3. **GitHub Actions Update**: Modified `.github/workflows/deploy.yml` to change the build step to `npm run build` and updated the artifact upload path from `./dist` (Vite) to `./out` (Next.js static export).

## Phase 6: Verification
- Verified that the local build `npm run build` successfully creates the `out/` directory without server-side dynamic routing errors.
- Confirmed that the GitHub Actions deploy workflow successfully uploads the `out/` artifact and publishes to `https://andreasparamo.github.io/`.
