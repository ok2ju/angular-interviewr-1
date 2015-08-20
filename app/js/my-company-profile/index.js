(function() {
  'use strict';

    require('angular').module('app.myCompanyProfile', [])
        .controller('MyCompanyProfileController', require('./myCompanyProfile.controller'))
        .factory('MyCompanyProfileService', require('./myCompanyProfile.service'));
})();
