/**
 * Created by neox-ltd on 23/02/2016.
 */
module.exports = {
  html: ['dist/{,*/}*.html'],
  css: ['dist/styles/{,*/}*.css'],
  js: ['dist/scripts/{,*/}*.js'],
  options: {
    assetsDirs: [
      'dist',
      'icons'
    ],
    patterns: {
      js: [[/(icons\/[^''""]*\.(png|jpg|jpeg|gif|webp|svg))/g, 'Replacing references to images']]
    }
  }
};
