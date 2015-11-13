module.exports = function (grunt) {
	'use strict';

	var pkg = grunt.file.readJSON('package.json');
  var environment = grunt.option('env') || 'dev';

	// Load grunt tasks automatically
	require('load-grunt-config')(grunt, {
		'jit-grunt': {
			ngtemplates: 'grunt-angular-templates',
			useminPrepare: 'grunt-usemin'
		},
		data: require('./build.config.js')
	});


	grunt.config.set('pkg', pkg);
  grunt.config.set('environment_folder', environment === 'dev' ? 'development' : 'production');

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

	// Local Development task
	grunt.registerTask('watch', [
		//'bump', // Update version. Define cases
		//'jshint:all',
		'clean:dev',

		// check js
		'process-js',

		// sass check
		'sasslint',
		'sass:dev_main',
		'sass:dev_module1',
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

	/**
	 * A utility function to get all app JavaScript sources.
	 */
	function filterForJS(files) {
		return files.filter(function (file) {
			return file.match(/\.js$/);
		});
	}

	/**
	 * A utility function to get all app CSS sources.
	 */
	//function filterForCSS(files) {
	//	return files.filter(function (file) {
	//		return file.match(/\.css$/);
	//	});
	//}
};
