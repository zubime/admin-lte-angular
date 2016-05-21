/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('FormCtrl', function () {
  var ctrl;

  beforeEach(module('form'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('FormCtrl');
  }));

  it('should have ctrlName as FormCtrl', function () {
    expect(ctrl.ctrlName).toEqual('FormCtrl');
  });
});
