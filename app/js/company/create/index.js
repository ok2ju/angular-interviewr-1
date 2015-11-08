(function() {
  'use strict';

  require('angular').module('app.company.create', [
      'ui.router',
      'app.company.resource',
      'app.shared.meta',
      'toastr',
      'ngTagsInput',
      'ui.bootstrap',
      'ngMessages'
    ])
    .config(require('./createCompany.config'))
    .controller('CreateCompanyController', require('./createCompany.controller'));
})();
