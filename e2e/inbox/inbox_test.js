/* global describe, beforeEach, it, browser, expect */
'use strict';

var InboxPagePo = require('./inbox.po');

describe('Inbox page', function () {
  var inboxPage;

  beforeEach(function () {
    inboxPage = new InboxPagePo();
    browser.get('/#/inbox');
  });

  it('should say InboxCtrl', function () {
    expect(inboxPage.heading.getText()).toEqual('inbox');
    expect(inboxPage.text.getText()).toEqual('InboxCtrl');
  });
});
