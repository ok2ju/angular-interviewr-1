module.exports = function($stateProvider) {
  $stateProvider
    .state('app.vacancyProfile', {
      url: '/vacancies/:id/view',
      templateUrl: 'src/vacancy/profile/vacancy-profile.tpl.html',
      controller: 'VacancyProfileController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Vacancy'
      }
    });
};
