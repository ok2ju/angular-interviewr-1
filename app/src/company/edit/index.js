require('angular')
  .module('app.company.edit', [
    'app.resource.company',
    'toastr',
    'ngTagsInput',
    'ui.bootstrap',
    'ngMessages',
    'ngFileUpload'
  ])
  .controller('EditCompanyController', require('./editCompany.controller'));
