(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name mailbox.controller:ComposeCtrl
   *
   * @description
   *
   */
  angular
    .module('mailbox')
    .controller('ComposeCtrl', ComposeCtrl);

  function ComposeCtrl() {
    var vm = this;
    vm.ctrlName = 'ComposeCtrl';
  }
}());
