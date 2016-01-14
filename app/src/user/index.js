require('angular')
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
      templateUrl: 'src/user/login/login.tpl.html',
      controllerAs: 'vm',
      data: {
        pageTitle: 'Login'
      }
    })
    .state('app.userProfile', {
      url: '/user/:id/profile',
      templateUrl: 'src/user/profile/user-profile.tpl.html',
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
      templateUrl: 'src/user/settings/settings.tpl.html',
      controller: 'UserSettingsController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Settings'
      }
    })
    .state('app.userSettings.general', {
      url: '/general',
      templateUrl: 'src/user/settings/tabs/general.tpl.html'
    })
    .state('app.userSettings.experience', {
      url: '/experience',
      templateUrl: 'src/user/settings/tabs/experience.tpl.html'
    })
    .state('intro.signup', {
      url: '/signup',
      controller: 'SignupController',
      templateUrl: 'src/user/signup/signup.tpl.html',
      controllerAs: 'vm',
      data: {
        pageTitle: 'SignUp'
      }
    });
}
