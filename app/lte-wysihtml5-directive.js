(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name adminLteAngular.directive:lteWysihtml5
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="adminLteAngular">
       <file name="index.html">
        <lte-wysihtml5></lte-wysihtml5>
       </file>
     </example>
   *
   */
  angular
    .module('adminLteAngular')
    .directive('lteWysihtml5', lteWysihtml5);

  function lteWysihtml5() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: '/lte-wysihtml5-directive.tpl.html',
      replace: false,
      transclude:true,
      controllerAs: 'lteWysihtml5',
      controller: function () {
        var vm = this;
        vm.name = 'lteWysihtml5';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
        element.wysihtml5();
      }
    };
  }
}());
