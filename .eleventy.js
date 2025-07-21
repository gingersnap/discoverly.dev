const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const handlebarsPlugin = require("@11ty/eleventy-plugin-handlebars");
const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');

module.exports = function(eleventyConfig) {
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
  eleventyConfig.addWatchTarget("tailwind.config.js");

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
    markdownTemplateEngine: "hbs",
    htmlTemplateEngine: "hbs"
  };
};