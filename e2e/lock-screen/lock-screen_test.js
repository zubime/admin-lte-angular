/* global describe, beforeEach, it, browser, expect */
'use strict';

var LockScreenPagePo = require('./lock-screen.po');

describe('Lock screen page', function () {
  var lockScreenPage;

  beforeEach(function () {
    lockScreenPage = new LockScreenPagePo();
    browser.get('/#/lock-screen');
  });

  it('should say LockScreenCtrl', function () {
    expect(lockScreenPage.heading.getText()).toEqual('lockScreen');
    expect(lockScreenPage.text.getText()).toEqual('LockScreenCtrl');
  });
});
