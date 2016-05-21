/* global describe, beforeEach, it, browser, expect */
'use strict';

var UiElementsPagePo = require('./ui-elements.po');

describe('Ui elements page', function () {
  var uiElementsPage;

  beforeEach(function () {
    uiElementsPage = new UiElementsPagePo();
    browser.get('/#/ui-elements');
  });

  it('should say UiElementsCtrl', function () {
    expect(uiElementsPage.heading.getText()).toEqual('uiElements');
    expect(uiElementsPage.text.getText()).toEqual('UiElementsCtrl');
  });
});
