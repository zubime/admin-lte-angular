/* global describe, beforeEach, it, browser, expect */
'use strict';

var MorrisPagePo = require('./morris.po');

describe('Morris page', function () {
  var morrisPage;

  beforeEach(function () {
    morrisPage = new MorrisPagePo();
    browser.get('/#/morris');
  });

  it('should say MorrisCtrl', function () {
    expect(morrisPage.heading.getText()).toEqual('morris');
    expect(morrisPage.text.getText()).toEqual('MorrisCtrl');
  });
});
