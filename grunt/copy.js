/**
 * Created by neox-ltd on 22/02/2016.
 */
module.exports = {
  styles: {
    expand: true,
    dest: '.tmp/styles/',
    src: '<%= appBase %>/modules/**/*.css'
  },
  prod: {
    files: [{
      expand: true,
      dot: true,
      cwd: '<%= appBase %>',
      dest: 'dist',
      src: [
        '*.{ico,png,txt}',
        '*.html',
        'images/{,*/}*.{webp}',
        'styles/fonts/{,*/}*.*'
      ]
    }/* Copy image, we have none, {
      expand: true,
      cwd: '.tmp/images',
      dest: 'dist/images',
      src: ['generated/!*']
    }*/]
  }
};
