/* global describe, beforeEach, it, browser, expect */
'use strict';

var 500ErrorPagePo = require('./500-error.po');

describe('500 error page', function () {
  var 500ErrorPage;

  beforeEach(function () {
    500ErrorPage = new 500ErrorPagePo();
    browser.get('/#/500-error');
  });

  it('should say 500ErrorCtrl', function () {
    expect(500ErrorPage.heading.getText()).toEqual('500Error');
    expect(500ErrorPage.text.getText()).toEqual('500ErrorCtrl');
  });
});
