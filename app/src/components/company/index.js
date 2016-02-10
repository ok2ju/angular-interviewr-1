import angular from 'angular';
import {CompanyCard} from './company-card/index.js';

angular
  .module('app.company', [
    'app.company.manage',
    'app.company.create',
    'app.company.list',
    'app.company.profile',
    'app.company.edit'
  ])
  .directive('companyCard', CompanyCard)
  .config(companyConfig);

require('./manage');
require('./create');
require('./list');
require('./profile');
require('./edit');

function companyConfig($stateProvider, config) {
  $stateProvider
    .state('app.createCompany', {
      url: '/company/create',
      templateUrl: `${config.ROOT_DIR}/src/components/company/create/create-company.tpl.html`,
      controller: 'CreateCompanyController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Create Company'
      }
    })
    .state('app.editCompany', {
      url: '/company/:id/edit',
      templateUrl: `${config.ROOT_DIR}/src/components/company/edit/edit-company.tpl.html`,
      controller: 'EditCompanyController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Edit Company'
      }
    })
    .state('app.companies', {
      url: '/companies',
      templateUrl: `${config.ROOT_DIR}/src/components/company/list/companies-list.tpl.html`,
      controller: 'CompanyListController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Companies'
      }
    })
    .state('app.manageCompany', {
      url: '/company/manage',
      templateUrl: `${config.ROOT_DIR}/src/components/company/manage/manage-company.tpl.html`,
      controller: 'ManageCompanyController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Manage Company'
      }
    })
    .state('app.companyProfile', {
      url: '/companies/:id/view',
      templateUrl: `${config.ROOT_DIR}/src/components/company/profile/company-profile.tpl.html`,
      controller: 'CompanyProfileController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Company'
      }
    })
    .state('app.companyProfile.vacancies', {
      url: '',
      templateUrl: `${config.ROOT_DIR}/src/components/company/profile/vacancies.tpl.html`,
    })
    .state('app.companyProfile.comments', {
      templateUrl: `${config.ROOT_DIR}/src/components/company/profile/comments.tpl.html`,
    });
}
