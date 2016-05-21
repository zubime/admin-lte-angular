(function () {
  'use strict';

  angular
    .module('mailbox')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('mailbox', {
        url: '/mailbox',
        templateUrl: 'mailbox/mailbox.tpl.html',
        controller: 'MailboxCtrl',
        controllerAs: 'mailbox'
      })
      .state('compose', {
        url: '/compose',
        templateUrl: 'mailbox/compose.tpl.html',
        controller: 'ComposeCtrl',
        controllerAs: 'compose'
      })
      .state('read', {
        url: '/read',
        templateUrl: 'mailbox/read.tpl.html',
        controller: 'ReadCtrl',
        controllerAs: 'read'
      })
      .state('inbox', {
        url: '/inbox',
        templateUrl: 'mailbox/inbox.tpl.html',
        controller: 'InboxCtrl',
        controllerAs: 'inbox'
      });
  }
}());
