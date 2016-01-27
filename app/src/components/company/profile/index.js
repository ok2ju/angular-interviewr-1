import angular from 'angular';

angular
  .module('app.company.profile', [])
    .controller('CompanyProfileController', require('./companyProfile.controller'));
