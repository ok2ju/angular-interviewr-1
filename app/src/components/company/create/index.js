require('angular')
  .module('app.company.create', [
    'app.resource.company',
    'toastr',
    'ngTagsInput',
    'ui.bootstrap',
    'ngMessages',
    'ngFileUpload',
    'app.services'
  ])
  .controller('CompanyModalController', require('./modal.controller'))
  .controller('CreateCompanyController', require('./createCompany.controller'));
