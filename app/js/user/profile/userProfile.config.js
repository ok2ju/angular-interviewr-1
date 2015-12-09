module.exports = function($stateProvider) {
  $stateProvider
    .state('app.userProfile', {
      url: '/user/:id/profile',
      templateUrl: 'js/user/profile/user-profile.html',
      controller: 'UserProfileController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Profile'
      }
    });
};
