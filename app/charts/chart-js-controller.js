(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name charts.controller:ChartJsCtrl
   *
   * @description
   *
   */
  angular
    .module('charts')
    .controller('ChartJsCtrl', ChartJsCtrl);

  function ChartJsCtrl() {
    var vm = this;
    vm.ctrlName = 'ChartJsCtrl';
  }
}());
