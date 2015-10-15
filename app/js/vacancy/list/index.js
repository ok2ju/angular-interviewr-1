(function() {
  'use strict';

  require('angular')
    .module('app.vacancy.list', ['ui.router'])
      .config(require('./vacancyList.config'))
      .controller('VacancyListController', require('./vacancyList.controller'));
})();
