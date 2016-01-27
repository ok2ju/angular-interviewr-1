import angular from 'angular';

angular
  .module('app.vacancy.list', [
      'app.filters'
    ])
    .controller('VacancyListController', require('./vacancyList.controller'));
