/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('InvoiceCtrl', function () {
  var ctrl;

  beforeEach(module('examples'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('InvoiceCtrl');
  }));

  it('should have ctrlName as InvoiceCtrl', function () {
    expect(ctrl.ctrlName).toEqual('InvoiceCtrl');
  });
});
