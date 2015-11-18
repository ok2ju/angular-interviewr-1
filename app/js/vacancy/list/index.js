require('angular')
  .module('app.vacancy.list', [
    'app.resource.vacancy'
  ])
    .config(require('./vacancyList.config'))
    .controller('VacancyListController', require('./vacancyList.controller'));
