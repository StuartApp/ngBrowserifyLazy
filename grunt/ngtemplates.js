module.exports = {
	options: {
		singleQuotes: true,
	},
	app: {
		files: {'.tmp/templates-app.js': ['<%= app_dir %>/app/*.html'] }
	},
	module1: {
		files: {'.tmp/templates-module1.js': ['<%= app_dir %>/app/module1/**/*.html'] }
	}
};