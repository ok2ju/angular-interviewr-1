(function() {
  'use strict';

  require('angular').module('app.company.create', [
      'ui.router',
      'app.company.resource',
      'toastr',
      'ngTagsInput',
      'ui.bootstrap',
      'ngMessages'
    ])
    .config(require('./createCompany.config'))
    .controller('CreateCompanyController', require('./createCompany.controller'));
})();
