(function() {
  'use strict';

  require('angular').module('app.regCompany', ['ui.router'])
    .config(require('./regCompany.config'))
    .controller('RegCompanyController', require('./regCompany.controller'))
    .factory('CompanyService', require('./company.service'));
})();
