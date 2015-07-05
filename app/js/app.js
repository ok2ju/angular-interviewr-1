'use strict';

var angular = require('angular');

require('angular-ui-router');

var app = angular.module('todoApp', ['ui.router']);

require('./service');
require('./controller');

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/shows');

  $stateProvider
      .state('shows', {
        url:'/shows',
        templateUrl: 'views/shows.html',
        controller: 'ShowsController'
      })
      .state('shows.detail', {
        url: '/detail/:id',
        templateUrl: 'views/shows-detail.html',
        controller: 'ShowsDetailController'
      });
});