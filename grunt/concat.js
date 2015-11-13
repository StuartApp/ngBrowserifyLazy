module.exports = {
	vendors: {
		src: [
			'<%= vendor_files.js %>'
		],
		dest: '<%= environment_folder %>/vendor/vendor.min.js'
	},
	main_css: {
		src: [
			'<%= vendor_files.css %>',
			'.tmp/modules/main.css'
		],
		dest: '<%= environment_folder %>/assets/main.min.css'
	},
	/**
	 * The `compile_js` target is the concatenation of our application source
	 * code and all specified vendor source code into a single file.
	 */
	//compile_js: {
	//  options: {
	//    banner: '<%= meta.banner %>'
	//  },
	//  src: [
	//    '<%= vendor_files.js %>',
	//    'module.prefix',
	//    '<%= dev_dir %>/src/**/*.js',
	//    '<%= html2js.app.dest %>',
	//    '<%= html2js.common.dest %>',
	//    'module.suffix'
	//  ],
	//    dest: '<%= compile_dir %>/assets/<%= pkg.name %>-<%= pkg.version %>.js'
	//}

};
