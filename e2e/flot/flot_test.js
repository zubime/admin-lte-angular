/* global describe, beforeEach, it, browser, expect */
'use strict';

var FlotPagePo = require('./flot.po');

describe('Flot page', function () {
  var flotPage;

  beforeEach(function () {
    flotPage = new FlotPagePo();
    browser.get('/#/flot');
  });

  it('should say FlotCtrl', function () {
    expect(flotPage.heading.getText()).toEqual('flot');
    expect(flotPage.text.getText()).toEqual('FlotCtrl');
  });
});
