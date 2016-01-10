require('angular').module('app.company.manage', [
    'app.resource.company',
    'app.resource.user',
    'toastr'
  ])
  .config(require('./manage.config'))
  .controller('ManageCompanyController', require('./manage.controller'));
