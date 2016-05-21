/* global describe, beforeEach, it, browser, expect */
'use strict';

var ChartsPagePo = require('./charts.po');

describe('Charts page', function () {
  var chartsPage;

  beforeEach(function () {
    chartsPage = new ChartsPagePo();
    browser.get('/#/charts');
  });

  it('should say ChartsCtrl', function () {
    expect(chartsPage.heading.getText()).toEqual('charts');
    expect(chartsPage.text.getText()).toEqual('ChartsCtrl');
  });
});
