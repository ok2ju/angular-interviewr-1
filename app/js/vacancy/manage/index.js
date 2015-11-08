require('angular')
  .module('app.vacancy.manage', [
    'ui.router', 
    'ui.bootstrap', 
    'ngMessages', 
    'toastr',
    'app.shared.meta',
    'app.vacancy.resource'
  ])
    .config(require('./manage.config'))
    .controller('ManageVacanciesController', require('./manage.controller'))
    .controller('VacancyCreateController', require('./create.controller'));