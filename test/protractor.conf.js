'use strict'

exports.config = {
	allScriptsTimeout: 11000,

	specs: [
		'e2e/*.js'
	],

	seleniumAddress: 'http://localhost:4444/wd/hub',

	capabilities: {
		'browserName': 'chrome'
	},

	chromeOnly: true,

	keepAlive: false,
	autoWatch: true,

	baseUrl: 'http://localhost:3000/',

	framework: 'jasmine',

	jasmineNodeOpts: {
		defaultTimeoutInterval: 30000
	}
};