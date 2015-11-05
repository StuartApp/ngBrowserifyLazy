module.exports = {
  unit: {
    dir: '<%= dev_dir %>',
      src: [
      '<%= vendor_files.js %>',
      '<%= dev_dir %>/**/*.js',
      '<%= test_files.js %>'
    ]
  }
};
