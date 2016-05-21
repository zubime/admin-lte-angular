(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name examples.controller:404ErrorCtrl
   *
   * @description
   *
   */
  angular
    .module('examples')
    .controller('404ErrorCtrl', ErrorCtrl);

  function ErrorCtrl() {
    var vm = this;
    vm.ctrlName = '404ErrorCtrl';
  }
}());
