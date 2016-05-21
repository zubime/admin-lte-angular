/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('CalendarCtrl', function () {
  var ctrl;

  beforeEach(module('calendar'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('CalendarCtrl');
  }));

  it('should have ctrlName as CalendarCtrl', function () {
    expect(ctrl.ctrlName).toEqual('CalendarCtrl');
  });
});
