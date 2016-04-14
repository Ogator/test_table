/**
 * Created by neox-ltd on 22/02/2016.
 */
module.exports = {
  options: {
    processors: [
      require('autoprefixer-core')({browsers: ['last 1 version']})
    ]
  },
  serve: {
    options: {
      map: true
    },
    files: [{
      expand: true,
      cwd: '.tmp/styles/',
      src: '{,*/}*.css',
      dest: '.tmp/styles/'
    }]
  },
  prod: {
    files: [{
      expand: true,
      cwd: '.tmp/styles/',
      src: '{,*/}*.css',
      dest: '.tmp/styles/'
    }]
  }
};
