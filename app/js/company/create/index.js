(function() {
  'use strict';

  require('angular').module('app.company.create', ['ui.router'])
    .config(require('./createCompany.config'))
    .controller('CreateCompanyController', require('./createCompany.controller'))
    .factory('CompanyService', require('./company.service'));
})();
