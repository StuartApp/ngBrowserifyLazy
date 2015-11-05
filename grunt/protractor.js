module.exports = {
	options: {
		configFile: "test/protractor.conf.js",
		keepAlive: true,
		noColor: false,
		singleRun: false,
		args: {}
	},
	chrome: {
		options: {
			args: {
				browser: "chrome"
			}
		}
	},
	firefox: {
		options: {
			args: {
				browser: "firefox"
			}
		}
	},
	safari: {
		options: {
			args: {
				browser: "safari"
			}
		}
	},
	e2e: {
		options: {
			// Stops Grunt process if a test fails
			keepAlive: false
		}
	},
	continuous: {
		options: {
			keepAlive: true
		}
	}
};