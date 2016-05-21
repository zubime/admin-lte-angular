(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name tables.controller:TablesCtrl
   *
   * @description
   *
   */
  angular
    .module('tables')
    .controller('TablesCtrl', TablesCtrl);

  function TablesCtrl() {
    var vm = this;
    vm.ctrlName = 'TablesCtrl';
  }
}());
