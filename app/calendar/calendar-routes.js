(function () {
  'use strict';

  angular
    .module('calendar')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('calendar', {
        url: '/calendar',
        templateUrl: 'calendar/calendar.tpl.html',
        controller: 'CalendarCtrl',
        controllerAs: 'calendar'
      });
  }
}());
