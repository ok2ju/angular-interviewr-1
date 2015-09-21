module.exports = function($stateProvider) {
  $stateProvider
    .state('app.userSettings', {
      url: '/settings',
      templateUrl: 'js/user/settings/settings.html',
      controller: 'UserSettingsController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Settings'
      }
    });
};
