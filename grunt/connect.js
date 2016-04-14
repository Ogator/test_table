/**
 * Created by neox-ltd on 23/02/2016.
 */
module.exports = {
  options: {
    port: 9000,
    // Change this to '0.0.0.0' to access the server from outside.
    hostname: 'localhost',
    livereload: 35729,
    useAvailablePort: true
  },
  livereload: {
    options: {
      open: true,
      middleware: function (connect) {
        return [
          connect.static('.tmp'),
          connect().use(
            '/bower_components',
            connect.static('./bower_components')
          ),
          connect().use(
            '/app/styles',
            connect.static('./app/styles')
          ),
          connect.static('app')
        ];
      }
    }
  }
};
