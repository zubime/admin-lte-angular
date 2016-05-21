/* global describe, beforeEach, it, browser, expect */
'use strict';

var ComposePagePo = require('./compose.po');

describe('Compose page', function () {
  var composePage;

  beforeEach(function () {
    composePage = new ComposePagePo();
    browser.get('/#/compose');
  });

  it('should say ComposeCtrl', function () {
    expect(composePage.heading.getText()).toEqual('compose');
    expect(composePage.text.getText()).toEqual('ComposeCtrl');
  });
});
