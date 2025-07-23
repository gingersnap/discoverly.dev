import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import handlebarsPlugin from "@11ty/eleventy-plugin-handlebars";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import handlebars from 'handlebars';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default function(eleventyConfig) {
  // Register partials from subdirectories manually
  const partialsDir = path.join(__dirname, 'src/_includes/partials');
  
  if (fs.existsSync(partialsDir)) {
    fs.readdirSync(partialsDir).forEach(filename => {
      if (filename.endsWith('.hbs')) {
        const name = 'partials/' + path.parse(filename).name;
        const template = fs.readFileSync(
          path.join(partialsDir, filename), 
          'utf-8'
        );
        handlebars.registerPartial(name, template);
      }
    });
  }

  // Register Handlebars helper for Lucide icons
  handlebars.registerHelper("lucide", function(iconName, size, options) {
    // If size is not a number, it's the options object
    if (typeof size !== 'number') {
      options = size;
      size = 24;
    }
    
    const className = options?.hash?.class || '';
    
    return new handlebars.SafeString(
      `<i data-lucide="${iconName}" width="${size}" height="${size}"${className ? ` class="${className}"` : ''}></i>`
    );
  });

  // Register Handlebars helper for illustrations
  handlebars.registerHelper("illustration", function(type, options) {
    const className = options.hash.class || '';
    const width = options.hash.width || '100%';
    const height = options.hash.height || 'auto';
    
    // Create inline SVG illustrations based on type
    let svgContent = '';
    
    switch(type) {
      case 'mind-map':
        svgContent = `<svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="150" r="30" fill="#fb923c" opacity="0.2"/>
          <circle cx="200" cy="150" r="20" fill="#fb923c"/>
          <circle cx="100" cy="80" r="20" fill="#14b8a6" opacity="0.8"/>
          <circle cx="300" cy="80" r="20" fill="#14b8a6" opacity="0.8"/>
          <circle cx="100" cy="220" r="20" fill="#14b8a6" opacity="0.8"/>
          <circle cx="300" cy="220" r="20" fill="#14b8a6" opacity="0.8"/>
          <line x1="200" y1="150" x2="100" y2="80" stroke="#fb923c" stroke-width="2" opacity="0.5"/>
          <line x1="200" y1="150" x2="300" y2="80" stroke="#fb923c" stroke-width="2" opacity="0.5"/>
          <line x1="200" y1="150" x2="100" y2="220" stroke="#fb923c" stroke-width="2" opacity="0.5"/>
          <line x1="200" y1="150" x2="300" y2="220" stroke="#fb923c" stroke-width="2" opacity="0.5"/>
          <circle cx="50" cy="50" r="15" fill="#22c55e" opacity="0.6"/>
          <circle cx="350" cy="50" r="15" fill="#22c55e" opacity="0.6"/>
          <circle cx="50" cy="250" r="15" fill="#22c55e" opacity="0.6"/>
          <circle cx="350" cy="250" r="15" fill="#22c55e" opacity="0.6"/>
          <line x1="100" y1="80" x2="50" y2="50" stroke="#14b8a6" stroke-width="1" opacity="0.3"/>
          <line x1="300" y1="80" x2="350" y2="50" stroke="#14b8a6" stroke-width="1" opacity="0.3"/>
          <line x1="100" y1="220" x2="50" y2="250" stroke="#14b8a6" stroke-width="1" opacity="0.3"/>
          <line x1="300" y1="220" x2="350" y2="250" stroke="#14b8a6" stroke-width="1" opacity="0.3"/>
        </svg>`;
        break;
        
      case 'visual-data':
        svgContent = `<svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="50" y="180" width="40" height="70" fill="#fb923c" opacity="0.8" rx="4"/>
          <rect x="120" y="150" width="40" height="100" fill="#14b8a6" opacity="0.8" rx="4"/>
          <rect x="190" y="120" width="40" height="130" fill="#fb923c" opacity="0.8" rx="4"/>
          <rect x="260" y="100" width="40" height="150" fill="#14b8a6" opacity="0.8" rx="4"/>
          <rect x="330" y="80" width="40" height="170" fill="#22c55e" opacity="0.8" rx="4"/>
          <path d="M 70 180 Q 140 150 210 120 T 280 100 Q 350 80 350 80" stroke="#fb923c" stroke-width="3" fill="none" opacity="0.6"/>
          <circle cx="70" cy="180" r="5" fill="#fb923c"/>
          <circle cx="140" cy="150" r="5" fill="#14b8a6"/>
          <circle cx="210" cy="120" r="5" fill="#fb923c"/>
          <circle cx="280" cy="100" r="5" fill="#14b8a6"/>
          <circle cx="350" cy="80" r="5" fill="#22c55e"/>
        </svg>`;
        break;
        
      case 'connected':
        svgContent = `<svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="50" r="25" fill="#fb923c"/>
          <circle cx="120" cy="150" r="20" fill="#14b8a6"/>
          <circle cx="200" cy="150" r="20" fill="#14b8a6"/>
          <circle cx="280" cy="150" r="20" fill="#14b8a6"/>
          <circle cx="80" cy="250" r="15" fill="#22c55e" opacity="0.8"/>
          <circle cx="160" cy="250" r="15" fill="#22c55e" opacity="0.8"/>
          <circle cx="240" cy="250" r="15" fill="#22c55e" opacity="0.8"/>
          <circle cx="320" cy="250" r="15" fill="#22c55e" opacity="0.8"/>
          <line x1="200" y1="75" x2="120" y2="130" stroke="#fb923c" stroke-width="2"/>
          <line x1="200" y1="75" x2="200" y2="130" stroke="#fb923c" stroke-width="2"/>
          <line x1="200" y1="75" x2="280" y2="130" stroke="#fb923c" stroke-width="2"/>
          <line x1="120" y1="170" x2="80" y2="235" stroke="#14b8a6" stroke-width="1.5"/>
          <line x1="120" y1="170" x2="160" y2="235" stroke="#14b8a6" stroke-width="1.5"/>
          <line x1="280" y1="170" x2="240" y2="235" stroke="#14b8a6" stroke-width="1.5"/>
          <line x1="280" y1="170" x2="320" y2="235" stroke="#14b8a6" stroke-width="1.5"/>
        </svg>`;
        break;
        
      case 'process':
        svgContent = `<svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="100" r="30" fill="#fb923c" opacity="0.2"/>
          <circle cx="80" cy="100" r="20" fill="#fb923c"/>
          <text x="80" y="105" text-anchor="middle" fill="white" font-size="16" font-weight="bold">1</text>
          <circle cx="200" cy="100" r="30" fill="#14b8a6" opacity="0.2"/>
          <circle cx="200" cy="100" r="20" fill="#14b8a6"/>
          <text x="200" y="105" text-anchor="middle" fill="white" font-size="16" font-weight="bold">2</text>
          <circle cx="320" cy="100" r="30" fill="#22c55e" opacity="0.2"/>
          <circle cx="320" cy="100" r="20" fill="#22c55e"/>
          <text x="320" y="105" text-anchor="middle" fill="white" font-size="16" font-weight="bold">3</text>
          <path d="M 110 100 L 170 100" stroke="#666" stroke-width="2" marker-end="url(#arrowhead)"/>
          <path d="M 230 100 L 290 100" stroke="#666" stroke-width="2" marker-end="url(#arrowhead)"/>
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#666"/>
            </marker>
          </defs>
        </svg>`;
        break;
        
      case 'comparison':
        svgContent = `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
          <!-- Comparison scales -->
          <g transform="translate(300,200)">
            <!-- Balance beam -->
            <rect x="-200" y="-5" width="400" height="10" fill="#e5e7eb"/>
            <polygon points="-10,0 10,0 0,20" fill="#6b7280"/>
            
            <!-- Left side (heavy) -->
            <g transform="translate(-150,20)">
              <rect x="-60" y="0" width="120" height="80" fill="#fee2e2" rx="8"/>
              <rect x="-40" y="20" width="80" height="8" fill="#ef4444" rx="4"/>
              <rect x="-40" y="35" width="80" height="8" fill="#ef4444" rx="4"/>
              <rect x="-40" y="50" width="80" height="8" fill="#ef4444" rx="4"/>
            </g>
            
            <!-- Right side (light) -->
            <g transform="translate(150,-40)">
              <rect x="-40" y="0" width="80" height="60" fill="#fed7aa" rx="8"/>
              <circle cx="0" cy="30" r="20" fill="#fb923c"/>
              <path d="M -10,30 L -5,25 L 5,35" stroke="white" stroke-width="3" fill="none" stroke-linecap="round"/>
            </g>
          </g>
        </svg>`;
        break;
      
      case 'coffee-chat':
        svgContent = `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <!-- Coffee cup and chat bubbles -->
          <g transform="translate(200,150)">
            <!-- Coffee cup -->
            <path d="M -60,0 L -50,60 L 50,60 L 60,0 Z" fill="#fed7aa" stroke="#fb923c" stroke-width="3"/>
            <ellipse cx="0" cy="0" rx="60" ry="15" fill="#fb923c"/>
            <ellipse cx="0" cy="60" rx="50" ry="12" fill="#ea580c"/>
            
            <!-- Handle -->
            <path d="M 60,20 C 80,20 90,30 90,45 C 90,60 80,70 60,70" fill="none" stroke="#fb923c" stroke-width="3"/>
            
            <!-- Steam -->
            <path d="M -20,-20 Q -15,-40 -20,-60" fill="none" stroke="#d4d4d8" stroke-width="2" opacity="0.7">
              <animate attributeName="d" values="M -20,-20 Q -15,-40 -20,-60; M -20,-20 Q -25,-40 -20,-60; M -20,-20 Q -15,-40 -20,-60" dur="3s" repeatCount="indefinite"/>
            </path>
            <path d="M 0,-20 Q 5,-40 0,-60" fill="none" stroke="#d4d4d8" stroke-width="2" opacity="0.7">
              <animate attributeName="d" values="M 0,-20 Q 5,-40 0,-60; M 0,-20 Q -5,-40 0,-60; M 0,-20 Q 5,-40 0,-60" dur="3s" repeatCount="indefinite"/>
            </path>
            <path d="M 20,-20 Q 25,-40 20,-60" fill="none" stroke="#d4d4d8" stroke-width="2" opacity="0.7">
              <animate attributeName="d" values="M 20,-20 Q 25,-40 20,-60; M 20,-20 Q 15,-40 20,-60; M 20,-20 Q 25,-40 20,-60" dur="3s" repeatCount="indefinite"/>
            </path>
            
            <!-- Chat bubbles -->
            <g transform="translate(-100,-80)">
              <rect x="-30" y="-20" width="60" height="40" rx="20" fill="#dbeafe"/>
              <circle cx="0" cy="30" r="5" fill="#dbeafe"/>
              <circle cx="-10" cy="35" r="3" fill="#dbeafe"/>
              <text x="0" y="5" text-anchor="middle" font-family="sans-serif" font-size="24" fill="#3b82f6">💡</text>
            </g>
            
            <g transform="translate(100,-100)">
              <rect x="-30" y="-20" width="60" height="40" rx="20" fill="#dcfce7"/>
              <circle cx="0" cy="30" r="5" fill="#dcfce7"/>
              <circle cx="10" cy="35" r="3" fill="#dcfce7"/>
              <text x="0" y="5" text-anchor="middle" font-family="sans-serif" font-size="24" fill="#22c55e">✨</text>
            </g>
          </g>
        </svg>`;
        break;
      
      case 'rocket-launch':
        svgContent = `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <!-- Rocket launching -->
          <g transform="translate(200,200)">
            <!-- Rocket body -->
            <g transform="rotate(-45)">
              <path d="M 0,-80 C -20,-80 -30,-60 -30,-30 L -30,30 L 30,30 L 30,-30 C 30,-60 20,-80 0,-80 Z" fill="#fb923c"/>
              <path d="M 0,-80 C -10,-80 -15,-70 -15,-55 L -15,-45 L 15,-45 L 15,-55 C 15,-70 10,-80 0,-80 Z" fill="#60a5fa"/>
              
              <!-- Fins -->
              <path d="M -30,10 L -50,30 L -50,10 L -30,0 Z" fill="#dc2626"/>
              <path d="M 30,10 L 50,30 L 50,10 L 30,0 Z" fill="#dc2626"/>
              
              <!-- Window -->
              <circle cx="0" cy="-30" r="12" fill="#1e40af" stroke="#60a5fa" stroke-width="2"/>
              
              <!-- Flames -->
              <g transform="translate(0,30)">
                <path d="M -20,0 Q -15,20 -10,40 Q -5,20 0,0" fill="#fbbf24" opacity="0.9">
                  <animate attributeName="d" values="M -20,0 Q -15,20 -10,40 Q -5,20 0,0; M -20,0 Q -15,25 -10,45 Q -5,25 0,0; M -20,0 Q -15,20 -10,40 Q -5,20 0,0" dur="0.5s" repeatCount="indefinite"/>
                </path>
                <path d="M 0,0 Q 5,20 10,40 Q 15,20 20,0" fill="#f59e0b" opacity="0.9">
                  <animate attributeName="d" values="M 0,0 Q 5,20 10,40 Q 15,20 20,0; M 0,0 Q 5,25 10,45 Q 15,25 20,0; M 0,0 Q 5,20 10,40 Q 15,20 20,0" dur="0.5s" repeatCount="indefinite"/>
                </path>
                <path d="M -10,0 Q -5,15 0,30 Q 5,15 10,0" fill="#ef4444" opacity="0.7">
                  <animate attributeName="d" values="M -10,0 Q -5,15 0,30 Q 5,15 10,0; M -10,0 Q -5,20 0,35 Q 5,20 10,0; M -10,0 Q -5,15 0,30 Q 5,15 10,0" dur="0.5s" repeatCount="indefinite"/>
                </path>
              </g>
            </g>
            
            <!-- Stars -->
            <circle cx="-120" cy="-100" r="2" fill="#fbbf24">
              <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="100" cy="-120" r="2" fill="#fbbf24">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="-80" cy="80" r="2" fill="#fbbf24">
              <animate attributeName="opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="120" cy="60" r="2" fill="#fbbf24">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite"/>
            </circle>
          </g>
        </svg>`;
        break;
      
      case 'happy-working':
        svgContent = `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <!-- Person happily working at desk -->
          <g transform="translate(200,150)">
            <!-- Desk -->
            <rect x="-100" y="50" width="200" height="10" fill="#92400e" rx="2"/>
            <rect x="-90" y="60" width="15" height="40" fill="#78350f"/>
            <rect x="75" y="60" width="15" height="40" fill="#78350f"/>
            
            <!-- Computer -->
            <rect x="-50" y="10" width="100" height="60" fill="#1e293b" rx="4"/>
            <rect x="-45" y="15" width="90" height="45" fill="#60a5fa" rx="2"/>
            <rect x="-20" y="70" width="40" height="5" fill="#475569"/>
            <rect x="-30" y="75" width="60" height="15" fill="#64748b" rx="2"/>
            
            <!-- Person -->
            <g transform="translate(0,-50)">
              <!-- Body -->
              <path d="M -30,50 C -30,30 -20,20 0,20 C 20,20 30,30 30,50 L 30,80 L -30,80 Z" fill="#fb923c"/>
              
              <!-- Arms -->
              <ellipse cx="-35" cy="50" rx="8" ry="25" fill="#fed7aa" transform="rotate(-20 -35 50)"/>
              <ellipse cx="35" cy="50" rx="8" ry="25" fill="#fed7aa" transform="rotate(20 35 50)"/>
              
              <!-- Head -->
              <circle cx="0" cy="0" r="25" fill="#fed7aa"/>
              
              <!-- Hair -->
              <path d="M -25,-10 C -25,-20 -20,-25 0,-25 C 20,-25 25,-20 25,-10 C 25,-5 20,0 15,0 L -15,0 C -20,0 -25,-5 -25,-10 Z" fill="#78350f"/>
              
              <!-- Face -->
              <circle cx="-8" cy="0" r="2" fill="#1e293b"/>
              <circle cx="8" cy="0" r="2" fill="#1e293b"/>
              <path d="M -10,10 Q 0,15 10,10" fill="none" stroke="#1e293b" stroke-width="2" stroke-linecap="round"/>
            </g>
            
            <!-- Happy particles -->
            <text x="-80" y="-80" font-family="sans-serif" font-size="20" fill="#fbbf24">✨</text>
            <text x="70" y="-70" font-family="sans-serif" font-size="20" fill="#10b981">💡</text>
            <text x="-60" y="-20" font-family="sans-serif" font-size="16" fill="#f59e0b">⭐</text>
            <text x="60" y="-30" font-family="sans-serif" font-size="16" fill="#3b82f6">🎯</text>
          </g>
        </svg>`;
        break;
        
      case 'testimonial':
        svgContent = `<svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="150" r="60" fill="#fef3c7" opacity="0.5"/>
          <circle cx="200" cy="150" r="40" fill="#fbbf24"/>
          <path d="M 180 140 Q 180 160 190 160 Q 190 150 185 140 Z" fill="#fff"/>
          <path d="M 210 140 Q 210 160 220 160 Q 220 150 215 140 Z" fill="#fff"/>
          <circle cx="80" cy="80" r="30" fill="#14b8a6" opacity="0.3"/>
          <circle cx="320" cy="80" r="30" fill="#14b8a6" opacity="0.3"/>
          <circle cx="80" cy="220" r="30" fill="#14b8a6" opacity="0.3"/>
          <circle cx="320" cy="220" r="30" fill="#14b8a6" opacity="0.3"/>
          <path d="M 110 80 L 170 120" stroke="#14b8a6" stroke-width="1" opacity="0.5"/>
          <path d="M 290 80 L 230 120" stroke="#14b8a6" stroke-width="1" opacity="0.5"/>
          <path d="M 110 220 L 170 180" stroke="#14b8a6" stroke-width="1" opacity="0.5"/>
          <path d="M 290 220 L 230 180" stroke="#14b8a6" stroke-width="1" opacity="0.5"/>
        </svg>`;
        break;
        
      case 'blog':
        svgContent = `<svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="50" y="50" width="200" height="200" fill="#fff" stroke="#e5e7eb" stroke-width="2" rx="8"/>
          <rect x="70" y="70" width="160" height="20" fill="#fb923c" opacity="0.8" rx="4"/>
          <rect x="70" y="110" width="120" height="8" fill="#e5e7eb" rx="2"/>
          <rect x="70" y="130" width="140" height="8" fill="#e5e7eb" rx="2"/>
          <rect x="70" y="150" width="100" height="8" fill="#e5e7eb" rx="2"/>
          <rect x="70" y="180" width="160" height="40" fill="#14b8a6" opacity="0.2" rx="4"/>
          <circle cx="230" cy="250" r="20" fill="#22c55e"/>
          <path d="M 223 250 L 228 255 L 237 245" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
        break;
        
      case 'knowledge':
        svgContent = `<svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="100" y="100" width="200" height="120" fill="#fb923c" opacity="0.2" rx="8"/>
          <rect x="120" y="80" width="160" height="120" fill="#fff" stroke="#fb923c" stroke-width="2" rx="8"/>
          <line x1="140" y1="110" x2="260" y2="110" stroke="#fb923c" stroke-width="2"/>
          <line x1="140" y1="130" x2="240" y2="130" stroke="#e5e7eb" stroke-width="2"/>
          <line x1="140" y1="150" x2="250" y2="150" stroke="#e5e7eb" stroke-width="2"/>
          <line x1="140" y1="170" x2="230" y2="170" stroke="#e5e7eb" stroke-width="2"/>
          <circle cx="200" cy="50" r="20" fill="#14b8a6"/>
          <path d="M 190 50 Q 200 40 210 50" stroke="white" stroke-width="2" fill="none"/>
          <circle cx="200" cy="53" r="2" fill="white"/>
          <path d="M 50 150 Q 80 140 100 150" stroke="#22c55e" stroke-width="3" fill="none" opacity="0.5"/>
          <path d="M 300 150 Q 320 140 350 150" stroke="#22c55e" stroke-width="3" fill="none" opacity="0.5"/>
        </svg>`;
        break;
        
      default:
        // Generic illustration
        svgContent = `<svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="100" y="100" width="200" height="100" fill="#fb923c" opacity="0.2" rx="8"/>
          <circle cx="150" cy="150" r="20" fill="#14b8a6"/>
          <circle cx="250" cy="150" r="20" fill="#22c55e"/>
          <line x1="170" y1="150" x2="230" y2="150" stroke="#666" stroke-width="2"/>
        </svg>`;
    }
    
    return new handlebars.SafeString(
      `<div class="${className}" style="width: ${width}; height: ${height};">${svgContent}</div>`
    );
  });

  // Add Handlebars plugin with custom instance
  eleventyConfig.addPlugin(handlebarsPlugin, {
    eleventyLibraryOverride: handlebars
  });

  // Add HTML base plugin
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets/images");
  
  // Watch CSS files for changes
  eleventyConfig.addWatchTarget("src/assets/css/");

  // Set template formats
  eleventyConfig.setTemplateFormats(["html", "md", "hbs", "njk"]);

  // Return configuration
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: false,  // Process markdown as pure markdown
    htmlTemplateEngine: "hbs"      // Keep Handlebars for HTML/HBS files
  };
}