import angular from 'angular';
import {ROOT_DIR} from '../../constants';

angular
  .module('app.user', [
      'app.user.login',
      'app.user.signup',
      'app.user.profile',
      'app.user.settings'
    ])
    .config(userConfig);

require('./login');
require('./signup');
require('./profile');
require('./settings');

function userConfig($stateProvider) {
  $stateProvider
    .state('intro.login', {
      url: '/login',
      controller: 'LoginController',
      templateUrl: `${ROOT_DIR}/src/components/user/login/login.tpl.html`,
      controllerAs: 'vm',
      data: {
        pageTitle: 'Login'
      }
    })
    .state('app.userProfile', {
      url: '/user/:id/profile',
      templateUrl: `${ROOT_DIR}/src/components/user/profile/user-profile.tpl.html`,
      controller: 'UserProfileController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Profile'
      }
    })
    .state('app.userSettings', {
      abstract: true,
      url: '/settings',
      templateUrl: `${ROOT_DIR}/src/components/user/settings/settings.tpl.html`,
      controller: 'UserSettingsController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Settings'
      }
    })
    .state('app.userSettings.general', {
      url: '/general',
      templateUrl: `${ROOT_DIR}/src/components/user/settings/tabs/general.tpl.html`
    })
    .state('app.userSettings.experience', {
      url: '/experience',
      templateUrl: `${ROOT_DIR}/src/components/user/settings/tabs/experience.tpl.html`
    })
    .state('intro.signup', {
      url: '/signup',
      controller: 'SignupController',
      templateUrl: `${ROOT_DIR}/src/components/user/signup/signup.tpl.html`,
      controllerAs: 'vm',
      data: {
        pageTitle: 'SignUp'
      }
    });
}
