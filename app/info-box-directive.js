(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name adminLteAngular.directive:infoBox
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="adminLteAngular">
       <file name="index.html">
        <info-box></info-box>
       </file>
     </example>
   *
   */
  angular
    .module('adminLteAngular')
    .directive('infoBox', infoBox);

  function infoBox() {
    return {
      restrict: 'EA',
      scope: {
        options : '=o'
      },
      templateUrl: '/info-box-directive.tpl.html',
      replace: false,
      controllerAs: 'infoBox',
      controller: function () {
        var vm = this;
        vm.name = 'infoBox';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
        scope.class = ['fa',scope.options.icon];
        scope.bgClass = ['info-box-icon', 'bg-'+scope.options.color];
      }
    };
  }
}());
