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
    src: ['<%= app_dir %>/app/auth//**/*.html'],
    dest: '.tmp/templates-auth.js'
  },

  'backoffice-main': {
    options: {
      base: 'src'
    },
    src: ['<%= app_dir %>/app/backoffice/main/*.html'],
    dest: '.tmp/templates-backoffice-main.js'
  },

  'backoffice-kpis': {
    options: {
      base: 'src'
    },
    src: ['<%= app_dir %>/app/backoffice/kpis/*.html'],
    dest: '.tmp/templates-backoffice-kpis.js'
  },

  'backoffice-god-view': {
    options: {
      base: 'src'
    },
    src: ['<%= app_dir %>/app/backoffice/god-view/*.html'],
    dest: '.tmp/templates-backoffice-god-view.js'
  }

};
