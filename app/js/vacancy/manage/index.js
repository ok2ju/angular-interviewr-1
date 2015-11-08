(function() {
  'use strict';

  require('angular')
    .module('app.vacancy.manage', ['ui.router'])
      .config(require('./manage.config'))
      .controller('ManageVacanciesController', require('./manage.controller'));
})();
