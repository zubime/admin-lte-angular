(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name examples.controller:RegisterCtrl
   *
   * @description
   *
   */
  angular
    .module('examples')
    .controller('RegisterCtrl', RegisterCtrl);

  function RegisterCtrl() {
    var vm = this;
    vm.ctrlName = 'RegisterCtrl';
  }
}());
