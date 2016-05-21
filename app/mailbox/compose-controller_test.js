/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ComposeCtrl', function () {
  var ctrl;

  beforeEach(module('mailbox'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ComposeCtrl');
  }));

  it('should have ctrlName as ComposeCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ComposeCtrl');
  });
});
