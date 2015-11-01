module.exports = {
	js_main: {
		files: [
			'<%= app_files.main.js %>'
		],
			//tasks: ['jshint:all', 'karma:unit:run', 'copy:build_appjs']
			tasks: [
				'process-js'
			]
	},
	js_module1: {
		files: [
			'<%= app_files.module1.js %>'
		],
		//tasks: ['jshint:all', 'karma:unit:run', 'copy:build_appjs']
		tasks: [
			'process-js'
		]
	},
	html: {
		files: ['<%= app_files.html %>'],
		tasks: [
			'html2js',
			'copy:build',
			'copy:vendors',
			'browserify:dev',
			'index']
	},
	sass_main: {
		files: [
			'<%= app_dir %>/css/**/*.scss',
			'<%= app_files.main.sass %>'
		],
			tasks: ['sass:dev_main', 'sasslint']
	},
	sass_module1: {
		files: [
			'<%= app_files.module1.sass %>'
		],
		tasks: ['sass:dev_module1', 'sasslint']
	},
	sass_module2: {
		files: [
			'<%= app_files.module2.sass %>'
		],
		tasks: ['sass:dev:module2', 'sasslint']
	}
};