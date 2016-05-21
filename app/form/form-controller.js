(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name form.controller:FormCtrl
   *
   * @description
   *
   */
  angular
    .module('form')
    .controller('FormCtrl', FormCtrl);

  function FormCtrl() {
    var vm = this;
    vm.ctrlName = 'FormCtrl';
  }
}());
