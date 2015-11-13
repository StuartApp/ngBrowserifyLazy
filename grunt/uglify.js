module.exports = {
  options: {
    mangle: false
  },
  vendors: {
    files: {
      '<%= environment_folder %>/vendor/vendor.min.js': '.tmp/vendor/vendor.min.js'
    }
  },
  main: {
    options: {
      banner: '/**\n* <%= meta.banner %> Main module \n*/\n'
    },
    files: {
      '<%= environment_folder %>/app/main.js': '<%= environment_folder %>/app/main.js'
    }
  },
  auth: {
    options: {
      banner: '/**\n* <%= meta.banner %> Auth module \n*/\n'
    },
    files: {
      '<%= environment_folder %>/app/modules/auth.js': '<%= environment_folder %>/app/modules/auth.js'
    }
  },
  backoffice: {
    options: {
      banner: '/**\n* <%= meta.banner %> Backoffice module \n*/\n'
    },
    files: {
      '<%= environment_folder %>/app/modules/backoffice/main.js': '<%= environment_folder %>/app/modules/backoffice/main.js'
    }
  },
  "backoffice-kpis": {
    options: {
      banner: '/**\n* <%= meta.banner %> Kpis module \n*/\n'
    },
    files: {
      '<%= environment_folder %>/app/modules/backoffice/kpis.js': '<%= environment_folder %>/app/modules/backoffice/kpis.js'
    }
  },
  "backoffice-god-view": {
    options: {
      banner: '/**\n* <%= meta.banner %> Kpis module \n*/\n'
    },
    files: {
      '<%= environment_folder %>/app/modules/backoffice/god-view.js': '<%= environment_folder %>/app/modules/backoffice/god-view.js'
    }
  }
};
