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
  handlebars.registerHelper("lucide", function(iconName, size) {
    size = size || 24;
    return new handlebars.SafeString(
      `<i data-lucide="${iconName}" width="${size}" height="${size}"></i>`
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