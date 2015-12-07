require('angular')
  .module('app.vacancy.list', [
    'app.resource.vacancy',
    'app.filter.date'
  ])
    .config(require('./vacancyList.config'))
    .controller('VacancyListController', require('./vacancyList.controller'));
