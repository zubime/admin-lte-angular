/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ReadCtrl', function () {
  var ctrl;

  beforeEach(module('mailbox'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ReadCtrl');
  }));

  it('should have ctrlName as ReadCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ReadCtrl');
  });
});
