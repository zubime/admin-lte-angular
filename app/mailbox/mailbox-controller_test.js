/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('MailboxCtrl', function () {
  var ctrl;

  beforeEach(module('mailbox'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('MailboxCtrl');
  }));

  it('should have ctrlName as MailboxCtrl', function () {
    expect(ctrl.ctrlName).toEqual('MailboxCtrl');
  });
});
