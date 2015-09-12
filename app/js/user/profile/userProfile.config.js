module.exports = function($stateProvider) {
  $stateProvider
    .state('app.userProfile', {
      url: '/user/profile',
      templateUrl: 'js/user/profile/user-profile.html',
      controller: 'UserProfileController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true
      }
    });
};
