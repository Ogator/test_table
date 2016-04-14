/**
 * Created by neox-ltd on 23/02/2016.
 */
module.exports = {
  prod: {
    options: {
      collapseWhitespace: true,
      conservativeCollapse: true,
      collapseBooleanAttributes: true,
      removeCommentsFromCDATA: true
    },
    files: [{
      expand: true,
      cwd: 'dist',
      src: ['*.html'],
      dest: 'dist'
    }]
  }
};
