(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name charts.controller:FlotCtrl
   *
   * @description
   *
   */
  angular
    .module('charts')
    .controller('FlotCtrl', FlotCtrl);

  function FlotCtrl() {
    var vm = this;
    vm.ctrlName = 'FlotCtrl';
  }
}());
