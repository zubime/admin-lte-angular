/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ButtonsCtrl', function () {
  var ctrl;

  beforeEach(module('uiElements'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ButtonsCtrl');
  }));

  it('should have ctrlName as ButtonsCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ButtonsCtrl');
  });
});
