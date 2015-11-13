module.exports = function (grunt) {
	'use strict';

	var pkg = grunt.file.readJSON('package.json');

	// Load grunt tasks automatically
	require('load-grunt-config')(grunt, {
		'jit-grunt': {
			ngtemplates: 'grunt-angular-templates',
			useminPrepare: 'grunt-usemin'
		},
		data: require('./build.config.js')
	});


	grunt.config.set('pkg', pkg);
  grunt.config.set('environment_folder', 'development');

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	grunt.renameTask('watch', 'delta');

	grunt.registerTask('process-js', [
		//'jsbeautifier',
		'html2js',
		'copy:build',
		'browserify:dev'
	]);



	grunt.registerTask('test', [
		'karma:unit',
		'protractor_webdriver:all',
		'protractor:chrome'
	]);

  grunt.registerTask('prodEnv', function() {
    grunt.config.set('environment_folder', 'production');
    console.log('Hola');
  })

	// Local Development task
	grunt.registerTask('watch', [
		//'bump', // Update version. Define cases
		//'jshint:all',
		'clean:dev',

		// check js
		'process-js',

		// sass check
		'sasslint',
	  'sass',

		// vendors

		'copy:vendors',
    'copy:index',
    'copy:fonts',

    'concat:vendors',

		//'uncss', //Pending test
		// PROD version
		//'uglify',
		//'useminPrepare',
		//'filerev',
		//'usemin',
		//'karma:unit', // Unit test
		'browserSync',
		//'exorcise:dev',
		'delta'
	]);

	// Production task
	grunt.registerTask('prod', [
    'prodEnv',
		'bump', // Update version. Define cases
		//'jshint:all',
		'clean:prod',

		// check js
		//'jsbeautifier',
		'html2js',
		'copy:build',
		'browserify:prod',

		// sass check
		'sasslint',
		'sass:prod_main',
		'sass:prod_module1',

		// vendors
		'copy:vendors',
    'copy:index',
    'copy:fonts',

    'concat:vendors',

		'uglify',
		'useminPrepare',
		'filerev',
		'usemin'
	]);

};
