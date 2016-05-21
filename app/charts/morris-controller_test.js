/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('MorrisCtrl', function () {
  var ctrl;

  beforeEach(module('charts'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('MorrisCtrl');
  }));

  it('should have ctrlName as MorrisCtrl', function () {
    expect(ctrl.ctrlName).toEqual('MorrisCtrl');
  });
});
