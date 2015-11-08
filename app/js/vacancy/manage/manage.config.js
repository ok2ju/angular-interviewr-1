module.exports = function($stateProvider) {
  $stateProvider
    .state('app.vacanciesManage', {
      url: '/vacancies/manage',
      templateUrl: 'js/vacancy/manage/manage-vacancies.html',
      controller: 'ManageVacanciesController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Manage Vacancies'
      }
    });
};
