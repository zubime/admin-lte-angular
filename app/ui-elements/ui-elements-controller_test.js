/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('UiElementsCtrl', function () {
  var ctrl;

  beforeEach(module('uiElements'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('UiElementsCtrl');
  }));

  it('should have ctrlName as UiElementsCtrl', function () {
    expect(ctrl.ctrlName).toEqual('UiElementsCtrl');
  });
});
