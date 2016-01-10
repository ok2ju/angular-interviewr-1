module.exports = function($stateProvider) {
  $stateProvider
    .state('app.vacanciesManage', {
      url: '/vacancies/manage',
      templateUrl: 'src/vacancy/manage/manage-vacancies.tpl.html',
      controller: 'ManageVacanciesController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Manage Vacancies'
      }
    })

    .state('app.createVacancy', {
      url: '/vacancies/create',
      templateUrl: 'src/vacancy/manage/create.html',
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
