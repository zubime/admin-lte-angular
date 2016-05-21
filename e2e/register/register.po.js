/* global element, by */
'use strict';

function RegisterPage() {
  this.text = element(by.tagName('p'));
  this.heading = element(by.tagName('h2'));
}

module.exports = RegisterPage;
