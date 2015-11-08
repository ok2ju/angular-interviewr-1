(function() {
  'use strict';

  require('angular').module('app.company.manage', [
      'ui.router',
      'app.company.resource',
      'toastr'
    ])
    .config(require('./manage.config'))
    .controller('ManageCompanyController', require('./manage.controller'));
})();
