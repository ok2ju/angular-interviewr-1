(function() {
  'use strict';

  require('angular')
    .module('app.company.list', [
        'ui.router',
        'app.company.resource',
        'app.shared.filters'
      ])
      .config(require('./companyList.config'))
      .controller('CompanyListController', require('./companyList.controller'));
})();
