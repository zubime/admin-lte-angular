(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name uiElements.controller:UiElementsCtrl
   *
   * @description
   *
   */
  angular
    .module('uiElements')
    .controller('UiElementsCtrl', UiElementsCtrl);

  function UiElementsCtrl() {
    var vm = this;
    vm.ctrlName = 'UiElementsCtrl';
  }
}());
