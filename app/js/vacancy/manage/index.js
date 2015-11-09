require('angular')
  .module('app.vacancy.manage', [
    'ui.bootstrap',
    'ngMessages',
    'toastr',
    'app.resource.meta',
    'app.resource.vacancy'
  ])
    .config(require('./manage.config'))
    .controller('ManageVacanciesController', require('./manage.controller'))
    .controller('VacancyCreateController', require('./create.controller'));
