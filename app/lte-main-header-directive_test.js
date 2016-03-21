/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('lteMainHeader', function () {
  var scope
    , element;

  beforeEach(module('adminLteAngular', '/lte-main-header-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<lte-main-header></lte-main-header>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().lteMainHeader.name).toEqual('lteMainHeader');
  });
});
