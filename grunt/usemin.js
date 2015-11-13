module.exports =  {
    html: ['<%= environment_folder %>/*.html'],
    css: ['<%= environment_folder %>/assets/**/*.css'],
    js: ['<%= environment_folder %>/**/*.js'],
    options: {
        dirs: ['<%= environment_folder %>'],
        assetsDirs: ['<%= environment_folder %>'],
        patterns: {
            js: [
                [/["']([^:"']+\.(?:png|gif|jpe?g|js|css))["']/img, 'Image replacement in js files']
            ]
        }
    }
};
