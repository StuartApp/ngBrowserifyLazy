/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
  /**
   * The `build_dir` folder is where our projects are compiled during
   * development and the `compile_dir` folder is where our app resides once it's
   * completely built.
   */
  meta: {
    banner: 'Stuart'
  },
  dev_dir: 'development',
  prod_dir: 'production',
  css_dir: 'sass',
  sass_overrides_dir: 'src/sass/bootstrap_overrides',
  app_dir: 'src',

  module_files: {
    module1: [ 'src/app/module1/**/*.js', '!src/app/module1/*spec.js'],
    module2: [ 'src/app/module2/**/*.js', '!src/app/module2/*spec.js']
  },

  module_tpls: {
    module1: [ 'src/app/module1/**/*.tpl.html'],
    module2: [ 'src/app/module2/**/*.tpl.html']
  },

  app_files: {
    js: [ 'src/**/*.js', '!src/**/*spec.js', '!src/assets/**/*.js' ],
    jsunit: [ 'src/**/*.spec.js' ],
    atpl: [ 'src/app/**/*.tpl.html' ],
    ctpl: [ 'src/common/**/*.tpl.html' ],
    html: [ 'src/**/*.html' ],
    sass: 'src/css/main.scss',
    main: {
      sass: 'src/app/*.scss',
      js: 'src/app/*.js'
    },
    module1: {
      sass: 'src/app/module1/**/*.scss',
      js: 'src/app/module1/**/*.js'
    },
    module2: {
      sass: 'src/app/module2/**/*.scss',
      js: 'src/app/module2/**/*.js'
    }
  },

  /**
   * This is a collection of files used during testing only.
   */
  test_files: {
    js: [
      'vendor/angular-mocks/angular-mocks.js'
    ]
  },

  vendor_files: {
    js: [
      'vendor/angular/angular.min.js',
      'vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'vendor/angular-ui-router/release/angular-ui-router.min.js',
      'vendor/ui-router-extras/release/ct-ui-router-extras.min.js',
      'vendor/oclazyload/dist/ocLazyLoad.min.js'
    ],
    css: [
    ],
    assets: [
    ],
    sass: [
      'vendor/bootstrap-sass-official/assets/stylesheet/bootstrap/'
    ]
  }
};
