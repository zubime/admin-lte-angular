/* global describe, beforeEach, it, browser, expect */
'use strict';

var SlidersPagePo = require('./sliders.po');

describe('Sliders page', function () {
  var slidersPage;

  beforeEach(function () {
    slidersPage = new SlidersPagePo();
    browser.get('/#/sliders');
  });

  it('should say SlidersCtrl', function () {
    expect(slidersPage.heading.getText()).toEqual('sliders');
    expect(slidersPage.text.getText()).toEqual('SlidersCtrl');
  });
});
