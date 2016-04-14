/**
 * Created by neox-ltd on 22/02/2016.
 */
module.exports = {
  options: {
    full: true,
    plugins: [
      {cleanupIDs: false},                  // don't remove  ids
      {removeViewBox: false},               // don't remove the viewbox atribute from the SVG
      {removeUselessStrokeAndFill: false},  // don't remove Useless Strokes and Fills
      {removeEmptyAttrs: false}             // don't remove Empty Attributes from the SVG
    ]
  },
  dist: {
    files: [{
      expand: true,
      cwd: '<%= appBase %>/icons',
      src: '{,*/}*.svg',
      dest: 'dist/icons'
    }]
  }
};
