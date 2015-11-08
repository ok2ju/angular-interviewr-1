(function() {
    'use strict';

    var $ = require('jquery');
    var angular = require('angular');
    require('angular-ui-router');
    require('angular-resource');
    require('angular-messages');
    require('angular-toastr');
    require('angular-jwt');
    require('angular-storage');
    require('ng-tags-input');
    require('angular-loading-bar');
    require('cropper');
    require('angular-modal');
    require('ng-file-upload');

    angular
        .module('app', [
          'ui.router',
          'ngResource',
          'ngFileUpload',
          'angular-jwt',
          'angular-storage',
          'angular-loading-bar',

          /* Layout areas */
          'app.header',
          'app.sidebar',
          'app.landing',
          'app.dropdown',

          /* Feature areas */
          'app.user.login',
          'app.user.signup',
          'app.user.profile',
          'app.user.settings',
          'app.company.manage',
          'app.company.create',
          'app.company.list',
          'app.company.profile',
          'app.vacancy.manage',
          'app.vacancy.candidates',
          'app.vacancy.list'
        ])
        .config(require('./app.config'))
        .run(run)
        .constant('config', {
          'api_url': 'http://localhost:3000'
        });

    // Resources
    require('./user/resource');
    require('./company/resource');
    require('./vacancy/resource');

    // Shared
    require('./shared/filters');

    require('./layout/landing');
    require('./layout/sidebar');
    require('./layout/header');
    require('./layout/dropdown');
    require('./user/login');
    require('./user/signup');
    require('./user/profile');
    require('./user/settings');
    require('./company/manage');
    require('./company/create');
    require('./company/list');
    require('./company/profile');
    require('./vacancy/manage');
    require('./vacancy/candidates');
    require('./vacancy/list');

    function run($rootScope, $state, store, jwtHelper) {
      $rootScope.$on('$stateChangeStart', function(e, to) {
        if(to.data && to.data.requiresLogin) {
          if(!store.get('jwt') || jwtHelper.isTokenExpired(store.get('jwt'))) {
            e.preventDefault();
            $state.go('intro.login');
          }
        }
      });

      $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        if (angular.isDefined(toState.data.pageTitle)) {
          $rootScope.pageTitle = toState.data.pageTitle + ' | interviewr';
          $rootScope.pageName = toState.data.pageTitle;
        }
      });

      angular.element(document).on('click', function(e) {
        $rootScope.$broadcast('documentClicked', angular.element(e.target));
      });
    }

})();
