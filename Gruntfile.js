/* Gruntfile for house-client application
* Created by Oleg Mironenko
* */

//wrapper function
module.exports = function(grunt) {
  //Grunt configuration
  var serveStatic = require('serve-static');

  require('load-grunt-tasks')(grunt, {
    pattern: 'grunt-contrib-*',
    config: './package.json'
  });
  require('load-grunt-config')(grunt, {
    init: true,
    data: {
      pkg: grunt.file.readJSON('package.json'),
      bowerJson: grunt.file.readJSON('bower.json'),
      appBase: 'app',
      serveStatic: require('serve-static')
    }
  });
};
