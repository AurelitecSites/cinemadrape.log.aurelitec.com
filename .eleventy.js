const util = require('util');
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {

  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!--more-->",
  });

  eleventyConfig.addFilter('dump', obj => util.inspect(obj));

  eleventyConfig.addFilter("md", function (content = "") {
    return markdownIt({ html: true }).render(content);
  });

  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'src',
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
      output: '_site'
    }
  };
}