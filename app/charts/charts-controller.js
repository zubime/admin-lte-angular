(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name charts.controller:ChartsCtrl
   *
   * @description
   *
   */
  angular
    .module('charts')
    .controller('ChartsCtrl', ChartsCtrl);

  function ChartsCtrl() {
    var vm = this;
    vm.ctrlName = 'ChartsCtrl';
  }
}());
