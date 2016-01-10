(function() {
    'use strict';

    var $ = require('jquery');
    global._ = require('lodash');
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
    require('restangular');

    angular
      .module('app', [
        'ui.router',
        'angular-jwt',
        'angular-storage',
        'angular-loading-bar',

        /* Resources */
        'app.resource.meta',
        'app.resource.user',

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
        'app.company.edit',

        'app.vacancy.manage',
        'app.vacancy.candidates',
        'app.vacancy.list',

        'app.videoroom'
      ])
      .config(require('./app.config'))
      .run(run)
      .constant('config', {
        'api_url': 'http://localhost:3000'
      });

    // Resources
    require('../common/services/user.service');
    require('../common/services/company.service');
    require('../common/services/vacancy.service');
    require('../common/services/meta.service');

    // Filters
    require('../common/filters/date.filter');
    require('../common/filters/category.filter');

    require('../common/layout/landing');
    require('../common/layout/sidebar');
    require('../common/layout/header');
    require('../common/layout/dropdown');

    // Features
    require('./user/login');
    require('./user/signup');
    require('./user/profile');
    require('./user/settings');

    require('./company/manage');
    require('./company/create');
    require('./company/list');
    require('./company/profile');
    require('./company/edit');

    require('./vacancy/manage');
    require('./vacancy/candidates');
    require('./vacancy/list');

    require('./videoroom');

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
