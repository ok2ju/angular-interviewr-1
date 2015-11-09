(function() {
  'use strict';

  require('angular')
    .module('app.company.profile', [
        'app.resource.company',
        'app.resource.user'
      ])
      .config(require('./companyProfile.config'))
      .controller('CompanyProfileController', require('./companyProfile.controller'));
})();
