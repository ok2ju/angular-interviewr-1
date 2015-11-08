require('angular')
  .module('app.vacancy.resource', ['ngResource'])
  .factory('VacancyResource', require('./vacancy.service'));