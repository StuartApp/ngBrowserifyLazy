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
		//data: require('./build.config.js')
	});
	grunt.config.set('pkg', pkg);

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	grunt.renameTask('watch', 'delta');

	grunt.registerTask('process-js', [
		'jsbeautifier',
		'html2js',
		'copy:build',
		'browserify:dev'
	]);
	grunt.registerTask('watch', [
		//'bump', // Update version. Define cases
		'jshint:all',
		'clean:dev',

		// check js
		'process-js',

		// sass check
		'sasslint',
		'sass:dev_main',
		'sass:dev_module1',

		// vendors
		'copy:vendors',
		'concat:vendors',

		'index',
		// PROD version
		//'uglify',
		//'useminPrepare',
		//'filerev',
		//'usemin',
		'browserSync',
		//'exorcise:dev',
		'delta'
	]);

	grunt.registerTask('prod', [
		'bump', // Update version. Define cases
		//'jshint:all',
		'clean:prod',

		// check js
		'jsbeautifier',
		'html2js',
		'copy:build',
		'browserify:prod',

		// sass check
		'sasslint',
		'sass:prod_main',
		'sass:prod_module1',

		// vendors
		'copy:vendors',
		'concat:vendors',

		'index',
		// PROD version
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

	grunt.registerMultiTask('index', 'Process index.html template', function () {
		//var dirRE = new RegExp('^(' + grunt.config('dev_dir') + '|' + grunt.config('compile_dir') + ')\/', 'g');
		var dirRE = new RegExp('^(build)\/', 'g');
		var jsFiles = filterForJS(this.filesSrc).map(function (file) {
			return file.replace(dirRE, '');
		});
		//var cssFiles = filterForCSS(this.filesSrc).map(function(file) {
		//  return file.replace(dirRE, '');
		//});

		grunt.file.copy('src/index.html', this.data.dir + '/index.html', {
			process: function (contents) { // path
				return grunt.template.process(contents, {
					data: {
						scripts: jsFiles,
						//version: grunt.config('pkg.version')
						//styles: cssFiles
					}
				});
			}
		});
	});
};
