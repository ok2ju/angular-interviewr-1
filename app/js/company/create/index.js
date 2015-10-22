(function() {
  'use strict';

  require('angular').module('app.company.create', [
      'ui.router',
      'app.company.resource',
      'ui.bootstrap'
    ])
    .config(require('./createCompany.config'))
    .controller('CreateCompanyController', require('./createCompany.controller'));
})();
