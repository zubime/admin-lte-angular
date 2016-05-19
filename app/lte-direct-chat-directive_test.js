/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('lteDirectChat', function () {
  var scope
    , element;

  beforeEach(module('adminLteAngular', '/lte-direct-chat-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<lte-direct-chat></lte-direct-chat>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().lteDirectChat.name).toEqual('lteDirectChat');
  });
});
