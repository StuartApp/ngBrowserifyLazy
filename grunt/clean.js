module.exports = {
    dev: {
        files: [{
            dot: true,
            src: [
                '.tmp',
                '<%= dev_dir %>/**/*',
            ]
        }]
    },
    prod: {
        files: [{
            dot: true,
            src: [
                '<%= prod_dir %>/**/*',
            ]
        }]
    },
    server: '.tmp'
};
