/* global describe, beforeEach, it, browser, expect */
'use strict';

var InvoicePagePo = require('./invoice.po');

describe('Invoice page', function () {
  var invoicePage;

  beforeEach(function () {
    invoicePage = new InvoicePagePo();
    browser.get('/#/invoice');
  });

  it('should say InvoiceCtrl', function () {
    expect(invoicePage.heading.getText()).toEqual('invoice');
    expect(invoicePage.text.getText()).toEqual('InvoiceCtrl');
  });
});
