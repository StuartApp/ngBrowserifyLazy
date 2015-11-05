'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('App', function() {
	it('should redirect index.html to index.html', function() {
		browser.get('/');
		// test responsive sizes
		// browser.driver.manage().window().setSize(500, 500);
		browser.getLocationAbsUrl().then(function(url) {
			expect(url).toBe('');
		});
	});

	//it('should be 2 items menu', function() {
	//	var itemsMenu = element.all(by.css('ul.navbar-nav li'));
	//	expect(itemsMenu.count()).toBe(2);
	//});
	//
	//it('first options on item menu is Home', function() {
	//	var firstOption = element(by.css('ul.navbar-nav li:first-child'));
	//	expect(firstOption.getText()).toBe('Home');
	//});
	//
	//it('on this state, h1 should say "Home state"', function() {
	//	expect(element(by.css('h1')).getText()).toBe('Home state');
	//});
	//
	//it('if click on about item menu, h1 should say "About state"', function() {
	//	var aboutItemMenu = element(by.css('a[href*="about"]'));
	//	aboutItemMenu.click();
	//
	//	browser.getLocationAbsUrl().then(function(url) {
	//		expect(url).toBe('/about');
	//	});
	//
	//	expect(element(by.css('h1')).getText()).toBe('About state');
	//});
});