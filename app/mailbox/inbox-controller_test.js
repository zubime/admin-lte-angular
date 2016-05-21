/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('InboxCtrl', function () {
  var ctrl;

  beforeEach(module('mailbox'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('InboxCtrl');
  }));

  it('should have ctrlName as InboxCtrl', function () {
    expect(ctrl.ctrlName).toEqual('InboxCtrl');
  });
});
