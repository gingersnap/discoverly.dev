const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  // Add HTML base plugin
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets/images");
  
  // Watch CSS files for changes
  eleventyConfig.addWatchTarget("src/assets/css/");
  eleventyConfig.addWatchTarget("tailwind.config.js");

  // Set Handlebars as the template engine for .hbs files
  eleventyConfig.setTemplateFormats(["hbs", "md", "njk", "html"]);

  // Handlebars options
  eleventyConfig.setLibrary("hbs", {
    partials: "src/_includes/partials",
    layouts: "src/_includes/layouts"
  });

  // Add shortcode for Lucide icons
  eleventyConfig.addShortcode("lucide", function(iconName, options = {}) {
    const { size = 24, color = "currentColor", strokeWidth = 2, ...attrs } = options;
    const attributes = Object.entries(attrs)
      .map(([key, value]) => `${key}="${value}"`)
      .join(" ");
    
    return `<i data-lucide="${iconName}" 
      width="${size}" 
      height="${size}" 
      stroke="${color}" 
      stroke-width="${strokeWidth}"
      ${attributes}></i>`;
  });

  // Return configuration
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "hbs",
    htmlTemplateEngine: "hbs",
    dataTemplateEngine: "hbs"
  };
};