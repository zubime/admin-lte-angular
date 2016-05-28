(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name adminLteAngular.directive:lteProgressbar
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="adminLteAngular">
       <file name="index.html">
        <lte-progressbar></lte-progressbar>
       </file>
     </example>
   *
   */
  angular
    .module('adminLteAngular')
    .directive('lteProgressbar', lteProgressbar);

  function lteProgressbar() {
    return {
      restrict: 'EA',
      scope: {
        type: '@',
        value: '@',
        min: '@',
        max: '@',
        size: '@'
      },
      templateUrl: '/lte-progressbar-directive.tpl.html',
      replace: false,
      transclude: true,
      controllerAs: 'lteProgressbar',
      controller: function () {
        var vm = this;
        vm.name = 'lteProgressbar';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
