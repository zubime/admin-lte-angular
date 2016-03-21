/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('lteControlSidebar', function () {
  var scope
    , element;

  beforeEach(module('adminLteAngular', '/lte-control-sidebar-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<lte-control-sidebar></lte-control-sidebar>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().lteControlSidebar.name).toEqual('lteControlSidebar');
  });
});
