(function() {
  'use strict';

  require('angular').module('app.myCompanyProfile', ['ui.router'])
    .config(require('./myCompanyProfile.config'))
    .controller('MyCompanyProfileController', require('./myCompanyProfile.controller'))
    .factory('MyCompanyProfileService', require('./myCompanyProfile.service'));
})();
