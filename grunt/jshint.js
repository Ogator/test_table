/**
 * Created by neox-ltd on 22/02/2016.
 */
module.exports = {
  options: {
    reporter: require('jshint-stylish')
  },
  dev: ['Gruntfile.js',
    'app/*.js',
    'app/directives/**/*.js',
    'app/filters/**/*.js',
    'app/modules/**/**/*.js',
    'app/services/*.js']
};
