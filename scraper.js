// This is a template for a Node.js scraper on morph.io (https://morph.io)
// including some code snippets below that you should find helpful

// Node.js support is EXTREMELY new so we don't have decent template yet
// Sorry.

console.log("Hello world!");
var phantom = require('phantom');

phantom.create(function (ph) {
  ph.createPage(function (page) {
    page.open("http://www.google.com", function (status) {
      console.log("opened google? ", status);
      page.evaluate(function () { return document.title; }, function (result) {
        console.log('Page title is ' + result);
        ph.exit();
      });
    });
  });
});
