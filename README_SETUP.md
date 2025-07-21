# Discoverly.dev Technical Setup

This project is built with:
- **Eleventy** (v3.1.2) - Static site generator
- **Tailwind CSS 4** - CSS framework
- **Handlebars** - Templating engine
- **Alpine.js** - Lightweight JavaScript framework
- **Lucide Icons** - Icon library
- **unDraw** - Illustration system

## Project Structure

```
discoverly.dev/
├── src/
│   ├── _includes/       # Templates and partials
│   │   ├── layouts/     # Page layouts
│   │   └── partials/    # Reusable components
│   ├── assets/          # Static assets
│   │   ├── css/        # Stylesheets
│   │   ├── js/         # JavaScript files
│   │   └── images/     # Images
│   ├── content/        # Markdown content
│   └── _data/          # Global data files
└── _site/              # Generated output (git ignored)
```

## Development

Install dependencies:
```bash
npm install
```

Run development server:
```bash
npm run dev
```

This starts:
- Eleventy dev server with hot reload
- Tailwind CSS watcher with JIT compilation
- JavaScript bundler with Alpine.js

## Production Build

Build for production:
```bash
npm run build
```

This will:
- Generate static HTML files
- Minify CSS with Tailwind
- Bundle and minify JavaScript

## Writing Content

Create markdown files in `src/content/` with YAML frontmatter:

```markdown
---
layout: layouts/base.hbs
title: Page Title
description: Page description
---

Your content here...
```

## Using Components

### Lucide Icons
Use the Lucide shortcode in templates:
```handlebars
{{{lucide "icon-name" size=24}}}
```

### Alpine.js
Add Alpine.js directives to any HTML:
```html
<div x-data="{ open: false }">
  <button @click="open = !open">Toggle</button>
  <div x-show="open">Content</div>
</div>
```

### unDraw Illustrations
Access unDraw configuration via `undraw` global data.