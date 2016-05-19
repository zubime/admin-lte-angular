/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('colorInfoBox', function () {
  var scope
    , element;

  beforeEach(module('adminLteAngular', '/color-info-box-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<color-info-box></color-info-box>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().colorInfoBox.name).toEqual('colorInfoBox');
  });
});
