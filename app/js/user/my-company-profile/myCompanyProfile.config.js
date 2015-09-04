module.exports = function($stateProvider) {
  $stateProvider
    .state('app.myCompanyProfile', {
      url: '/mycompany',
      templateUrl: 'js/user/my-company-profile/my-company-profile.html',
      controller: 'MyCompanyProfileController',
      controllerAs: 'vm'
    });
};
