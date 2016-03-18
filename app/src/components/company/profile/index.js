import angular from 'angular';

angular
  .module('app.company.profile', ['toastr'])
    .controller('CompanyProfileController', require('./companyProfile.controller'));
