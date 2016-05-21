(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name charts.controller:InlineChartsCtrl
   *
   * @description
   *
   */
  angular
    .module('charts')
    .controller('InlineChartsCtrl', InlineChartsCtrl);

  function InlineChartsCtrl() {
    var vm = this;
    vm.ctrlName = 'InlineChartsCtrl';
  }
}());
