module.exports = function($stateProvider) {
  $stateProvider
    .state('app.userProfile', {
      url: '/user/:id/profile',
      templateUrl: 'src/user/profile/user-profile.tpl.html',
      controller: 'UserProfileController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Profile'
      }
    });
};
