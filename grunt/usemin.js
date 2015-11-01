module.exports =  {
    html: ['<%= dev_dir %>/*.html'],
    css: ['<%= dev_dir %>/assets/**/*.css'],
    js: ['<%= dev_dir %>/**/*.js'],
    options: {
        dirs: ['<%= dev_dir %>'],
        assetsDirs: ['<%= dev_dir %>'],
        patterns: {
            js: [
                [/["']([^:"']+\.(?:png|gif|jpe?g|js|css))["']/img, 'Image replacement in js files']
            ]
        }
    }
};