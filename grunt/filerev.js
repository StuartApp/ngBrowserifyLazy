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
                '<%= dev_dir %>/app/**/*.js',
                '<%= dev_dir %>/vendor/**/*.js',
                '<%= dev_dir %>/assets/**/*.{jpg,jpeg,gif,png,ico,css}'
            ]
        }]
    }
};