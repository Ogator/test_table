/**
 * Created by neox-ltd on 22/02/2016.
 */
module.exports = {

  main: {
    dependencies: true,
    devDependencies: false,
    includeSelf: false,
    bowerJson: '<%= bowerJson %>',
    src:['app/index.html'],
    ignorePath:  /\.\.\//,
    fileTypes:{
      js: {
        block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
        detect: {
          js: /'(.*\.js)'/gi
        },
        replace: {
          js: '\'{{filePath}}\','
        }
      }
    }
  }
};
