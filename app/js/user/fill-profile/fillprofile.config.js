module.exports = function($stateProvider) {
  $stateProvider
    .state('app.fillprofile', {
      url: '/fillprofile',
      templateUrl: 'js/user/fill-profile/fillProfile.html',
      controller: 'FillprofileController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true
      }
    });
};
