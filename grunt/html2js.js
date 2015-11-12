module.exports = {
  app: {
    options: {
      base: 'src'
    },
    src: ['<%= app_dir %>/app/*.html'],
    dest: '.tmp/templates-app.js'
  },

  auth: {
    options: {
      base: 'src'
    },
    src: ['<%= app_dir %>/app/auth/*.html'],
    dest: '.tmp/templates-auth.js'
  },
  login: {
    options: {
      base: 'src'
    },
    src: ['<%= app_dir %>/app/auth/login/*.html'],
    dest: '.tmp/templates-login.js'
  },

};
