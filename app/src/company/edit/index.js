require('angular')
  .module('app.company.edit', [
    'app.resource.company',
    'toastr',
    'ngTagsInput',
    'ui.bootstrap',
    'ngMessages',
    'ngFileUpload'
  ])
  .config(require('./editCompany.config'))
  .controller('EditCompanyController', require('./editCompany.controller'));
