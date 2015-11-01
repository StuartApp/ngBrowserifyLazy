module.exports = {
    dev: {
        options: {},
        files: {
            '<%= dev_dir %>/app/main.js.map': ['<%= dev_dir %>/app/main.js'],
            '<%= dev_dir %>/app/modules/module1.js.map': ['<%= dev_dir %>/app/modules/module1.js']
            //'<%= yeoman.dist %>/scripts/apples.js.map': ['<%= yeoman.dist %>/scripts/apples.js'],
            //'<%= yeoman.dist %>/scripts/peras.js.map': ['<%= yeoman.dist %>/scripts/peras.js'],
            //'<%= yeoman.dist %>/scripts/peras/semilla/semilla.js.map': ['<%= yeoman.dist %>/scripts/peras/semilla/semilla.js']
        }
    }
};
