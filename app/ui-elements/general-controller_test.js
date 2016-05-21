/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('GeneralCtrl', function () {
  var ctrl;

  beforeEach(module('uiElements'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('GeneralCtrl');
  }));

  it('should have ctrlName as GeneralCtrl', function () {
    expect(ctrl.ctrlName).toEqual('GeneralCtrl');
  });
});
