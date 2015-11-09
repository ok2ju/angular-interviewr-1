require('angular').module('app.company.create', [
    'app.resource.company',
    'app.resource.meta',
    'toastr',
    'ngTagsInput',
    'ui.bootstrap',
    'ngMessages'
  ])
  .config(require('./createCompany.config'))
  .controller('CreateCompanyController', require('./createCompany.controller'));
