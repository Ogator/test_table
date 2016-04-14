/**
 * Created by neox-ltd on 27/02/2016.
 */
module.exports = {
  ruextract: {
    src: [ '<%= appBase %>/modules/**/*.html', '<%= appBase %>/directives/**/*.html' ],
    lang:     ['ru'],
    dest:     '.tmp/i18n'
  }
};
