/* global describe, beforeEach, it, browser, expect */
'use strict';

var MailboxPagePo = require('./mailbox.po');

describe('Mailbox page', function () {
  var mailboxPage;

  beforeEach(function () {
    mailboxPage = new MailboxPagePo();
    browser.get('/#/mailbox');
  });

  it('should say MailboxCtrl', function () {
    expect(mailboxPage.heading.getText()).toEqual('mailbox');
    expect(mailboxPage.text.getText()).toEqual('MailboxCtrl');
  });
});
