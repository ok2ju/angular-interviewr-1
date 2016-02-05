import angular from 'angular';

angular
  .module('app.company.edit', [
    'toastr',
    'ngTagsInput',
    'ui.bootstrap',
    'ngMessages',
    'ngFileUpload'
  ])
  .controller('EditCompanyController', require('./editCompany.controller'))
  .controller('EditModalController', require('./modal.controller'));
