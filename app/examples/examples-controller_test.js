/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ExamplesCtrl', function () {
  var ctrl;

  beforeEach(module('examples'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ExamplesCtrl');
  }));

  it('should have ctrlName as ExamplesCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ExamplesCtrl');
  });
});
