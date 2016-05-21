/* global describe, beforeEach, it, browser, expect */
'use strict';

var GeneralPagePo = require('./general.po');

describe('General page', function () {
  var generalPage;

  beforeEach(function () {
    generalPage = new GeneralPagePo();
    browser.get('/#/general');
  });

  it('should say GeneralCtrl', function () {
    expect(generalPage.heading.getText()).toEqual('general');
    expect(generalPage.text.getText()).toEqual('GeneralCtrl');
  });
});
