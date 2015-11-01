module.exports = {
	options: {
		files: [
			"package.json",
			"bower.json"
		],
			commit: false,
			commitMessage: 'chore(release): v%VERSION%',
			commitFiles: [
			"package.json",
			"bower.json"
		],
			createTag: false,
			tagName: 'v%VERSION%',
			tagMessage: 'Version %VERSION%',
			push: false,
			pushTo: 'origin'
	}
};