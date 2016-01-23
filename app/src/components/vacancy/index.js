import {ROOT_DIR} from '../../constants';

require('angular')
  .module('app.vacancy', [
      'app.vacancy.create',
      'app.vacancy.manage',
      'app.vacancy.candidates',
      'app.vacancy.list',
      'app.vacancy.edit'
    ])
    .config(vacancyConfig);

require('./create');
require('./manage');
require('./candidates');
require('./list');
require('./edit');

function vacancyConfig($stateProvider) {
  $stateProvider
    .state('app.candidates', {
      url: '/candidates',
      templateUrl: `${ROOT_DIR}/src/components/vacancy/candidates/candidates.tpl.html`,
      controller: 'CandidatesController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Candidates'
      }
    })
    .state('app.candidates.grid', {
      templateUrl: `${ROOT_DIR}/src/components/vacancy/candidates/views/grid-view.tpl.html`
    })
    .state('app.candidates.list', {
      templateUrl: `${ROOT_DIR}/src/components/vacancy/candidates/views/list-view.tpl.html`
    })
    .state('app.vacanciesList', {
      url: '/vacancies',
      templateUrl: `${ROOT_DIR}/src/components/vacancy/list/vacancies-list.tpl.html`,
      controller: 'VacancyListController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Vacancies'
      }
    })
    .state('app.vacanciesCreate', {
      url: '/vacancies/create',
      templateUrl: `${ROOT_DIR}/src/components/vacancy/create/create.tpl.html`,
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
    .state('app.vacanciesEdit', {
      url: '/vacancies/:id/edit',
      templateUrl: `${ROOT_DIR}/src/components/vacancy/edit/edit.tpl.html`,
      controller: 'VacancyEditController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Edit Vacancy'
      }
    })
    .state('app.vacanciesProfile', {
      url: '/vacancies/:id',
      templateUrl: `${ROOT_DIR}/src/components/vacancy/profile/vacancy-profile.tpl.html`,
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
      templateUrl: `${ROOT_DIR}/src/components/vacancy/manage/manage-vacancies.tpl.html`,
      data: {
        requiresLogin: true,
        pageTitle: 'Manage Vacancies'
      }
    })
    .state('app.vacanciesManage.companies', {
      url: '/',
      templateUrl: `${ROOT_DIR}/src/components/vacancy/manage/companies-list.tpl.html`,
      controller: 'ManageVacanciesController',
      controllerAs: 'vm'
    })
    .state('app.vacanciesManage.vacancies', {
      url: '?company_id',
      templateUrl: `${ROOT_DIR}/src/components/vacancy/manage/vacancies-list.tpl.html`,
      controller: 'VacanciesListController',
      controllerAs: 'vm'
    });
}
