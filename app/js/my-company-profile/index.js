(function() {
  'use strict';

    require('angular').module('app.myCompanyProfile', [])
        .controller('MyCompanyProfileController', require('./MyCompanyProfileController'))
        .factory('MyCompanyProfileService', require('./MyCompanyProfileService'));
})();
