import './sass/style.scss';
import angular from 'angular';
import 'angular-ui-bootstrap';
import 'angular-ui-router';
import 'angular-resource';
import 'angular-messages';
import 'angular-toastr';
import 'angular-jwt';
import 'angular-storage';
import 'ng-tags-input';
import 'angular-loading-bar';
import 'cropper';
import 'ng-file-upload';
import 'restangular';
import 'angular-sanitize';
import 'ui-select/dist/select.js';
import 'fullcalendar';
import 'angular-ui-calendar';

angular
  .module('app', [
    'ui.bootstrap',
    'ui.router',
    'angular-jwt',
    'angular-storage',
    'angular-loading-bar',
    'ngSanitize',
    'ui.select',

    'app.config',

    /* Resources */
    'app.resources',

    /* Services */
    'app.services',

    /* Layout areas */
    'app.header',
    'app.sidebar',
    'app.landing',
    'app.timepicker',

    /* Feature areas */
    'app.user',
    'app.company',
    'app.vacancy',
    'app.calendar',
    'app.iroom'
  ])
  .config(require('./app.config'))
  .run(run);

import './config';
import './resources';
import './services';
import './filters';
import './components';

function run($rootScope, $state, store, jwtHelper) {

  $rootScope.$on('$stateChangeStart', function(e, to, params) {
    if(to.data && to.data.requiresLogin) {
      if(!store.get('jwt') || jwtHelper.isTokenExpired(store.get('jwt'))) {
        e.preventDefault();
        $state.go('intro.login');
      }
    }

    if(to.redirectTo) {
      e.preventDefault();
      $state.go(to.redirectTo, params);
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

  $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
    console.log('$stateChangeStart to '+toState.to+'- fired when the transition begins. toState,toParams : \n',toState, toParams);
  });

  $rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams){
    console.log('$stateChangeError - fired when an error occurs during transition.');
    console.log(arguments);
  });

  $rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
    console.log('$stateChangeSuccess to '+toState.name+'- fired once the state transition is complete.');
  });

  $rootScope.$on('$viewContentLoaded',function(event){
    console.log('$viewContentLoaded - fired after dom rendered',event);
  });

  $rootScope.$on('$stateNotFound',function(event, unfoundState, fromState, fromParams){
    console.log('$stateNotFound '+unfoundState.to+'  - fired when a state cannot be found by its name.');
    console.log(unfoundState, fromState, fromParams);
  });
}
