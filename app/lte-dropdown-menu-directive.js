(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name adminLteAngular.directive:lteDropdownMenu
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="adminLteAngular">
       <file name="index.html">
        <lte-dropdown-menu></lte-dropdown-menu>
       </file>
     </example>
   *
   */
  angular
    .module('adminLteAngular')
    .directive('lteDropdownMenu', lteDropdownMenu);

  function lteDropdownMenu() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: '/lte-dropdown-menu-directive.tpl.html',
      replace: true,
      transclude: true,
      controllerAs: 'lteDropdownMenu',
      controller: function () {
        var vm = this;
        vm.name = 'lteDropdownMenu';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
        scope.footer = 'Hello World';
        scope.header = 'Hello World';
      }
    };
  }
}());
