# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog and documentation site built with **Docusaurus 3.7.0**, **React 19**, and **TypeScript**. The site is primarily in Chinese and covers diverse topics: programming, fitness, nutrition, music theory, photography, and more.

Live site: https://serendipityhaven.com/

## Common Commands

```bash
# Development
npm run start              # Start dev server (default config)
npm run start-github       # Start with GitHub Pages config
npm run start-host         # Start with self-hosted config

# Build
npm run build              # Build for production
npm run build-github       # Build for GitHub Pages (baseUrl: /myblog/)
npm run build-host         # Build for self-hosted (baseUrl: /)

# Type checking
npm run typecheck          # Run TypeScript type checking

# Other
npm run serve              # Serve built site locally
npm run clear              # Clear Docusaurus cache
```

**Note:** No linting or testing frameworks are configured.

## Architecture

### Content Structure
- **`docs/`** - Documentation organized by topic (coding, nutrition, photography, etc.)
- **`blog/`** - Blog posts with date-prefixed MDX files, author definitions in `authors.yml`
- **`src/pages/`** - Custom React pages (homepage, interactive pages)
- **`src/components/`** - Reusable React components (calculators, interactive features)
- **`static/`** - Static assets (images)

### Configuration
- **`docusaurus.config.ts`** - Main configuration with environment-based URL switching
- **`sidebars.ts`** - Uses auto-generated sidebars from docs folder structure

### Deployment Targets
Two deployment workflows in `.github/workflows/`:
1. **GitHub Pages** (`ci.yml`) - Deploys to gh-pages branch, triggered on push/PR to master
2. **Tencent Cloud** (`host.yml`) - SSH deploy to self-hosted server, triggered on push to master

The `DEPLOY_SERVER` environment variable controls URL configuration between deployment targets.

### Notable Patterns
- Some blog post content is loaded from GitHub secrets via environment variables (`BLOG_POST*`)
- The `heart.js` page uses Chakra UI and connects to a backend API at `/myapi`
- Navbar dropdown menus are defined via HTML snippets in `src/snippets/`

## Tech Stack
- Docusaurus 3.7.0 (static site generator)
- React 19 with TypeScript 5.6
- Chakra UI 2.10 with Framer Motion (for interactive components)
- MDX for content with JSX support
