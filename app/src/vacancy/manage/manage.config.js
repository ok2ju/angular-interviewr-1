module.exports = function($stateProvider) {
  $stateProvider
    .state('app.vacanciesManage', {
      abstract: true,
      url: '/vacancies',
      templateUrl: 'src/vacancy/manage/manage-vacancies.tpl.html',
      data: {
        requiresLogin: true,
        pageTitle: 'Manage Vacancies'
      }
    })
    .state('app.vacanciesManage.companies', {
      url: '/manage',
      templateUrl: 'src/vacancy/manage/companies-list.tpl.html',
      controller: 'ManageVacanciesController',
      controllerAs: 'vm'
    })
    .state('app.vacanciesManage.vacancies', {
      url: '?company_id',
      templateUrl: 'src/vacancy/manage/vacancies-list.tpl.html',
      controller: 'VacanciesListController',
      controllerAs: 'vm'
    });
};
