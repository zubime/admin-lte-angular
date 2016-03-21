/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('lteApp', function () {
  var scope
    , element;

  beforeEach(module('adminLteAngular', '/lte-app-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<lte-app></lte-app>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().lteApp.name).toEqual('lteApp');
  });
});
