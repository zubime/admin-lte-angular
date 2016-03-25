(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name adminLteAngular.directive:lteTreeviewMenu
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="adminLteAngular">
       <file name="index.html">
        <lte-treeview-menu></lte-treeview-menu>
       </file>
     </example>
   *
   */
  angular
    .module('adminLteAngular')
    .directive('treeviewMenu', lteTreeviewMenu);

  function lteTreeviewMenu() {
    return {
      restrict: 'C',
      scope: {},
      templateUrl: '/lte-treeview-menu-directive.tpl.html',
      replace: true,
      transclude: true,
      controllerAs: 'lteTreeviewMenu',
      controller: function () {
        var vm = this;
        vm.name = 'lteTreeviewMenu';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
        element.on('click','li.treeview a',function(e){
          
        });
      }
    };
  }
}());


/* Tree()
 * ======
 * Converts the sidebar into a multilevel
 * tree view menu.
 *
 * @type Function
 * @Usage: $.AdminLTE.tree('.sidebar')
 */
$.AdminLTE.tree = function (menu) {
  var _this = this;
  var animationSpeed = $.AdminLTE.options.animationSpeed;
  $(menu).on('click', 'li a', function (e) {
    //Get the clicked link and the next element
    var $this = $(this);
    var checkElement = $this.next();

    //Check if the next element is a menu and is visible
    if ((checkElement.is('.treeview-menu')) && (checkElement.is(':visible')) && (!$('body').hasClass('sidebar-collapse'))) {
      //Close the menu
      checkElement.slideUp(animationSpeed, function () {
        checkElement.removeClass('menu-open');
        //Fix the layout in case the sidebar stretches over the height of the window
        //_this.layout.fix();
      });
      checkElement.parent("li").removeClass("active");
    }
    //If the menu is not visible
    else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
      //Get the parent menu
      var parent = $this.parents('ul').first();
      //Close all open menus within the parent
      var ul = parent.find('ul:visible').slideUp(animationSpeed);
      //Remove the menu-open class from the parent
      ul.removeClass('menu-open');
      //Get the parent li
      var parent_li = $this.parent("li");

      //Open the target menu and add the menu-open class
      checkElement.slideDown(animationSpeed, function () {
        //Add the class active to the parent li
        checkElement.addClass('menu-open');
        parent.find('li.active').removeClass('active');
        parent_li.addClass('active');
        //Fix the layout in case the sidebar stretches over the height of the window
        _this.layout.fix();
      });
    }
    //if this isn't a link, prevent the page from being redirected
    if (checkElement.is('.treeview-menu')) {
      e.preventDefault();
    }
  });
};
