(function() {
  'use strict';

  require('angular')
    .module('app.company.profile', ['ui.router'])
      .config(require('./companyProfile.config'))
      .controller('CompanyProfileController', require('./companyProfile.controller'));

})();
