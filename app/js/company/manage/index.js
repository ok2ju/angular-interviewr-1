(function() {
  'use strict';

  require('angular').module('app.company.manage', [
      'app.resource.company',
      'toastr'
    ])
    .config(require('./manage.config'))
    .controller('ManageCompanyController', require('./manage.controller'));
})();
