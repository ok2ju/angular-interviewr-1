import angular from 'angular';

angular
  .module('app.vacancy.edit', [
      'ui.bootstrap',
      'ngMessages',
      'toastr'
    ])
    .controller('VacancyEditController', require('./edit.controller'));
