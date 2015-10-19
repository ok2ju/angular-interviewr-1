(function() {
  'use strict';

  require('angular')
    .module('app.company.profile', [
        'ui.router',
        'app.company.resource'
      ])
      .config(require('./companyProfile.config'))
      .controller('CompanyProfileController', require('./companyProfile.controller'));
})();
