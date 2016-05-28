(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name uiElements.controller:ModalsCtrl
   *
   * @description
   *
   */
  angular
    .module('uiElements')
    .controller('ModalsCtrl', ModalsCtrl);

  function ModalsCtrl() {
    var vm = this;
    vm.ctrlName = 'ModalsCtrl';
    vm.alerts = [
      {type:'danger',message:"Oh snap"},
      {type:'success',message:"Hello World!"}];
    vm.closeAlert = function($index){
      vm.alerts.splice($index,1);
    }
    vm.addAlert = function(){
      vm.alerts.push({type:'success',message:"Hello World!"})
    }
  }
}());
