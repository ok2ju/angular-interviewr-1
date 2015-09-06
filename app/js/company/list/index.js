(function() {
  'use strict';

  require('angular')
    .module('app.company.list', ['ui.router'])
      .config(require('./companyList.config'))
      .controller('CompanyListController', require('./companyList.controller'));

})();
