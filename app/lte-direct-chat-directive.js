(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name adminLteAngular.directive:lteDirectChat
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="adminLteAngular">
       <file name="index.html">
        <lte-direct-chat></lte-direct-chat>
       </file>
     </example>
   *
   */
  angular
    .module('adminLteAngular')
    .directive('lteDirectChat', lteDirectChat);

  function lteDirectChat() {
    return {
      restrict: 'EA',
      scope: {
        messages: '=',
        sendHandler: '&send',
        user: '='
      },
      templateUrl: '/lte-direct-chat-directive.tpl.html',
      replace: false,
      controllerAs: 'lteDirectChat',
      controller: function () {
        var vm = this;
        vm.name = 'lteDirectChat';
      },

      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
        scope.pullClass = ['pull-left', 'pull-right'];
        scope.i = 0;
        element.activateBox();

        var contactToggleSelector = '[data-widget="chat-pane-toggle"]';
        element.on('click', contactToggleSelector, function () {
          var box = angular.element(this).parents('.direct-chat').first();
          box.toggleClass('direct-chat-contacts-open');
        });
        scope.message = '';
        scope.send = function( message ){
          scope.messages.push(
            {name:scope.user.name,time:new Date(),img:scope.user.img,
            text:message,pullright:false}

          );
          scope.message = '';
          scope.sendHandler(message);
        }

      }
    };
  }
}());
