(function() {
    'use strict';

    var $ = require('jquery');
    var angular = require('angular');
    require('angular-ui-router');
    require('angular-cookies');

    angular
        .module('app', [
            'ui.router',
            'ngCookies',
            'app.auth',
            'app.login',
            'app.register',
            'app.candidates',
            'app.sidebar'
        ])
        .config(config)
        .run(run);

    require('./auth-services');
    require('./login');
    require('./register');
    require('./candidates');
    require('./sidebar');

    function config($stateProvider, $urlRouterProvider) {
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
            });
    }

    function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic' + $rootScope.globals.currentUser.authdata;
        }

        $rootScope.$on('$locationChangeStart', function(event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/', '/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if(restrictedPage && !loggedIn) {
                $location.path('/');
            }
        });
    }

})();