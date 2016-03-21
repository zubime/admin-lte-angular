/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('lteContentWrapper', function () {
  var scope
    , element;

  beforeEach(module('adminLteAngular', '/lte-content-wrapper-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<lte-content-wrapper></lte-content-wrapper>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().lteContentWrapper.name).toEqual('lteContentWrapper');
  });
});
