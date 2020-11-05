const util = require('util');

module.exports = function (eleventyConfig) {

  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addFilter('dump', obj => util.inspect(obj));

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