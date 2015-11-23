require('angular')
  .module('app.company.edit', [
    'app.resource.company',
    'app.resource.meta',
    'toastr',
    'ngTagsInput',
    'ui.bootstrap',
    'ngMessages',
    'ngFileUpload'
  ])
  .config(require('./editCompany.config'))
  .controller('EditCompanyController', require('./editCompany.controller'));
