require('angular')
  .module('app.vacancy.edit', [
    'ui.bootstrap',
    'ngMessages',
    'toastr',
    'app.resource.vacancy',
    'app.resource.company'
  ])
    .controller('VacancyEditController', require('./edit.controller'));
