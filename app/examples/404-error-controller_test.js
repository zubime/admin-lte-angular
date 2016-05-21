/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('404ErrorCtrl', function () {
  var ctrl;

  beforeEach(module('examples'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('404ErrorCtrl');
  }));

  it('should have ctrlName as 404ErrorCtrl', function () {
    expect(ctrl.ctrlName).toEqual('404ErrorCtrl');
  });
});
