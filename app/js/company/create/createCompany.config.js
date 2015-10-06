module.exports = function($stateProvider) {
  $stateProvider
    .state('app.createCompany', {
      url: '/company/create',
      templateUrl: 'js/company/create/create-company.html',
      controller: 'CreateCompanyController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Create Company'
      }
    });
};
