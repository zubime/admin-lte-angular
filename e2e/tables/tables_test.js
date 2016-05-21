/* global describe, beforeEach, it, browser, expect */
'use strict';

var TablesPagePo = require('./tables.po');

describe('Tables page', function () {
  var tablesPage;

  beforeEach(function () {
    tablesPage = new TablesPagePo();
    browser.get('/#/tables');
  });

  it('should say TablesCtrl', function () {
    expect(tablesPage.heading.getText()).toEqual('tables');
    expect(tablesPage.text.getText()).toEqual('TablesCtrl');
  });
});
