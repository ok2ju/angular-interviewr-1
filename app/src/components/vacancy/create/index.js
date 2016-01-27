import angular from 'angular';

angular
  .module('app.vacancy.create', [
      'ui.bootstrap',
      'ngMessages',
      'toastr'
    ])
    .controller('VacancyCreateController', require('./create.controller'));
