// Copies remaining files to places other tasks can use
module.exports = {
  build: {
    files: [{
      expand: true,
      dot: true,
      cwd: '<%= app_dir %>',
      dest: '.tmp/modules',
      src: [
        'app/auth/**/*.js',
        'app/backoffice/**/*.js'
      ]
    }]
  },
  fonts: {
    files: [{
      expand: true,
      cwd: '<%= app_dir %>/assets',
      src: 'fonts/*',
      dest: '<%= environment_folder %>/assets'
    }]
  },
  index: {
    files: [{
      expand: true,
      cwd: '<%= app_dir %>',
      src: '*.html',
      dest: '<%= environment_folder %>'
    }]
  },
  vendors: {
    files: [{
      expand: true,
      dot: true,
      cwd: '.',
      dest: '.tmp/',
      src: [
        '<%= vendor_files.js %>'
      ]
    }]
  }
};
