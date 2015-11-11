module.exports = {
    // write all built files to the dist directory
    lib: {
        files : {
            '<%= yeoman.dist %>/scripts/vendor.js': [

            ]
        }
    },

    dev: {
        files: {
            '<%= dev_dir %>/app/main.js': ['<%= app_dir %>/app/app.js', '.tmp/templates-app.js'],
            '<%= dev_dir %>/app/modules/auth.js': ['<%= app_dir %>/app/auth/index.js', '.tmp/templates-auth.js']
        },
        options: {
            external: ['angular'],
            browserifyOptions: {
                debug: true
            }
        }
    },
    prod: {
        files: {
            '<%= prod_dir %>/app/main.js': ['<%= app_dir %>/app/app.js', '.tmp/templates-app.js'],
            '<%= prod_dir %>/app/modules/module1.js': ['<%= app_dir %>/app/module1/index.js', '.tmp/templates-module1.js']
        },
        options: {
            external: ['angular'],
            browserifyOptions: {
                debug: false
            }
        }
    }
};
