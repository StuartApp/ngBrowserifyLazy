// Copies remaining files to places other tasks can use
module.exports = {
    build: {
        files: [{
            expand: true,
            dot: true,
            cwd: '<%= app_dir %>',
            dest: '.tmp/modules',
            src: [
                //'*.{ico,png,txt}',
                //'app/module1/*.tpl.html',
                //'app/module11/*.tpl.html',
                //'app/module2/*.tpl.html',

                'app/module1/*.js',
                'app/module11/*.js',
                'app/module2/*.js',
                '!app/**/*spec.js'
                //'images/*',
                //'fonts/*',

                //'<%= vendor_files.js %>'
            ]
        }]
    },
    fonts: {
      files: [{
        expand: true,
        cwd: '<%= app_dir %>/assets',
        src: 'fonts/*',
        dest: '<%= dev_dir %>/assets'
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
    },
    styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles/',
        dest: '<%= yeoman.dist %>/styles/',
        src: '*.css'
    }
};
