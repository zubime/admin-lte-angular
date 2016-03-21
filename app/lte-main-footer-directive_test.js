/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('lteMainFooter', function () {
  var scope
    , element;

  beforeEach(module('adminLteAngular', '/lte-main-footer-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<lte-main-footer></lte-main-footer>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().lteMainFooter.name).toEqual('lteMainFooter');
  });
});
