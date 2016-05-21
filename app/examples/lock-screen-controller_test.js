/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('LockScreenCtrl', function () {
  var ctrl;

  beforeEach(module('examples'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('LockScreenCtrl');
  }));

  it('should have ctrlName as LockScreenCtrl', function () {
    expect(ctrl.ctrlName).toEqual('LockScreenCtrl');
  });
});
