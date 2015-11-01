module.exports = {
    //options: {
    //    curly: true,
    //    immed: true,
    //    newcap: true,
    //    noarg: true,
    //    sub: true,
    //    boss: true,
    //    eqnull: true
    //},
    options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
    },
    all: {
        src: [
            'Gruntfile.js',
            '<%= app_dir %>/**/*.js'
        ]
    },
    test: {
        //options: {
        //    jshintrc: '<%= yeoman.dist %>/test/.jshintrc'
        //},
        src: ['test/**/{,*/}*.js']
    }
};