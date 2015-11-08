module.exports = function($stateProvider) {
  $stateProvider
    .state('app.manageCompany', {
      url: '/company/manage',
      templateUrl: 'js/company/manage/manage-company.html',
      controller: 'ManageCompanyController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Manage Company'
      }
    });
};
