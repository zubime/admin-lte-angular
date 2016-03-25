/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('lteTreeviewMenu', function () {
  var scope
    , element;

  beforeEach(module('adminLteAngular', '/lte-treeview-menu-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<lte-treeview-menu></lte-treeview-menu>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().lteTreeviewMenu.name).toEqual('lteTreeviewMenu');
  });
});
