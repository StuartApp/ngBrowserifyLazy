module.exports = {
	files: ["<%= app_dir %>/app/**/*.js", "<%= app_dir %>/app/**/*.scss"],
	options: {
		//config: "path/to/configFile",
		//html: {
		//	braceStyle: "collapse",
		//	indentChar: " ",
		//	indentScripts: "keep",
		//	indentSize: 4,
		//	maxPreserveNewlines: 10,
		//	preserveNewlines: true,
		//	unformatted: ["a", "sub", "sup", "b", "i", "u"],
		//	wrapLineLength: 0
		//},
		css: {
			fileTypes: [".scss"],
			indentChar: " ",
			indentSize: 2
		},
		js: {
			//braceStyle: "collapse",
			//breakChainedMethods: false,
			//e4x: false,
			//evalCode: false,
			//indentChar: " ",
			//indentLevel: 0,
			indentSize: 4,
			//indentWithTabs: false,
			//jslintHappy: false,
			//keepArrayIndentation: false,
			//keepFunctionIndentation: false,
			maxPreserveNewlines: 2,
			//preserveNewlines: true,
			//spaceBeforeConditional: true,
			//spaceInParen: false,
			//unescapeStrings: false,
			//wrapLineLength: 0,
			//endWithNewline: true
		}
	}
};