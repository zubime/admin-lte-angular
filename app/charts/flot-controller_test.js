/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('FlotCtrl', function () {
  var ctrl;

  beforeEach(module('charts'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('FlotCtrl');
  }));

  it('should have ctrlName as FlotCtrl', function () {
    expect(ctrl.ctrlName).toEqual('FlotCtrl');
  });
});
