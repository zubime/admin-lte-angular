(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name adminLteAngular.directive:lteCallout
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="adminLteAngular">
       <file name="index.html">
        <lte-callout></lte-callout>
       </file>
     </example>
   *
   */
  angular
    .module('adminLteAngular')
    .directive('lteCallout', lteCallout);

  function lteCallout() {
    return {
      restrict: 'EA',
      transclude: true,
      scope: {
        title: '@',
        class: '@'
      },
      templateUrl: '/lte-callout-directive.tpl.html',
      replace: false,
      controllerAs: 'lteCallout',
      controller: function () {
        var vm = this;
        vm.name = 'lteCallout';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
