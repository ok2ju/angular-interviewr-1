(function() {
  'use strict';

  require('angular').module('app.fillprofile', ['ngTagsInput'])
    .controller('FillprofileController', require('./FillprofileController'))
    .factory('FillprofileService', require('./FillprofileService'));
})();
