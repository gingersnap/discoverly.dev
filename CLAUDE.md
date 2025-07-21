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
- **Icons**: Lucide icons with custom Handlebars helper
- **Build Tool**: Vite 7.0.5

### Key File Locations
- **Templates**: `src/_includes/layouts/` and `src/_includes/partials/`
- **Styles**: `src/assets/css/main.css` (imports Tailwind)
- **JavaScript**: `src/assets/js/main.js` (Alpine.js initialization)
- **Content**: `src/content/` (Markdown files)
- **Data**: `src/_data/` (global data files)
- **Output**: `_site/` (generated static files)

### Important Patterns

1. **Icon Usage**: Use the `icon` Handlebars helper:
   ```handlebars
   {{icon "menu" class="w-6 h-6"}}
   ```

2. **Alpine.js Components**: Defined inline in templates with `x-data`:
   ```html
   <div x-data="{ open: false }">
   ```

3. **Tailwind CSS**: Version 4 uses native CSS imports and Vite plugin integration

4. **Content Structure**: Markdown files in `src/content/` with YAML frontmatter for metadata

### Configuration Files
- `.eleventy.js`: Eleventy config with Handlebars setup and icon helper
- `vite.config.js`: Vite config with Tailwind CSS 4 plugin
- Both configs work together to build the static site with optimized assets