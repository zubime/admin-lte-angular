/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('lteAlert', function () {
  var scope
    , element;

  beforeEach(module('adminLteAngular', '/lte-alert-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<lte-alert></lte-alert>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().lteAlert.name).toEqual('lteAlert');
  });
});
