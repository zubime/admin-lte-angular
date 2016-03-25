(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name adminLteAngular.directive:lteBoxWidget
   * @restrict EA
   * @element
   *
   * @description
   *
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
      scope: {},
      templateUrl: '/lte-box-widget-directive.tpl.html',
      replace: false,
      controllerAs: 'lteBoxWidget',
      controller: function () {
        var vm = this;
        vm.name = 'lteBoxWidget';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());



/* BoxWidget
 * =========
 * BoxWidget is a plugin to handle collapsing and
 * removing boxes from the screen.
 *
 * @type Object
 * @usage $.AdminLTE.boxWidget.activate()
 *        Set all your options in the main $.AdminLTE.options object
 */
$.AdminLTE.boxWidget = {
  selectors: $.AdminLTE.options.boxWidgetOptions.boxWidgetSelectors,
  icons: $.AdminLTE.options.boxWidgetOptions.boxWidgetIcons,
  animationSpeed: $.AdminLTE.options.animationSpeed,
  activate: function (_box) {
    var _this = this;
    if (!_box) {
      _box = document; // activate all boxes per default
    }
    //Listen for collapse event triggers
    $(_box).on('click', _this.selectors.collapse, function (e) {
      e.preventDefault();
      _this.collapse($(this));
    });

    //Listen for remove event triggers
    $(_box).on('click', _this.selectors.remove, function (e) {
      e.preventDefault();
      _this.remove($(this));
    });
  },
  collapse: function (element) {
    var _this = this;
    //Find the box parent
    var box = element.parents(".box").first();
    //Find the body and the footer
    var box_content = box.find("> .box-body, > .box-footer, > form  >.box-body, > form > .box-footer");
    if (!box.hasClass("collapsed-box")) {
      //Convert minus into plus
      element.children(":first")
        .removeClass(_this.icons.collapse)
        .addClass(_this.icons.open);
      //Hide the content
      box_content.slideUp(_this.animationSpeed, function () {
        box.addClass("collapsed-box");
      });
    } else {
      //Convert plus into minus
      element.children(":first")
        .removeClass(_this.icons.open)
        .addClass(_this.icons.collapse);
      //Show the content
      box_content.slideDown(_this.animationSpeed, function () {
        box.removeClass("collapsed-box");
      });
    }
  },
  remove: function (element) {
    //Find the box parent
    var box = element.parents(".box").first();
    box.slideUp(this.animationSpeed);
  }
};
}
