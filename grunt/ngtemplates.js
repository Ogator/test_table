/**
 * Created by neox-ltd on 23/02/2016.
 */
module.exports = {
  app: {
    options: {
      htmlmin: {
        collapseBooleanAttributes:      true,
        collapseWhitespace:             true,
        removeAttributeQuotes:          true,
        removeComments:                 true, // Only if you don't use comment directives!
        removeEmptyAttributes:          true,
        removeRedundantAttributes:      true,
        removeScriptTypeAttributes:     true,
        removeStyleLinkTypeAttributes:  true
      },
      usemin: 'scripts/scripts.js'
    },
    cwd: '<%= appBase %>',
    src: ['modules/**/**/*.html', 'directives/**/*.html'],
    dest: '.tmp/templateCache.js'
  }
};
