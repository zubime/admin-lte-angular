/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ModalsCtrl', function () {
  var ctrl;

  beforeEach(module('uiElements'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ModalsCtrl');
  }));

  it('should have ctrlName as ModalsCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ModalsCtrl');
  });
});
