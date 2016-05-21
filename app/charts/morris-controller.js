(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name charts.controller:MorrisCtrl
   *
   * @description
   *
   */
  angular
    .module('charts')
    .controller('MorrisCtrl', MorrisCtrl);

  function MorrisCtrl() {
    var vm = this;
    vm.ctrlName = 'MorrisCtrl';
  }
}());
