import angular from 'angular';

angular
  .module('app.company.create', [
    'toastr',
    'ngTagsInput',
    'ui.bootstrap',
    'ngMessages',
    'ngFileUpload'
  ])
  .controller('CompanyModalController', require('./modal.controller'))
  .controller('CreateCompanyController', require('./createCompany.controller'));
