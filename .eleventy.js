const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {
  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));
  // Nunjucks Lap Time Shortcode.
  eleventyConfig.addNunjucksGlobal("year", "2022");
  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
}
