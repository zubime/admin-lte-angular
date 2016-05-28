/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('alert', function () {
  var scope
    , element;

  beforeEach(module('adminLteAngular', '/alert-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<alert></alert>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().alert.name).toEqual('alert');
  });
});
