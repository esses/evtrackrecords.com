module.exports = function(eleventyConfig) {
  eleventyConfig.addNunjucksGlobal("year", "2022");
  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
}
