# Technical Setup Plan for discoverly.dev

## Overview
Set up a modern static site generator using Eleventy with Tailwind CSS 4, Handlebars templating, and lightweight JavaScript interactions.

## Technical Stack
- **Static Site Generator**: Eleventy (latest)
- **CSS Framework**: Tailwind CSS 4 (latest)
- **Templating**: Handlebars.js
- **Content**: Markdown with YAML frontmatter
- **Interactions**: Alpine.js
- **Icons**: Lucide Icons
- **Illustrations**: unDraw
- **Language**: JavaScript (not TypeScript)

## Setup Steps

### 1. Initialize npm project
- [ ] Run `npm init -y`
- [ ] Update package.json with project details

### 2. Install Eleventy and core dependencies
- [ ] Install Eleventy: `npm install --save-dev @11ty/eleventy`
- [ ] Install Handlebars support for Eleventy

### 3. Set up Tailwind CSS 4
- [ ] Install Tailwind CSS 4 and dependencies
- [ ] Create Tailwind configuration
- [ ] Set up PostCSS configuration
- [ ] Create base CSS file with Tailwind directives

### 4. Configure Eleventy
- [ ] Create `.eleventy.js` configuration file
- [ ] Configure Handlebars as templating engine
- [ ] Set up input/output directories
- [ ] Configure markdown processing with YAML frontmatter
- [ ] Set up CSS processing pipeline

### 5. Create project structure
- [ ] Create `src` directory for source files
- [ ] Create `src/_includes` for layouts and partials
- [ ] Create `src/assets` for static assets
- [ ] Create `src/assets/css` for stylesheets
- [ ] Create `src/assets/js` for JavaScript files
- [ ] Create `src/content` for markdown content

### 6. Set up Alpine.js
- [ ] Install Alpine.js
- [ ] Configure Alpine.js integration

### 7. Set up Lucide Icons
- [ ] Install Lucide Icons
- [ ] Create helper/shortcode for easy icon usage

### 8. Set up unDraw integration
- [ ] Create system for managing unDraw illustrations
- [ ] Set up asset pipeline for illustrations

### 9. Create base templates
- [ ] Create base layout template in Handlebars
- [ ] Create header partial
- [ ] Create footer partial
- [ ] Create basic home page template

### 10. Configure build process
- [ ] Set up development server with hot reload
- [ ] Configure Tailwind CSS compilation
- [ ] Set up production build process
- [ ] Add npm scripts for dev and build

### 11. Create example content
- [ ] Create sample markdown file with YAML frontmatter
- [ ] Create index page
- [ ] Test all integrations

### 12. Final configuration
- [ ] Update .gitignore for build artifacts
- [ ] Create README with setup instructions
- [ ] Test full build process
- [ ] Commit changes

## Expected Project Structure
```
discoverly.dev/
├── .eleventy.js
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── _includes/
│   │   ├── layouts/
│   │   │   └── base.hbs
│   │   └── partials/
│   │       ├── header.hbs
│   │       └── footer.hbs
│   ├── assets/
│   │   ├── css/
│   │   │   └── main.css
│   │   └── js/
│   │       └── main.js
│   ├── content/
│   │   └── index.md
│   └── index.hbs
└── _site/ (generated output)
```

## NPM Scripts to be added
- `dev`: Run development server with live reload
- `build`: Build for production
- `clean`: Clean build directory

## Notes
- All dependencies will use latest stable versions
- Development server will include Tailwind JIT compilation
- Production build will optimize CSS and assets
- No TypeScript configuration needed (pure JavaScript)