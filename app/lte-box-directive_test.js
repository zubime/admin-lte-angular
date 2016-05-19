/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('lteBox', function () {
  var scope
    , element;

  beforeEach(module('adminLteAngular', '/lte-box-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<lte-box></lte-box>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().lteBox.name).toEqual('lteBox');
  });
});
