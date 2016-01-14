require('angular')
  .module('app.vacancy', [
      'app.vacancy.create',
      'app.vacancy.manage',
      'app.vacancy.candidates',
      'app.vacancy.list'
    ])
    .config(vacancyConfig);

require('./create');
require('./manage');
require('./candidates');
require('./list');

function vacancyConfig($stateProvider) {
  $stateProvider
    .state('app.candidates', {
      url: '/candidates',
      templateUrl: 'src/vacancy/candidates/candidates.tpl.html',
      controller: 'CandidatesController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Candidates'
      }
    })
    .state('app.candidates.grid', {
      templateUrl: 'src/vacancy/candidates/views/grid-view.tpl.html'
    })
    .state('app.candidates.list', {
      templateUrl: 'src/vacancy/candidates/views/list-view.tpl.html'
    })
    .state('app.vacanciesList', {
      url: '/vacancies',
      templateUrl: 'src/vacancy/list/vacancies-list.tpl.html',
      controller: 'VacancyListController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Vacancies'
      }
    })
    .state('app.vacanciesCreate', {
      url: '/vacancies/create',
      templateUrl: 'src/vacancy/create/create.html',
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
    })
    .state('app.vacanciesProfile', {
      url: '/vacancies/:id',
      templateUrl: 'src/vacancy/profile/vacancy-profile.tpl.html',
      controller: 'VacancyProfileController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Vacancy'
      }
    })
    .state('app.vacanciesManage', {
      abstract: true,
      url: '/manage/vacancies',
      templateUrl: 'src/vacancy/manage/manage-vacancies.tpl.html',
      data: {
        requiresLogin: true,
        pageTitle: 'Manage Vacancies'
      }
    })
    .state('app.vacanciesManage.companies', {
      url: '',
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
}
