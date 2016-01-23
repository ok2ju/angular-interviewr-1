require('angular')
  .module('app.vacancy.create', [
    'ui.bootstrap',
    'ngMessages',
    'toastr',
    'app.resource.vacancy',
    'app.resource.company'
  ])
    .controller('VacancyCreateController', require('./create.controller'));
