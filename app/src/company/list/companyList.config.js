module.exports = function($stateProvider) {
  $stateProvider
    .state('app.companies', {
      url: '/companies',
      templateUrl: 'src/company/list/companies-list.tpl.html',
      controller: 'CompanyListController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Companies'
      }
    });
};
