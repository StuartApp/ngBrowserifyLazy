module.exports = {
  app: {
    options: {
      base: 'src'
    },
    src: ['<%= app_dir %>/app/*.html'],
    dest: '.tmp/templates-app.js'
  },
  module1: {
    options: {
      base: 'src'
    },
    src: ['<%= app_dir %>/app/module1/**/*.html'],
    dest: '.tmp/templates-module1.js'
  },

  module2: {
    options: {
      base: 'src'
    },
    src: ['<%= app_dir %>/app/module2/**/*.html'],
    dest: '.tmp/templates-module2.js'
  }
};
