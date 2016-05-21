(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name examples.controller:LoginCtrl
   *
   * @description
   *
   */
  angular
    .module('examples')
    .controller('LoginCtrl', LoginCtrl);

  function LoginCtrl() {
    var vm = this;
    vm.ctrlName = 'LoginCtrl';
  }
}());
