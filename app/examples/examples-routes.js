(function () {
  'use strict';

  angular
    .module('examples')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('examples', {
        url: '/examples',
        templateUrl: 'examples/examples.tpl.html',
        controller: 'ExamplesCtrl',
        controllerAs: 'examples'
      })
      .state('profile', {
        url: '/profile',
        templateUrl: 'examples/profile.tpl.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      })
      .state('invoice', {
        url: '/invoice',
        templateUrl: 'examples/invoice.tpl.html',
        controller: 'InvoiceCtrl',
        controllerAs: 'invoice'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'examples/login.tpl.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'examples/register.tpl.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .state('lock_screen', {
        url: '/lock-screen',
        templateUrl: 'examples/lock-screen.tpl.html',
        controller: 'LockScreenCtrl',
        controllerAs: 'lockScreen'
      })
      .state('404_error', {
        url: '/404-error',
        templateUrl: 'examples/404-error.tpl.html',
        controller: '404ErrorCtrl',
        controllerAs: '404Error'
      })
      .state('500_error', {
        url: '/500-error',
        templateUrl: 'examples/500-error.tpl.html',
        controller: '500ErrorCtrl',
        controllerAs: '500Error'
      });
  }
}());
