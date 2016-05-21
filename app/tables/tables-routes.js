(function () {
  'use strict';

  angular
    .module('tables')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('tables', {
        url: '/tables',
        templateUrl: 'tables/tables.tpl.html',
        controller: 'TablesCtrl',
        controllerAs: 'tables'
      });
  }
}());
