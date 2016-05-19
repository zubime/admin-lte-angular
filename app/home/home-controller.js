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
    vm.box = {
      title: 'title',
      footer: 'footer'
    }
    vm.messages = [
      {name:'Alexander Pierce',time:'23 Jan 2:05 pm',img:'/images/lte/user1-128x128.jpg',
      text:'Is this template really for free? That\'s unbelievable!',pullright:false},
      {name:'Alexander Pierce',time:'23 Jan 2:05 pm',img:'/images/lte/user1-128x128.jpg',
      text:'Is this template really for free? That\'s unbelievable!',pullright:true},
      {name:'Alexander Pierce',time:'23 Jan 2:05 pm',img:'/images/lte/user1-128x128.jpg',
      text:'Is this template really for free? That\'s unbelievable!',pullright:false},
      {name:'Alexander Pierce',time:'23 Jan 2:05 pm',img:'/images/lte/user1-128x128.jpg',
      text:'Is this template really for free? That\'s unbelievable!',pullright:true},

    ];


  }
}());
