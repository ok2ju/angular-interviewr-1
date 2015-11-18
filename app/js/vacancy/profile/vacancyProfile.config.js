module.exports = function($stateProvider) {
  $stateProvider
    .state('app.vacancyProfile', {
      url: '/vacancies/:id/view',
      templateUrl: 'js/vacancy/profile/vacancy-profile.html',
      controller: 'VacancyProfileController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Vacancy'
      }
    });
};
