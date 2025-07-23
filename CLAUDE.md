# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Discoverly.dev is a static website built with Eleventy, Tailwind CSS 4, and Alpine.js. It uses Vite as the build tool for fast development and optimized production builds.

## Essential Commands

### Development
```bash
npm run dev          # Start development server (Eleventy + Vite watch mode)
npm run build        # Build for production
npm run preview      # Build and serve production site
npm run clean        # Clean the _site directory
```

### Individual Commands
```bash
npm run build:11ty   # Build only Eleventy
npm run build:vite   # Build only Vite assets
npm run dev:11ty     # Run only Eleventy in watch mode
npm run dev:vite     # Run only Vite in watch mode
```

## Architecture

### Tech Stack
- **Static Site Generator**: Eleventy 3.1.2 with Handlebars templating
- **CSS**: Tailwind CSS 4 (via Vite plugin)
- **JavaScript**: Alpine.js 3.14.9 for lightweight interactivity
- **Icons**: Lucide icons (all icons imported, rendered via custom Handlebars helper)
- **Build Tool**: Vite 7.0.5

### Key File Locations
- **Templates**: `src/_includes/layouts/` and `src/_includes/partials/`
- **Styles**: `src/assets/css/main.css` (imports Tailwind)
- **JavaScript**: `src/assets/js/main.js` (Alpine.js initialization)
- **Content**: `src/content/` (Markdown files)
- **Data**: `src/_data/` (global data files)
- **Output**: `_site/` (generated static files)
- **Illustrations**: `undraw_svgs/` (1526 SVG illustrations from undraw.co)

### Important Patterns

1. **Icon Usage**: Use the `lucide` Handlebars helper:
   ```handlebars
   {{lucide "menu" 24 class="w-6 h-6"}}
   {{lucide "arrow-right" 16 class="inline ml-1"}}
   {{lucide "inbox" class="text-brand-500"}}  // size defaults to 24
   ```
   
   **How it works**:
   - The Handlebars helper in `.eleventy.js` creates `<i data-lucide="icon-name">` elements
   - All Lucide icons are imported in `main.js` using `import * as lucideIcons from 'lucide'`
   - Icons are automatically converted to SVGs on page load via `createIcons()`
   - Any Lucide icon can be used without modifying JavaScript

2. **Alpine.js Components**: Defined inline in templates with `x-data`:
   ```html
   <div x-data="{ open: false }">
   ```

3. **Tailwind CSS**: Version 4 uses native CSS imports and Vite plugin integration

4. **Content Structure**: Markdown files in `src/content/` with YAML frontmatter for metadata

5. **SVG Illustrations**: The `undraw_svgs/` directory contains 1526 high-quality SVG illustrations from undraw.co that can be used throughout the site. Files are named descriptively (e.g., `web-developer.svg`, `mobile-app.svg`). Duplicates are marked with `_2` suffix.

### Configuration Files
- `.eleventy.js`: Eleventy config with Handlebars setup and icon helper
- `vite.config.js`: Vite config with Tailwind CSS 4 plugin
- Both configs work together to build the static site with optimized assets

## Design Preferences

- **Color Scheme**: 
  - Prefer light-colored backgrounds
  - Avoid dark backgrounds with white text