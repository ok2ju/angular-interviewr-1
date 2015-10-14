module.exports = function($stateProvider) {
  $stateProvider
    .state('app.companies', {
      url: '/companies',
      templateUrl: 'js/company/list/companies-list.html',
      controller: 'CompanyListController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Companies'
      }
    });
};
