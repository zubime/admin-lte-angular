(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name adminLteAngular.directive:lteControlSidebar
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="adminLteAngular">
       <file name="index.html">
        <lte-control-sidebar></lte-control-sidebar>
       </file>
     </example>
   *
   */
  angular
    .module('adminLteAngular')
    .directive('lteControlSidebar', lteControlSidebar);

  function lteControlSidebar() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: '/lte-control-sidebar-directive.tpl.html',
      replace: true,
      controllerAs: 'lteControlSidebar',
      controller: function () {
        var vm = this;
        vm.name = 'lteControlSidebar';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
