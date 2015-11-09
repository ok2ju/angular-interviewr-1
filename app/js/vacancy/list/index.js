require('angular')
  .module('app.vacancy.list', [])
    .config(require('./vacancyList.config'))
    .controller('VacancyListController', require('./vacancyList.controller'));
