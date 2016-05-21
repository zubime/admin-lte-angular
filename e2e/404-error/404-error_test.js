/* global describe, beforeEach, it, browser, expect */
'use strict';

var 404ErrorPagePo = require('./404-error.po');

describe('404 error page', function () {
  var 404ErrorPage;

  beforeEach(function () {
    404ErrorPage = new 404ErrorPagePo();
    browser.get('/#/404-error');
  });

  it('should say 404ErrorCtrl', function () {
    expect(404ErrorPage.heading.getText()).toEqual('404Error');
    expect(404ErrorPage.text.getText()).toEqual('404ErrorCtrl');
  });
});
