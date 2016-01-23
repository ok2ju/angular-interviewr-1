require('angular').module('app.company.manage', [
    'app.resource.company',
    'app.resource.user',
    'toastr'
  ])
  .controller('ManageCompanyController', require('./manage.controller'));
