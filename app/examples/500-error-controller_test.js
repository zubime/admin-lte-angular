/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('500ErrorCtrl', function () {
  var ctrl;

  beforeEach(module('examples'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('500ErrorCtrl');
  }));

  it('should have ctrlName as 500ErrorCtrl', function () {
    expect(ctrl.ctrlName).toEqual('500ErrorCtrl');
  });
});
