/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('lteCallout', function () {
  var scope
    , element;

  beforeEach(module('adminLteAngular', '/lte-callout-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<lte-callout></lte-callout>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().lteCallout.name).toEqual('lteCallout');
  });
});
