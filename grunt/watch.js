/**
 * Created by neox-ltd on 22/02/2016.
 */
module.exports = {
  bower: {
    files: ['bower.json'],
    tasks: ['wiredep:main']
  },
  js: {
    files: ['<%= appBase %>/*.js',
      '<%= appBase %>/directives/**/*.js',
      '<%= appBase %>/filters/**/*.js',
      '<%= appBase %>/modules/**/**/*.js',
      '<%= appBase %>/services/*.js'],

    options: {
      livereload: '<%= connect.options.livereload %>'
    }
  },
  styles: {
    files: ['<%= appBase %>/modules/**/**/*.css'],
    tasks: ['newer:copy:styles', 'postcss']
  },
  gruntfile: {
    files: ['Gruntfile.js']
  },
  livereload: {
    options: {
      livereload: '<%= connect.options.livereload %>'
    },
    files: [
      '<%= appBase %>/{,*/}*.html',
      '.tmp/styles/{,*/}*.css',
      '<%= appBase %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
      '<%= appBase %>/icons/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
    ]
  }
};
