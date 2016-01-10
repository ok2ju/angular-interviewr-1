module.exports = function($stateProvider) {
  $stateProvider
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
    });
};
