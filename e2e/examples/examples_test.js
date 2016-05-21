/* global describe, beforeEach, it, browser, expect */
'use strict';

var ExamplesPagePo = require('./examples.po');

describe('Examples page', function () {
  var examplesPage;

  beforeEach(function () {
    examplesPage = new ExamplesPagePo();
    browser.get('/#/examples');
  });

  it('should say ExamplesCtrl', function () {
    expect(examplesPage.heading.getText()).toEqual('examples');
    expect(examplesPage.text.getText()).toEqual('ExamplesCtrl');
  });
});
