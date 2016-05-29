(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name uiElements.controller:GeneralCtrl
   *
   * @description
   *
   */
  angular
    .module('uiElements')
    .controller('GeneralCtrl', GeneralCtrl);

  function GeneralCtrl() {
    var vm = this;
    vm.ctrlName = 'GeneralCtrl';

    vm.groups = [
      {
        title: 'Dynamic Group Header - 1',
        content: 'Dynamic Group Body - 1'
      },
      {
        title: 'Dynamic Group Header - 2',
        content: 'Dynamic Group Body - 2'
      }
    ];

    vm.items = ['Item 1', 'Item 2', 'Item 3'];

    vm.addItem = function() {
      var newItemNo = $scope.items.length + 1;
      $scope.items.push('Item ' + newItemNo);
    };

  }
}());
