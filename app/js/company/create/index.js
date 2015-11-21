require('angular')
  .module('app.company.create', [
    'app.resource.company',
    'app.resource.meta',
    'toastr',
    'ngTagsInput',
    'ui.bootstrap',
    'ngMessages',
    'ngFileUpload'
  ])
  .config(require('./createCompany.config'))
  .controller('CompanyModalController', require('./modal.controller'))
  .controller('CreateCompanyController', require('./createCompany.controller'));
