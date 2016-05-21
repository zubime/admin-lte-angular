(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name uiElements.controller:TimelineCtrl
   *
   * @description
   *
   */
  angular
    .module('uiElements')
    .controller('TimelineCtrl', TimelineCtrl);

  function TimelineCtrl() {
    var vm = this;
    vm.ctrlName = 'TimelineCtrl';
  }
}());
