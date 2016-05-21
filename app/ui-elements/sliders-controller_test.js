/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('SlidersCtrl', function () {
  var ctrl;

  beforeEach(module('uiElements'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('SlidersCtrl');
  }));

  it('should have ctrlName as SlidersCtrl', function () {
    expect(ctrl.ctrlName).toEqual('SlidersCtrl');
  });
});
