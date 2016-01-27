import angular from 'angular';
import {ROOT_DIR} from '../../constants';

angular
  .module('app.company', [
    'app.company.manage',
    'app.company.create',
    'app.company.list',
    'app.company.profile',
    'app.company.edit'
  ])
  .config(companyConfig);

require('./manage');
require('./create');
require('./list');
require('./profile');
require('./edit');

function companyConfig($stateProvider) {
  $stateProvider
    .state('app.createCompany', {
      url: '/company/create',
      templateUrl: `${ROOT_DIR}/src/components/company/create/create-company.tpl.html`,
      controller: 'CreateCompanyController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Create Company'
      }
    })
    .state('app.editCompany', {
      url: '/company/:id/edit',
      templateUrl: `${ROOT_DIR}/src/components/company/edit/edit-company.tpl.html`,
      controller: 'EditCompanyController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Edit Company'
      }
    })
    .state('app.companies', {
      url: '/companies',
      templateUrl: `${ROOT_DIR}/src/components/company/list/companies-list.tpl.html`,
      controller: 'CompanyListController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Companies'
      }
    })
    .state('app.manageCompany', {
      url: '/company/manage',
      templateUrl: `${ROOT_DIR}/src/components/company/manage/manage-company.tpl.html`,
      controller: 'ManageCompanyController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Manage Company'
      }
    })
    .state('app.companyProfile', {
      url: '/companies/:id/view',
      templateUrl: `${ROOT_DIR}/src/components/company/profile/company-profile.tpl.html`,
      controller: 'CompanyProfileController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Company'
      }
    });
}
