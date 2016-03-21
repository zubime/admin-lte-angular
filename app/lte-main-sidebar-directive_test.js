/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('lteMainSidebar', function () {
  var scope
    , element;

  beforeEach(module('adminLteAngular', '/lte-main-sidebar-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<lte-main-sidebar></lte-main-sidebar>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().lteMainSidebar.name).toEqual('lteMainSidebar');
  });
});
