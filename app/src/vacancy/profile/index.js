require('angular')
  .module('app.vacancy.profile', [])
    .config(require('./vacancyProfile.config'))
    .controller('VacancyProfileController', require('./vacancyProfile.controller'));
