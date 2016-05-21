/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('RegisterCtrl', function () {
  var ctrl;

  beforeEach(module('examples'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('RegisterCtrl');
  }));

  it('should have ctrlName as RegisterCtrl', function () {
    expect(ctrl.ctrlName).toEqual('RegisterCtrl');
  });
});
