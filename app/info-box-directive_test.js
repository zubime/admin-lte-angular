/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('infoBox', function () {
  var scope
    , element;

  beforeEach(module('adminLteAngular', '/info-box-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<info-box></info-box>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().infoBox.name).toEqual('infoBox');
  });
});
