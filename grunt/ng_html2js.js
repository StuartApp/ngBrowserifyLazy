module.exports = {
	app: {
		options: {
			base: 'src'
		},
		files: {'.tmp/templates-app.js': ['<%= app_dir %>/app/*.html'] }
	},
	module1: {
		options: {
			base: 'src'
		},
		files: {'.tmp/templates-module1.js': ['<%= app_dir %>/app/module1/**/*.html'] }
	}
};
