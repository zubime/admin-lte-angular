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
      'colorpicker.module',
      'chart.js',
      'angular-flot',
      'angular.morris-chart',
      'wysiwyg.module',
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
