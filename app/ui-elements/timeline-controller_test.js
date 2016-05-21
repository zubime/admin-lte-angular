/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('TimelineCtrl', function () {
  var ctrl;

  beforeEach(module('uiElements'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('TimelineCtrl');
  }));

  it('should have ctrlName as TimelineCtrl', function () {
    expect(ctrl.ctrlName).toEqual('TimelineCtrl');
  });
});
