(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name adminLteAngular.directive:lteBox
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="adminLteAngular">
       <file name="index.html">
        <lte-box></lte-box>
       </file>
     </example>
   *
   */
  angular
    .module('adminLteAngular')
    .directive('lteBox', lteBox);

  function lteBox() {
    return {
      restrict: 'EA',
      scope: {
        options: '=o',
        class: '@',
        remove: '@',
        collapse: '@',
        loading: '@'

      },
      transclude: {

        'body': '?boxBody',
        'tools': '?boxTools',
        'footer': '?boxFooter'
      },
      templateUrl: '/lte-box-directive.tpl.html',
      replace: false,
      controllerAs: 'lteBox',
      controller: function () {
        var vm = this;
        vm.name = 'lteBox';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
        scope.mainClass=['box',attrs.class];
        scope.remove = attrs.remove;
        scope.collapse=attrs.collapse;
        element.activateBox();
      }
    };
  }
}());
