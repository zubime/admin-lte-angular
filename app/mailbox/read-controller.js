(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name mailbox.controller:ReadCtrl
   *
   * @description
   *
   */
  angular
    .module('mailbox')
    .controller('ReadCtrl', ReadCtrl);

  function ReadCtrl() {
    var vm = this;
    vm.ctrlName = 'ReadCtrl';
  }
}());
