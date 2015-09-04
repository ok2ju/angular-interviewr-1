(function() {
  'use strict';

  require('angular').module('app.fillprofile', ['ui.router'])
    .config(require('./fillprofile.config'))
    .controller('FillprofileController', require('./fillprofile.controller'))
    .factory('FillprofileService', require('./fillprofile.service'));
})();
