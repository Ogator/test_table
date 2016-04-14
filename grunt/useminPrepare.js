/**
 * Created by neox-ltd on 22/02/2016.
 */
module.exports = {
  html: '<%= appBase %>/index.html',
  options: {
    dest: 'dist',
    flow: {
      html: {
        steps: {
          js: ['concat', 'uglifyjs'],
          css: ['cssmin']
        },
        post: {}
      }
    }
  }
};
