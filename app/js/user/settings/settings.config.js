module.exports = function($stateProvider) {
  $stateProvider
    .state('app.userSettings', {
      abstract: true,
      url: '/settings',
      templateUrl: 'js/user/settings/settings.html',
      controller: 'UserSettingsController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Settings'
      }
    })
    .state('app.userSettings.general', {
      url: '/general',
      templateUrl: 'js/user/settings/general.html'
    })
    .state('app.userSettings.experience', {
      url: '/experience',
      templateUrl: 'js/user/settings/experience.html'
    });
};
