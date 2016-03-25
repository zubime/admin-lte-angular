/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('lteBoxWidget', function () {
  var scope
    , element;

  beforeEach(module('adminLteAngular', '/lte-box-widget-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<lte-box-widget></lte-box-widget>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().lteBoxWidget.name).toEqual('lteBoxWidget');
  });
});
