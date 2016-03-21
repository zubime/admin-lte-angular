(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name adminLteAngular.directive:lteMainHeader
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="adminLteAngular">
       <file name="index.html">
        <lte-main-header></lte-main-header>
       </file>
     </example>
   *
   */
  angular
    .module('adminLteAngular')
    .directive('lteMainHeader', lteMainHeader);

  function lteMainHeader() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: '/lte-main-header-directive.tpl.html',
      replace: true,
      transclude: false,
      controllerAs: 'lteMainHeader',
      controller: function () {
        var vm = this;
        vm.name = 'lteMainHeader';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
