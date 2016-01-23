require('angular')
  .module('app.vacancy.list', [
    'app.resource.vacancy',
    'app.filter.date'
  ])
    .controller('VacancyListController', require('./vacancyList.controller'));
