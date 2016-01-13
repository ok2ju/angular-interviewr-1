module.exports = function($stateProvider) {
  $stateProvider
    .state('app.vacanciesManage', {
      abstract: true,
      url: '/vacancies/manage',
      templateUrl: 'src/vacancy/manage/manage-vacancies.tpl.html',
      data: {
        requiresLogin: true,
        pageTitle: 'Manage Vacancies'
      }
    })
    .state('app.vacanciesManage.companies', {
      url: '/companies',
      templateUrl: 'src/vacancy/manage/companies-list.tpl.html',
      controller: 'ManageVacanciesController',
      controllerAs: 'vm'
    })
    .state('app.vacanciesManage.vacancies', {
      url: '/companies/:id',
      templateUrl: 'src/vacancy/manage/vacancies-list.tpl.html',
      controller: 'VacanciesListController',
      controllerAs: 'vm'
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
