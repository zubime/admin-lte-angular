/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('InlineChartsCtrl', function () {
  var ctrl;

  beforeEach(module('charts'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('InlineChartsCtrl');
  }));

  it('should have ctrlName as InlineChartsCtrl', function () {
    expect(ctrl.ctrlName).toEqual('InlineChartsCtrl');
  });
});
