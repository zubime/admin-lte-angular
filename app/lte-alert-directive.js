(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name adminLteAngular.directive:lteAlert
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="adminLteAngular">
       <file name="index.html">
        <lte-alert></lte-alert>
       </file>
     </example>
   *
   */
  angular
    .module('adminLteAngular')
    .directive('lteAlert', lteAlert);

  function lteAlert() {
    return {
      restrict: 'EA',
      scope: {
        title: "@title",
        class: "@class",
        icon:  "@icon"
      },
      templateUrl: '/lte-alert-directive.tpl.html',
      replace: false,
      transclude: true,
      controllerAs: 'lteAlert',
      controller: function () {
        var vm = this;
        vm.name = 'lteAlert';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
