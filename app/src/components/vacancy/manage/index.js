require('angular')
  .module('app.vacancy.manage', [
    'ui.bootstrap',
    'ngMessages',
    'toastr'
  ])
    .controller('ManageVacanciesController', require('./manage.controller'))
    .controller('VacanciesListController', require('./vacancies.controller'));
