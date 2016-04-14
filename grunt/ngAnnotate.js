/**
 * Created by neox-ltd on 23/02/2016.
 */
module.exports = {
  prod: {
    files: [{
      expand: true,
      cwd: '.tmp/concat/scripts',
      src: '*.js',
      dest: '.tmp/concat/scripts'
    }]
  }
};
