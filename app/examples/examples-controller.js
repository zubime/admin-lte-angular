(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name examples.controller:ExamplesCtrl
   *
   * @description
   *
   */
  angular
    .module('examples')
    .controller('ExamplesCtrl', ExamplesCtrl);

  function ExamplesCtrl() {
    var vm = this;
    vm.ctrlName = 'ExamplesCtrl';
  }
}());
