module.exports = function($stateProvider) {
  $stateProvider
    .state('app.vacancies', {
      url: '/vacancies',
      templateUrl: 'src/vacancy/list/vacancies-list.tpl.html',
      controller: 'VacancyListController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Vacancies'
      }
    });
};
