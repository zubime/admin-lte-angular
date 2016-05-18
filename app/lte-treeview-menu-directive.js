(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name adminLteAngular.directive:lteTreeviewMenu
   * @restrict EA
   * @element
   *
   * @description
   * Tree()
   * ======
   * Converts the sidebar into a multilevel
   * tree view menu.
   *
   * @type Function
   * @Usage: $.AdminLTE.tree('.sidebar')
   *
   * @example
     <example module="adminLteAngular">
       <file name="index.html">
        <lte-treeview-menu></lte-treeview-menu>
       </file>
     </example>
   *
   */
//jQuery
/* Tree()
 * ======
 * Converts the sidebar into a multilevel
 * tree view menu.
 *
 * @type Function
 * @Usage: $.AdminLTE.tree('.sidebar')
 */


   //Angular
  angular
    .module('adminLteAngular')
    .directive('lteTreeviewMenu', lteTreeviewMenu);

  function lteTreeviewMenu() {

    function link(scope, element, attrs) {

     if(!scope.options){scope.options={};}
     if(!scope.options.animationSpeed){scope.options.animationSpeed = 200;}
     var animationSpeed = scope.options.animationSpeed;

        element.on('click','a', function (e) {

       //Get the clicked link and the next element
       var $this = angular.element(this);
       var checkElement = $this.next();

       //Check if the next element is a menu and is visible
       if ((checkElement.is('.treeview-menu')) && (checkElement.is(':visible')) && (!angular.element('body').hasClass('sidebar-collapse'))) {
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
           //element.parent('body').layout.fix();
         });
       }
       //if this isn't a link, prevent the page from being redirected
       if (checkElement.is('.treeview-menu')) {
         e.preventDefault();
       }
     });
   };


    return {
      restrict: 'EC',
      transclude: true,
      scope: {
        options: '=options',
        name: '@name',
        items: '=items'
      },
      templateUrl: '/lte-treeview-menu-directive.tpl.html',
      replace: true,
      controller: function () {
        var vm = this;
        vm.name = 'lteTreeviewMenu';
      },
      link: link
    };
  }
}());
