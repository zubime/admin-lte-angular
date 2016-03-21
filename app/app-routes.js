(function () {
  'use strict';

  angular
    .module('adminLteAngular')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}());
