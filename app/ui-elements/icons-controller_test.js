/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('IconsCtrl', function () {
  var ctrl;

  beforeEach(module('uiElements'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('IconsCtrl');
  }));

  it('should have ctrlName as IconsCtrl', function () {
    expect(ctrl.ctrlName).toEqual('IconsCtrl');
  });
});
