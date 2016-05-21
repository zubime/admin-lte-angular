/* global describe, beforeEach, it, browser, expect */
'use strict';

var IconsPagePo = require('./icons.po');

describe('Icons page', function () {
  var iconsPage;

  beforeEach(function () {
    iconsPage = new IconsPagePo();
    browser.get('/#/icons');
  });

  it('should say IconsCtrl', function () {
    expect(iconsPage.heading.getText()).toEqual('icons');
    expect(iconsPage.text.getText()).toEqual('IconsCtrl');
  });
});
