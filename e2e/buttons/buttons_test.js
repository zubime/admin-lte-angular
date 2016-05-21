/* global describe, beforeEach, it, browser, expect */
'use strict';

var ButtonsPagePo = require('./buttons.po');

describe('Buttons page', function () {
  var buttonsPage;

  beforeEach(function () {
    buttonsPage = new ButtonsPagePo();
    browser.get('/#/buttons');
  });

  it('should say ButtonsCtrl', function () {
    expect(buttonsPage.heading.getText()).toEqual('buttons');
    expect(buttonsPage.text.getText()).toEqual('ButtonsCtrl');
  });
});
