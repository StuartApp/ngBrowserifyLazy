module.exports = {
    dev: {
        bsFiles: {
            src: [
                '<%= dev_dir %>/**/*.js',
                '<%= dev_dir %>/assets/**/*.css',
                '<%= dev_dir %>/index.html'
            ]
        },
        options: {
            // Stop the browser from automatically opening
            //open: false,
            startPath: "/#/", // local version
            watchTask: true,
            server: {
                baseDir: "<%= dev_dir %>"
            }
        }
    }
};
