(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name adminLteAngular.directive:lteBoxWidget
   * @restrict EA
   * @element
   *
   * @description
   * BoxWidget
   * =========
   * lteBoxWidget is a plugin to handle collapsing and
   * removing boxes from the screen.
   *
   * @type Object
   * @usage $.AdminLTE.boxWidget.activate()
   *        Set all your options in the main $.AdminLTE.options object
   *   *
   * @example
     <example module="adminLteAngular">
       <file name="index.html">
        <lte-box-widget></lte-box-widget>
       </file>
     </example>
   *
   */
  angular
    .module('adminLteAngular')
    .directive('lteBoxWidget', lteBoxWidget);

  function lteBoxWidget() {
    return {
      restrict: 'EA',
      scope: {
        options: '='
      },
      templateUrl: '/lte-box-widget-directive.tpl.html',
      replace: false,
      controllerAs: 'lteBoxWidget',
      controller: function () {
        var _this = this;
        _this.name = 'lteBoxWidget';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }

    };
  }
}());
