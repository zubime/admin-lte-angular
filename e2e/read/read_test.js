/* global describe, beforeEach, it, browser, expect */
'use strict';

var ReadPagePo = require('./read.po');

describe('Read page', function () {
  var readPage;

  beforeEach(function () {
    readPage = new ReadPagePo();
    browser.get('/#/read');
  });

  it('should say ReadCtrl', function () {
    expect(readPage.heading.getText()).toEqual('read');
    expect(readPage.text.getText()).toEqual('ReadCtrl');
  });
});
