module.exports = function($stateProvider) {
  $stateProvider
    .state('app.companyProfile', {
      url: '/companies/1',
      templateUrl: 'js/company/profile/company-profile.html',
      controller: 'CompanyProfileController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Company'
      }
    });
};
