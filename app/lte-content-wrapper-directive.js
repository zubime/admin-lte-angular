(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name adminLteAngular.directive:lteContentWrapper
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="adminLteAngular">
       <file name="index.html">
        <lte-content-wrapper></lte-content-wrapper>
       </file>
     </example>
   *
   */
  angular
    .module('adminLteAngular')
    .directive('lteContentWrapper', lteContentWrapper);

  function lteContentWrapper() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: '/lte-content-wrapper-directive.tpl.html',
      replace: true,
      transclude: true,
      controllerAs: 'lteContentWrapper',
      controller: function () {
        var vm = this;
        vm.name = 'lteContentWrapper';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
