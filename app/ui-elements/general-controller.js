(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name uiElements.controller:GeneralCtrl
   *
   * @description
   *
   */
  angular
    .module('uiElements')
    .controller('GeneralCtrl', GeneralCtrl);

  function GeneralCtrl() {
    var vm = this;
    vm.ctrlName = 'GeneralCtrl';
  }
}());
