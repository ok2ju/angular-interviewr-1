require('angular')
  .module('app.vacancy.create', [
    'ui.bootstrap',
    'ngMessages',
    'toastr',
    'app.resource.vacancy',
    'app.resource.company',
    'ngSanitize',
    'ui.select'
  ])
    .controller('VacancyCreateController', require('./create.controller'));
