require('angular')
  .module('app.vacancy.manage', [
    'ui.bootstrap',
    'ngMessages',
    'toastr',
    'app.resource.vacancy',
    'app.resource.company'
  ])
    .config(require('./manage.config'))
    .controller('ManageVacanciesController', require('./manage.controller'))
    .controller('VacancyCreateController', require('./create.controller'))
    .controller('VacanciesListController', require('./vacancies.controller'));
