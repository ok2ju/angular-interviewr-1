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
      .state('auth', {
          abstract: true,
          url: '/auth',
          views: {
              'content': {
                  templateUrl: 'views/auth/auth-layout.html'
              }
          }
      })
      .state('auth.login', {
          url: '/login',
          templateUrl: 'views/auth/login.html'
      })
      .state('auth.register', {
          url: '/register',
          templateUrl: 'views/auth/register.html'
      })
      .state('app', {
          url: '/companies',
          views: {
              'header': {
                  templateUrl: 'views/header.html'
              },
              'content': {
                  templateUrl: 'views/companyPage.html',
                  controller: 'CandidatesController'
              },
              'aside': {
                  templateUrl: 'views/aside.html'
              }
          }
      });
});