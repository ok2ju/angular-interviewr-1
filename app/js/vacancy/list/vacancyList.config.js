module.exports = function($stateProvider) {
  $stateProvider
    .state('app.vacancies', {
      url: '/vacancies',
      templateUrl: 'js/vacancy/list/vacancies-list.html',
      controller: 'VacancyListController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Vacancies'
      }
    });
};
