/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('lteProgressbar', function () {
  var scope
    , element;

  beforeEach(module('adminLteAngular', '/lte-progressbar-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<lte-progressbar></lte-progressbar>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().lteProgressbar.name).toEqual('lteProgressbar');
  });
});
