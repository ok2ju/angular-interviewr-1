module.exports = function($stateProvider) {
  $stateProvider
    .state('app.editCompany', {
      url: '/company/:id/edit',
      templateUrl: 'js/company/edit/edit-company.html',
      controller: 'EditCompanyController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Edit Company'
      }
    });
};
