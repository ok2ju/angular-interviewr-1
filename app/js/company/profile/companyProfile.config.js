module.exports = function($stateProvider) {
  $stateProvider
    .state('app.companyProfile', {
      url: '/companies/:id/view',
      templateUrl: 'js/company/profile/company-profile.html',
      controller: 'CompanyProfileController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Company'
      }
    });
};
