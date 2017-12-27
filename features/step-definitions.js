var cucumber = require('cucumber');
var assert = require('assert');

module.exports = cucumber.defineSupportCode(function({ Given, Then }) {
  Given(/^I go on the website "([^"]*)"$/, function(url) {
      browser.url(url);
  });
  
  Then(/^I click first image on the image list$/, function(){
    browser.waitForExist('.list-unstyled li:first-child', 15000);
    browser.click('.list-unstyled li:first-child');
  });        

  Then(/^Clicked image should be available in canvas$/, function() {
    browser.waitForExist('.canvas img', 15000);
    var nrOfElements = browser.isExisting('.canvas img');
    assert.equal(true, nrOfElements, 'image exist in canvas is ' + nrOfElements + ' and the expected should be ' + true)
  });

  Then(/^should the title of the page be "([^"]*)"$/, function(expectedTitle) {
      var title = browser.getTitle();
      assert.equal(title, expectedTitle, ' title is "'+ title + '" but should be "'+ expectedTitle);
  });
});