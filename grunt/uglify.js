module.exports = {
    options: {
        mangle: false
    },
    vendors: {
        files: {
            '<%= dev_dir %>/vendor/vendor.min.js': '.tmp/vendor/vendor.min.js'
        }
    },
    main: {
        options: {
            banner: '/**\n* <%= meta.banner %> Main module \n*/\n'
        },
        files: {
            '<%= dev_dir %>/app/main.js': '<%= dev_dir %>/app/main.js'
        }
    },
    module1: {
        options: {
            banner: '/**\n* <%= meta.banner %> Module1 module \n*/\n'
        },
        files: {
            '<%= dev_dir %>/app/modules/module1.js': '<%= dev_dir %>/app/modules/module1.js'
        }
    }
};