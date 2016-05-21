/* global describe, beforeEach, it, browser, expect */
'use strict';

var InlineChartsPagePo = require('./inline-charts.po');

describe('Inline charts page', function () {
  var inlineChartsPage;

  beforeEach(function () {
    inlineChartsPage = new InlineChartsPagePo();
    browser.get('/#/inline-charts');
  });

  it('should say InlineChartsCtrl', function () {
    expect(inlineChartsPage.heading.getText()).toEqual('inlineCharts');
    expect(inlineChartsPage.text.getText()).toEqual('InlineChartsCtrl');
  });
});
