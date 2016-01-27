import angular from 'angular';

angular
  .module('app.vacancy.profile', [])
    .controller('VacancyProfileController', require('./vacancyProfile.controller'));
