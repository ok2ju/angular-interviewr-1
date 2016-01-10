module.exports = function($stateProvider) {
  $stateProvider
    .state('app.manageCompany', {
      url: '/company/manage',
      templateUrl: 'src/company/manage/manage-company.tpl.html',
      controller: 'ManageCompanyController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Manage Company'
      }
    });
};
