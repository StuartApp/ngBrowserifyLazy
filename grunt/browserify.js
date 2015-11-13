
var moduleFiles = {
  '<%= environment_folder %>/app/main.js': ['<%= app_dir %>/app/app.js', '.tmp/templates-app.js'],
  '<%= environment_folder %>/app/modules/auth.js': ['<%= app_dir %>/app/auth/index.js', '.tmp/templates-auth.js'],
  '<%= environment_folder %>/app/modules/backoffice/main.js': ['<%= app_dir %>/app/backoffice/main/index.js', '.tmp/templates-backoffice-main.js'],
  '<%= environment_folder %>/app/modules/backoffice/kpis.js': ['<%= app_dir %>/app/backoffice/kpis/index.js', '.tmp/templates-backoffice-kpis.js'],
  '<%= environment_folder %>/app/modules/backoffice/god-view.js': ['<%= app_dir %>/app/backoffice/god-view/index.js', '.tmp/templates-backoffice-god-view.js']
};

module.exports = {
    // write all built files to the dist directory
    lib: {
        files : {
            '<%= yeoman.dist %>/scripts/vendor.js': [

            ]
        }
    },

    dev: {
        files: moduleFiles,
        options: {
            external: ['angular'],
            browserifyOptions: {
                debug: true
            }
        }
    },
    prod: {
        files: moduleFiles,
        options: {
            external: ['angular'],
            browserifyOptions: {
                debug: false
            }
        }
    }
};
