module.exports = function($stateProvider) {
  $stateProvider
    .state('app.companyProfile', {
      url: '/companies/:id/view',
      templateUrl: 'src/company/profile/company-profile.tpl.html',
      controller: 'CompanyProfileController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Company'
      }
    });
};
