/* global describe, beforeEach, it, browser, expect */
'use strict';

var RegisterPagePo = require('./register.po');

describe('Register page', function () {
  var registerPage;

  beforeEach(function () {
    registerPage = new RegisterPagePo();
    browser.get('/#/register');
  });

  it('should say RegisterCtrl', function () {
    expect(registerPage.heading.getText()).toEqual('register');
    expect(registerPage.text.getText()).toEqual('RegisterCtrl');
  });
});
