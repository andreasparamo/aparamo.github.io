# Application Architecture & Stack Overview

This document provides a comprehensive overview of the architectural decisions, tech stack, and scaffolding structure for the Next.js portfolio project.

## Tech Stack & Official Documentation

The modern frontend stack chosen for this project provides high performance, SEO capabilities, buttery smooth animations, and interactive 3D web experiences.

1. **[Next.js (App Router)](https://nextjs.org/docs)**: The core React framework. We utilize the App Router (`app/` directory) for layouts, server components, and optimized routing. Next.js is configured for `output: "export"` to build a static HTML/JS/CSS bundle that can be hosted entirely on GitHub Pages.
2. **[Tailwind CSS](https://tailwindcss.com/docs)**: Utility-first CSS framework for rapid UI development. The project is styled exclusively with Tailwind, promoting a sleek, dark-mode-first aesthetic with a customized color palette.
3. **[Lenis Scroll](https://lenis.darkroom.engineering)**: A lightweight, robust smooth scrolling library built for the modern web. It hooks into the browser's native scrolling mechanisms and `requestAnimationFrame` to ensure animations and scrolling behave fluidly without hijacking the scrollbar completely.
4. **[Framer Motion](https://motion.dev)**: A production-ready motion library for React. Used for declarative animations, scroll-triggered reveals, and complex layout transitions. It seamlessly integrates with Lenis to orchestrate scroll-linked animations.
5. **[Spline](https://docs.spline.design)**: A 3D design tool and real-time engine for the web. We use `@splinetool/react-spline` to render lightweight, interactive 3D scenes (like hero backgrounds) directly within React components.

## Folder Architecture & Scaffolding

The repository is structured around the Next.js `src/` directory pattern to keep the root directory clean.

```text
/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions workflow for static deployment to GitHub Pages
├── docs/                     # Project documentation, research, and migration steps
├── public/                   # Static assets (images, fonts, favicon, etc.)
│   └── .nojekyll             # Prevents GitHub Pages from interfering with Next.js routing/assets
├── src/
│   ├── app/                  # Next.js App Router root
│   │   ├── layout.tsx        # Global HTML/Body layout; wraps the app in the SmoothScroll provider
│   │   ├── page.tsx          # The main landing page; composes Sections and 3D scenes
│   │   └── globals.css       # Global CSS, Tailwind directives, and CSS variables
│   ├── components/           # Reusable React components
│   │   ├── SmoothScroll.tsx  # Client-side Lenis initialization wrapper
│   │   ├── AnimatedSection.tsx # Reusable Framer Motion fade-in/slide-up component
│   │   └── Scene.tsx         # Spline 3D scene wrapper component
│   └── lib/                  # Utility functions (e.g., class name mergers like clsx/tailwind-merge)
├── next.config.ts            # Next.js configuration (static export enabled)
├── tailwind.config.ts        # Tailwind CSS theme and plugin configuration
└── package.json              # Project dependencies and npm scripts
```

## Architectural Design Decisions

- **Client Components vs Server Components**: Next.js App Router defaults to Server Components. However, animation libraries (Framer Motion), scroll management (Lenis), and 3D rendering (Spline) rely heavily on browser APIs (`window`, `requestAnimationFrame`). Thus, wrapper components like `SmoothScroll.tsx`, `AnimatedSection.tsx`, and `Scene.tsx` must be marked with the `"use client"` directive.
- **Static Export**: Because the application is hosted on GitHub Pages (which only serves static files and does not run a Node.js server), Next.js features that require a server runtime (like Server Actions or Image Optimization) are disabled or constrained. The `next.config.ts` enforces this via `output: "export"` and `images: { unoptimized: true }`.
- **Global Smooth Scrolling**: By wrapping `{children}` inside a client-side `SmoothScroll` provider within `layout.tsx`, the entire application benefits from Lenis, ensuring that Framer Motion's `useScroll` hooks track progress synchronously with the smoothed scroll position.
