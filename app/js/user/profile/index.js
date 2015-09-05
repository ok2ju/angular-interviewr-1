(function() {
  'use strict';

  require('angular').module('app.userProfile', ['ui.router'])
    .config(require('./userProfile.config'))
    .controller('UserProfileController', require('./userProfile.controller'));

})();
