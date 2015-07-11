'use strict';

var angular = require('angular');

require('angular-ui-router');

var app = angular.module('interviewrApp', ['ui.router']);

require('./service');
require('./controller');

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('landing', {
          url:'/',
          views: {
              'content': {
                  templateUrl: 'views/landing.html'
              }
          }
      })
      .state('login', {
          url: '/login',
          views: {
              'content': {
                  templateUrl: 'views/login.html'
              }
          }
      })
      .state('register', {
          url: '/register',
          views: {
              'content': {
                  templateUrl: 'views/register.html'
              }
          }
      })
      .state('app', {
          url: '/companies',
          views: {
              'header': {
                  templateUrl: 'views/header.html'
              },
              'content': {
                  templateUrl: 'views/companyPage.html'
              },
              'aside': {
                  templateUrl: 'views/aside.html'
              }
          }
      });
});