(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name mailbox.controller:InboxCtrl
   *
   * @description
   *
   */
  angular
    .module('mailbox')
    .controller('InboxCtrl', InboxCtrl);

  function InboxCtrl() {
    var vm = this;
    vm.ctrlName = 'InboxCtrl';
  }
}());
