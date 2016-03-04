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
  .controller('CompanyEditModalController', require('./modal.controller'))
  .controller('CompanyPhotoModalController', require('./photoModal.controller'));
