require('angular')
  .module('app.vacancy.manage', [
    'ui.bootstrap',
    'ngMessages',
    'toastr',
    'app.resource.vacancy',
    'app.resource.company',
    'app.services'
  ])
    .controller('ManageVacanciesController', require('./manage.controller'))
    .controller('VacanciesListController', require('./vacancies.controller'));
