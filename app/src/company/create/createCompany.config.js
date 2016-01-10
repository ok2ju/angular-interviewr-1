module.exports = function($stateProvider) {
  $stateProvider
    .state('app.createCompany', {
      url: '/company/create',
      templateUrl: 'src/company/create/create-company.tpl.html',
      controller: 'CreateCompanyController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Create Company'
      }
    });
};
