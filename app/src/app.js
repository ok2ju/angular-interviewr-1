import $ from 'jquery';
global._ = require('lodash');
import angular from 'angular';
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
require('angular-sanitize');
require('ui-select/dist/select.js');

angular
  .module('app', [
    'ui.router',
    'angular-jwt',
    'angular-storage',
    'angular-loading-bar',
    'ngSanitize',
    'ui.select',

    /* Resources */
    'app.resources',

    /* Services */
    'app.services',

    /* Layout areas */
    'app.header',
    'app.sidebar',
    'app.landing',

    /* Feature areas */
    'app.user',
    'app.company',
    'app.vacancy',
    'app.videoroom'
  ])
  .config(require('./app.config'))
  .run(run)
  .constant('config', {
    'api_url': 'http://localhost:3000'
  });

// Resources
require('./common/resources');

// Services
require('./common/services');

// Filters
require('./common/filters');

require('./common/layout/landing');
require('./common/layout/sidebar');
require('./common/layout/header');

// Features
require('./components/user');
require('./components/company');
require('./components/vacancy');
require('./components/videoroom');

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



