/**
 * Created by neox-ltd on 23/02/2016.
 */
module.exports = {
  prod: {
    options: {
      algorithm: 'sha512',
      length: 16
    },
    src: [
      'dist/scripts/{,*/}*.js',
      'dist/styles/{,*/}*.css',
      'dist/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
      'dist/styles/fonts/*'
    ]
  }
};
