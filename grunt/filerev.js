module.exports = {
    //dist: {
    //    src: [
    //        '<%= dev_dir %>/app/**/*.js',
    //        '<%= dev_dir %>/assets/**/*.css'
    //    ]
    //}
    source: {
        files: [{
            src: [
                '<%= environment_folder %>/app/**/*.js',
                '<%= environment_folder %>/vendor/**/*.js',
                '<%= environment_folder %>/assets/**/*.{jpg,jpeg,gif,png,ico,css}'
            ]
        }]
    }
};
