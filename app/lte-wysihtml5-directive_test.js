/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('lteWysihtml5', function () {
  var scope
    , element;

  beforeEach(module('adminLteAngular', '/lte-wysihtml5-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<lte-wysihtml5></lte-wysihtml5>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().lteWysihtml5.name).toEqual('lteWysihtml5');
  });
});
