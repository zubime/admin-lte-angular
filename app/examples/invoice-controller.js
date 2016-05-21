(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name examples.controller:InvoiceCtrl
   *
   * @description
   *
   */
  angular
    .module('examples')
    .controller('InvoiceCtrl', InvoiceCtrl);

  function InvoiceCtrl() {
    var vm = this;
    vm.ctrlName = 'InvoiceCtrl';
  }
}());
