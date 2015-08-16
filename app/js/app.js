(function() {
    'use strict';

    var $ = require('jquery');
    var angular = require('angular');
    require('angular-ui-router');
    require('angular-cookies');
    require('angular-resource');
    require('angular-messages');
    require('angular-strap');
    require('angular-strap-tpl');

    angular
        .module('app', [
            'ui.router',
            'ngCookies',
            'ngResource',
            'ngMessages',
            'mgcrea.ngStrap.alert',
            'app.auth',
            'app.login',
            'app.register',
            'app.candidates',
            'app.sidebar',
            'app.header',
            'app.fillprofile',
            'app.regCompany',
            'app.myCompanyProfile'
        ])
        .config(config);

    require('./auth-services');
    require('./login');
    require('./register');
    require('./candidates');
    require('./sidebar');
    require('./header');
    require('./fill-profile');
    require('./register-company');
    require('./my-company-profile');

    function config($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('intro', {
                abstract: true,
                views: {
                    'content': {
                        templateUrl: 'templates/intro-layout.html'
                    }
                }
            })
            .state('intro.landing', {
                url:'/',
                templateUrl: 'js/landing/landing.html'
            })
            .state('intro.login', {
                url: '/login',
                controller: 'LoginController',
                templateUrl: 'js/login/login.html',
                controllerAs: 'vm'
            })
            .state('intro.register', {
                url: '/register',
                controller: 'RegisterController',
                templateUrl: 'js/register/register.html',
                controllerAs: 'vm'
            })
            .state('app', {
                abstract: true,
                views: {
                    'content': {
                        templateUrl: 'templates/app-layout.html'
                    }
                }
            })
            .state('app.candidates', {
                url: '/candidates',
                templateUrl: 'js/candidates/candidates.html',
                controller: 'CandidatesController',
                controllerAs: 'vm'
            })
            .state('app.candidates.grid', {
                templateUrl: 'js/candidates/views/grid-view.html'
            })
            .state('app.candidates.list', {
                templateUrl: 'js/candidates/views/list-view.html'
            })
            .state('app.fillprofile', {
                url: '/fillprofile',
                templateUrl: 'js/fill-profile/fillProfile.html',
                controller: 'FillprofileController',
                controllerAs: 'vm'
            })
            .state('app.regCompany', {
                url: '/regcompany',
                templateUrl: 'js/register-company/register-company.html',
                controller: 'RegCompanyController',
                controllerAs: 'vm'
            })
            .state('app.myCompanyProfile', {
                url: '/mycompany',
                templateUrl: 'js/my-company-profile/my-company-profile.html',
                controller: 'MyCompanyProfileController',
                controllerAs: 'vm'
            });
    }

})();
