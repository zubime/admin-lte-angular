/* global describe, beforeEach, it, browser, expect */
'use strict';

var FormPagePo = require('./form.po');

describe('Form page', function () {
  var formPage;

  beforeEach(function () {
    formPage = new FormPagePo();
    browser.get('/#/form');
  });

  it('should say FormCtrl', function () {
    expect(formPage.heading.getText()).toEqual('form');
    expect(formPage.text.getText()).toEqual('FormCtrl');
  });
});
