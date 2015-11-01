module.exports = {
	/**
	 * main css /> required
	 */
	dev_main: {
		options: {
			debugInfo: true,
			errLogToConsole: true,
			sourceComments: 'map',
			sourceMap: 'sass.map',
			outputStyle: 'expanded'
		},
		files: {
			'<%= dev_dir %>/assets/main.min.css': '<%= app_files.sass %>'
		}
	},
	prod_main: {
		options: {
			debugInfo: true,
			errLogToConsole: true,
			sourceComments: 'map',
			sourceMap: 'sass.map',
			outputStyle: 'compressed'
		},
		files: {
			'<%= prod_dir %>/assets/main.min.css': '<%= app_files.sass %>'
		}
	},

	/**
	 * build css to module1
	 */
	dev_module1: {
		options: {
			debugInfo: true,
			errLogToConsole: true,
			sourceComments: 'map',
			sourceMap: 'sass.map',
			outputStyle: 'expanded'
		},
		files: {
			'<%= dev_dir %>/assets/module1.min.css': '<%= app_files.module1.sass %>'
		}
	},
	prod_module1: {
		options: {
			debugInfo: true,
			errLogToConsole: true,
			sourceComments: 'map',
			sourceMap: 'sass.map',
			outputStyle: 'compressed'
		},
		files: {
			'<%= prod_dir %>/assets/module1.min.css': '<%= app_files.module1.sass %>'
		}
	},

	// [...]

	compile: {
		files: {
			'<%= dev_dir %>/assets/module.css': '<%= app_files.sass %>'
		},
		options: {
			outputStyle: 'compressed'
		}
	}
};