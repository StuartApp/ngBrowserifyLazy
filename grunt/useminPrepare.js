module.exports = {
    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    html: 'index.html',
    options: {
        dest: '<%= environment_folder %>'
        //flow: {
        //    html: {
        //        steps: {
        //            js: ['html2js']
        //            //css: ['cssmin']
        //        },
        //        post: {}
        //    }
        //}
    }
};
