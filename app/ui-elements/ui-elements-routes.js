(function () {
  'use strict';

  angular
    .module('uiElements')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('uiElements', {
        url: '/ui-elements',
        templateUrl: 'ui-elements/ui-elements.tpl.html',
        controller: 'UiElementsCtrl',
        controllerAs: 'uiElements'
      })
      .state('general', {
        url: '/general',
        templateUrl: 'ui-elements/general.tpl.html',
        controller: 'GeneralCtrl',
        controllerAs: 'general'
      })
      .state('icons', {
        url: '/icons',
        templateUrl: 'ui-elements/icons.tpl.html',
        controller: 'IconsCtrl',
        controllerAs: 'icons'
      })
      .state('buttons', {
        url: '/buttons',
        templateUrl: 'ui-elements/buttons.tpl.html',
        controller: 'ButtonsCtrl',
        controllerAs: 'buttons'
      })
      .state('sliders', {
        url: '/sliders',
        templateUrl: 'ui-elements/sliders.tpl.html',
        controller: 'SlidersCtrl',
        controllerAs: 'sliders'
      })
      .state('timeline', {
        url: '/timeline',
        templateUrl: 'ui-elements/timeline.tpl.html',
        controller: 'TimelineCtrl',
        controllerAs: 'timeline'
      })
      .state('modals', {
        url: '/modals',
        templateUrl: 'ui-elements/modals.tpl.html',
        controller: 'ModalsCtrl',
        controllerAs: 'modals'
      });
  }
}());
