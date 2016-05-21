(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name examples.controller:500ErrorCtrl
   *
   * @description
   *
   */
  angular
    .module('examples')
    .controller('500ErrorCtrl', ErrorCtrl);

  function ErrorCtrl() {
    var vm = this;
    vm.ctrlName = '500ErrorCtrl';
  }
}());
