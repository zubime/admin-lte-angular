(function () {
  'use strict';

  /* @ngdoc object
   * @name adminLteAngular
   * @description
   *
   */
  angular
    .module('adminLteAngular', [
      'ui.router',
      'ui.bootstrap',
      'home',
      'examples',
      'mailbox',
      'calendar',
      'form',
      'tables',
      'dashboard',
      'uiElements',
      'charts'
    ]);
}());
