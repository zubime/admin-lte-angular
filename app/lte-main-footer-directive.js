(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name adminLteAngular.directive:lteMainFooter
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="adminLteAngular">
       <file name="index.html">
        <lte-main-footer></lte-main-footer>
       </file>
     </example>
   *
   */
  angular
    .module('adminLteAngular')
    .directive('lteMainFooter', lteMainFooter);

  function lteMainFooter() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: '/lte-main-footer-directive.tpl.html',
      replace: true,
      controllerAs: 'lteMainFooter',
      controller: function () {
        var vm = this;
        vm.name = 'lteMainFooter';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
