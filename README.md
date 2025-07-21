# discoverly.dev

A product discovery tool website built with modern web technologies.

## Tech Stack

- **Eleventy** - Static site generator
- **Tailwind CSS 4** - Utility-first CSS framework
- **Vite** - Build tool and bundler
- **Alpine.js** - Lightweight JavaScript framework
- **Handlebars** - Templating engine
- **Lucide Icons** - Icon library

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Build and preview production site
- `npm run clean` - Clean build directory

## Project Structure

```
src/
├── _includes/       # Templates and partials
│   ├── layouts/     # Page layouts
│   └── partials/    # Reusable components
├── assets/          # Static assets
│   ├── css/         # Stylesheets
│   ├── js/          # JavaScript
│   └── images/      # Images
├── content/         # Markdown content
└── _data/           # Global data files
```