(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name calendar.controller:CalendarCtrl
   *
   * @description
   *
   */
  angular
    .module('calendar')
    .controller('CalendarCtrl', CalendarCtrl);

  function CalendarCtrl() {
    var vm = this;
    vm.ctrlName = 'CalendarCtrl';
  }
}());
