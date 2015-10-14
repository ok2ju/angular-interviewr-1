(function() {
  'use strict';

  require('angular').module('app.user.profile', ['ui.router', 'ngResource'])
    .config(require('./userProfile.config'))
    .factory('UserProfileService', require('./profile.service'))
    .controller('UserProfileController', require('./userProfile.controller'));
})();
