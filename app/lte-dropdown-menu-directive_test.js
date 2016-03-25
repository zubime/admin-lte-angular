/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('lteDropdownMenu', function () {
  var scope
    , element;

  beforeEach(module('adminLteAngular', '/lte-dropdown-menu-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<lte-dropdown-menu></lte-dropdown-menu>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().lteDropdownMenu.name).toEqual('lteDropdownMenu');
  });
});
