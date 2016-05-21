/* global describe, beforeEach, it, browser, expect */
'use strict';

var ChartJsPagePo = require('./chart-js.po');

describe('Chart js page', function () {
  var chartJsPage;

  beforeEach(function () {
    chartJsPage = new ChartJsPagePo();
    browser.get('/#/chart-js');
  });

  it('should say ChartJsCtrl', function () {
    expect(chartJsPage.heading.getText()).toEqual('chartJs');
    expect(chartJsPage.text.getText()).toEqual('ChartJsCtrl');
  });
});
