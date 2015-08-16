(function() {
  'use strict';

  require('angular').module('app.fillprofile', [])
    .controller('FillprofileController', require('./FillprofileController'))
    .factory('FillprofileService', require('./FillprofileService'));
})();
