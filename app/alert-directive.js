(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name adminLteAngular.directive:alert
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="adminLteAngular">
       <file name="index.html">
        <alert></alert>
       </file>
     </example>
   *
   */
  angular
    .module('adminLteAngular')
    .directive('alert', alert);

  function alert() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: '/alert-directive.tpl.html',
      replace: false,
      controllerAs: 'alert',
      controller: function () {
        var vm = this;
        vm.name = 'alert';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
