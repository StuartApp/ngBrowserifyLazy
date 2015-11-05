module.exports = {
	dist: {
		files: [
			{'<%= dev_dir %>/assets/main.min2.css': ['<%= dev_dir %>/index.html', '<%= app_dir %>/app/**/*.html'] },
			//{'<%= dev_dir %>/assets/module1.min.css': ['src/**/*.html']},
		],
		options: {
			compress:false,
			//ignore: '<%= ignore_files %>'
		}
	}
};