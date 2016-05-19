(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.controller:HomeCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl() {
    var vm = this;
    vm.ctrlName = 'HomeCtrl';
    vm.info = {
      text: 'Hello',
      number: '5',
      icon: 'fa-star-o',
      color: 'green',
      description: '70% Increase in 30 Days',
      progress: 50
    };
  }
}());
