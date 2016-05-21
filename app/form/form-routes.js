(function () {
  'use strict';

  angular
    .module('form')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('form', {
        url: '/form',
        templateUrl: 'form/form.tpl.html',
        controller: 'FormCtrl',
        controllerAs: 'form'
      });
  }
}());
