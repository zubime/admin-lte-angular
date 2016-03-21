(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name adminLteAngular.directive:lteApp
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="adminLteAngular">
       <file name="index.html">
        <lte-app></lte-app>
       </file>
     </example>
   *
   */
  angular
    .module('adminLteAngular')
    .directive('lteApp', lteApp);

  function lteApp() {
    return {
      restrict: 'EA',
      transclude: true,
      scope: {},
      templateUrl: '/lte-app-directive.tpl.html',
      replace: false,
      controllerAs: 'lteApp',
      controller: function () {
        var vm = this;
        vm.name = 'lteApp';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
