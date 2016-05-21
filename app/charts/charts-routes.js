(function () {
  'use strict';

  angular
    .module('charts')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('charts', {
        url: '/charts',
        templateUrl: 'charts/charts.tpl.html',
        controller: 'ChartsCtrl',
        controllerAs: 'charts'
      })
      .state('chartJs', {
        url: '/chart-js',
        templateUrl: 'charts/chart-js.tpl.html',
        controller: 'ChartJsCtrl',
        controllerAs: 'chartJs'
      })
      .state('morris', {
        url: '/morris',
        templateUrl: 'charts/morris.tpl.html',
        controller: 'MorrisCtrl',
        controllerAs: 'morris'
      })
      .state('flot', {
        url: '/flot',
        templateUrl: 'charts/flot.tpl.html',
        controller: 'FlotCtrl',
        controllerAs: 'flot'
      })
      .state('inlineCharts', {
        url: '/inline-charts',
        templateUrl: 'charts/inline-charts.tpl.html',
        controller: 'InlineChartsCtrl',
        controllerAs: 'inlineCharts'
      });
  }
}());
