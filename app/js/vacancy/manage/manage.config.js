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
    })

    .state('app.createVacancy', {
      url: '/vacancies/create',
      templateUrl: 'js/vacancy/manage/create.html',
      controller: 'VacancyCreateController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Create Vacancy'
      },
      resolve: {
        companyResource: 'CompanyResource',

        companies: function(myself, companyResource) {
          return companyResource.listCompanies({owner: myself._id});
        }
      }
    });
};
