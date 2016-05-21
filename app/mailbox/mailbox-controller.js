(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name mailbox.controller:MailboxCtrl
   *
   * @description
   *
   */
  angular
    .module('mailbox')
    .controller('MailboxCtrl', MailboxCtrl);

  function MailboxCtrl() {
    var vm = this;
    vm.ctrlName = 'MailboxCtrl';
  }
}());
