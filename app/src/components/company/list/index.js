import angular from 'angular';

angular
  .module('app.company.list', ['app.filters'])
    .controller('CompanyListController', require('./companyList.controller'));
