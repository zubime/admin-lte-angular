/* global describe, beforeEach, it, browser, expect */
'use strict';

var ModalsPagePo = require('./modals.po');

describe('Modals page', function () {
  var modalsPage;

  beforeEach(function () {
    modalsPage = new ModalsPagePo();
    browser.get('/#/modals');
  });

  it('should say ModalsCtrl', function () {
    expect(modalsPage.heading.getText()).toEqual('modals');
    expect(modalsPage.text.getText()).toEqual('ModalsCtrl');
  });
});
