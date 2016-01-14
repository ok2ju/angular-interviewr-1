require('angular')
  .module('app.vacancy.create', [
    'ui.bootstrap',
    'ngMessages',
    'toastr',
    'app.resource.vacancy',
    'app.resource.company'
  ])
    .config(require('./create.config'))
    .controller('VacancyCreateController', require('./create.controller'));
