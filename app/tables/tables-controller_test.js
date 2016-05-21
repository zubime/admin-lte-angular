/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('TablesCtrl', function () {
  var ctrl;

  beforeEach(module('tables'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('TablesCtrl');
  }));

  it('should have ctrlName as TablesCtrl', function () {
    expect(ctrl.ctrlName).toEqual('TablesCtrl');
  });
});
