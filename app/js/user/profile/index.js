(function() {
  'use strict';

  require('angular').module('app.user.profile', ['ui.router'])
    .config(require('./userProfile.config'))
    .controller('UserProfileController', require('./userProfile.controller'));

})();
