(function() {
  'use strict';

  require('angular')
    .module('app.company.resource', ['ngResource'])
      .factory('CompanyResource', require('./company.service'));
})();
