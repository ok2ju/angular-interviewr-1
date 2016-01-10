module.exports = function($stateProvider) {
  $stateProvider
    .state('app.editCompany', {
      url: '/company/:id/edit',
      templateUrl: 'src/company/edit/edit-company.tpl.html',
      controller: 'EditCompanyController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Edit Company'
      }
    });
};
