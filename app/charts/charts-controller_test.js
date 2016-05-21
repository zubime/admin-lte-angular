/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ChartsCtrl', function () {
  var ctrl;

  beforeEach(module('charts'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ChartsCtrl');
  }));

  it('should have ctrlName as ChartsCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ChartsCtrl');
  });
});
