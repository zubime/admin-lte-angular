/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ChartJsCtrl', function () {
  var ctrl;

  beforeEach(module('charts'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ChartJsCtrl');
  }));

  it('should have ctrlName as ChartJsCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ChartJsCtrl');
  });
});
