module.exports = {
	vendors: {
		src: [
			'<%= vendor_files.js %>'
		],
		dest: '<%= dev_dir %>/vendor/vendor.min.js'
	},
	main_css: {
		src: [
			'<%= vendor_files.css %>',
			'.tmp/modules/main.css'
		],
		dest: '<%= dev_dir %>/assets/main.min.css'
	},
	build_module1: {
		src: [
			'.tmp/modules/app/module1/**/*.js'
		],
		dest: 'build/app/module1.js'
	},
	build_module2: {
		src: [
			'.tmp/modules/app/module2/**/*.js'
		],
		dest: 'build/app/module2.js'
	}
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
