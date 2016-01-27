import angular from 'angular';

angular
  .module('app.company.manage', ['toastr'])
    .controller('ManageCompanyController', require('./manage.controller'));
