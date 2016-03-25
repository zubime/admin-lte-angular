(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name adminLteAngular.directive:lteMainSidebar
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="adminLteAngular">
       <file name="index.html">
        <lte-main-sidebar></lte-main-sidebar>
       </file>
     </example>
   *
   */
  angular
    .module('adminLteAngular')
    .directive('lteMainSidebar', lteMainSidebar);

  function lteMainSidebar() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: '/lte-main-sidebar-directive.tpl.html',
      replace: true,
      transclude: true,
      controllerAs: 'lteMainSidebar',
      controller: function () {
        var vm = this;
        vm.name = 'lteMainSidebar';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
