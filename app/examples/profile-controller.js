(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name examples.controller:ProfileCtrl
   *
   * @description
   *
   */
  angular
    .module('examples')
    .controller('ProfileCtrl', ProfileCtrl);

  function ProfileCtrl() {
    var vm = this;
    vm.ctrlName = 'ProfileCtrl';
  }
}());
