/* global element, by */
'use strict';

function 404ErrorPage() {
  this.text = element(by.tagName('p'));
  this.heading = element(by.tagName('h2'));
}

module.exports = 404ErrorPage;
