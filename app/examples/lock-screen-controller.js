(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name examples.controller:LockScreenCtrl
   *
   * @description
   *
   */
  angular
    .module('examples')
    .controller('LockScreenCtrl', LockScreenCtrl);

  function LockScreenCtrl() {
    var vm = this;
    vm.ctrlName = 'LockScreenCtrl';
  }
}());
