(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name uiElements.controller:ButtonsCtrl
   *
   * @description
   *
   */
  angular
    .module('uiElements')
    .controller('ButtonsCtrl', ButtonsCtrl);

  function ButtonsCtrl() {
    var vm = this;
    vm.ctrlName = 'ButtonsCtrl';
  }
}());
