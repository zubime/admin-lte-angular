(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name adminLteAngular.directive:colorInfoBox
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="adminLteAngular">
       <file name="index.html">
        <color-info-box></color-info-box>
       </file>
     </example>
   *
   */
  angular
    .module('adminLteAngular')
    .directive('colorInfoBox', colorInfoBox);

  function colorInfoBox() {
    return {
      restrict: 'EA',
      scope: {
        options: '=o'
      },
      templateUrl: '/color-info-box-directive.tpl.html',
      replace: false,
      controllerAs: 'colorInfoBox',
      controller: function () {
        var vm = this;
        vm.name = 'colorInfoBox';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
        scope.class = ['fa', scope.options.icon];
        scope.bgClass = ['info-box', 'bg-'+scope.options.color];
      }
    };
  }
}());
