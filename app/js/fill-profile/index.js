(function() {
  'use strict';

  require('angular').module('app.fillprofile', [])
    .controller('FillprofileController', require('./fillprofile.controller'))
    .factory('FillprofileService', require('./fillprofile.service'));
})();
